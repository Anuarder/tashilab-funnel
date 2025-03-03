const RUNTIME_MODE = import.meta.env.VITE_APP_RUNTIME_MODE;

export const env = {
  API_URL: import.meta.env.VITE_APP_API_URL,
  IS_PROD_RUNTIME: RUNTIME_MODE === 'production',
  IS_DEV_RUNTIME: RUNTIME_MODE === 'development',
  PRIVACY_POLICY_URL: import.meta.env.VITE_APP_PRIVACY_POLICY_URL,
  TERMS_CONDITIONS_URL: import.meta.env.VITE_APP_TERMS_CONDITIONS_URL,
};
