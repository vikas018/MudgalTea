// Single source of truth for all business/contact details.
// Referenced by the footer, contact page, WhatsApp links, and schema markup.
// TODO(vikas): confirm phone is +91 97564 17585 (the old tel:+919876543210 placeholder was removed).
// TODO(vikas): confirm vkyadav018@gmail.com is the public-facing email to publish.

export interface SocialLink {
  label: string;
  href: string;
}

// Digits only, with country code, no spaces or symbols — used for tel: and wa.me links.
const phoneDigits = '919756417585';

export const business = {
  name: 'Mudgal Tea',
  tagline: 'Premium loose-leaf tea and coffee in Meerut',

  // Display text (human-readable) kept separate from the machine-readable digits.
  phoneDisplay: '+91 97564 17585',
  phoneDigits,

  email: 'vkyadav018@gmail.com',

  address: {
    line1: 'Shop 07, Subhash Market',
    city: 'Meerut',
    state: 'Uttar Pradesh',
    postalCode: '250001',
    country: 'India',
  },

  // TODO(vikas): add any handles beyond Instagram (Facebook, YouTube, etc.).
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/mudgal_tea_coffee/',
    },
  ] as SocialLink[],
};

export const telLink = () => `tel:+${business.phoneDigits}`;
export const mailLink = () => `mailto:${business.email}`;

// Full one-line address, handy for schema markup and "Get Directions".
export const addressLine = () =>
  `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.postalCode}`;
