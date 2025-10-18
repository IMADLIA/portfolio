import React from 'react';

export default function Skills({ skills =[] }) {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(skills).map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-400">{category.icon}</div>
                <h3 className="text-2xl font-bold text-purple-300">{category.title}</h3>
              </div>
              {category.items.map((item, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold text-white mb-1">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.tech}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
