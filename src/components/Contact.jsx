import React from 'react';
import { Mail, Linkedin, MapPin, Phone, FileDown } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Boutons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:liazidiimad@gmail.com"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full transition-all transform hover:scale-105 text-lg"
          >
            <Mail className="w-6 h-6" /> Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/imad-liazidi-702501242/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-full transition-all transform hover:scale-105 text-lg"
          >
            <Linkedin className="w-6 h-6" /> LinkedIn
          </a>

          {/* 🔽 Bouton Télécharger CV */}
          <a
            href="/CV_Liazidi_Imad.pdf"
            download
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full transition-all transform hover:scale-105 text-lg"
          >
            <FileDown className="w-6 h-6" /> Download CV
          </a>
        </div>

        {/* Coordonnées */}
        <div className="mt-12 text-gray-400">
          <p className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-5 h-5" /> Rabat, Rabat-Salé-Kénitra, Morocco
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> +212 689514712
          </p>
        </div>
      </div>
    </section>
  );
}
