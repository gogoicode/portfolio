import { education } from "../data/profile";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <p className="section-eyebrow">About</p>
      <h2 className="section-title">Education</h2>

      <ul className="about__list">
        {education.map((item) => (
          <li className="about__item" key={item.degree}>
            <div className="about__item-head">
              <h3>{item.degree}</h3>
              <span className="about__period">{item.period}</span>
            </div>
            <p className="about__place">{item.place}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
