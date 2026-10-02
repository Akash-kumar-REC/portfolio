import React from 'react';
import { motion } from 'framer-motion';
import { Code2, FolderGit2, Award, Trophy, UserCheck, GraduationCap } from 'lucide-react';
import { personalInfo, quickStats } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-7 h-7 text-cyan-400" />,
  FolderGit2: <FolderGit2 className="w-7 h-7 text-cyan-400" />,
  Award: <Award className="w-7 h-7 text-cyan-400" />,
  Trophy: <Trophy className="w-7 h-7 text-cyan-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="section-heading section-heading-center">
            About Me
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Engineering student driven by code quality, algorithmic efficiency, and visual aesthetics.
          </p>
        </div>

        {/* Content Grid: Bio + Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Passionate Developer & Learner
                  </h3>
                  <span className="text-xs text-cyan-400 font-medium">B.Tech CSE Student (2025-2029)</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                {personalInfo.aboutParagraph}
              </p>
            </div>

            <div className="pt-6 border-t border-navy-750/60 dark:border-navy-750/60 border-slate-200/80 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <GraduationCap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>Rajkiya Engineering College, Sonbhadra • Computer Science & Engineering</span>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 justify-between"
          >
            {quickStats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-card rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-navy-800 dark:bg-navy-800 bg-slate-100 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-300 border border-navy-750 dark:border-navy-750 border-slate-200 flex-shrink-0">
                    {iconMap[stat.iconName] || <Code2 className="w-7 h-7 text-cyan-400" />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {stat.subtext}
                    </div>
                  </div>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 flex-shrink-0 bg-cyan-500/10 px-3.5 py-1.5 rounded-xl border border-cyan-500/20">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
