import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Code2, 
  Cpu, 
  Share2, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [avatarSrc, setAvatarSrc] = useState('/avatar.webp');

  const handleAvatarError = () => {
    // Fallback to avatar.png or avatar.svg
    if (avatarSrc === '/avatar.webp') {
      setAvatarSrc('/avatar.png');
    } else if (avatarSrc === '/avatar.png') {
      setAvatarSrc('/avatar.svg');
    }
  };

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Pitch */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-mono w-fit backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide">{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans leading-[1.08]">
                <span className="block text-white">GUNGUN</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-400 to-rose-500 drop-shadow-[0_0_35px_rgba(255,42,133,0.35)]">
                  GUPTA
                </span>
              </h1>
              <div className="flex items-center space-x-3 text-sm sm:text-base md:text-lg font-mono font-medium text-pink-400/90 tracking-widest uppercase">
                <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-pink-500 to-rose-500" />
                <span>{personalInfo.role}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-xs sm:text-sm font-normal">Full-Stack & Applied AI</span>
              </div>
            </div>

            {/* Impactful Engineering Pitch */}
            <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-2xl font-normal">
              Computer Science engineer specializing in full-stack web applications 
              (<span className="text-pink-300 font-medium">React, Next.js, FastAPI</span>) and Applied AI 
              (<span className="text-rose-300 font-medium">RAG, ChromaDB, Ollama</span>). Proven experience delivering production ERP modules, 
              microservices, and client platforms with sub-second latencies and top-tier Google search rankings.
            </p>

            {/* Call to Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 shadow-lg shadow-pink-600/35 hover:shadow-[0_0_30px_rgba(255,42,133,0.6)] active:scale-95 transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm sm:text-base font-medium text-gray-300 bg-white/[0.03] border border-white/10 hover:border-pink-500/40 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                <span>View Projects</span>
              </a>

              {/* Social Icon Buttons */}
              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-dark-800/80 hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/40 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,42,133,0.3)]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-dark-800/80 hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/40 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,42,133,0.3)]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-dark-800/80 hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/40 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,42,133,0.3)]"
                  aria-label="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linktree}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-dark-800/80 hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/40 transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,42,133,0.3)]"
                  aria-label="Linktree Profile"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-dark-850/60 border border-white/5 hover:border-pink-500/20 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Neo-cyber Avatar & Interactive Badge Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Retro Sparkles */}
            <div className="absolute -top-6 -right-4 text-neon-pink animate-pulse">
              <Sparkles className="w-7 h-7 drop-shadow-[0_0_10px_rgba(255,42,133,0.8)]" />
            </div>
            <div className="absolute bottom-10 -left-6 text-neon-crimson animate-pulse delay-500">
              <Sparkles className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,23,68,0.8)]" />
            </div>

            {/* Neon Frame Wrapper */}
            <div className="relative group w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Outer pulsing glow background */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-neon-pink via-neon-crimson to-rose-600 opacity-40 blur-xl group-hover:opacity-65 transition duration-700 animate-neon-pulse" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#0d0b13] border border-pink-500/40 p-4 sm:p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Subtle Cyber Corner Tech Markings */}
                <div className="absolute top-2 left-3 text-[10px] font-mono text-pink-400/60 flex items-center space-x-1">
                  <span>//</span>
                  <span>ID: GUNGUN_GUPTA</span>
                </div>
                <div className="absolute top-2 right-3 text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE</span>
                </div>

                {/* Inner Image Container */}
                <div className="relative mt-4 aspect-square rounded-xl overflow-hidden bg-[#121019] border border-pink-500/20 group-hover:border-pink-500/50 transition-colors">
                  <img
                    src={avatarSrc}
                    onError={handleAvatarError}
                    alt="Gungun Gupta - Software Engineer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/[0.04] to-transparent pointer-events-none" />

                  {/* Corner Code Tag Top Left */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-dark-900/90 border border-pink-500/30 text-[11px] font-mono text-pink-300 backdrop-blur-md shadow-md">
                    <code>&lt;FullStack /&gt;</code>
                  </div>

                  {/* Corner Tag Bottom Right */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-dark-900/90 border border-pink-500/30 text-[11px] font-mono text-rose-300 backdrop-blur-md shadow-md flex items-center space-x-1.5">
                    <Cpu className="w-3.5 h-3.5 text-neon-pink" />
                    <span>Applied AI</span>
                  </div>
                </div>

                {/* Floating Code Snippet Card below image */}
                <div className="mt-4 p-3 rounded-xl bg-dark-900/90 border border-white/10 font-mono text-xs text-gray-300">
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/5 text-[11px] text-gray-500">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <span className="text-gray-400">developer.ts</span>
                  </div>
                  <p className="text-pink-400 font-semibold">
                    const <span className="text-white">engineer</span> = &#123;
                  </p>
                  <p className="pl-4 text-gray-400">
                    name: <span className="text-emerald-300">'Gungun Gupta'</span>,
                  </p>
                  <p className="pl-4 text-gray-400">
                    skills: [<span className="text-pink-300">'React'</span>, <span className="text-pink-300">'FastAPI'</span>, <span className="text-rose-300">'ChromaDB'</span>],
                  </p>
                  <p className="pl-4 text-gray-400">
                    passionate: <span className="text-purple-400">true</span>,
                  </p>
                  <p className="text-pink-400 font-semibold">&#125;;</p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
