import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education({ education=[] }) {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-purple-300">{edu.degree}</h3>
                  <p className="text-white">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
