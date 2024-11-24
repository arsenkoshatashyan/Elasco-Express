import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(LanguageDetector) // Определение языка (с проверкой в localStorage)
  .use(initReactI18next) // Связь с React
  .init({
    resources,
    fallbackLng: "en", // Язык по умолчанию, если перевод не найден
    lng: localStorage.getItem("i18nextLng") || "en", // Устанавливаем язык из localStorage или по умолчанию (английский)
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Порядок определения языка
      caches: ["localStorage"], // Сохраняем язык в localStorage
    },
    interpolation: {
      escapeValue: false, // React уже защищает от XSS
    },
  });

export default i18n;
