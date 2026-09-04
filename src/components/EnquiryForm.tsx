import { useState, type FormEvent } from 'react';
import { products } from '../data/featuredProductdata';
import { whatsappLink, business } from '../data/business';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

// Accepts an Indian mobile: 10 digits starting 6-9, with optional +91/91 and spaces.
const isValidIndianMobile = (raw: string): boolean => {
  const digits = raw.replace(/[\s-]/g, '').replace(/^(\+91|91)/, '');
  return /^[6-9]\d{9}$/.test(digits);
};

const inputClass =
  'w-full bg-white border border-cream-200 rounded-xl px-4 py-2.5 text-ink placeholder:text-ink-soft/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500';

const EnquiryForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [phoneError, setPhoneError] = useState('');

  const fallbackHref = whatsappLink(`Hi ${business.name}, I have an enquiry.`);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users leave this empty; bots fill it.
    if ((data.get('_gotcha') as string)?.length) return;

    const phone = (data.get('phone') as string) ?? '';
    if (!isValidIndianMobile(phone)) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    setPhoneError('');

    if (!endpoint) {
      // No backend configured yet — steer the user to WhatsApp instead of failing silently.
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-800 mb-2">Thanks — we've got your enquiry.</h3>
        <p className="text-green-700 text-sm">
          We'll get back to you soon. For anything urgent, message us on{' '}
          <a href={fallbackHref} target="_blank" rel="noopener noreferrer" className="underline">
            WhatsApp ({business.phoneDisplay})
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot field — visually hidden, off-screen, not announced. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-1">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          placeholder="9xxxxxxxxx"
          className={inputClass}
          aria-invalid={phoneError ? true : undefined}
          aria-describedby={phoneError ? 'phone-error' : undefined}
        />
        {phoneError && (
          <p id="phone-error" className="text-sm text-red-600 mt-1">
            {phoneError}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="tea" className="block text-sm font-medium text-amber-900 mb-1">
          Tea of interest
        </label>
        <select id="tea" name="tea" className={inputClass} defaultValue="">
          <option value="">Any / not sure</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-amber-900 mb-1">
          Quantity
        </label>
        <input id="quantity" name="quantity" type="text" placeholder="e.g. 2 packs" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-1">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          {endpoint
            ? "Sorry, that didn't go through."
            : 'Our online form is being set up.'}{' '}
          Please message us on{' '}
          <a href={fallbackHref} target="_blank" rel="noopener noreferrer" className="underline">
            WhatsApp ({business.phoneDisplay})
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  );
};

export default EnquiryForm;
