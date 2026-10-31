import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ExternalLink,
  SlidersHorizontal,
  Maximize2,
  X
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  // Avatar mode: 'cyber' (tailored dark background with neon glow) or 'studio' (original studio lighting)
  const [avatarMode, setAvatarMode] = useState('cyber');
  const [avatarSrc, setAvatarSrc] = useState('/avatar.png');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const switchMode = (mode) => {
    setAvatarMode(mode);
    if (mode === 'cyber') {
      setAvatarSrc('/avatar.png');
    } else if (mode === 'studio') {
      setAvatarSrc('/avatar-original.png');
    } else {
      setAvatarSrc('/avatar-transparent.png');
    }
  };

  const handleAvatarError = () => {
    // If customized version fails, fallback to original or vector
    if (avatarSrc !== '/avatar-original.png' && avatarSrc !== '/my_image.png') {
      setAvatarSrc('/avatar-original.png');
    } else {
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
                
                {/* Cyber Header Bar with Controls */}
                <div className="flex items-center justify-between pb-3 border-b border-pink-500/20 text-[11px] font-mono">
                  <div className="flex items-center space-x-1.5 text-pink-400">
                    <span className="text-pink-500 font-bold">//</span>
                    <span className="text-gray-200 font-semibold">GUNGUN_GUPTA</span>
                  </div>

                  {/* Aesthetic Theme Switcher Pill */}
                  <div className="flex items-center rounded-lg bg-dark-900/90 border border-white/10 p-0.5 text-[10px]">
                    <button
                      type="button"
                      onClick={() => switchMode('cyber')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        avatarMode === 'cyber'
                          ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold shadow-sm'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      title="Cyberpunk Dark Mode (Custom tailored dark background & rim glow)"
                    >
                      Cyber Glow
                    </button>
                    <button
                      type="button"
                      onClick={() => switchMode('studio')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        avatarMode === 'studio'
                          ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold shadow-sm'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      title="Original Studio Portrait"
                    >
                      Studio
                    </button>
                  </div>
                </div>

                {/* Inner Image Container with High-Tech Frame */}
                <div className="relative mt-3 aspect-square rounded-xl overflow-hidden bg-[#070709] border border-pink-500/30 group-hover:border-pink-500/60 transition-colors shadow-inner">
                  <img
                    src={avatarSrc}
                    onError={handleAvatarError}
                    alt="Gungun Gupta - Software Engineer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/[0.03] to-transparent pointer-events-none" />

                  {/* Corner Code Tag Top Left */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-dark-950/90 border border-pink-500/40 text-[11px] font-mono text-pink-300 backdrop-blur-md shadow-lg">
                    <code>&lt;FullStack /&gt;</code>
                  </div>

                  {/* Corner Lightbox View Trigger Top Right */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-dark-950/80 border border-white/10 hover:border-pink-500/50 text-gray-400 hover:text-white backdrop-blur-md transition-colors"
                    title="View Full High-Resolution Portrait"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Corner Tag Bottom Right */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-dark-950/90 border border-pink-500/40 text-[11px] font-mono text-rose-300 backdrop-blur-md shadow-lg flex items-center space-x-1.5">
                    <Cpu className="w-3.5 h-3.5 text-neon-pink" />
                    <span>Applied AI</span>
                  </div>

                  {/* Online Badge Bottom Left */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-dark-950/90 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 backdrop-blur-md flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Floating Code Snippet Card below image */}
                <div className="mt-3.5 p-3 rounded-xl bg-dark-900/95 border border-white/10 font-mono text-xs text-gray-300">
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

      {/* High-Resolution Portrait Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-lg w-full rounded-2xl bg-[#0c0a13] border border-pink-500/40 p-4 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-xs text-gray-300">
                <span>Gungun Gupta • High-Resolution Portrait</span>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-black border border-white/10 aspect-square">
                <img
                  src={avatarSrc}
                  alt="Gungun Gupta Portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>Mode: {avatarMode === 'cyber' ? 'Cyber Glow Edition' : 'Studio Natural'}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => switchMode('cyber')}
                    className={`px-2.5 py-1 rounded text-[11px] ${
                      avatarMode === 'cyber' ? 'bg-pink-600 text-white font-medium' : 'bg-dark-800 text-gray-400'
                    }`}
                  >
                    Cyber
                  </button>
                  <button
                    onClick={() => switchMode('studio')}
                    className={`px-2.5 py-1 rounded text-[11px] ${
                      avatarMode === 'studio' ? 'bg-pink-600 text-white font-medium' : 'bg-dark-800 text-gray-400'
                    }`}
                  >
                    Studio
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
