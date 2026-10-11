import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Experience />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;