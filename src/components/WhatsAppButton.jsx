import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923266739989"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-text">WA</span>
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
}
