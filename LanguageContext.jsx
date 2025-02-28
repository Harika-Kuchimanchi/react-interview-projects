import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const language = {
  en: ['Welcome to Context API', 'light', 'dark', 'toggle theme'],
  es: [
    'Bienvenido a la API de Contexto',
    'Modo Claro',
    'Modo Oscuro',
    'Alternar Tema',
  ],
};

export const LangugaeContextProvider = ({ children }) => {
  const [lang, setLang] = useState(language['en']);
  return (
    <LanguageContext.Provider value={{ lang, setLang, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLangTranslate = () => {
  return useContext(LanguageContext);
};
