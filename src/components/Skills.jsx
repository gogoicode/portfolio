import { skills } from "../data/profile";
import Tag from "./Tag";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="section-eyebrow">Skills</p>
      <h2 className="section-title">Toolbox</h2>
      <div className="skills__grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skills__group" key={category}>
            <h3 className="skills__category">{category}</h3>
            <div className="skills__tags">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
