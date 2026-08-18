import './WhatsAppButton.css';
import whatsappIcon from '../assets/whatsapp-icon-clean.png';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923266739989"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-img-icon" />
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
}

