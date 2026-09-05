import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/business';
import { formatWeight } from '../data/featuredProductdata';
import { trackEvent } from '../lib/analytics';
import type { ProductVariant } from '../data/types';

interface WhatsAppOrderButtonProps {
  productName: string;
  variant: ProductVariant;
  className?: string;
}

// lucide-react carries no WhatsApp brand mark, and the brief limits icons to lucide,
// so MessageCircle stands in for the WhatsApp glyph.
const WhatsAppOrderButton = ({ productName, variant, className = '' }: WhatsAppOrderButtonProps) => {
  const message = `Hi Mudgal Tea, I'd like to order: ${productName} (${formatWeight(variant.weightGrams)}) — ₹${variant.priceInr}`;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('WhatsApp', { location: 'order', product: productName })}
      className={`inline-flex items-center justify-center gap-2 bg-green-700 text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      Order on WhatsApp
    </a>
  );
};

export default WhatsAppOrderButton;
