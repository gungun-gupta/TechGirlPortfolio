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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#040406]/90 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#about"
            className="group flex items-center space-x-2 text-white font-mono font-semibold text-base tracking-tight focus:outline-none"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0c0c10] border border-white/10 group-hover:border-pink-500/40 transition-colors">
              <Terminal className="w-4 h-4 text-pink-400" />
            </div>
            <div className="flex items-center">
              <span className="text-white">gungun</span>
              <span className="ml-1 inline-block w-1.5 h-3.5 bg-pink-500/80 animate-pulse" />
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#09090d]/80 px-2 py-1 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-white/10 border border-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Clean Resume Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-gray-200 bg-white/[0.03] border border-white/10 hover:border-pink-500/40 hover:text-white hover:bg-white/[0.06] transition-all active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5 text-pink-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400 text-xs font-mono"
              aria-label="View Resume"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#060608]/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white'
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
              className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-pink-600 to-rose-600 text-white"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>View Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
