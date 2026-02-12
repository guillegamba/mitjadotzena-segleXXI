import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-cream/90 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center z-50 group">
          <img 
            src="/logo_black.png" 
            alt="Mitjadotzena" 
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm font-medium hover:text-brand-orange transition-colors">Why Us</a>
          <a href="#use-cases" className="text-sm font-medium hover:text-brand-orange transition-colors">Solutions</a>
          <a href="#process" className="text-sm font-medium hover:text-brand-orange transition-colors">Process</a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-brand-black text-white text-sm font-medium rounded-full hover:bg-brand-orange hover:text-brand-black transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Start a Project
          </a>
        </div>

        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
            <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display font-bold hover:text-brand-orange">Why Us</a>
            <a href="#use-cases" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display font-bold hover:text-brand-orange">Solutions</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display font-bold hover:text-brand-orange">Process</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-3 bg-brand-black text-white text-lg font-medium rounded-full hover:bg-brand-orange hover:text-brand-black">Start a Project</a>
          </div>
        )}
      </div>
    </nav>
  );
};