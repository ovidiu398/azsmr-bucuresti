"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dicționar de traduceri de bază pentru demonstrație
const translations: Record<string, Record<string, string>> = {
  ro: {
    welcome: "Bine ați venit pe site-ul nostru",
    description: "Acesta este un exemplu de site tradus integral.",
    select_lang: "Selectează limba",
    search_lang: "Caută limba...",
    no_lang: "Nu am găsit nicio limbă.",
    hero_title: "Transformă-ți ideile în realitate",
    hero_subtitle: "Cea mai avansată platformă pentru proiectele tale.",
    get_started: "Începe acum",
  },
  en: {
    welcome: "Welcome to our website",
    description: "This is an example of a fully translated site.",
    select_lang: "Select language",
    search_lang: "Search language...",
    no_lang: "No language found.",
    hero_title: "Turn your ideas into reality",
    hero_subtitle: "The most advanced platform for your projects.",
    get_started: "Get started",
  },
  fr: {
    welcome: "Bienvenue sur notre site",
    description: "Ceci est un exemple de site entièrement traduit.",
    select_lang: "Choisir la langue",
    search_lang: "Rechercher une langue...",
    no_lang: "Aucune langue trouvée.",
    hero_title: "Transformez vos idées en réalité",
    hero_subtitle: "La plateforme la plus avancée pour vos projets.",
    get_started: "Commencer",
  },
  de: {
    welcome: "Willkommen auf unserer Webseite",
    description: "Dies ist ein Beispiel für eine vollständig übersetzte Website.",
    select_lang: "Sprache auswählen",
    search_lang: "Sprache suchen...",
    no_lang: "Keine Sprache gefunden.",
    hero_title: "Verwandeln Sie Ihre Ideen in die Realität",
    hero_subtitle: "Die fortschrittlichste Plattform für Ihre Projekte.",
    get_started: "Jetzt loslegen",
  },
  es: {
    welcome: "Bienvenido a nuestro sitio web",
    description: "Este es un ejemplo de un sitio totalmente traducido.",
    select_lang: "Seleccionar idioma",
    search_lang: "Buscar idioma...",
    no_lang: "No se encontró ningún idioma.",
    hero_title: "Convierte tus ideas en realidad",
    hero_subtitle: "La plataforma más avanzada para tus proyectos.",
    get_started: "Empezar",
  },
  it: {
    welcome: "Benvenuti nel nostro sito web",
    description: "Questo è un esempio di sito completamente tradotto.",
    select_lang: "Seleziona lingua",
    search_lang: "Cerca lingua...",
    no_lang: "Nessuna lingua trovata.",
    hero_title: "Trasforma le tue idee in realtà",
    hero_subtitle: "La piattaforma più avanzata per i tuoi progetti.",
    get_started: "Inizia ora",
  }
  // Poți adăuga restul limbilor aici urmând același format
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('ro');

  // Funcția de traducere
  const t = (key: string) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
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