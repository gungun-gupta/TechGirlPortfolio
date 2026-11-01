import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  Linkedin, 
  MessageCircle, 
  Twitter, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

export default function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://gungungupta.vercel.app';
  const shareTitle = 'Gungun Gupta | Software Engineer';
  const shareText = "Check out Gungun Gupta's Software Engineer Portfolio - high-performance web applications & modern architectures:";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        onClose();
      } catch (err) {
        // User cancelled or share failed silently
      }
    }
  };

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      color: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10',
      href: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 max-w-md w-full rounded-2xl bg-[#09090d] border border-pink-500/30 p-5 shadow-2xl shadow-pink-950/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400">
                  <Share2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white font-sans">Share Portfolio</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick URL Copy Box */}
            <div className="mb-4">
              <label className="block text-[11px] font-mono text-gray-400 mb-1.5">
                PORTFOLIO LINK
              </label>
              <div className="flex items-center space-x-2 p-2 rounded-xl bg-[#050508] border border-white/10">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="bg-transparent flex-1 text-xs text-gray-300 font-mono focus:outline-none px-1 selection:bg-pink-500/30"
                />
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-semibold hover:brightness-110 active:scale-95 transition-all shrink-0 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Sharing Grid */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-gray-400">
                SHARE DIRECTLY VIA
              </div>
              <div className="grid grid-cols-2 gap-2">
                {shareOptions.map((opt) => (
                  <a
                    key={opt.name}
                    href={opt.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center space-x-2.5 p-3 rounded-xl bg-[#0e0e14] border border-white/[0.08] text-gray-300 text-xs font-medium transition-all ${opt.color}`}
                  >
                    <opt.icon className="w-4 h-4" />
                    <span>{opt.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Native Device Share (if available) */}
            {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
              <div className="mt-3 pt-3 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center space-x-2 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open System Share Menu</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

