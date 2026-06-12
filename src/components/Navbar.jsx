import { useEffect, useState, useRef } from "react";
import { sections, profile } from "../data/profile";
import "./Navbar.css";

/**
 * Navbar: self-contained. Reads section list from data/profile.js,
 * so adding/removing a page section automatically updates the nav
 * without touching this file.
 */
export default function Navbar() {
  const [active, setActive] = useState(sections[0].id);
  const [open, setOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={handleNavClick}>
          {profile.name.split(" ")[0]}
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${active === id ? "nav__link--active" : ""}`}
              onClick={handleNavClick}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
