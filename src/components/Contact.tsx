"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("contact.title")}</h2>
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">{t("contact.address")}</p>
                <p className="text-gray-500">Sector 4, București</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-600 hover:text-white transition-all" asChild>
                  <a href="https://www.facebook.com/p/AZSMR-BUCURESTI-100064815845790" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-pink-600 hover:text-white transition-all" asChild>
                  <a href="https://instagram.com/azsmr_bucuresti" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-red-600 hover:text-white transition-all" asChild>
                  <a href="https://www.youtube.com/channel/UCAvoRE8J10AWfDVszIiqihg" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.8444444444444!2d26.1000000!3d44.4000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff0000000001%3A0x0!2zU3RyYWRhIFN0b2lhbiBNaWxpdGFydSA2NSwgQnVjdXJlyJl0aSAwNDA3MTc!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};