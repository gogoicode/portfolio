import { experience } from "../data/profile";
import EntryCard from "./EntryCard";
import "./ListSection.css";

export default function Experience() {
  return (
    <section id="experience" className="list-section">
      <p className="section-eyebrow">Experience</p>
      <h2 className="section-title">Where I've Worked</h2>
      <div className="list-section__grid">
        {experience.map((item) => (
          <EntryCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
