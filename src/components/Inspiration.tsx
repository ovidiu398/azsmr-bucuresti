"use client";

import { useLanguage } from "@/context/LanguageContext";

export const Inspiration = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=2000" 
          alt="Open Bible" 
          className="w-full h-full object-cover brightness-[0.3]"
        />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block p-3 rounded-full bg-blue-500/20 backdrop-blur-sm mb-8">
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
        </div>
        <blockquote className="text-3xl md:text-5xl font-serif italic text-white mb-8 leading-tight">
          "{t("inspiration.quote")}"
        </blockquote>
        <cite className="text-xl text-blue-300 font-medium not-italic">
           {t("inspiration.reference")}
        </cite>
      </div>
    </section>
  );
};