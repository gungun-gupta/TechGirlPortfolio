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
    <section id="experience" className="relative py-20 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-pink-400 text-xs font-mono mb-2.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-pink-500">Milestones</span>
          </h2>
          <p className="mt-2 text-gray-400 max-w-xl text-sm sm:text-base">
            Software internships, collegiate degree in Computer Science, official certifications, and community leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2.5 mb-6">
              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Work Experience</h3>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative pl-6 sm:pl-7 border-l border-white/10 space-y-8">
              {experienceData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Clean Node Dot */}
                  <div className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-pink-500 border-2 border-[#040406]" />

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#08080c] border border-white/[0.08] hover:border-pink-500/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-base font-bold text-white">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-gray-300 w-fit">
                        <Calendar className="w-3 h-3 text-pink-400" />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-gray-400 font-mono mb-3">
                      <span className="text-pink-400 font-medium">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-gray-500" />
                        <span>{item.location}</span>
                      </span>
                      <span>•</span>
                      <span className="text-gray-400">{item.type}</span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                      {item.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-gray-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Foundation */}
            <div className="mt-10">
              <div className="flex items-center space-x-2.5 mb-5">
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Academic Foundation</h3>
              </div>

              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#08080c] border border-white/[0.08] hover:border-pink-500/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 w-fit">
                      CGPA: {edu.grade}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-pink-400 mb-1">{edu.field}</p>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-gray-400 font-mono mb-3">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>

                  <ul className="space-y-1 text-xs text-gray-400">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <span className="text-pink-400">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Leadership */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Certifications Block */}
            <div>
              <div className="flex items-center space-x-2.5 mb-5">
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-2.5">
                {certificationsData.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-3.5 rounded-xl bg-[#08080c] border border-white/[0.06] hover:border-pink-500/30 hover:bg-[#0c0c11] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-white text-xs sm:text-sm group-hover:text-pink-300 transition-colors">
                          {cert.name}
                        </h5>
                        <p className="text-[11px] text-gray-400 font-mono mt-0.5">Issuer: {cert.issuer}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-pink-400 transition-colors shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Leadership & Activities */}
            <div>
              <div className="flex items-center space-x-2.5 mb-5">
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-pink-400">
                  <Users2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Leadership & Community</h3>
              </div>

              <div className="space-y-2.5">
                {leadershipData.map((lead, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#08080c] border border-white/[0.06]"
                  >
                    <h5 className="font-semibold text-white text-xs sm:text-sm">{lead.role}</h5>
                    <div className="text-xs font-mono text-pink-400 mt-0.5">{lead.organization}</div>
                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                      {lead.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="p-4 rounded-xl bg-[#08080c] border border-white/10 text-center space-y-2.5">
              <h4 className="text-white font-semibold text-sm">Download Verified Resume</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Need the complete curriculum vitae in standard PDF format for applicant tracking systems?
              </p>
              <a
                href="/my-resume.pdf"
                download="Gungun_Gupta_Resume.pdf"
                className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:brightness-110 active:scale-95 transition-all"
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
