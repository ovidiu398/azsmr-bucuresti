"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Inspiration } from "@/components/Inspiration";
import { Schedule } from "@/components/Schedule";
import { Contact } from "@/components/Contact";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <span className="text-3xl font-bold tracking-tight">AZSMR <span className="text-blue-400">București</span></span>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            Biserica Adventistă de Ziua a Șaptea - Mișcarea de Reformă
          </p>
        </div>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full" />
        <p className="text-gray-500 text-sm">{t("footer.copy")}</p>
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
        <Inspiration />
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