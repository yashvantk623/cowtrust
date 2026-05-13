import React from 'react'
import { WhatsappIcon } from './icons'

export default function FloatingWhatsApp({ phone = '919311757497', message = 'Hello SD Technologies' }){
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return (
    <a className="floating-whatsapp" href={url} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <WhatsappIcon />
    </a>
  )
}
