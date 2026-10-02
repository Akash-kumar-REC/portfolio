import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { education } from '../data/content';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading section-heading-center">
            Education & Academic Performance
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Academic foundation and university coursework metrics.
          </p>
        </div>

        {/* Main Education Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden"
          >
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

            {/* Institution Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-navy-750/70 dark:border-navy-750/70 border-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {education.institution}
                  </h3>
                  <p className="text-cyan-400 font-bold text-base mt-1">
                    {education.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      Sonbhadra, Uttar Pradesh
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      {education.duration}
                    </span>
                  </div>
                </div>
              </div>

              <span className="self-start md:self-auto px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {education.status}
              </span>
            </div>

            {/* GPA Score Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              
              {/* Semester 1 */}
              <div className="glass-card rounded-2xl p-5 text-center group">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Semester 1 SGPA
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  {education.sgpa1}
                </div>
                <div className="mt-2 w-full bg-navy-800 dark:bg-navy-800 bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${(education.sgpa1 / 10) * 100}%` }} />
                </div>
              </div>

              {/* Semester 2 */}
              <div className="glass-card rounded-2xl p-5 text-center group">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Semester 2 SGPA
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  {education.sgpa2}
                </div>
                <div className="mt-2 w-full bg-navy-800 dark:bg-navy-800 bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-400 h-full rounded-full" style={{ width: `${(education.sgpa2 / 10) * 100}%` }} />
                </div>
              </div>

              {/* Overall CGPA Highlight */}
              <div className="glass-card rounded-2xl p-5 text-center border-2 border-cyan-400/40 shadow-cyan-glow-sm group">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Cumulative CGPA
                </div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {education.cgpa}
                </div>
                <div className="mt-2 w-full bg-navy-800 dark:bg-navy-800 bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full" style={{ width: `${(education.cgpa / 10) * 100}%` }} />
                </div>
              </div>

            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" /> Key Coursework & Foundations:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-navy-800/80 dark:bg-navy-800/80 bg-slate-100 text-slate-700 dark:text-slate-300 border border-navy-700 dark:border-navy-700 border-slate-200 flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
