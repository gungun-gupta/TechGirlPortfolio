import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Server, 
  Layout, 
  Cpu, 
  Check, 
  Copy, 
  Sparkles,
  Layers,
  Flame
} from 'lucide-react';
import { skillsData, personalInfo } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Cpu: Cpu,
  Code2: Code2,
  Terminal: Terminal,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [copied, setCopied] = useState(false);
  const [codeMode, setCodeMode] = useState('typescript'); // 'typescript' or 'json'

  const activeCategory = skillsData.categories.find((c) => c.id === activeTab) || skillsData.categories[0];

  const handleCopyCode = () => {
    const codeString = codeMode === 'typescript' ? tsSnippet : jsonSnippet;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tsSnippet = `// engineer.profile.ts
import { SoftwareEngineer } from '@gungun/core';

export const gungun: SoftwareEngineer = {
  name: "Gungun Gupta",
  role: "Software Engineer",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Shri Shankaracharya Technical Campus",
    gpa: "8.2 / 10"
  },
  specialization: [
    "High-Performance Full-Stack Web Development",
    "Applied AI, Hybrid RAG & Vector Embeddings",
    "Microservices & Enterprise ERP Integration"
  ],
  stack: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["FastAPI", "Python", "SSMS SQL", "RESTful Endpoints"],
    ai: ["ChromaDB", "Ollama", "Llama 3", "Semantic Search"]
  },
  readyForProduction: true
};`;

  const jsonSnippet = `{
  "engineer": {
    "name": "Gungun Gupta",
    "title": "Software Engineer",
    "cgpa": 8.2,
    "top_skills": [
      "React.js",
      "Next.js",
      "FastAPI",
      "Python",
      "Tailwind CSS",
      "ChromaDB",
      "Hybrid RAG",
      "SSMS SQL"
    ],
    "experience": "Web Development Intern @ Aon Digicon LLP",
    "availability": "Immediate",
    "contact": "gungungpta99@gmail.com"
  }
}`;

  return (
    <section id="skills" className="relative py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-neon-pink text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered with <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-500 to-red-500">Precision</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Categorized technical stack spanning reactive frontend frameworks, resilient backend APIs, 
            vector embeddings, and enterprise-grade software architecture.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {skillsData.categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30 border border-pink-400/40'
                    : 'bg-dark-850/80 text-gray-400 hover:text-white hover:bg-white/[0.04] border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Layout: Skills Cards & Interactive Code Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categorized Skill Cards */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
              >
                {activeCategory.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl bg-dark-850/70 border border-white/10 hover:border-pink-500/50 hover:bg-dark-800/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,133,0.2)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-2 h-2 rounded-full bg-neon-pink group-hover:scale-125 transition-transform" />
                        <span className="font-mono text-sm sm:text-base font-semibold text-white group-hover:text-pink-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      {skill.hot && (
                        <span className="flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300">
                          <Flame className="w-3 h-3 text-neon-crimson" />
                          <span>CORE</span>
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400 font-mono">
                      <span>Proficiency</span>
                      <span className="text-pink-400">{skill.level}</span>
                    </div>

                    {/* Subtle progress indicator */}
                    <div className="mt-1.5 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-pink to-neon-crimson rounded-full"
                        style={{
                          width: skill.level === 'Advanced' ? '92%' : skill.level === 'Intermediate' ? '78%' : '68%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Quick summary strip */}
            <div className="mt-6 p-4 rounded-xl bg-pink-500/[0.03] border border-pink-500/20 text-xs sm:text-sm text-gray-300 flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-neon-pink shrink-0" />
              <span>
                Continuously exploring cutting-edge full-stack practices, vector-driven architectures, 
                and sub-second web performance.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Code Preview Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#09080e] border border-pink-500/30 shadow-2xl overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#110e1a] border-b border-pink-500/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="ml-2 font-mono text-xs text-gray-400">
                    {codeMode === 'typescript' ? 'engineer.profile.ts' : 'engineer.profile.json'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Mode Switcher */}
                  <div className="flex rounded-lg bg-dark-800 p-0.5 border border-white/10 text-[11px] font-mono">
                    <button
                      onClick={() => setCodeMode('typescript')}
                      className={`px-2 py-0.5 rounded ${
                        codeMode === 'typescript' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      TS
                    </button>
                    <button
                      onClick={() => setCodeMode('json')}
                      className={`px-2 py-0.5 rounded ${
                        codeMode === 'json' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      JSON
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    title="Copy code snippet"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Code Snippet Display with Syntax Highlighting */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-gray-300 max-h-[430px]">
                <pre className="whitespace-pre">
                  <code>
                    {codeMode === 'typescript' ? tsSnippet : jsonSnippet}
                  </code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div className="px-4 py-2 bg-[#0e0c15] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>TypeScript 5.x • Strict Mode</span>
                </div>
                <span>UTF-8</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
