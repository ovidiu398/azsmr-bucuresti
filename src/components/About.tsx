"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("about.title")}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t("about.content")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <f.icon className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-700">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1000" 
                alt="Church Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};