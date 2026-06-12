import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./styles/global.css";

/**
 * App is purely compositional: it lists sections in order.
 * To add/remove/reorder a page section, edit this file AND
 * add/remove the matching entry in data/profile.js `sections`
 * (which drives the nav). Each section component is fully
 * self-contained (own data slice + own CSS).
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
