import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt.json'
import en from './locales/en.json'

const resources = {
  pt: { translation: pt },
  en: { translation: en }
}

export const defaultLanguage = "en"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: defaultLanguage,
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export const lang = [
  { value: "en", name: "English" },
  { value: "pt", name: "Portugues" }
]

export default i18n;