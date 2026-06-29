"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'en';

interface Translations {
  [key: string]: {
    ro: string;
    en: string;
  };
}

const translations: Translations = {
  welcome: {
    ro: "Bine ai venit",
    en: "Welcome"
  },
  description: {
    ro: "Aceasta este o aplicație multilingvă simplă.",
    en: "This is a simple multi-language application."
  },
  changeLanguage: {
    ro: "Schimbă limba",
    en: "Change language"
  },
  home: {
    ro: "Acasă",
    en: "Home"
  },
  about: {
    ro: "Despre noi",
    en: "About us"
  },
  contact: {
    ro: "Contact",
    en: "Contact"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    if (!translations[key]) return key;
    return translations[key][language];
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