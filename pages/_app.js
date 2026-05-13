import '../styles/globals.css'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingWhatsApp />
    </>
  )
}
