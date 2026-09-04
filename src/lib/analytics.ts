// Privacy-light analytics (Plausible). Fully no-op unless VITE_PLAUSIBLE_DOMAIN is set,
// so nothing loads and no events fire in dev or when unconfigured.

const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
// Self-hosted or custom endpoint? Override the script src. Defaults to plausible.io.
const scriptSrc =
  import.meta.env.VITE_PLAUSIBLE_SRC ?? 'https://plausible.io/js/script.js';

type PlausibleFn = (event: string, options?: { props?: Record<string, string> }) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

export const analyticsEnabled = Boolean(domain);

// Injects the Plausible script once. Safe to call on every mount.
export const initAnalytics = () => {
  if (!domain || typeof document === 'undefined') return;
  if (document.querySelector('script[data-analytics="plausible"]')) return;

  const s = document.createElement('script');
  s.defer = true;
  s.src = scriptSrc;
  s.setAttribute('data-domain', domain);
  s.setAttribute('data-analytics', 'plausible');
  document.head.appendChild(s);
};

// Fire a custom event (e.g. "WhatsApp", "Call"). No-ops when analytics is off.
export const trackEvent = (event: string, props?: Record<string, string>) => {
  if (!domain) return;
  window.plausible?.(event, props ? { props } : undefined);
};
