import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Coding', href: '#coding' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/90 dark:bg-navy-900/95 bg-white/90 backdrop-blur-md border-b border-navy-750/70 dark:border-navy-750/70 border-slate-200 shadow-lg shadow-black/10'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* AK Logo Badge */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-extrabold text-white text-lg shadow-cyan-glow group-hover:scale-105 transition-all duration-300">
              AK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                Akash Kumar
              </span>
              <span className="text-xs text-cyan-500 font-medium tracking-wide">
                AI/ML & Frontend
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-400 dark:text-cyan-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-navy-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 rounded-full shadow-cyan-glow-sm" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar (Theme Toggle & Mobile Menu Trigger) */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-navy-800/80 text-slate-300 hover:text-cyan-400 border border-navy-700/80 dark:bg-navy-800/80 dark:border-navy-700/80 bg-slate-100 border-slate-200 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900/98 dark:bg-navy-900/98 bg-white border-b border-navy-750 dark:border-navy-750 border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400 pl-3'
                    : 'text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-navy-800/60 dark:hover:bg-navy-800/60 hover:text-cyan-400'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
