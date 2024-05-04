import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const onSelectLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };
  return (
    <>
      <img
        src="https://flagcdn.com/16x12/tr.png"
        width="16"
        height="12"
        alt="Türkçe"
        role="button"
        onClick={() => {
          onSelectLanguage("tr");
        }}
      ></img>
      <br />
      <img
        src="https://flagcdn.com/16x12/us.png"
        width="16"
        height="12"
        alt="English"
        role="button"
        onClick={() => {
          onSelectLanguage("en");
        }}
      ></img>
    </>
  );
}
