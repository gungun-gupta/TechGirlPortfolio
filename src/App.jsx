import React, { useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ShareModal from './components/ShareModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#040406] text-gray-100 selection:bg-pink-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Pitch-black ambient glowing backgrounds & subtle cyber grid */}
      <BackgroundEffects />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />
        
        <main className="flex-1">
          <Hero 
            onOpenResume={() => setResumeModalOpen(true)} 
            onOpenShare={() => setShareModalOpen(true)}
          />
          <Skills />
          <Projects />
          <Experience />
          <Contact onOpenShare={() => setShareModalOpen(true)} />
        </main>

        <Footer />
      </div>

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Interactive Share Portfolio Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />
    </div>
  );
}

