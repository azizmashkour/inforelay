import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locale/en.json';
import fr from '../locale/fr.json';
import { DEBUG } from '../constants/constants';
import BrowserLanguage from '../services/BrowserLanguage';
const CURRENT_LANG = BrowserLanguage.getDefaultLanguage();

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: CURRENT_LANG, // Default language
    fallbackLng: 'fr',
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: ['common'],
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        common: en
      },
      fr: {
        common: fr
      }
    }
  });


export default i18n;
