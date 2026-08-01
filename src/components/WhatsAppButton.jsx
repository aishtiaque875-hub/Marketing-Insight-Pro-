import whatsappIcon from '../assets/whatsapp-icon.png'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923266739989"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="" width="30" height="30" />
    </a>
  )
}
