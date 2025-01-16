import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { env } from '~shared/config';

import authTranslations from './translations/auth';

if (env.IS_DEV_RUNTIME) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.i18next = i18next;
}

export function setupI18N({ locale }: { locale?: string }) {
  return i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: !env.IS_PROD_RUNTIME,
      lng: locale,
      detection: {
        order: ['querystring', 'localStorage', 'navigator'],
        lookupQuerystring: 'locale',
        lookupLocalStorage: 'i18nextLng',
      },
      fallbackLng: 'en',
      resources: {
        en: {
          translation: {
            auth: authTranslations.en,
          },
        },
        es: {
          translation: {
            auth: authTranslations.es,
          },
        },
      },
    });
}
