import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Share2, 
  MessageSquare, 
  Sparkles,
  ExternalLink,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF2A85', '#FF1744', '#FFFFFF'],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FF2A85', '#FF1744', '#38BDF8'],
      });
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-neon-pink text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-500 to-red-500">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl text-sm sm:text-base">
            Open to software engineering roles, full-stack development opportunities, and high-impact technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card with 1-Click Copy */}
              <div className="group relative p-5 rounded-2xl bg-[#0b0912] border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,42,133,0.25)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-neon-pink">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400">Direct Email</div>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-white font-medium text-sm sm:text-base hover:text-pink-300 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-800 hover:bg-pink-500/20 text-gray-400 hover:text-neon-pink border border-white/10 hover:border-pink-500/30 transition-all"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card with 1-Click Copy */}
              <div className="group relative p-5 rounded-2xl bg-[#0b0912] border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,42,133,0.25)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-neon-crimson">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400">Phone / WhatsApp</div>
                      <a 
                        href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-white font-medium text-sm sm:text-base hover:text-rose-300 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-dark-800 hover:bg-rose-500/20 text-gray-400 hover:text-neon-crimson border border-white/10 hover:border-rose-500/30 transition-all"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#0b0912] border border-white/10">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">Location Base</div>
                    <div className="text-white font-medium text-sm sm:text-base">
                      {personalInfo.location} (Open to Relocation & Remote)
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Grid */}
            <div className="pt-2">
              <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">
                External Developer Networks
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-dark-850 border border-white/10 hover:border-pink-500/50 hover:bg-dark-800 text-gray-300 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(255,42,133,0.3)] text-xs font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-dark-850 border border-white/10 hover:border-pink-500/50 hover:bg-dark-800 text-gray-300 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(255,42,133,0.3)] text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.linktree}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-dark-850 border border-white/10 hover:border-pink-500/50 hover:bg-dark-800 text-gray-300 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(255,42,133,0.3)] text-xs font-medium"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Linktree</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl bg-[#09080e] border border-pink-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {/* Form Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5 font-mono text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-gray-300 ml-2">transmit_message.sh</span>
                </div>
                <span className="text-neon-pink">SSL ENCRYPTED</span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Transmission Received</h4>
                  <p className="text-gray-400 max-w-md text-sm">
                    Thank you! Your dispatch has been logged. Gungun will review your message and reply via email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        YOUR NAME / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Mercer (Google / Stripe)"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all font-sans text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        RETURN EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all font-sans text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        MESSAGE & INQUIRY
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Describe your role opportunity, project scope, or technical query..."
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all font-sans text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-4 flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 shadow-lg shadow-pink-600/30 hover:brightness-110 active:scale-98 transition-all disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Dispatch Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
