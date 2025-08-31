import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from './context';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Load saved language from localStorage or detect browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'id') {
        setLanguage('id');
      } else {
        setLanguage('en'); // Default to English
      }
    }
  }, []);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isEnglish: language === 'en',
    isIndonesian: language === 'id'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// PropTypes validation
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};