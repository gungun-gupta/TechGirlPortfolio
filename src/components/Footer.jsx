import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 border-t border-white/[0.06] bg-[#020204] text-gray-400 font-mono text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand & Copyright */}
          <div className="flex items-center space-x-2.5 text-center sm:text-left">
            <span className="text-pink-400 font-bold">&lt;/&gt;</span>
            <span className="text-white font-medium">gungun</span>
            <span className="text-gray-600">|</span>
            <p className="text-gray-400 text-[11px]">
              Designed & Built by <span className="text-gray-200">Gungun Gupta</span> • 2026
            </p>
          </div>

          {/* System status pill */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] text-[11px] text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Systems Nominal • SPA Vercel Optimized</span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-gray-400 hover:text-white transition-colors text-xs"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-pink-400" />
          </button>

        </div>
      </div>
    </footer>
  );
}
