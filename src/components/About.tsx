"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Activity, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: BookOpen, title: t("about.feature.spirituality") },
    { icon: Activity, title: t("about.feature.health") },
    { icon: ShieldCheck, title: t("about.feature.principles") },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TEXT */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            {t("about.title")}
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            {t("about.content")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-blue-600" />
                </div>

                <span className="font-semibold text-gray-800">
                  {f.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD LECȚII BIBLICE */}
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
                {t("about.lessons_subdesc")}
              </p>
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-6 rounded-2xl shadow-lg transition-all hover:scale-105 gap-2"
              asChild
            >
              <Link to="/lectii-biblice">
                {t("about.lessons_btn")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

      </div>
    </section>
  );
};