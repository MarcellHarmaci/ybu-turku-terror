import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en.json"
import fi from "./locales/fi.json"

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fi: { translation: fi },
  },
  lng: "fi",
  fallbackLng: "en",
  supportedLngs: ["en", "fi"],
  ns: ["translation"],
  defaultNS: "translation",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

export default i18n
