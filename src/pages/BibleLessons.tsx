"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, ChevronLeft, Calendar, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const BibleLessons = () => {
  const { t } = useLanguage();

  const currentLesson = {
    title: "Umblând cu Isus",
    quarter: "Iulie - Septembrie 2026",
    description: [
      "Acest trimestru ne invită la o călătorie spirituală profundă intitulată „Umblând cu Isus”.",
      "Lecțiile sunt concepute pentru creștere spirituală și experiență practică.",
      "Scopul este transformarea inimii prin Duhul Sfânt."
    ],
    topics: [
      "Relația personală cu Isus",
      "Pașii creșterii spirituale",
      "Transformarea prin Duhul Sfânt",
      "Dependența de Dumnezeu"
    ],
    pdfUrl: "https://www.azsmr.ro/media/imagini/1-Lectia-3-2026.pdf"
  };

  // ✅ DOWNLOAD FIX REAL (blob method)
  const handleDownloadLesson = async () => {
    try {
      const response = await fetch(currentLesson.pdfUrl);

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Lectia-3-2026.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      toast.success("Descărcarea a început!");
    } catch (error) {
      console.error(error);
      toast.error("Nu s-a putut descărca fișierul");
    }
  };

  // ✅ SHARE
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentLesson.title,
          text: currentLesson.description[0],
          url: window.location.href,
        });
      } catch (error) {
        console.error("Share error:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiat în clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BACK */}
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Înapoi la pagina principală
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="text-blue-100 text-sm uppercase">
                Studiu Biblic
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {currentLesson.title}
            </h1>

            <div className="flex items-center gap-2 text-blue-100">
              <Calendar className="w-4 h-4" />
              <span>{currentLesson.quarter}</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-12">

            <h2 className="text-2xl font-bold mb-4">
              Despre acest studiu
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              {currentLesson.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Teme principale:
            </h3>

            <ul className="grid md:grid-cols-2 gap-4 mb-10">
              {currentLesson.topics.map((topic, i) => (
                <li
                  key={i}
                  className="p-4 bg-blue-50 text-blue-800 rounded-xl flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  {topic}
                </li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-8 border-t">

              <Button
                onClick={handleDownloadLesson}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl text-lg font-bold flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Descarcă Lecția (PDF)
              </Button>

              <Button
                variant="outline"
                onClick={handleShare}
                className="px-6 py-6 rounded-2xl"
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