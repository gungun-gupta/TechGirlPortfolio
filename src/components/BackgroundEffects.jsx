import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Pitch dark background baseline */}
      <div className="absolute inset-0 bg-[#070709]" />

      {/* Cyber grid lines */}
      <div className="absolute inset-0 cyber-grid-bg opacity-70" />

      {/* Top primary glow orb: Neon Pink */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #FF2A85 0%, rgba(255, 23, 68, 0.4) 50%, transparent 80%)',
        }}
      />

      {/* Hero Right accent glow: Crimson Red */}
      <div 
        className="absolute top-[25%] right-[-10%] w-[550px] h-[550px] rounded-full blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #FF1744 0%, #FF2A85 40%, transparent 75%)',
        }}
      />

      {/* Middle section glow: Deep violet / pink */}
      <div 
        className="absolute top-[55%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #FF2A85 0%, #8B5CF6 50%, transparent 80%)',
        }}
      />

      {/* Subtle bottom footer glow */}
      <div 
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #FF1744 0%, #FF2A85 45%, transparent 75%)',
        }}
      />

      {/* Subtle vignette darkening towards edges */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070709]/40 to-[#070709]/95 pointer-events-none" />
    </div>
  );
}
