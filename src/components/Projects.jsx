import React from 'react';

export default function Projects({ projects=[] }) {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-purple-300">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-600/30 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
