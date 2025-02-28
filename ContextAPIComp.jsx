import React from 'react';

import { useTheme } from './ThemeContext';
import { useLangTranslate } from './LanguageContext';

const ContextAPIComp = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, language } = useLangTranslate();
  const handleSelect = (e) => {
    setLang(language[e.target.value]);
  };
  return (
    <div
      style={{
        background: theme === 'dark' ? '#333' : '#FFF',
        padding: '15px',
        color: theme === 'dark' ? '#FFF' : '#333',
      }}
    >
      <h1>{lang[0]}</h1>
      <h1>{theme === 'dark' ? lang[2] : lang[1]}</h1>
      <button onClick={toggleTheme}>{lang[3]}</button>
      <select onChange={handleSelect}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default ContextAPIComp;
