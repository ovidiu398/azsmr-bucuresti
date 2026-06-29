"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Clock, Calendar, Heart, Users } from "lucide-react";

export const Schedule = () => {
  const { t } = useLanguage();

  return (
    <section id="schedule" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("schedule.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("schedule.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                <Calendar className="w-4 h-4" />
                {t("schedule.saturday")}
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{t("schedule.morning")}</h4>
                    <p className="text-2xl font-black text-blue-600">09:00 – 12:15</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{t("schedule.evening")}</h4>
                    <p className="text-2xl font-black text-blue-600">17:00 – 20:30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-500 italic">
                <Heart className="w-5 h-5 text-red-400" />
                <p>{t("schedule.welcome")}</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden min-h-[300px] shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&q=80&w=1000" 
              alt="Community" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-300" />
                  <span className="font-semibold uppercase tracking-wider text-sm text-blue-200">Comunitate</span>
                </div>
                <h3 className="text-2xl font-bold">O familie spirituală care te așteaptă.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};