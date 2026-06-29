"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen,
  ChevronLeft,
  Calendar,
  Share2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const BibleLessons = () => {
  const { t, language } = useLanguage();

  const currentLesson = {
    title: language === 'ro' ? "Umblând cu Isus" : "Walking with Jesus",
    quarter: language === 'ro' ? "Iulie - Septembrie 2026" : "July - September 2026",
    description: language === 'ro' ? [
      "Acest trimestru ne invită la o călătorie spirituală profundă intitulată „Umblând cu Isus”.",
      "Lecțiile sunt concepute pentru creștere spirituală și experiență practică.",
      "Scopul este transformarea inimii prin Duhul Sfânt.",
    ] : [
      "This quarter invites us to a deep spiritual journey titled 'Walking with Jesus'.",
      "The lessons are designed for spiritual growth and practical experience.",
      "The goal is the transformation of the heart through the Holy Spirit.",
    ],
    topics: language === 'ro' ? [
      "Relația personală cu Isus",
      "Pașii creșterii spirituale",
      "Transformarea prin Duhul Sfânt",
      "Dependența de Dumnezeu",
    ] : [
      "Personal relationship with Jesus",
      "Steps of spiritual growth",
      "Transformation through the Holy Spirit",
      "Dependence on God",
    ],
    pdfUrl: "/pdf/1-Lectia-3-2026.pdf",
  };

  const handleDownloadLesson = () => {
    const link = document.createElement("a");
    link.href = currentLesson.pdfUrl;
    link.target = "_blank";
    link.download = "1-Lectia-3-2026.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success(t("bible.pdf_opened"));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentLesson.title,
          text: currentLesson.description[0],
          url: window.location.href,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success(t("bible.share_success"));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          {t("bible.back")}
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="text-blue-100 uppercase text-sm">
                {t("bible.study")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {currentLesson.title}
            </h1>

            <div className="flex items-center gap-2 text-blue-100">
              <Calendar className="w-4 h-4" />
              {currentLesson.quarter}
            </div>
          </div>

          <div className="p-8 md:p-12">

            <h2 className="text-2xl font-bold mb-5">
              {t("bible.about")}
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              {currentLesson.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">
              {t("bible.topics")}
            </h3>

            <ul className="grid md:grid-cols-2 gap-4 mb-10">
              {currentLesson.topics.map((topic, index) => (
                <li
                  key={index}
                  className="bg-blue-50 rounded-xl p-4 flex items-center gap-3 text-blue-800"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  {topic}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 border-t pt-8">

              <Button
                onClick={handleDownloadLesson}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl text-lg font-bold"
              >
                <Download className="w-5 h-5 mr-2" />
                {t("bible.download")}
              </Button>

              <Button
                variant="outline"
                onClick={handleShare}
                className="px-8 py-6 rounded-2xl"
              >
                <Share2 className="w-5 h-5 mr-2" />
                {t("bible.share")}
              </Button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleLessons;