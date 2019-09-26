import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';

import * as en from './en.json';
import * as es from './es.json';

const resources = {
    en: {
        translation: en,
    },
    es: {
        translation: es,
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
