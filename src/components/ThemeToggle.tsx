import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      className="p-2.5 rounded-xl bg-navy-800/80 text-slate-300 hover:text-cyan-400 border border-navy-700/80 dark:bg-navy-800/80 dark:border-navy-700/80 bg-slate-100 border-slate-200 hover:border-cyan-400/50 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-cyan-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
