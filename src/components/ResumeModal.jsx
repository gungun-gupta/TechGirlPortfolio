import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF2A85', '#FFFFFF'],
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
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#07070a] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-10"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#0a0a0f]">
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-white tracking-wide text-xs sm:text-sm">
                  Gungun_Gupta_Resume.pdf
                </h3>
                <p className="text-[10px] text-gray-400 font-mono">Software Engineer • Verified PDF</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="/my-resume.pdf"
                download="Gungun_Gupta_Resume.pdf"
                onClick={handleDownload}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white shadow-[0_0_15px_rgba(255,42,133,0.35)] hover:shadow-[0_0_22px_rgba(255,42,133,0.6)] hover:brightness-110 active:scale-95 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>

              <a
                href="/my-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 w-full bg-[#030305] min-h-[460px] p-2 overflow-hidden">
            <iframe
              src="/my-resume.pdf#toolbar=0"
              className="w-full h-full min-h-[460px] md:min-h-[560px] rounded-lg border border-white/[0.04]"
              title="Gungun Gupta Resume Preview"
            />
          </div>

          {/* Bottom Bar Info */}
          <div className="px-5 py-2.5 border-t border-white/[0.06] bg-[#09090d] flex items-center justify-between text-[11px] text-gray-400 font-mono">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified 2026</span>
            </div>
            <span>gungungpta99@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
