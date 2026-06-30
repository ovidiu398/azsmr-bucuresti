"use client";

import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.schedule"), href: "#schedule" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={scrollToHome}
              className="flex items-center gap-3 text-xl font-bold text-primary tracking-tight group"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-blue-100 group-hover:scale-110 transition-all duration-300 ring-2 ring-blue-50 ring-offset-2">
                <img 
                  src="https://yt3.googleusercontent.com/ytc/AIdro_m_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X=s160-c-k-c0x00ffffff-no-rj" 
                  alt="AZSMR Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1585829365234-781fcd50c819?auto=format&fit=crop&q=80&w=100";
                  }}
                />
              </div>
              <span className="hidden sm:block">
                AZSMR <span className="text-blue-600">București</span>
              </span>
            </button>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};