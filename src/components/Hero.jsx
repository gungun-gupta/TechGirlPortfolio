import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Share2, 
  Maximize2,
  X
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  // Avatar mode: 'illustrated' (default), 'cyber' (cyber suit), 'photo' (custom real photo), 'studio' (original raw photo)
  const [avatarMode, setAvatarMode] = useState('illustrated');
  const [avatarSrc, setAvatarSrc] = useState('/avatar-illustrated.png');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const switchMode = (mode) => {
    setAvatarMode(mode);
    if (mode === 'illustrated') {
      setAvatarSrc('/avatar-illustrated.png');
    } else if (mode === 'cyber') {
      setAvatarSrc('/avatar-art.png');
    } else if (mode === 'photo') {
      setAvatarSrc('/avatar-real.png');
    } else if (mode === 'studio') {
      setAvatarSrc('/avatar-original.png');
    }
  };

  const handleAvatarError = () => {
    if (avatarSrc !== '/avatar-real.png' && avatarSrc !== '/avatar-original.png') {
      setAvatarSrc('/avatar-real.png');
    } else {
      setAvatarSrc('/avatar.svg');
    }
  };

  return (
    <section id="about" className="relative min-h-[88vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Clean & Impactful Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
          >
            {/* Main Headline */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono font-medium tracking-widest text-pink-400 uppercase">
                <span className="w-6 h-[1.5px] bg-pink-500 inline-block" />
                <span>{personalInfo.role}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans leading-[1.05]">
                <span className="block text-white">GUNGUN</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-pink-500">
                  GUPTA
                </span>
              </h1>
            </div>

            {/* Streamlined, Impactful Intro */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-xl">
              I build high-performance web experiences, optimize them for search visibility, and explore AI to create smarter digital solutions.
            </p>

            {/* Call to Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-md shadow-pink-900/20 active:scale-98 transition-all"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 bg-white/[0.02] border border-white/10 hover:border-pink-500/30 hover:text-white transition-all"
              >
                <span>View Projects</span>
              </a>

              {/* Social Icon Buttons */}
              <div className="flex items-center space-x-1.5 pl-1">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/30 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/30 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/30 transition-all"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linktree}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/30 transition-all"
                  aria-label="Linktree Profile"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Clean, Subtle Key Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/[0.08]">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-2.5 rounded-lg bg-[#08080c] border border-white/[0.06]"
                >
                  <div className="text-lg sm:text-xl font-bold font-mono text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Clean & Professional Avatar Container */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            {/* Clean Outer Frame with High Black Contrast */}
            <div className="w-full max-w-[370px]">
              
              {/* Main Card Container */}
              <div className="rounded-2xl bg-[#07070a] border border-white/10 hover:border-pink-500/30 transition-colors p-4 shadow-xl">
                
                {/* Header Bar with Style Switcher */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px] font-mono">
                  <span className="text-gray-400 font-medium">// GUNGUN</span>

                  {/* Switcher Pill */}
                  <div className="flex items-center rounded-lg bg-black/60 border border-white/10 p-0.5 text-[10px]">
                    <button
                      type="button"
                      onClick={() => switchMode('illustrated')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        avatarMode === 'illustrated'
                          ? 'bg-pink-600 text-white font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      title="Illustrated Developer Avatar"
                    >
                      Avatar
                    </button>
                    <button
                      type="button"
                      onClick={() => switchMode('cyber')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        avatarMode === 'cyber'
                          ? 'bg-pink-600 text-white font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      title="Cyber Suit Avatar"
                    >
                      Cyber
                    </button>
                    <button
                      type="button"
                      onClick={() => switchMode('photo')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        avatarMode === 'photo'
                          ? 'bg-pink-600 text-white font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      title="Original Photo"
                    >
                      Photo
                    </button>
                  </div>
                </div>

                {/* Inner Image Frame */}
                <div className="relative mt-3 aspect-square rounded-xl overflow-hidden bg-black border border-white/[0.08]">
                  <img
                    src={avatarSrc}
                    onError={handleAvatarError}
                    alt="Gungun Gupta - Software Engineer"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  
                  {/* Subtle Lightbox Trigger Top Right */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-black/60 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white backdrop-blur-sm transition-colors"
                    title="View High-Resolution Portrait"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Clean Corner Tech Badges */}
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 border border-white/10 text-[10px] font-mono text-gray-300 backdrop-blur-sm">
                    <code>&lt;FullStack /&gt;</code>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 border border-white/10 text-[10px] font-mono text-pink-300 backdrop-blur-sm flex items-center space-x-1">
                    <Cpu className="w-3 h-3 text-pink-400" />
                    <span>Applied AI</span>
                  </div>
                </div>

                {/* Compact Code Snippet */}
                <div className="mt-3 p-2.5 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-[11px] text-gray-300">
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/[0.04] text-[10px] text-gray-500">
                    <span>developer.ts</span>
                    <span className="text-emerald-400">active</span>
                  </div>
                  <p className="text-pink-400">
                    const <span className="text-white">engineer</span> = &#123;
                  </p>
                  <p className="pl-3 text-gray-400">
                    name: <span className="text-emerald-300">'Gungun Gupta'</span>,
                  </p>
                  <p className="pl-3 text-gray-400">
                    focus: [<span className="text-pink-300">'React'</span>, <span className="text-pink-300">'FastAPI'</span>, <span className="text-rose-300">'AI'</span>]
                  </p>
                  <p className="text-pink-400">&#125;;</p>
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
              className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-md w-full rounded-2xl bg-[#09090d] border border-white/10 p-4 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 font-mono text-xs text-gray-300">
                <span>Portrait Preview</span>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white"
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
                <span>Mode: {avatarMode}</span>
                <div className="flex space-x-1.5">
                  <button
                    onClick={() => switchMode('illustrated')}
                    className={`px-2 py-0.5 rounded text-[11px] ${
                      avatarMode === 'illustrated' ? 'bg-pink-600 text-white font-medium' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Avatar
                  </button>
                  <button
                    onClick={() => switchMode('cyber')}
                    className={`px-2 py-0.5 rounded text-[11px] ${
                      avatarMode === 'cyber' ? 'bg-pink-600 text-white font-medium' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Cyber
                  </button>
                  <button
                    onClick={() => switchMode('photo')}
                    className={`px-2 py-0.5 rounded text-[11px] ${
                      avatarMode === 'photo' ? 'bg-pink-600 text-white font-medium' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    Photo
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
