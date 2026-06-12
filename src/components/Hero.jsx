import { profile } from "../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="section-eyebrow">Portfolio</p>
      <h1 className="hero__title">{profile.name}</h1>
      <p className="hero__role">{profile.role}</p>
      <p className="hero__summary">{profile.summary}</p>
      <div className="hero__actions">
        <a href="#projects" className="btn btn--primary">View Projects</a>
        <a href="#contact" className="btn btn--ghost">Get in Touch</a>
      </div>
    </section>
  );
}
