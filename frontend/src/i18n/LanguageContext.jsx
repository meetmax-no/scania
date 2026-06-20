import { createContext, useContext, useEffect, useState } from "react";
import { content } from "./content";

const LanguageContext = createContext({
  lang: "no",
  setLang: () => {},
  t: content.no,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "no";
    return localStorage.getItem("scania-lang") || "no";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("scania-lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = { lang, setLang, t: content[lang] };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
