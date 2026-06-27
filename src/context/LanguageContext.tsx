"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ro: {
    "nav.home": "Acasă",
    "nav.about": "Despre noi",
    "nav.schedule": "Program",
    "nav.contact": "Contact",
    "hero.title": "Biserica Adventistă de Ziua a Șaptea",
    "hero.subtitle": "Mișcarea de Reformă - București",
    "hero.description": "Tot ce ne crește, ne înobilează, ne ajută în năzuința spre mai bine și mai frumos, spre mai aproape de Modelul desăvârșit, merită promovat!",
    "hero.live": "Urmărește LIVE",
    "about.title": "Cine suntem",
    "about.content": "Canalul AZSMR București este canalul oficial al Bisericii Adventiste de Ziua a Șaptea Mișcarea de Reformă, din București. Avem disponibilă o gamă largă de videoclipuri ce țin atât de creșterea spirituală, cât și de sănătatea trupului, înglobând poezii, cântări, experiențe, povestioare, prezentări medicale sau predici.",
    "schedule.title": "Programul Serviciilor Divine",
    "schedule.saturday_morning": "Sâmbătă Dimineața",
    "schedule.saturday_evening": "Sâmbătă Seara",
    "schedule.closed": "Închis",
    "contact.title": "Unde ne găsiți",
    "contact.address": "Strada Stoian Militaru 65, 040717 București",
    "footer.copy": "© 2024 AZSMR București. Toate drepturile rezervate.",
    "days.monday": "Luni",
    "days.tuesday": "Marți",
    "days.wednesday": "Miercuri",
    "days.thursday": "Joi",
    "days.friday": "Vineri",
    "days.saturday": "Sâmbătă",
    "days.sunday": "Duminică"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.schedule": "Schedule",
    "nav.contact": "Contact",
    "hero.title": "Seventh-day Adventist Church",
    "hero.subtitle": "Reform Movement - Bucharest",
    "hero.description": "Everything that grows us, ennobles us, helps us in our aspiration towards better and more beautiful, closer to the perfect Model, deserves to be promoted!",
    "hero.live": "Watch LIVE",
    "about.title": "Who We Are",
    "about.content": "The AZSMR Bucharest channel is the official channel of the Seventh-day Adventist Church Reform Movement in Bucharest. We offer a wide range of videos related to both spiritual growth and physical health, including poems, songs, experiences, stories, medical presentations, or sermons.",
    "schedule.title": "Divine Services Schedule",
    "schedule.saturday_morning": "Saturday Morning",
    "schedule.saturday_evening": "Saturday Evening",
    "schedule.closed": "Closed",
    "contact.title": "Where to Find Us",
    "contact.address": "65 Stoian Militaru Street, 040717 Bucharest",
    "footer.copy": "© 2024 AZSMR Bucharest. All rights reserved.",
    "days.monday": "Monday",
    "days.tuesday": "Tuesday",
    "days.wednesday": "Wednesday",
    "days.thursday": "Thursday",
    "days.friday": "Friday",
    "days.saturday": "Saturday",
    "days.sunday": "Sunday"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['ro']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};