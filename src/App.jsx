import { useState } from "react";
import Scene from "./components/Scene";
import Overlay from "./components/Overlay";
import { profile } from "./data/profile";
import "./styles/global.css";

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (id) => {
    setActiveSection(id);
  };

  const closeOverlay = () => {
    setActiveSection(null);
  };

  return (
    <>
      <header className="app-header glass-panel">
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
        <p className="app-header-instruction">Rotate the cube and click a face to explore</p>
      </header>

      <main className="app-main">
        <Scene onSectionClick={handleSectionClick} />
      </main>

      <Overlay activeSection={activeSection} onClose={closeOverlay} />
    </>
  );
}
