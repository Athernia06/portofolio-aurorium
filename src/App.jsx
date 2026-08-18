import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-light font-body">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
