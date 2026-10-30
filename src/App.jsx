import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-zinc-900 selection:bg-[#10b981] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Services />
      <Contact />
      <FloatingWhatsapp />
    </div>
  );
}