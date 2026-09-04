import { MessageCircle } from 'lucide-react';
import { whatsappLink, business } from '../data/business';
import { trackEvent } from '../lib/analytics';

// Static bottom-right link on every page — no animation, no pop-up.
const FloatingWhatsApp = () => {
  const message = `Hi ${business.name}, I have a question.`;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('WhatsApp', { location: 'floating' })}
      aria-label={`Chat with ${business.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-green-700 text-white shadow-lg hover:bg-green-600 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
};

export default FloatingWhatsApp;
