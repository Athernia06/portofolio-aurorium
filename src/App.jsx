import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/Toast';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="bg-surface font-body text-ink">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <ProjectGrid />
            <Skills />
            <Contact />
          </main>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
