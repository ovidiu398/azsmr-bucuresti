"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Heart, ShieldCheck, Activity, BookOpen } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: BookOpen, title: t("about.feature.spirituality") },
    { icon: Activity, title: t("about.feature.health") },
    { icon: Heart, title: t("about.feature.community") },
    { icon: ShieldCheck, title: t("about.feature.principles") },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            {t("about.title")}
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            {t("about.content")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group"
            >
              <div className="p-4 rounded-2xl bg-white shadow-sm mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="font-semibold text-lg text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;