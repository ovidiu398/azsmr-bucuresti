"use client";

import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, ChevronLeft, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const BibleLessons = () => {
  const { t } = useLanguage();

  const currentLesson = {
    title: "Umbland cu Isus",
    quarter: "Iulie - Septembrie 2024",
    description: "Un studiu aprofundat despre viața și învățăturile lui Isus Hristos.",
    topics: [
      "Chemarea ucenicilor",
      "Predica de pe munte",
      "Minunile și compasiunea",
      "Drumul spre Golgota"
    ],
    pdfUrl: "https://www.adventist.ro/wp-content/uploads/2024/06/Studiu-Biblic-Adulti-2024-Trim-3.pdf" // Exemplu de link
  };

  const handleOpenLesson = () => {
    window.open(currentLesson.pdfUrl, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentLesson.title,
          text: currentLesson.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiat în clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Înapoi la pagina principală
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-blue-100 font-medium uppercase tracking-wider text-sm">Studiu Biblic</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{currentLesson.title}</h1>
            <div className="flex items-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{currentLesson.quarter}</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Despre acest studiu</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {currentLesson.description}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Teme principale:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {currentLesson.topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 text-blue-800 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-100">
              <Button 
                onClick={handleOpenLesson}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl text-lg font-bold shadow-lg transition-all hover:scale-105"
              >
                Deschide Lecția (PDF)
              </Button>
              <Button 
                variant="outline" 
                onClick={handleShare}
                className="px-6 py-6 rounded-2xl border-2 border-gray-200 hover:bg-gray-50"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Distribuie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleLessons;