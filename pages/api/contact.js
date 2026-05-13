import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const toEmail = process.env.TO_EMAIL || 'Corporate@sdtechnologies.net.in'

  // Decide transporter: prefer explicit SMTP config, else in dev use Ethereal test account
  let transporter
  let usingTestAccount = false
  try {
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })
    } else if (process.env.NODE_ENV !== 'production') {
      // create a free Ethereal test account for local development
      const testAccount = await nodemailer.createTestAccount()
      usingTestAccount = true
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      })
      console.warn('No SMTP config found: using Ethereal test account for development')
    } else {
      return res.status(500).json({ error: 'SMTP not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in environment.' })
    }
  } catch (err) {
    console.error('transporter setup error', err)
    return res.status(500).json({ error: 'Failed to configure mail transporter' })
  }

  const mailOptions = {
    from: `${name} <${email}>`,
    to: toEmail,
    subject: subject || `Website Contact: ${name}`,
    text: message + `\n\nPhone: ${req.body.phone || ''}\nWebsite: ${req.body.website || ''}`,
    html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p><p>Phone: ${req.body.phone || ''}</p><p>Website: ${req.body.website || ''}</p>`
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    if (usingTestAccount) {
      const preview = nodemailer.getTestMessageUrl(info)
      console.log('Preview URL: %s', preview)
      return res.status(200).json({ ok: true, preview })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('mail error', err)
    // provide actionable message for connection refused
    if (err && err.code === 'ECONNREFUSED') {
      return res.status(502).json({ error: `Connection refused to SMTP server (${err.address || 'unknown'}:${err.port || 'unknown'}). Check SMTP_HOST and SMTP_PORT.` })
    }
    return res.status(500).json({ error: err.message || 'Failed to send email' })
  }
}
