import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileDown } from 'lucide-react';
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

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 220;

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
          ? 'bg-[#040406]/92 backdrop-blur-xl border-b border-pink-500/20 py-3 shadow-[0_4px_25px_rgba(255,42,133,0.08)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#about"
            className="group flex items-center space-x-2.5 text-white font-mono font-bold text-base tracking-tight focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#0c0c12] border border-pink-500/30 group-hover:border-pink-500 transition-all group-hover:shadow-[0_0_12px_rgba(255,42,133,0.4)]">
              <Terminal className="w-4 h-4 text-pink-400 group-hover:text-neon-crimson transition-colors" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-neon-crimson animate-pulse" />
            </div>
            <div className="flex items-center">
              <span className="text-white group-hover:text-pink-100 transition-colors">gungun</span>
              <span className="ml-1 inline-block w-1.5 h-3.5 bg-neon-pink animate-pulse" />
            </div>
          </a>

          {/* Center Navigation Links (Theme Pink & Red Movement) */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#08080d]/90 p-1 rounded-full border border-pink-500/20 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-pink-600/30 via-rose-600/30 to-red-600/30 border border-pink-500/50 shadow-[0_0_14px_rgba(255,42,133,0.35)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-[#FF2A85] to-[#FF1744] rounded-full shadow-[0_0_6px_#FF2A85]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: BIGGER, Highly Visible Resume Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center space-x-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 hover:from-pink-500 hover:via-rose-500 hover:to-red-500 shadow-[0_0_18px_rgba(255,42,133,0.35)] hover:shadow-[0_0_28px_rgba(255,42,133,0.65)] hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <FileDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
              <span className="font-mono tracking-tight font-bold">Resume (PDF)</span>
            </button>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-semibold shadow-md shadow-pink-900/30"
              aria-label="View Resume"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-[#0e0e14] border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-pink-500/20 bg-[#060608]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-pink-600/30 to-rose-600/30 border border-pink-500/40 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white shadow-lg shadow-pink-900/40"
            >
              <FileDown className="w-4 h-4" />
              <span>View & Download Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
