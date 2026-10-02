import React from 'react';
import { Github, Linkedin, Code, Mail, ArrowUp } from 'lucide-react';
import { footerContent } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-950/90 dark:bg-navy-950/90 bg-slate-900 text-slate-400 py-12 border-t border-navy-800 dark:border-navy-800 border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-extrabold text-white text-sm">
              AK
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">
                {footerContent.copyright}
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {footerContent.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2.5 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-navy-750 dark:hover:bg-navy-750 hover:scale-110 transition-all"
              >
                {iconMap[social.iconName] || <Code className="w-5 h-5" />}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800 dark:bg-navy-800 bg-slate-800 text-slate-300 hover:text-cyan-400 border border-navy-700 dark:border-navy-700 border-slate-700 transition-all text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
};
