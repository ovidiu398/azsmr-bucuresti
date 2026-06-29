"use client";

import React, { createContext, useContext, useState } from 'react';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  ro: {
    "nav.home": "Acasă",
    "nav.about": "Despre noi",
    "nav.schedule": "Program",
    "nav.contact": "Contact",
    "hero.title": "Biserica Adventistă de Ziua a Șaptea",
    "hero.subtitle": "Mișcarea de Reformă — București",
    "hero.live": "Urmărește Live",
    "about.title": "Cine suntem noi?",
    "about.content": "Suntem o comunitate creștină dedicată promovării valorilor biblice, sănătății și ajutorării semenilor. Ne ghidăm după principiile Scripturii și dorim să împărtășim dragostea lui Dumnezeu cu toți cei din jur.",
    "about.lessons_title": "Lecții Biblice",
    "about.lessons_desc": "Studiază Biblia cu noi",
    "about.lessons_btn": "Vezi Lecția",
    "schedule.title": "Programul Serviciilor Divine",
    "schedule.subtitle": "Te invităm să te alături comunității noastre în fiecare sâmbătă pentru momente de închinare și părtășie.",
    "schedule.saturday": "Sâmbătă",
    "schedule.morning": "Serviciul de Dimineață",
    "schedule.evening": "Serviciul de Seară",
    "schedule.welcome": "Toți sunt bineveniți!",
    "contact.title": "Unde ne găsești?",
    "contact.address": "Strada Stoian Militaru 65",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.schedule": "Schedule",
    "nav.contact": "Contact",
    "hero.title": "Seventh-day Adventist Church",
    "hero.subtitle": "Reform Movement — Bucharest",
    "hero.live": "Watch Live",
    "about.title": "Who are we?",
    "about.content": "We are a Christian community dedicated to promoting biblical values, health, and helping others. We are guided by the principles of Scripture and wish to share God's love with everyone around us.",
    "about.lessons_title": "Bible Lessons",
    "about.lessons_desc": "Study the Bible with us",
    "about.lessons_btn": "View Lesson",
    "schedule.title": "Divine Service Schedule",
    "schedule.subtitle": "We invite you to join our community every Saturday for moments of worship and fellowship.",
    "schedule.saturday": "Saturday",
    "schedule.morning": "Morning Service",
    "schedule.evening": "Evening Service",
    "schedule.welcome": "Everyone is welcome!",
    "contact.title": "Where to find us?",
    "contact.address": "65 Stoian Militaru Street",
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