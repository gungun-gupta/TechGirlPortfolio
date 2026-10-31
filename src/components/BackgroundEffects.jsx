import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* High-contrast pitch dark background baseline */}
      <div className="absolute inset-0 bg-[#040406]" />

      {/* Subtle, soft grid lines */}
      <div className="absolute inset-0 cyber-grid-bg opacity-35" />

      {/* Top gentle ambient glow: Soft Rose/Pink */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[180px] opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #FF2A85 0%, #FF1744 50%, transparent 80%)',
        }}
      />

      {/* Subtle right accent glow */}
      <div 
        className="absolute top-[35%] right-[-10%] w-[450px] h-[450px] rounded-full blur-[180px] opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #FF1744 0%, #FF2A85 50%, transparent 80%)',
        }}
      />

      {/* Soft footer glow */}
      <div 
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[180px] opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #FF2A85 0%, transparent 75%)',
        }}
      />
    </div>
  );
}
