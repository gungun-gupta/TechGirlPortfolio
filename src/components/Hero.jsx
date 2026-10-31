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
      {/* Normalized SVG Clip-Path for Broader, Balanced Rounded Hexagon Badge */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hexagon-badge-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.44 0.046 Q 0.50 0.014, 0.56 0.046 L 0.895 0.197 Q 0.94 0.22, 0.94 0.27 L 0.94 0.73 Q 0.94 0.78, 0.895 0.803 L 0.56 0.954 Q 0.50 0.986, 0.44 0.954 L 0.105 0.803 Q 0.06 0.78, 0.06 0.73 L 0.06 0.27 Q 0.06 0.22, 0.105 0.197 Z" />
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
            {/* Hexagon Frame Container: Increased in width and reduced in height */}
            <div className="relative w-full max-w-[360px] sm:max-w-[385px] aspect-[360/345] flex items-center justify-center">
              
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
                  
                  {/* FRONT FACE: Illustrated Avatar (Zoomed out with generous headroom & breathing space) */}
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                      clipPath: 'url(#hexagon-badge-clip)',
                    }}
                  >
                    <div className="relative w-full h-full bg-[#07070a] flex items-center justify-center overflow-hidden">
                      <img
                        src="/avatar-illustrated.png"
                        onError={(e) => { e.currentTarget.src = '/avatar.png'; }}
                        alt="Gungun Gupta - 3D Illustrated Avatar"
                        className="w-full h-full object-cover object-center scale-[0.84] transform group-hover:scale-[0.87] transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* BACK FACE: Real Photograph (Zoomed out with generous headroom & breathing space) */}
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      clipPath: 'url(#hexagon-badge-clip)',
                    }}
                  >
                    <div className="relative w-full h-full bg-[#07070a] flex items-center justify-center overflow-hidden">
                      <img
                        src="/avatar-real.png"
                        onError={(e) => { e.currentTarget.src = '/avatar-original.png'; }}
                        alt="Gungun Gupta - Real Photograph"
                        className="w-full h-full object-cover object-center scale-[0.84] transform group-hover:scale-[0.87] transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  </div>

                </div>

                {/* PERSISTENT DUAL-LAYERED GEOMETRIC HEXAGONAL FRAME OVERLAY */}
                {/* Broader border outline with distinct decorative bracket notches */}
                <svg 
                  viewBox="0 0 360 345" 
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

                  {/* LAYER 1 (Inner): Continuous 1.5px subtle dark border hugging the hexagon */}
                  <path 
                    d="M 158 16 Q 180 5, 202 16 L 322 69 Q 338 77, 338 95 L 338 250 Q 338 268, 322 276 L 202 329 Q 180 340, 158 329 L 38 276 Q 22 268, 22 250 L 22 95 Q 22 77, 38 69 Z"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="1.5"
                  />

                  {/* LAYER 2 (Outer Accent): Broader 3.5px Futuristic Neon Stroke with Decorative Notch Cuts */}
                  {/* Top Bracket Outline (from y=145 up, around top apex, down to y=145) */}
                  <path 
                    d="M 22 145 L 22 95 Q 22 77, 38 69 L 158 16 Q 180 5, 202 16 L 322 69 Q 338 77, 338 95 L 338 145"
                    stroke="url(#neonAccentGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(255,42,133,0.45)]"
                  />

                  {/* Bottom Bracket Outline (from y=200 down, around bottom apex, up to y=200) */}
                  <path 
                    d="M 338 200 L 338 250 Q 338 268, 322 276 L 202 329 Q 180 340, 158 329 L 38 276 Q 22 268, 22 250 L 22 200"
                    stroke="url(#neonAccentGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(255,42,133,0.45)]"
                  />

                  {/* Left Edge Decorative Notch Gap Accents (Broader & Sharper) */}
                  <line x1="15" y1="172" x2="29" y2="172" stroke="#FF2A85" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="22" cy="158" r="2.5" fill="#FF2A85" />
                  <circle cx="22" cy="186" r="2.5" fill="#FF2A85" />

                  {/* Right Edge Decorative Notch Gap Accents (Broader & Sharper) */}
                  <line x1="331" y1="172" x2="345" y2="172" stroke="#FF1744" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="338" cy="158" r="2.5" fill="#FF1744" />
                  <circle cx="338" cy="186" r="2.5" fill="#FF1744" />

                  {/* Apex High-Tech Tick Marks */}
                  <line x1="172" y1="5" x2="188" y2="5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  <line x1="172" y1="340" x2="188" y2="340" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
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
