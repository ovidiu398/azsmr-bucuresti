"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Globe2, Zap, Shield, Heart } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              <Globe2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">GlobalApp</span>
          </div>
          
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-bounce">
              <Sparkles size={16} />
              <span>{t('welcome')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              {t('hero_title')}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('hero_subtitle')} {t('description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-2xl shadow-xl shadow-primary/20 gap-2 group">
                {t('get_started')}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-2xl border-2">
                Learn More
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-32">
            {[
              { icon: <Zap className="text-amber-500" />, title: "Fast", desc: "Lightning fast performance." },
              { icon: <Shield className="text-emerald-500" />, title: "Secure", desc: "Your data is always safe." },
              { icon: <Heart className="text-rose-500" />, title: "Loved", desc: "Built with passion for users." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 text-center text-slate-500">
          <p>© 2024 GlobalApp. {t('welcome')}.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;