import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-pink-400 text-xs font-mono mb-2.5">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-pink-500">Engineering Work</span>
          </h2>
          <p className="mt-2 text-gray-400 max-w-xl text-sm sm:text-base">
            Production systems, client web applications, and local AI engines built for high speed, reliability, and measurable outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col rounded-xl bg-[#08080c] border border-white/[0.08] hover:border-pink-500/30 transition-all overflow-hidden"
            >
              {/* Window Frame Top Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0c0c11] border-b border-white/[0.06]">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-gray-400 truncate max-w-[150px]">
                    {project.id}.app
                  </span>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-gray-300">
                  {project.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono text-pink-400 uppercase tracking-wider">
                    {project.category}
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-1.5 border-t border-white/[0.04]">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/[0.06]">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:brightness-110 active:scale-95 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium text-gray-300 bg-white/[0.03] border border-white/10 hover:border-white/25 hover:text-white transition-all active:scale-95"
                    >
                      <Github className="w-3 h-3" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repositories Banner CTA */}
        <div className="mt-12 p-5 rounded-xl bg-[#08080c] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400 shrink-0">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base">Explore more repositories & experiments</h4>
              <p className="text-xs text-gray-400">
                Active projects, microservices modules, and applied AI explorations on GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/gungun-gupta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-medium text-white bg-white/[0.04] border border-white/10 hover:border-pink-500/40 transition-all shrink-0"
          >
            <span>Visit @gungun-gupta</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
