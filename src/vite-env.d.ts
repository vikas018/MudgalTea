/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Formspree (or compatible) form endpoint URL for the enquiry form.
  readonly VITE_FORM_ENDPOINT?: string;
  // Plausible analytics domain (e.g. vikas018.github.io). Unset = analytics off.
  readonly VITE_PLAUSIBLE_DOMAIN?: string;
  // Optional override for the Plausible script src (self-hosted / proxy).
  readonly VITE_PLAUSIBLE_SRC?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
