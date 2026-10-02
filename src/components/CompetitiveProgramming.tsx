import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, ExternalLink, Flame, Trophy, CheckCircle2 } from 'lucide-react';
import { cpPlatforms } from '../data/content';

export const CompetitiveProgramming: React.FC = () => {
  return (
    <section id="coding" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading section-heading-center">
            Competitive Programming
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Active problem solver practicing Data Structures & Algorithms on top coding platforms.
          </p>
        </div>

        {/* CP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cpPlatforms.map((platform, idx) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-navy-800 dark:bg-navy-800 bg-slate-100 border border-navy-700 dark:border-navy-700 border-slate-200 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                      {platform.platform === 'LeetCode' ? (
                        <Code className="w-7 h-7 text-amber-400" />
                      ) : (
                        <BookOpen className="w-7 h-7 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {platform.platform}
                      </h3>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        @{platform.username}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {platform.badgeText}
                  </span>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  
                  {/* Problems Solved */}
                  <div className="p-4 rounded-2xl bg-navy-800/80 dark:bg-navy-800/80 bg-slate-100/80 border border-navy-750 dark:border-navy-750 border-slate-200 text-center">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Problems Solved
                    </div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">
                      {platform.solvedCount}
                    </div>
                  </div>

                  {/* Highlight Metric (Streak / Rank) */}
                  <div className="p-4 rounded-2xl bg-navy-800/80 dark:bg-navy-800/80 bg-slate-100/80 border border-navy-750 dark:border-navy-750 border-slate-200 text-center">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1 flex items-center justify-center gap-1">
                      {platform.platform === 'LeetCode' ? (
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                      ) : (
                        <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                      {platform.highlightLabel}
                    </div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">
                      {platform.highlightValue}
                    </div>
                  </div>

                </div>
              </div>

              {/* Profile Link Button */}
              <a
                href={platform.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-navy-800 hover:bg-navy-750 dark:bg-navy-800 dark:hover:bg-navy-750 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:text-white font-semibold text-sm border border-navy-700 dark:border-navy-700 border-slate-300 flex items-center justify-center gap-2 group-hover:border-cyan-400/50 transition-all shadow-sm"
              >
                <span>View {platform.platform} Profile</span>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
