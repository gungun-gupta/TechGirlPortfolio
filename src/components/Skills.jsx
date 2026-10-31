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
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

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
  const [codeMode, setCodeMode] = useState('typescript');

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
    "Microservices & Enterprise Integration"
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
    <section id="skills" className="relative py-20 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-pink-400 text-xs font-mono mb-2.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF2A85] via-[#FF1744] to-[#E11D48] drop-shadow-[0_0_25px_rgba(255,42,133,0.55)]">Proficiency</span>
          </h2>
          <p className="mt-2 text-gray-400 max-w-xl text-sm sm:text-base">
            Categorized technical stack spanning reactive frontend frameworks, backend APIs, vector embeddings, and core computing foundations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 mb-10">
          {skillsData.categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-[#08080c] text-gray-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categorized Skill Cards */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {activeCategory.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-[#08080c] border border-white/[0.06] hover:border-pink-500/30 hover:bg-[#0c0c11] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-white">
                        {skill.name}
                      </span>
                      {skill.hot && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/20 text-pink-300">
                          CORE
                        </span>
                      )}
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-xs text-gray-400 font-mono">
                      <span>Proficiency</span>
                      <span className="text-gray-300">{skill.level}</span>
                    </div>

                    <div className="mt-1.5 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                        style={{
                          width: skill.level === 'Advanced' ? '92%' : skill.level === 'Intermediate' ? '76%' : '65%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Code Preview Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#060609] border border-white/[0.08] shadow-lg overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0b0b10] border-b border-white/[0.06]">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-gray-400">
                    {codeMode === 'typescript' ? 'engineer.profile.ts' : 'engineer.profile.json'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex rounded bg-black/60 p-0.5 border border-white/[0.08] text-[10px] font-mono">
                    <button
                      onClick={() => setCodeMode('typescript')}
                      className={`px-1.5 py-0.5 rounded ${
                        codeMode === 'typescript' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      TS
                    </button>
                    <button
                      onClick={() => setCodeMode('json')}
                      className={`px-1.5 py-0.5 rounded ${
                        codeMode === 'json' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      JSON
                    </button>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-gray-400 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto text-gray-300 max-h-[380px]">
                <pre className="whitespace-pre">
                  <code>
                    {codeMode === 'typescript' ? tsSnippet : jsonSnippet}
                  </code>
                </pre>
              </div>

              {/* Footer */}
              <div className="px-3.5 py-2 bg-[#08080c] border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>TypeScript 5.x • Strict</span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
