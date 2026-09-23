const WHATSAPP_NUMBER = '971569694581';

const messages = {
  'Car Frame': 'Hi THEWANTEND, I’m interested in the Car Frame. I’d like to start my order.',
  'Money Frame': 'Hi THEWANTEND, I’m interested in the Money Frame. I’d like to start my order.',
};
const genericMessage = 'Hi THEWANTEND, I’m interested in placing an order.';

export function whatsappUrl(subject) {
  const message = Object.hasOwn(messages, subject) ? messages[subject] : genericMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(subject) {
  window.open(whatsappUrl(subject), '_blank', 'noopener,noreferrer');
}
