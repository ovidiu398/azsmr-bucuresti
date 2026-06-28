"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Youtube, PlayCircle } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-4 rounded-full shadow-xl">
              <span className="text-2xl font-black text-primary tracking-tighter">
                AZSMR <span className="text-blue-600">BUCUREȘTI</span>
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          {t("hero.title")}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">
          {t("hero.subtitle")}
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed relative">
            <span className="text-4xl text-blue-200 absolute -top-4 -left-6">"</span>
            {t("Și știm că toate lucrurile lucrează spre binele celor ce iubesc pe Dumnezeu")}
            <span className="text-4xl text-blue-200 absolute -bottom-8 -right-4">"</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white gap-3 px-8 py-7 text-lg shadow-lg shadow-red-200 transition-all hover:scale-105" asChild>
            <a href="https://www.youtube.com/@AZSMRBucuresti/streams" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6" />
              {t("hero.live")}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto gap-3 px-8 py-7 text-lg border-2 hover:bg-blue-50 transition-all" asChild>
            <a href="#about">
              <PlayCircle className="w-6 h-6" />
              {t("nav.about")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};