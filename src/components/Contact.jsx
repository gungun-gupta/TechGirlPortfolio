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
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenShare }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#FF2A85', '#FFFFFF'],
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/manbzgqv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`
        })
      });

      if (response.ok) {
        setSubmitting(false);
        setSubmitted(true);
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#FF2A85', '#E11D48', '#FFFFFF'],
        });
        setTimeout(() => {
          setSubmitted(false);
          setFormState({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitting(false);
        setErrorMessage(data?.errors?.[0]?.message || 'Failed to transmit message. Please email directly or try again.');
      }
    } catch (err) {
      setSubmitting(false);
      setErrorMessage('Network error. Please email directly or try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-pink-400 text-xs font-mono mb-2.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF2A85] via-[#FF1744] to-[#E11D48] drop-shadow-[0_0_25px_rgba(255,42,133,0.55)]">Touch</span>
          </h2>
          <p className="mt-2 text-gray-400 max-w-lg text-sm sm:text-base">
            Open to software engineering roles, full-stack development opportunities, and high-impact technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              
              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-[#08080c] border border-white/[0.08] hover:border-pink-500/30 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-gray-400">Direct Email</div>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-white font-medium text-sm hover:text-pink-300 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/10 transition-all"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#08080c] border border-white/[0.08] hover:border-pink-500/30 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-gray-400">Phone / WhatsApp</div>
                      <a 
                        href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-white font-medium text-sm hover:text-pink-300 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/10 transition-all"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#08080c] border border-white/[0.08]">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-gray-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">Location Base</div>
                    <div className="text-white font-medium text-xs sm:text-sm">
                      {personalInfo.location} (Open to Relocation & Remote)
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Grid */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-gray-400 mb-2 uppercase tracking-wider">
                External Developer Networks
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-[#08080c] border border-white/[0.08] hover:border-pink-500/30 text-gray-300 hover:text-white transition-all text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-[#08080c] border border-white/[0.08] hover:border-pink-500/30 text-gray-300 hover:text-white transition-all text-xs"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenShare}
                  className="flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-[#08080c] border border-white/[0.08] hover:border-pink-500/30 text-gray-300 hover:text-white transition-all text-xs"
                  title="Share Portfolio"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-xl bg-[#08080c] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between shadow-lg">
              
              {/* Form Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] font-mono text-xs text-gray-400">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  <span className="text-gray-300 ml-1.5 text-[11px]">message.sh</span>
                </div>
                <span className="text-pink-400 text-[10px]">DIRECT CHANNEL</span>
              </div>

              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Transmission Sent</h4>
                  <p className="text-gray-400 max-w-sm text-xs">
                    Thank you! Your dispatch has been logged. Gungun will review your message and reply via email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}
                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        YOUR NAME / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-3.5 py-2 rounded-lg bg-[#0d0d12] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 text-xs font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        RETURN EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2 rounded-lg bg-[#0d0d12] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 text-xs font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        MESSAGE & INQUIRY
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Describe your role opportunity or project inquiry..."
                        className="w-full px-3.5 py-2 rounded-lg bg-[#0d0d12] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 text-xs font-sans resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-3 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 shadow-[0_0_15px_rgba(255,42,133,0.35)] hover:shadow-[0_0_25px_rgba(255,42,133,0.6)] hover:brightness-110 active:scale-98 transition-all disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Dispatch Message</span>
                        <Send className="w-3.5 h-3.5" />
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
