import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Fluid spring interpolation for physical cursor inertia
  const springX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.5 });

  useEffect(() => {
    setMounted(true);

    // Disable spotlight tracking on touchscreen devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* High-contrast pitch dark background baseline */}
      <div className="absolute inset-0 bg-[#040406]" />

      {/* Cyber subtle grid overlay with enhanced visibility and soft vignette */}
      <div 
        className="absolute inset-0 cyber-grid-bg opacity-80"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 35%, black 45%, rgba(0,0,0,0.3) 80%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 35%, black 45%, rgba(0,0,0,0.3) 80%, transparent 100%)',
        }}
      />

      {/* Subtle intersection node matrix points */}
      <div 
        className="absolute inset-0 cyber-dots-bg opacity-45"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, black 35%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, black 35%, transparent 90%)',
        }}
      />

      {/* Interactive Mouse-Following Neon Spotlight (Outer Glow Aura - Refined & Compact) */}
      {mounted && (
        <motion.div
          className="pointer-events-none fixed -top-[180px] -left-[180px] w-[360px] h-[360px] rounded-full will-change-transform"
          style={{
            x: springX,
            y: springY,
            background: 'radial-gradient(circle, rgba(255, 42, 133, 0.15) 0%, rgba(255, 23, 68, 0.05) 45%, transparent 75%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
        />
      )}

      {/* Interactive Mouse-Following Neon Spotlight (Inner Focal Point - Focused) */}
      {mounted && (
        <motion.div
          className="pointer-events-none fixed -top-[80px] -left-[80px] w-[160px] h-[160px] rounded-full blur-[22px] will-change-transform"
          style={{
            x: springX,
            y: springY,
            background: 'radial-gradient(circle, rgba(255, 42, 133, 0.22) 0%, rgba(255, 23, 68, 0.07) 55%, transparent 80%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
        />
      )}

      {/* Top radiant ambient glow: Vibrant Neon Pink */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[160px] opacity-[0.16]"
        style={{
          background: 'radial-gradient(circle, #FF2A85 0%, #FF1744 55%, transparent 75%)',
        }}
      />

      {/* Mid-right ambient accent glow: Crimson Rose */}
      <div 
        className="absolute top-[30%] right-[-5%] w-[550px] h-[550px] rounded-full blur-[170px] opacity-[0.14]"
        style={{
          background: 'radial-gradient(circle, #FF1744 0%, #FF2A85 50%, transparent 75%)',
        }}
      />

      {/* Mid-left ambient accent glow */}
      <div 
        className="absolute top-[60%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, #FF2A85 0%, #E11D48 50%, transparent 75%)',
        }}
      />

      {/* Soft footer glow */}
      <div 
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-[160px] opacity-[0.15]"
        style={{
          background: 'radial-gradient(circle, #FF1744 0%, #FF2A85 50%, transparent 75%)',
        }}
      />
    </div>
  );
}
