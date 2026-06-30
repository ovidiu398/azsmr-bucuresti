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
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagine */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                    <Heart className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    AZSMR București
                  </h3>

                  <p className="text-blue-100">
                    {t("about.feature.community")}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              {t("about.title")}
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              {t("about.content")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <span className="font-semibold text-gray-800">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};