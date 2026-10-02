import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Cpu, BrainCircuit, Wrench } from 'lucide-react';
import { skillCategories } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-6 h-6 text-cyan-400" />,
  Layout: <Layout className="w-6 h-6 text-cyan-400" />,
  Server: <Server className="w-6 h-6 text-cyan-400" />,
  Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
  Wrench: <Wrench className="w-6 h-6 text-cyan-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading section-heading-center">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Technical stack & tools categorized by domain.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Corner Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-300" />

              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-100 border border-navy-700 dark:border-navy-700 border-slate-200 group-hover:border-cyan-400/50 group-hover:shadow-cyan-glow-sm transition-all duration-300">
                    {iconMap[category.iconName] || <Terminal className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-navy-800/80 dark:bg-navy-800/80 bg-slate-100 text-slate-800 dark:text-slate-200 border border-navy-700/80 dark:border-navy-700/80 border-slate-200 hover:border-cyan-400/60 hover:text-cyan-400 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Count Indicator */}
              <div className="mt-6 pt-4 border-t border-navy-750/50 dark:border-navy-750/50 border-slate-200/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>{category.skills.length} Technologies</span>
                <span className="text-cyan-400/80 font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
