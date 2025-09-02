import { useState, useEffect } from 'react';
import { Language, translations } from '../types/language';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'en' || saved === 'id')) {
      return saved as Language;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('id')) {
      return 'id';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const formatDate = (date: Date): string => {
    const locale = language === 'id' ? 'id-ID' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatShortDate = (date: Date): string => {
    const locale = language === 'id' ? 'id-ID' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const formatTime = (date: Date): string => {
    const locale = language === 'id' ? 'id-ID' : 'en-US';
    return date.toLocaleTimeString(locale);
  };

  return {
    language,
    t,
    toggleLanguage,
    formatDate,
    formatShortDate,
    formatTime
  };
};