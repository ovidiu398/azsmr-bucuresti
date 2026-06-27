"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Button 
        variant={language === 'ro' ? 'default' : 'ghost'} 
        size="sm" 
        onClick={() => setLanguage('ro')}
        className="px-2 h-8"
      >
        RO
      </Button>
      <Button 
        variant={language === 'en' ? 'default' : 'ghost'} 
        size="sm" 
        onClick={() => setLanguage('en')}
        className="px-2 h-8"
      >
        EN
      </Button>
    </div>
  );
};