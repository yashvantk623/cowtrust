import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setStatus(null)
    if (!name || !email || !message) {
      setStatus({ type: 'error', text: 'Please fill name, email and message.' })
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, subject: `Website contact - ${website || 'no-site'}`, message: `${message}\n\nPhone: ${phone}\nWebsite: ${website}`
        })
      })
      const json = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', text: 'Message sent — we will contact you soon.', preview: json.preview })
        setName('')
        setPhone('')
        setEmail('')
        setWebsite('')
        setMessage('')
      } else {
        setStatus({ type: 'error', text: json.error || 'Failed to send message' })
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Network error — please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Name*</label>
      <input value={name} onChange={e=>setName(e.target.value)} required />

      <label>Mobile Number</label>
      <input value={phone} onChange={e=>setPhone(e.target.value)} />

      <label>Email*</label>
      <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />

      <label>Website url</label>
      <input value={website} onChange={e=>setWebsite(e.target.value)} />

      <label>Message*</label>
      <textarea value={message} onChange={e=>setMessage(e.target.value)} required />

      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button type="submit" className="btn-primary" disabled={loading}>{loading? 'Sending...':'SEND ENQUIRY'}</button>
        {status && (
          <div style={{color: status.type==='error'? '#ffb4b4':'#bfffcf'}}>
            {status.text}
            {status.preview && (
              <div style={{marginTop:6,fontSize:12}}>
                Preview: <a href={status.preview} target="_blank" rel="noreferrer" style={{color:'#c9ffd8'}}>{status.preview}</a>
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  )
}
