import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Users2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { 
  experienceData, 
  educationData, 
  certificationsData, 
  leadershipData 
} from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-neon-pink text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-500 to-red-500">Milestones</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Hands-on software internships, collegiate degree in Computer Science, official certifications, and developer community leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-neon-pink">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Work Experience</h3>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative pl-6 sm:pl-8 border-l border-pink-500/25 space-y-10">
              {experienceData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neon-pink border-4 border-[#070709] group-hover:scale-125 group-hover:shadow-[0_0_15px_#FF2A85] transition-all" />

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#0c0a13] border border-pink-500/20 group-hover:border-pink-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center space-x-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 w-fit">
                        <Calendar className="w-3 h-3 text-neon-pink" />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 font-mono mb-4">
                      <span className="text-neon-pink font-semibold">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-gray-500" />
                        <span>{item.location}</span>
                      </span>
                      <span>•</span>
                      <span className="text-rose-400">{item.type}</span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-neon-pink shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                      {item.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-dark-800 border border-white/10 text-[10px] font-mono text-gray-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Section under left col */}
            <div className="mt-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-neon-pink">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Academic Foundation</h3>
              </div>

              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0c0a13] border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <span className="inline-flex items-center space-x-1 text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 w-fit">
                      <span>CGPA: {edu.grade}</span>
                    </span>
                  </div>

                  <p className="text-sm font-medium text-pink-400 mb-1">{edu.field}</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 font-mono mb-4">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span className="text-gray-400">{edu.period}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-gray-400">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <span className="text-neon-pink">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Leadership */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Certifications Block */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-neon-pink">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certificationsData.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-4 rounded-xl bg-dark-850/80 border border-white/10 hover:border-pink-500/50 hover:bg-dark-800 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,133,0.18)]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-white text-sm group-hover:text-pink-300 transition-colors">
                          {cert.name}
                        </h5>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">Issuer: {cert.issuer}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-neon-pink transition-colors shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Leadership & Activities Block */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-neon-pink">
                  <Users2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Leadership & Community</h3>
              </div>

              <div className="space-y-3.5">
                {leadershipData.map((lead, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-dark-850/80 border border-white/10 hover:border-pink-500/30 transition-colors"
                  >
                    <h5 className="font-semibold text-white text-sm">{lead.role}</h5>
                    <div className="text-xs font-mono text-neon-pink mt-0.5">{lead.organization}</div>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {lead.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-950/40 via-dark-850 to-dark-900 border border-pink-500/40 shadow-xl text-center space-y-3">
              <h4 className="text-white font-bold text-base">Full Resume Breakdown</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Need the comprehensive curriculum vitae in standard PDF format for recruitment systems?
              </p>
              <a
                href="/my-resume.pdf"
                download="Gungun_Gupta_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Download GungunGuptaResume.pdf</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
