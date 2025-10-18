import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a master's student in Artificial Intelligence and Digital Science at the Faculty of Sciences in Rabat, with a strong background in web development, data science, and artificial intelligence.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My expertise spans areas such as Natural Language Processing (NLP), as well as practical experience with modern development tools and methodologies including Docker, Git, and collaborative software engineering practices.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate about innovative technologies, I continuously seek to deepen my knowledge and apply AI-driven solutions to real-world challenges.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-purple-300">
              <MapPin className="w-5 h-5" />
              <span>Rabat, Morocco</span>
            </div>
            <div className="flex items-center gap-2 text-purple-300">
              <Phone className="w-5 h-5" />
              <span>+212 689514712</span>
            </div>
            <div className="flex items-center gap-2 text-purple-300">
              <Mail className="w-5 h-5" />
              <span>liazidiimad@gmail.com</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">Languages</h3>
            <div className="flex gap-4 flex-wrap">
              <span className="bg-purple-600/30 px-4 py-2 rounded-full">Arabic - Native</span>
              <span className="bg-purple-600/30 px-4 py-2 rounded-full">French - Fluent</span>
              <span className="bg-purple-600/30 px-4 py-2 rounded-full">English - Professional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
