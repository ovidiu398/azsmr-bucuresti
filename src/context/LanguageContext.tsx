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
    "hero.verse": "Și știm că toate lucrurile lucrează spre binele celor ce iubesc pe Dumnezeu - Romani 8:28",
    "hero.live": "Urmărește LIVE",
    "about.title": "Cine suntem",
    "about.content": "Canalul AZSMR București este canalul oficial al Bisericii Adventiste de Ziua a Șaptea Mișcarea de Reformă din București. Suntem o comunitate dedicată promovării valorilor creștine și a unui stil de viață sănătos.",
    "about.feature.spirituality": "Spiritualitate",
    "about.feature.health": "Sănătate",
    "about.feature.community": "Comunitate",
    "about.feature.principles": "Principii",
    "about.lessons_title": "Lecțiuni Biblice 2026",
    "about.lessons_desc": "Studiază împreună cu noi: „Umbland cu Isus” (Iulie - Septembrie 2026)",
    "about.lessons_subdesc": "Descoperă profunzimea Scripturii prin studiul săptămânal direct pe site-ul nostru.",
    "about.lessons_btn": "Deschide Lecțiunea",
    "inspiration.quote": "Cuvântul Tău este o candelă pentru picioarele mele și o lumină pe cărarea mea.",
    "inspiration.reference": "Psalmul 119:105",
    "schedule.title": "Te așteptăm cu drag!",
    "schedule.subtitle": "Serviciile noastre divine au loc în fiecare sâmbătă.",
    "schedule.saturday": "Sâmbătă - Ziua Domnului",
    "schedule.morning": "Serviciul de Dimineață",
    "schedule.evening": "Serviciul de Seară",
    "schedule.welcome": "Toți sunt bineprimiți!",
    "feedback.title": "Feedback",
    "feedback.desc": "Părerea ta este importantă pentru noi. Scrie-ne gândurile sau sugestiile tale mai jos.",
    "feedback.placeholder": "Scrie aici mesajul tău...",
    "feedback.button": "Trimite Feedback",
    "feedback.error": "Te rugăm să scrii un mesaj înainte de a trimite.",
    "feedback.success": "Clientul de email a fost deschis pentru a trimite mesajul.",
    "contact.title": "Unde ne găsiți",
    "contact.address": "Strada Stoian Militaru 65",
    "contact.city": "Sector 4, București",
    "contact.social": "Social Media",
    "bible.back": "Înapoi la pagina principală",
    "bible.study": "Studiu Biblic",
    "bible.about": "Despre acest studiu",
    "bible.topics": "Teme principale",
    "bible.download": "Descarcă Lecția (PDF)",
    "bible.share": "Distribuie",
    "bible.share_success": "Link copiat!",
    "bible.pdf_opened": "PDF deschis!",
    "footer.desc": "Biserica Adventistă de Ziua a Șaptea - Mișcarea de Reformă",
    "footer.rights": "© 2026 AZSMR București. Toate drepturile rezervate.",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.schedule": "Schedule",
    "nav.contact": "Contact",
    "hero.title": "Seventh-day Adventist Church",
    "hero.subtitle": "Reform Movement - Bucharest",
    "hero.verse": "And we know that all things work together for good to them that love God - Romans 8:28",
    "hero.live": "Watch LIVE",
    "about.title": "Who We Are",
    "about.content": "The AZSMR Bucharest channel is the official channel of the Seventh-day Adventist Reform Movement Church in Bucharest. We are a community dedicated to promoting Christian values and a healthy lifestyle.",
    "about.feature.spirituality": "Spirituality",
    "about.feature.health": "Health",
    "about.feature.community": "Community",
    "about.feature.principles": "Principles",
    "about.lessons_title": "Bible Lessons 2026",
    "about.lessons_desc": "Study with us: 'Walking with Jesus' (July - September 2026)",
    "about.lessons_subdesc": "Discover the depth of Scripture through weekly study directly on our site.",
    "about.lessons_btn": "Open Lesson",
    "inspiration.quote": "Your word is a lamp to my feet and a light to my path.",
    "inspiration.reference": "Psalm 119:105",
    "schedule.title": "We Welcome You!",
    "schedule.subtitle": "Our divine services take place every Saturday.",
    "schedule.saturday": "Saturday - The Lord's Day",
    "schedule.morning": "Morning Service",
    "schedule.evening": "Evening Service",
    "schedule.welcome": "Everyone is welcome!",
    "feedback.title": "Feedback",
    "feedback.desc": "Your opinion is important to us. Write your thoughts or suggestions below.",
    "feedback.placeholder": "Write your message here...",
    "feedback.button": "Send Feedback",
    "feedback.error": "Please write a message before sending.",
    "feedback.success": "Email client opened to send the message.",
    "contact.title": "Where to Find Us",
    "contact.address": "65 Stoian Militaru Street",
    "contact.city": "Sector 4, Bucharest",
    "contact.social": "Social Media",
    "bible.back": "Back to home page",
    "bible.study": "Bible Study",
    "bible.about": "About this study",
    "bible.topics": "Main Topics",
    "bible.download": "Download Lesson (PDF)",
    "bible.share": "Share",
    "bible.share_success": "Link copied!",
    "bible.pdf_opened": "PDF opened!",
    "footer.desc": "Seventh-day Adventist Church - Reform Movement",
    "footer.rights": "© 2026 AZSMR Bucharest. All rights reserved.",
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