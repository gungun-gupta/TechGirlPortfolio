import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* High-contrast pitch dark background baseline */}
      <div className="absolute inset-0 bg-[#040406]" />

      {/* Cyber subtle grid overlay */}
      <div className="absolute inset-0 cyber-grid-bg opacity-45" />

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
