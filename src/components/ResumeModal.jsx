import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF2A85', '#FF1744', '#FFFFFF', '#F43F5E'],
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0c0a12] border border-pink-500/30 rounded-2xl shadow-2xl shadow-pink-500/20 overflow-hidden z-10"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-pink-500/20 bg-dark-900/80">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-neon-pink">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white tracking-wide text-sm sm:text-base">
                  Gungun_Gupta_Resume.pdf
                </h3>
                <p className="text-xs text-gray-400 font-mono">B.Tech CSE • Software Engineer</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="/my-resume.pdf"
                download="Gungun_Gupta_Resume.pdf"
                onClick={handleDownload}
                className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30 hover:brightness-110 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>

              <a
                href="/my-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 w-full bg-[#14121a] min-h-[480px] p-2 overflow-hidden">
            <iframe
              src="/my-resume.pdf#toolbar=0"
              className="w-full h-full min-h-[480px] md:min-h-[580px] rounded-lg border border-white/5"
              title="Gungun Gupta Resume Preview"
            />
          </div>

          {/* Bottom Bar Info */}
          <div className="px-6 py-3 border-t border-pink-500/20 bg-dark-900/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 font-mono">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Resume • Updated 2026</span>
            </div>
            <span>contact: gungungpta99@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
