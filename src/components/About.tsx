"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Heart, ShieldCheck, Activity, BookOpen } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="dyad-media://media/nimble-raccoon-snap/.dyad/media/d9d5ddbbc8a74c783208c5589952110a2abba0951ae1112243f8c9e83c95ed4b.png" 
                  alt="AZSMR București" 
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
      </div>
    </section>
  );
};