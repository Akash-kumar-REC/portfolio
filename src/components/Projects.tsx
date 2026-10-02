import React from 'react';
import { motion } from 'framer-motion';
import { Github, CheckCircle2, Sparkles } from 'lucide-react';
import { projects } from '../data/content';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading section-heading-center">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Key web platforms and AI tools developed during my academic and independent work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Top Highlight Badge & GitHub Icon Link */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.badge}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-100 text-slate-400 hover:text-cyan-400 border border-navy-700 dark:border-navy-700 border-slate-200 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400/90 dark:text-cyan-400/90 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Feature Highlights Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Chips Footer & Primary GitHub Button */}
              <div className="pt-6 border-t border-navy-750/60 dark:border-navy-750/60 border-slate-200/80">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-navy-800/90 dark:bg-navy-800/90 bg-slate-100 text-slate-700 dark:text-slate-300 border border-navy-700 dark:border-navy-700 border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Single Primary Action Button: View Project Code */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-cyan-glow-sm flex items-center justify-center gap-2.5 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Project Repository</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
