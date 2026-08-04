import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="bg-light font-body">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
