import whatsappImg from '../assets/whatsapp-icon.png'
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
      <img src={whatsappImg} alt="WhatsApp Inquiry" className="whatsapp-icon-img" />
      <span className="whatsapp-tooltip">Chat with Growth Team</span>
    </a>
  )
}

