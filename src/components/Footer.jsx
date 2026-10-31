import React from 'react';
import { ArrowUp, Terminal, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/10 bg-[#050507] text-gray-400 font-mono text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <span className="text-neon-pink">&lt;/&gt;</span>
              <span>gungun.dev</span>
            </div>
            <span className="hidden sm:inline text-gray-600">|</span>
            <p className="text-gray-400">
              Designed & Built by <span className="text-white font-medium">Gungun Gupta</span> • 2026
            </p>
          </div>

          {/* System status pill */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-dark-850 border border-white/5 text-[11px] text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Nominal • SPA Vercel Optimized</span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-pink-500/15 border border-white/10 hover:border-pink-500/40 text-gray-300 hover:text-white transition-all text-xs"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-neon-pink" />
          </button>

        </div>
      </div>
    </footer>
  );
}
