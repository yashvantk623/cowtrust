import React from 'react'

export function SeoIcon({className=''}){
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#g)"/>
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#4fd3ff" />
          <stop offset="1" stopColor="#b56bff" />
        </linearGradient>
      </defs>
      <path d="M6 12h12" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
      <path d="M6 8h8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.85"/>
    </svg>
  )
}

export function WebIcon({className=''}){
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#g2)"/>
      <defs>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#2dd4ff" />
          <stop offset="1" stopColor="#6b5bff" />
        </linearGradient>
      </defs>
      <path d="M3 7h18" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M7 17h10" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

export function AiIcon({className=''}){
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#g3)"/>
      <defs>
        <linearGradient id="g3" x1="0" x2="1">
          <stop offset="0" stopColor="#6bf0ff" />
          <stop offset="1" stopColor="#a156ff" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.4"/>
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

export function FeatureIcon({className=''}){
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" fill="#0b2a48" opacity="0.6" />
      <path d="M8 12l2.5 3L16 9" stroke="#4fd3ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function WhatsappIcon({className=''}){
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path d="M17.2 14.8c-.3-.1-2-.9-2.3-1-.3-.1-.5-.1-.7.1-.2.3-.9 1-1.1 1.2-.2.2-.4.2-.7.1-.3-.1-1.1-.4-2-1.2-.7-.7-1.1-1.4-1.2-1.7-.1-.3 0-.5.1-.7.1-.2.3-.5.4-.7.1-.2.1-.4 0-.7-.1-.3-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.7 0-.3 0-.7.1-1 .5-.3.4-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2 3.1 4.9 4.3 2.9 1.2 3.1.8 3.6.8.5 0 1.6-.6 1.8-1.4.2-.8.2-1.4.1-1.5-.1-.1-1.1-.4-1.4-.5z" fill="#fff"/>
    </svg>
  )
}

export default null
