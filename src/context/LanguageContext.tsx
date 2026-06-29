"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Definim un tip simplu pentru dicționarul de traduceri
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

// Exemplu de traduceri de bază (poți extinde acest obiect ulterior)
const translations: Translations = {
  ro: {
    "nav.home": "Acasă",
    "nav.about": "Despre",
    "nav.contact": "Contact",
    "hero.title": "Bun venit",
    // Adaugă restul cheilor aici
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "Welcome",
  }
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('app-language') || 'ro';
    }
    return 'ro';
  });

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
    document.documentElement.lang = lang;
  };

  // Funcția de traducere care caută cheia în dicționar
  const t = (key: string): string => {
    return translations[language]?.[key] || translations['ro']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};