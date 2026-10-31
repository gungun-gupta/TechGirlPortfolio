import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Activity,
  Layers,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-neon-pink text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-500 to-red-500">Engineering Work</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Production systems, client web applications, and local AI engines built for high speed, 
            bulletproof reliability, and measurable user outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group flex flex-col rounded-2xl bg-[#0b0912] border border-pink-500/20 hover:border-pink-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,42,133,0.22)] overflow-hidden"
            >
              {/* Window Frame / Browser Top Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#110e19] border-b border-pink-500/20">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-gray-400 truncate max-w-[150px]">
                    {project.id}.app
                  </span>
                </div>

                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/30 text-pink-300">
                  {project.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                
                <div className="space-y-3">
                  <div className="text-xs font-mono font-medium text-pink-400/90 uppercase tracking-wider">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-pink-100 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Highlight Points */}
                  <div className="pt-2 space-y-1.5 border-t border-white/5">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neon-pink shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-dark-800/90 border border-white/10 text-[11px] font-mono text-gray-300 group-hover:border-pink-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md shadow-pink-600/30 hover:brightness-110 active:scale-95 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/10 hover:border-pink-500/40 hover:text-white transition-all active:scale-95"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repositories Banner CTA */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-dark-850 via-[#130d1a] to-dark-850 border border-pink-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-neon-pink shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg">Want to explore more source code?</h4>
              <p className="text-xs sm:text-sm text-gray-400 font-normal">
                Check out active repositories, experiments with RAG architectures, and OSS contributions.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/gungun-gupta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-dark-800 border border-pink-500/40 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(255,42,133,0.4)] transition-all shrink-0"
          >
            <span>Visit @gungun-gupta</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
