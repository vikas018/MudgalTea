import { useEffect, useState, type MouseEvent } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { whatsappLink, business } from '../data/business';
import { trackEvent } from '../lib/analytics';

// Shown once per visitor, a few seconds after landing. Dismissible — never a hard gate.
// On submit it opens WhatsApp to the shop pre-filled with the visitor's name/phone;
// the visitor taps send (a site cannot message the shop's WhatsApp on its own).

const STORAGE_KEY = 'mudgal_visitor_intro';
const SHOW_AFTER_MS = 8000;

// Optional phone: only validated if the visitor typed something.
const phoneLooksValid = (raw: string): boolean => {
  if (!raw.trim()) return true;
  const digits = raw.replace(/[\s-]/g, '').replace(/^(\+91|91)/, '');
  return /^[6-9]\d{9}$/.test(digits);
};

const alreadySeen = (): boolean => {
  try {
    return Boolean(localStorage.getItem(STORAGE_KEY));
  } catch {
    return false;
  }
};

const remember = (value: string) => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* private mode / storage disabled — just skip persistence */
  }
};

const VisitorIntro = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (alreadySeen()) return;
    const t = window.setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(t);
  }, []);

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const dismiss = () => {
    remember('dismissed');
    setOpen(false);
  };

  const message = `Hi ${business.name}, I'm ${name.trim()}${
    phone.trim() ? `, my number is ${phone.trim()}` : ''
  }. I'm visiting your website.`;

  const handleSend = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!name.trim()) {
      e.preventDefault();
      setError('Please enter your name.');
      return;
    }
    if (!phoneLooksValid(phone)) {
      e.preventDefault();
      setError('That phone number doesn’t look right — or leave it blank.');
      return;
    }
    // Valid: let the WhatsApp link open, record and close.
    trackEvent('VisitorIntro', { hasPhone: phone.trim() ? 'yes' : 'no' });
    remember('submitted');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-ink/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visitor-intro-title"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md bg-cream rounded-2xl shadow-soft p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 p-2 rounded-full text-ink-soft hover:bg-cream-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <span className="eyebrow">Welcome</span>
        <h2 id="visitor-intro-title" className="font-serif text-2xl text-amber-900 mt-2 mb-2">
          Say hello 👋
        </h2>
        <p className="text-ink-soft text-sm mb-5">
          Tell us who's visiting and we'll help you pick the perfect tea. We'll open WhatsApp
          with your details — just tap send.
        </p>

        <div className="space-y-3">
          <div>
            <label htmlFor="vi-name" className="block text-sm font-medium text-amber-900 mb-1">
              Your name
            </label>
            <input
              id="vi-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              className="w-full bg-white border border-cream-200 rounded-xl px-4 py-2.5 text-ink placeholder:text-ink-soft/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              placeholder="e.g. Anita"
            />
          </div>
          <div>
            <label htmlFor="vi-phone" className="block text-sm font-medium text-amber-900 mb-1">
              Phone <span className="text-ink-soft font-normal">(optional)</span>
            </label>
            <input
              id="vi-phone"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setError('');
              }}
              className="w-full bg-white border border-cream-200 rounded-xl px-4 py-2.5 text-ink placeholder:text-ink-soft/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              placeholder="9xxxxxxxxx"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

        <div className="mt-5 flex items-center gap-3">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSend}
            className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-medium px-5 py-2.5 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Say hello on WhatsApp
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="text-sm text-ink-soft hover:text-ink"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorIntro;
