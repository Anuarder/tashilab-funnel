/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_RUNTIME_MODE: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_PRIVACY_POLICY_URL: string;
  readonly VITE_APP_TERMS_CONDITIONS_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
