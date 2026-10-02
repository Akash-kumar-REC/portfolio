import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-navy-900 text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <CompetitiveProgramming />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
