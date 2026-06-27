"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Youtube, PlayCircle } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          {t("hero.title")}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">
          {t("hero.subtitle")}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
          {t("hero.description")}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white gap-2" asChild>
            <a href="https://www.youtube.com/channel/UCAvoRE8J10AWfDVszIiqihg" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5" />
              {t("hero.live")}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
            <a href="#about">
              <PlayCircle className="w-5 h-5" />
              {t("nav.about")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};