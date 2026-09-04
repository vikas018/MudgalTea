/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Formspree (or compatible) form endpoint URL for the enquiry form.
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
