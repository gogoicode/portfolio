import { projects } from "../data/profile";
import EntryCard from "./EntryCard";
import "./ListSection.css";

export default function Projects() {
  return (
    <section id="projects" className="list-section">
      <p className="section-eyebrow">Projects</p>
      <h2 className="section-title">What I've Built</h2>
      <div className="list-section__grid">
        {projects.map((item) => (
          <EntryCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
