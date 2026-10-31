import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/85 backdrop-blur-xl border-b border-pink-500/20 py-3 shadow-lg shadow-pink-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#about"
            className="group flex items-center space-x-2.5 text-white font-mono font-bold text-lg tracking-tight focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-dark-800 border border-pink-500/30 group-hover:border-pink-500 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,42,133,0.5)]">
              <Terminal className="w-5 h-5 text-neon-pink group-hover:text-neon-crimson transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-neon-crimson animate-ping" />
            </div>
            <div className="flex items-center">
              <span className="text-white group-hover:text-pink-100 transition-colors">gungun</span>
              <span className="text-neon-pink group-hover:text-neon-crimson transition-colors">.dev</span>
              <span className="ml-1 inline-block w-1.5 h-4 bg-neon-pink/80 animate-pulse" />
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-dark-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-pink-500/15 border border-pink-500/40 shadow-[0_0_12px_rgba(255,42,133,0.3)]'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-neon-pink to-neon-crimson rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: High-Contrast Resume Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-dark-850 border border-pink-500/40 hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,133,0.45)] hover:scale-[1.02] active:scale-95"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileDown className="w-4 h-4 text-neon-pink group-hover:text-white transition-colors" />
              <span className="relative z-10 font-mono tracking-tight">Resume (PDF)</span>
              <Sparkles className="w-3.5 h-3.5 text-pink-400 opacity-60 group-hover:opacity-100 animate-pulse" />
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-neon-pink text-xs font-mono"
              aria-label="View Resume"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-800 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-pink-500/20 bg-[#070709]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-pink-500/20 border border-pink-500/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30"
            >
              <FileDown className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
