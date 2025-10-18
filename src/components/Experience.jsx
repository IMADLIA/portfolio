import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience({ experience=[] }) {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-purple-400 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-300">{exp.title}</h3>
                  <p className="text-white">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location} • {exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 ml-9">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="text-gray-300 text-sm">{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
