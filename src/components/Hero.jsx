import React from 'react';
import { Linkedin, Github, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            IMAD LIAZIDI
          </span>
        </h1>
        <p className="text-xl md:text-3xl mb-4 text-purple-300">
          Master's Student in Artificial Intelligence & Digital Science
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Passionate about AI-driven solutions and innovative technologies
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/imad-liazidi-702501242/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all transform hover:scale-105">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-full transition-all transform hover:scale-105">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a href="mailto:liazidiimad@gmail.com" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full transition-all transform hover:scale-105">
            <Mail className="w-5 h-5" /> Email
          </a>
        </div>
        <div className="mt-12 animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
}
