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

// Separate WhatsApp number that receives visitor leads (not shown publicly).
// TODO(vikas): confirm this is the correct WhatsApp number to receive visitor details.
const leadsPhoneDigits = '919536800486';

export const business = {
  name: 'Mudgal Tea',
  tagline: 'Premium loose-leaf tea and coffee in Meerut',

  // Display text (human-readable) kept separate from the machine-readable digits.
  phoneDisplay: '+91 97564 17585',
  phoneDigits,

  // Where "who visited" leads are sent. Public number above stays for orders/contact.
  leadsPhoneDigits,

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

  // Statutory registration numbers, shown in the footer only when non-empty.
  // TODO(vikas): add the GST number if registered (else leave '').
  // TODO(vikas): add the FSSAI license number if applicable (else leave '').
  //   Verify the current requirement for this business type before publishing.
  registrations: {
    gst: '',
    fssai: '',
  },
};

export const telLink = () => `tel:+${business.phoneDigits}`;
export const mailLink = () => `mailto:${business.email}`;

// Full one-line address, handy for schema markup, maps, and "Get Directions".
export const addressLine = () =>
  `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.postalCode}`;

// wa.me expects digits only, including country code, no '+'.
// Defaults to the public number; pass digits (e.g. leadsPhoneDigits) to target another.
export const whatsappLink = (message: string, digits: string = business.phoneDigits) =>
  `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

// Google Maps embed + directions from the address (no API key needed).
export const mapEmbedUrl = () =>
  `https://maps.google.com/maps?q=${encodeURIComponent(addressLine())}&output=embed`;

export const directionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine())}`;

// --- Opening hours -----------------------------------------------------------
export interface OpeningHours {
  day: string;
  opens: string; // "HH:MM" 24h
  closes: string; // "HH:MM" 24h
}

// TODO(vikas): confirm the real opening hours per day, then set
// openingHoursConfirmed = true so the table renders. Placeholder values below.
export const openingHoursConfirmed = false;

export const openingHours: OpeningHours[] = [
  { day: 'Monday', opens: '09:00', closes: '21:00' },
  { day: 'Tuesday', opens: '09:00', closes: '21:00' },
  { day: 'Wednesday', opens: '09:00', closes: '21:00' },
  { day: 'Thursday', opens: '09:00', closes: '21:00' },
  { day: 'Friday', opens: '09:00', closes: '21:00' },
  { day: 'Saturday', opens: '09:00', closes: '21:00' },
  { day: 'Sunday', opens: '09:00', closes: '21:00' },
];
