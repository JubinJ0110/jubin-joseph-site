import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Particles from "./components/ui/Particles";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-white overflow-x-hidden relative">
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        quantity={200}
        staticity={30}
        ease={50}
        color="#bec2ff"
        refresh
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
