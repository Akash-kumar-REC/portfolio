 import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Zap, Trophy, Award, Users } from 'lucide-react';
import { achievements } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6 text-amber-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
  Zap: <Zap className="w-6 h-6 text-emerald-400" />,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading section-heading-center">
            Achievements & Hackathons
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Recognitions and milestones achieved through hackathons and competitive innovation.
          </p>
        </div>

        {/* Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-100 border border-navy-700 dark:border-navy-700 border-slate-200 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                    {iconMap[achievement.iconName] || <Trophy className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {achievement.badge}
                  </span>
                </div>

                {/* Achievement Title */}
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {achievement.title}
                </h3>

                {/* Subtitle / Role */}
                <div className="text-xs font-semibold text-cyan-400 mb-3">
                  {achievement.roleOrResult} • {achievement.organization}
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-navy-750/50 dark:border-navy-750/50 border-slate-200/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-cyan-400" />
                  Verified Event
                </span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Culture Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex-shrink-0">
            <Users className="w-8 h-8" />
          </div>
          <div className="text-left">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Collaborative Problem Solver
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Thriving in fast-paced hackathon environments, I excel at rapidly translating concepts into functional code while working closely with cross-functional team members.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
