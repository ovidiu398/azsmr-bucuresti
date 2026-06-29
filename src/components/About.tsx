"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Heart, ShieldCheck, Activity, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: BookOpen, title: "Spiritualitate" },
    { icon: Activity, title: "Sănătate" },
    { icon: Heart, title: "Comunitate" },
    { icon: ShieldCheck, title: "Principii" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1200" 
                  alt="AZSMR București Community" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              {t("about.title")}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              {t("about.content")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-800">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Bible Lessons Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12 text-white shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4 backdrop-blur-sm">
                <BookOpen className="w-4 h-4" />
                {t("about.lessons_title")}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {t("about.lessons_desc")}
              </h3>
              <p className="text-blue-100 text-lg">
                Descoperă profunzimea Scripturii prin studiul săptămânal.
              </p>
            </div>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-6 rounded-2xl shadow-lg transition-all hover:scale-105 gap-2"
              asChild
            >
              <a 
                href="https://www.azsmr.ro/lectii-biblice-pentru-sabat-umbland-cu-isus-iulie-septembrie-2026/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t("about.lessons_btn")}
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};