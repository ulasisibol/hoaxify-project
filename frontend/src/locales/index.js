import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json"
import tr from "./languages/tr.json"

const initialLanguage = localStorage.getItem("lang") || navigator.language || "en";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en
  },
  tr: {
    translation: tr
  },
};

export const i18nInstance = i18n.use(initReactI18next)

i18nInstance // passes i18n down to react-i18next
  .init({
    resources,
    lng: initialLanguage, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;