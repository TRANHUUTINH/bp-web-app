import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en.json";
import translationVi from "./locales/vi.json";
import translationZh from "./locales/zh.json";
import translationJa from "./locales/ja.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    vi: {
      translation: translationVi,
    },
    zh: {
      translation: translationZh,
    },
    ja: {
      translation: translationJa,
    },
  },
  lng: "vi", // default language
  fallbackLng: "vi", // fallback language when key is missing
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
