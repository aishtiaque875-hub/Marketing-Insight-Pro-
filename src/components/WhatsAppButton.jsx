import './WhatsAppButton.css'
import whatsappIcon from '../assets/whatsapp-icon.png'

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=923266739989&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-logo" />
      <span className="whatsapp-ring"></span>
    </a>
  )
}