"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Clock, Calendar } from "lucide-react";

export const Schedule = () => {
  const { t } = useLanguage();

  const schedule = [
    { day: t("days.monday"), time: t("schedule.closed") },
    { day: t("days.tuesday"), time: t("schedule.closed") },
    { day: t("days.wednesday"), time: t("schedule.closed") },
    { day: t("days.thursday"), time: t("schedule.closed") },
    { day: t("days.friday"), time: t("schedule.closed") },
    { day: t("days.saturday"), time: "09:00 – 12:15 | 17:00 – 20:30", active: true },
    { day: t("days.sunday"), time: t("schedule.closed") },
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("schedule.title")}</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            Săptămânal
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="divide-y divide-gray-100">
            {schedule.map((item) => (
              <div 
                key={item.day} 
                className={`flex justify-between items-center p-6 transition-colors ${item.active ? 'bg-blue-50/50' : ''}`}
              >
                <span className={`font-semibold ${item.active ? 'text-blue-700' : 'text-gray-700'}`}>
                  {item.day}
                </span>
                <div className="flex items-center gap-3">
                  <Clock className={`w-4 h-4 ${item.active ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className={item.active ? 'text-blue-900 font-medium' : 'text-gray-500'}>
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};