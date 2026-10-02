import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Mail, ArrowRight, Code2, Sparkles, Upload } from 'lucide-react';
import { personalInfo } from '../data/content';
import { ResumeModal } from './ResumeModal';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeResumeUrl, setActiveResumeUrl] = useState<string>(personalInfo.resumeFileName);

  // Typing animation effect
  useEffect(() => {
    const currentRole = personalInfo.heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDelay = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.heroRoles.length);
      } else {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleUploadResume = (newUrl: string) => {
    setActiveResumeUrl(newUrl);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-800/80 border border-cyan-500/30 dark:bg-navy-800/80 dark:border-cyan-500/30 bg-white border-slate-200 shadow-lg shadow-cyan-500/5 mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
            {personalInfo.statusBadge}
          </span>
        </motion.div>

        {/* Hero Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
            {personalInfo.gradientTitle}
          </span>
        </motion.h1>

        {/* Cycling Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 sm:h-14 flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span>{displayedText}</span>
            <span className="w-0.5 h-7 bg-cyan-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Short Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 font-normal"
        >
          {personalInfo.heroIntro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* View Projects (Filled Gradient) */}
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
          >
            <FolderGit2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Upload / Download Resume System Trigger */}
          <button
            onClick={() => setResumeModalOpen(true)}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-navy-850/80 border-2 border-cyan-400/80 text-cyan-400 dark:bg-navy-850/80 dark:border-cyan-400/80 dark:text-cyan-400 bg-white border-slate-300 text-slate-800 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 font-semibold text-base shadow-sm"
          >
            <Upload className="w-5 h-5" />
            <span>Resume & Upload</span>
          </button>

          {/* Contact Me (Ghost) */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 hover:bg-slate-200/50 dark:hover:bg-navy-800/60 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Subtle Tech Chips Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-navy-800/40 dark:border-navy-800/40 border-slate-200/60 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium"
        >
          <span className="text-cyan-500 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
            <Code2 className="w-4 h-4" /> Focus Areas:
          </span>
          <span className="px-3 py-1 rounded-full bg-navy-800/60 dark:bg-navy-800/60 bg-slate-100 border border-slate-200 dark:border-navy-700">Data Structures & Algorithms</span>
          <span className="px-3 py-1 rounded-full bg-navy-800/60 dark:bg-navy-800/60 bg-slate-100 border border-slate-200 dark:border-navy-700">React & TypeScript</span>
          <span className="px-3 py-1 rounded-full bg-navy-800/60 dark:bg-navy-800/60 bg-slate-100 border border-slate-200 dark:border-navy-700">Python & AI/ML</span>
        </motion.div>

      </div>

      {/* Resume Modal Component */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        currentResumeUrl={activeResumeUrl}
        onUploadResume={handleUploadResume}
      />
    </section>
  );
};
