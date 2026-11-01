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
  Repeat 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onOpenShare }) {
  // Flip state: false = Front (Illustrated Avatar), true = Back (Real Photograph)
  const [isFlipped, setIsFlipped] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <section id="about" className="relative min-h-[88vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Normalized SVG Clip-Path for Wide, Length-Preserved Rounded Hexagon Badge */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hexagon-badge-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.43 0.033 Q 0.50 0.012, 0.57 0.033 L 0.90 0.186 Q 0.94 0.21, 0.94 0.256 L 0.94 0.744 Q 0.94 0.79, 0.90 0.814 L 0.57 0.967 Q 0.50 0.988, 0.43 0.967 L 0.10 0.814 Q 0.06 0.79, 0.06 0.744 L 0.06 0.256 Q 0.06 0.21, 0.10 0.186 Z" />
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
              <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono font-bold tracking-wider text-pink-400 uppercase">
                <span className="w-8 h-[2px] bg-gradient-to-r from-neon-pink to-neon-crimson inline-block shadow-[0_0_8px_#FF2A85]" />
                <span className="drop-shadow-[0_0_12px_rgba(255,42,133,0.35)]">{personalInfo.role}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans leading-[1.05]">
                <span className="block text-white">GUNGUN</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FF2A85] via-[#FF1744] to-[#E11D48] drop-shadow-[0_0_30px_rgba(255,42,133,0.55)]">
                  GUPTA
                </span>
              </h1>
            </div>

            {/* Streamlined, Impactful Intro */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-xl">
              I build high-performance web experiences, optimize them for search visibility, and explore AI to create smarter digital solutions.
            </p>

            {/* Call to Actions & Social Links with Glowing Hover Effects */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 hover:from-pink-500 hover:via-rose-500 hover:to-red-500 shadow-[0_0_18px_rgba(255,42,133,0.35)] hover:shadow-[0_0_28px_rgba(255,42,133,0.65)] hover:scale-[1.02] active:scale-98 transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium text-gray-300 bg-white/[0.03] border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_18px_rgba(255,42,133,0.3)] hover:text-white transition-all duration-300"
              >
                <span>View Projects</span>
              </a>

              {/* Social Icon Buttons */}
              <div className="flex items-center space-x-2 pl-1">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(255,42,133,0.35)] transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(255,42,133,0.35)] transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(255,42,133,0.35)] transition-all duration-300"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={onOpenShare}
                  className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(255,42,133,0.35)] transition-all duration-300"
                  aria-label="Share Portfolio"
                  title="Share Portfolio"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Clean, Subtle Key Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/[0.08]">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-[#08080c] border border-white/[0.06] hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(255,42,133,0.15)] transition-all"
                >
                  <div className="text-lg sm:text-xl font-bold font-mono text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
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
            {/* Hexagon Frame Container: Wider Proportions while Preserving Full Vertical Badge Length */}
            <div className="relative w-full max-w-[390px] sm:max-w-[425px] aspect-[400/430] flex items-center justify-center">
              
              {/* Outer Glow matching theme accent */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-35 pointer-events-none transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle, #FF2A85 0%, #FF1744 45%, transparent 70%)',
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
                  
                  {/* FRONT FACE: Illustrated Avatar (Fits wider elongated frame seamlessly) */}
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
                        className="w-full h-full object-cover object-[center_28%] transform group-hover:scale-[1.03] transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* BACK FACE: Real Photograph (Fits wider elongated frame seamlessly) */}
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
                        onError={(e) => { e.currentTarget.src = '/my_image.png'; }}
                        alt="Gungun Gupta - Real Photograph"
                        className="w-full h-full object-cover object-[center_25%] transform group-hover:scale-[1.03] transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  </div>

                </div>

                {/* PERSISTENT DUAL-LAYERED GEOMETRIC HEXAGONAL FRAME OVERLAY */}
                {/* Wider 5.5px outer border outline with prominent high-tech notches */}
                <svg 
                  viewBox="0 0 400 430" 
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

                  {/* LAYER 1 (Inner): Continuous 2px subtle dark border hugging the hexagon */}
                  <path 
                    d="M 172 25 Q 200 14, 228 25 L 360 80 Q 376 92, 376 110 L 376 320 Q 376 338, 360 350 L 228 405 Q 200 416, 172 405 L 40 350 Q 24 338, 24 320 L 24 110 Q 24 92, 40 80 Z"
                    stroke="rgba(255, 255, 255, 0.22)"
                    strokeWidth="2"
                  />

                  {/* LAYER 2 (Outer Accent): Broad 5.5px Futuristic Neon Stroke with Decorative Notch Cuts */}
                  {/* Top Bracket Outline (from y=185 up, around top apex, down to y=185 on right) */}
                  <path 
                    d="M 24 185 L 24 110 Q 24 92, 40 80 L 172 25 Q 200 14, 228 25 L 360 80 Q 376 92, 376 110 L 376 185"
                    stroke="url(#neonAccentGrad)"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_16px_rgba(255,42,133,0.7)] drop-shadow-[0_0_8px_rgba(255,23,68,0.5)]"
                  />

                  {/* Bottom Bracket Outline (from y=245 down, around bottom apex, up to y=245 on left) */}
                  <path 
                    d="M 376 245 L 376 320 Q 376 338, 360 350 L 228 405 Q 200 416, 172 405 L 40 350 Q 24 338, 24 320 L 24 245"
                    stroke="url(#neonAccentGrad)"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_16px_rgba(255,42,133,0.7)] drop-shadow-[0_0_8px_rgba(255,23,68,0.5)]"
                  />

                  {/* Left Edge Decorative Notch Gap Accents */}
                  <line x1="16" y1="215" x2="32" y2="215" stroke="#FF2A85" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="24" cy="198" r="3.5" fill="#FF2A85" />
                  <circle cx="24" cy="232" r="3.5" fill="#FF2A85" />

                  {/* Right Edge Decorative Notch Gap Accents */}
                  <line x1="368" y1="215" x2="384" y2="215" stroke="#FF1744" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="376" cy="198" r="3.5" fill="#FF1744" />
                  <circle cx="376" cy="232" r="3.5" fill="#FF1744" />

                  {/* Apex High-Tech Tick Marks */}
                  <line x1="190" y1="14" x2="210" y2="14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                  <line x1="190" y1="416" x2="210" y2="416" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                </svg>

                {/* Subtle Lightbox Zoom Button on the corner */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(true);
                  }}
                  className="absolute top-4 right-4 z-30 p-1.5 rounded-lg bg-black/60 border border-white/10 hover:border-pink-500/60 hover:shadow-[0_0_12px_rgba(255,42,133,0.5)] text-gray-300 hover:text-white backdrop-blur-md transition-all active:scale-90"
                  title="View Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* SLEEK FLOATING PILL-STYLE 3D FLIP BUTTON WITH GLOW */}
            <div className="mt-4 flex flex-col items-center space-y-1.5">
              <button
                type="button"
                onClick={toggleFlip}
                className="group inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#0a0a0f] border border-pink-500/30 hover:border-pink-500/80 hover:bg-[#121019] text-gray-200 hover:text-white text-xs font-mono transition-all duration-300 shadow-[0_0_15px_rgba(255,42,133,0.25)] hover:shadow-[0_0_25px_rgba(255,42,133,0.55)] active:scale-95"
              >
                <Repeat className="w-3.5 h-3.5 text-pink-400 group-hover:rotate-180 transition-transform duration-500" />
                <span className="font-semibold tracking-wide">
                  {isFlipped ? 'Flip to Avatar' : 'Flip to Photo'}
                </span>
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
              className="relative z-10 max-w-md w-full rounded-2xl bg-[#09090d] border border-pink-500/30 p-4 shadow-2xl shadow-pink-950/30 overflow-hidden"
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
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-gradient-to-r from-pink-600 to-rose-600 text-white text-[11px] shadow-sm"
                >
                  <Repeat className="w-3 h-3" />
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
