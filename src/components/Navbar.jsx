import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, isScrolled }) {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            IMAD LIAZIDI
          </div>
          
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-900/50 rounded-md"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
