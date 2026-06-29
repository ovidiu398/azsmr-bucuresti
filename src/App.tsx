"use client";

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
// Importă restul componentelor tale aici

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground p-8">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight">Aplicația Mea</h1>
          <LanguageSwitcher />
        </header>
        
        <main className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Bun venit!</h2>
            <p className="text-muted-foreground">
              Această aplicație suportă acum schimbarea globală a limbii. 
              Folosește selectorul de mai sus pentru a alege dintr-o listă completă de limbi.
            </p>
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;