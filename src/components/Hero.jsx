import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Share2, 
  Maximize2,
  X,
  Repeat,
  Sparkles,
  Camera
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  // Flip state: false = Front (Illustrated Avatar), true = Back (Real Photograph)
  const [isFlipped, setIsFlipped] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <section id="about" className="relative min-h-[88vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Normalized SVG Clip-Path for Elongated Rounded Hexagon Badge */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hexagon-badge-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.44 0.035 Q 0.50 0.012, 0.56 0.035 L 0.91 0.215 Q 0.96 0.24, 0.96 0.285 L 0.96 0.715 Q 0.96 0.76, 0.91 0.785 L 0.56 0.965 Q 0.50 0.988, 0.44 0.965 L 0.09 0.785 Q 0.04 0.76, 0.04 0.715 L 0.04 0.285 Q 0.04 0.24, 0.09 0.215 Z" />
          </clipPath>
        </defs>
      </svg>

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

          {/* Right Column: Custom Geometric Elongated Hexagon Avatar Frame & 3D Flip Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            {/* Hexagon Frame Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[320/380] flex items-center justify-center">
              
              {/* Outer Glow matching accent */}
              <div 
                className="absolute inset-0 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle, #FF2A85 0%, #FF1744 40%, transparent 75%)',
                }}
              />

              {/* 3D Flip Card Perspective Viewport */}
              <div 
                onClick={toggleFlip}
                className="relative w-full h-full cursor-pointer group"
                style={{ perspective: '1200px' }}
                title="Click to flip between 3D Avatar and Real Photo"
              >
                {/* 3D Flipper Core */}
                <div 
                  className="w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  
                  {/* FRONT FACE: Illustrated Avatar */}
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                      clipPath: 'url(#hexagon-badge-clip)',
                    }}
                  >
                    <div className="relative w-full h-full bg-[#0a0812]">
                      <img
                        src="/avatar-illustrated.png"
                        onError={(e) => { e.currentTarget.src = '/avatar.png'; }}
                        alt="Gungun Gupta - 3D Illustrated Avatar"
                        className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-500"
                        loading="eager"
                      />
                      
                      {/* Subtle front corner tag */}
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-pink-300 backdrop-blur-md">
                        <span>AVATAR // 01</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE: Real Photograph */}
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      clipPath: 'url(#hexagon-badge-clip)',
                    }}
                  >
                    <div className="relative w-full h-full bg-[#08080c]">
                      <img
                        src="/avatar-real.png"
                        onError={(e) => { e.currentTarget.src = '/avatar-original.png'; }}
                        alt="Gungun Gupta - Real Photograph"
                        className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-500"
                        loading="eager"
                      />

                      {/* Subtle back corner tag */}
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-emerald-300 backdrop-blur-md">
                        <span>REAL PHOTO // 02</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* PERSISTENT DUAL-LAYERED GEOMETRIC HEXAGONAL FRAME OVERLAY */}
                {/* Stays completely intact, sharp and visible during and after the 3D flip! */}
                <svg 
                  viewBox="0 0 320 380" 
                  className="absolute inset-0 w-full h-full pointer-events-none z-20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="neonAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF2A85" />
                      <stop offset="50%" stopColor="#FF1744" />
                      <stop offset="100%" stopColor="#E11D48" />
                    </linearGradient>
                  </defs>

                  {/* LAYER 1 (Inner): Continuous 1px subtle dark border hugging the hexagon */}
                  <path 
                    d="M 141 13 Q 160 5, 179 13 L 291 82 Q 307 91, 307 108 L 307 272 Q 307 289, 291 298 L 179 367 Q 160 375, 141 367 L 29 298 Q 13 289, 13 272 L 13 108 Q 13 91, 29 82 Z"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1.2"
                  />

                  {/* LAYER 2 (Outer Accent): Futuristic Neon Stroke with Decorative Left & Right Notch Gaps */}
                  {/* Top Bracket Outline (covers top apex, shoulders, stops at y=168) */}
                  <path 
                    d="M 13 165 L 13 108 Q 13 91, 29 82 L 141 13 Q 160 5, 179 13 L 291 82 Q 307 91, 307 108 L 307 165"
                    stroke="url(#neonAccentGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(255,42,133,0.4)]"
                  />

                  {/* Bottom Bracket Outline (starts at y=215, covers bottom hips and bottom apex) */}
                  <path 
                    d="M 307 215 L 307 272 Q 307 289, 291 298 L 179 367 Q 160 375, 141 367 L 29 298 Q 13 289, 13 272 L 13 215"
                    stroke="url(#neonAccentGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(255,42,133,0.4)]"
                  />

                  {/* Left Edge Decorative Notch Gap Accents */}
                  <line x1="8" y1="190" x2="18" y2="190" stroke="#FF2A85" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="13" cy="178" r="1.5" fill="#FF2A85" />
                  <circle cx="13" cy="202" r="1.5" fill="#FF2A85" />

                  {/* Right Edge Decorative Notch Gap Accents */}
                  <line x1="302" y1="190" x2="312" y2="190" stroke="#FF1744" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="307" cy="178" r="1.5" fill="#FF1744" />
                  <circle cx="307" cy="202" r="1.5" fill="#FF1744" />

                  {/* Corner Tech Marks */}
                  <path d="M 155 4 L 165 4" stroke="#FFF" strokeWidth="1.5" opacity="0.4" />
                  <path d="M 155 376 L 165 376" stroke="#FFF" strokeWidth="1.5" opacity="0.4" />
                </svg>

                {/* Subtle Lightbox Zoom Button on the corner */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(true);
                  }}
                  className="absolute top-4 right-4 z-30 p-1.5 rounded-lg bg-black/60 border border-white/10 hover:border-pink-500/40 text-gray-300 hover:text-white backdrop-blur-md transition-all active:scale-90"
                  title="View Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* SLEEK FLOATING PILL-STYLE 3D FLIP BUTTON */}
            <div className="mt-4 flex flex-col items-center space-y-1.5">
              <button
                type="button"
                onClick={toggleFlip}
                className="group inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#0a0a0f] border border-white/15 hover:border-pink-500/50 hover:bg-[#121019] text-gray-200 hover:text-white text-xs font-mono transition-all duration-300 shadow-lg shadow-black/60 hover:shadow-pink-950/30 active:scale-95"
              >
                <Repeat className="w-3.5 h-3.5 text-pink-400 group-hover:rotate-180 transition-transform duration-500" />
                <span className="font-medium tracking-wide">
                  {isFlipped ? 'Flip to Avatar' : 'Flip to Photo'}
                </span>
                {isFlipped ? (
                  <Sparkles className="w-3 h-3 text-pink-400" />
                ) : (
                  <Camera className="w-3 h-3 text-emerald-400" />
                )}
              </button>

              <span className="text-[10px] font-mono text-gray-500">
                Click card or button to flip 3D
              </span>
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
                <span>{isFlipped ? 'Real Photograph' : '3D Illustrated Avatar'}</span>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-black border border-white/10 aspect-square">
                <img
                  src={isFlipped ? '/avatar-real.png' : '/avatar-illustrated.png'}
                  alt="Gungun Gupta Portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>View: {isFlipped ? 'Photograph' : 'Illustrated Avatar'}</span>
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-white text-[11px]"
                >
                  <Repeat className="w-3 h-3 text-pink-400" />
                  <span>Toggle</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
