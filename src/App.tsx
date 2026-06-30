"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Index from './pages/Index';
import BibleLessons from './pages/BibleLessons';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lectii-biblice" element={<BibleLessons />} />
        </Routes>
      </Router>
      <Analytics />
      <SpeedInsights />
    </LanguageProvider>
  );
}

export default App;