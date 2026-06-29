"use client";

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Index from './pages/Index';
import BibleLessons from './pages/BibleLessons';
import NotFound from './pages/NotFound';
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lectii-biblice" element={<BibleLessons />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;