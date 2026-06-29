"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Language = "ro" | "en";

type Translations = {
  [key: string]: string;
};

type AllTranslations = {
  ro: Translations;
  en: Translations;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: AllTranslations = {
  ro: {
    "nav.home": "Acasă",
    "nav.about": "Despre noi",
    "nav.schedule": "Program",
    "nav.contact": "Contact",
    "hero.title": "Biserica Adventistă de Ziua a Șaptea",
    "hero.subtitle": "Mișcarea de Reformă - București",
    "hero.verse":
      "Tot ce ne crește, ne înobilează, ne ajută în năzuința spre mai bine și mai frumos, spre mai aproape de Modelul desăvârșit, merită promovat!",
    "hero.live": "Urmărește LIVE",
    "about.title": "Cine suntem",
    "about.content":
      "Canalul AZSMR București este canalul oficial...",
    "schedule.title": "Te așteptăm cu drag!",
    "schedule.subtitle":
      "Serviciile noastre divine au loc în fiecare sâmbătă.",
    "schedule.saturday": "Sâmbătă - Ziua Domnului",
    "schedule.morning": "Serviciul de Dimineață",
    "schedule.evening": "Serviciul de Seară",
    "schedule.welcome":
      "Toți sunt bineprimiți!",
    "contact.title": "Unde ne găsiți",
    "contact.address": "Strada Stoian Militaru 65",
    "footer.copy": "© 2026 AZSMR București",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.schedule": "Schedule",
    "nav.contact": "Contact",
    "hero.title": "Seventh-day Adventist Church",
    "hero.subtitle": "Reform Movement - Bucharest",
    "hero.verse":
      "Everything that grows us deserves to be promoted!",
    "hero.live": "Watch LIVE",
    "about.title": "Who We Are",
    "about.content":
      "The AZSMR Bucharest channel is the official channel...",
    "schedule.title": "We Welcome You!",
    "schedule.subtitle":
      "Our services take place every Saturday.",
    "schedule.saturday": "Saturday - The Lord's Day",
    "schedule.morning": "Morning Service",
    "schedule.evening": "Evening Service",
    "schedule.welcome": "Everyone is welcome!",
    "contact.title": "Where to Find Us",
    "contact.address": "65 Stoian Militaru Street",
    "footer.copy": "© 2026 AZSMR Bucharest",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ro");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved === "ro" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string) => {
    const langData = translations[language];
    return langData[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};