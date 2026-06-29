"use client";

import React from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="absolute top-8 right-8">
        <LanguageSwitcher />
      </div>
      
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            <span className="block text-primary">{t('welcome')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <nav className="flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">{t('home')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('about')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('contact')}</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Index;