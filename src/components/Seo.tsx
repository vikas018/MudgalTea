import { useEffect } from 'react';
import { canonicalFor, defaultDescription, ogImage } from '../data/site';

interface SeoProps {
  title: string;
  description?: string;
  // Route path this page canonicalises to, e.g. "/shop".
  path: string;
  image?: string;
  type?: 'website' | 'product' | 'article';
}

// Upsert a <meta> tag keyed by name or property.
const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

// Sets per-route document title and meta/OG/Twitter tags via the DOM.
// Kept dependency-free on purpose (no react-helmet).
const Seo = ({ title, description, path, image, type = 'website' }: SeoProps) => {
  const desc = description ?? defaultDescription;
  const url = canonicalFor(path);
  const img = image ?? ogImage;

  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', desc);
    setCanonical(url);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', 'Mudgal Tea');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', img);
  }, [title, desc, url, img, type]);

  return null;
};

export default Seo;
