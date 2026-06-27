"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Schedule } from "@/components/Schedule";
import { Contact } from "@/components/Contact";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="text-2xl font-bold tracking-tight">AZSMR <span className="text-blue-400">București</span></span>
        </div>
        <p className="text-gray-400 mb-4">{t("footer.copy")}</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

const IndexContent = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;