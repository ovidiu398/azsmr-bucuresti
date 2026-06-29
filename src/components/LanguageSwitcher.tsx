"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  { label: "Română", value: "ro" },
  { label: "English", value: "en" },
  { label: "Français", value: "fr" },
  { label: "Deutsch", value: "de" },
  { label: "Español", value: "es" },
  { label: "Italiano", value: "it" },
  { label: "Português", value: "pt" },
  { label: "Nederlands", value: "nl" },
  { label: "Polski", value: "pl" },
  { label: "Русский", value: "ru" },
  { label: "日本語", value: "ja" },
  { label: "한국어", value: "ko" },
  { label: "中文", value: "zh" },
  { label: "العربية", value: "ar" },
  { label: "Türkçe", value: "tr" },
  { label: "Ελληνικά", value: "el" },
  { label: "Magyar", value: "hu" },
  { label: "Čeština", value: "cs" },
  { label: "Svenska", value: "sv" },
  { label: "Dansk", value: "da" },
  { label: "Suomi", value: "fi" },
  { label: "Norsk", value: "no" },
].sort((a, b) => a.label.localeCompare(b.label));

export const LanguageSwitcher = () => {
  const [open, setOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  const selectedLanguage = languages.find((lang) => lang.value === language);

  return (
    <div className="flex items-center gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all shadow-sm rounded-xl"
          >
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary animate-pulse" />
              <span className="font-medium">
                {selectedLanguage ? selectedLanguage.label : t('select_lang')}
              </span>
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[220px] p-0 border-none shadow-2xl rounded-xl overflow-hidden" align="end">
          <Command className="rounded-xl border-none">
            <CommandInput placeholder={t('search_lang')} className="h-11 border-none focus:ring-0" />
            <CommandList className="max-h-[300px]">
              <CommandEmpty>{t('no_lang')}</CommandEmpty>
              <CommandGroup>
                {languages.map((lang) => (
                  <CommandItem
                    key={lang.value}
                    value={lang.label}
                    onSelect={() => {
                      setLanguage(lang.value);
                      setOpen(false);
                    }}
                    className="cursor-pointer py-3 px-4 aria-selected:bg-primary/10 transition-colors"
                  >
                    <Check
                      className={cn(
                        "mr-3 h-4 w-4 text-primary transition-all",
                        language === lang.value ? "opacity-100 scale-110" : "opacity-0 scale-50"
                      )}
                    />
                    <span className={cn(
                      "transition-colors",
                      language === lang.value ? "font-bold text-primary" : "font-normal"
                    )}>
                      {lang.label}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};