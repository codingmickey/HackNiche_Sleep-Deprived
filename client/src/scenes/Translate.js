import React from 'react';
import { useTranslation } from 'react-i18next';

export const Translate = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };
  return (
    <div>
      <button onClick={() => handleChangeLng('en')}>English</button>
      <button onClick={() => handleChangeLng('jp')}>Jp</button>
    </div>
  );
};
