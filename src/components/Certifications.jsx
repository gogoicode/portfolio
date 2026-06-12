import { certifications } from "../data/profile";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="certs">
      <p className="section-eyebrow">Certifications</p>
      <h2 className="section-title">Training & Courses</h2>
      <ul className="certs__list">
        {certifications.map((cert) => (
          <li className="certs__item" key={cert.title}>
            <span className="certs__title">{cert.title}</span>
            <span className="certs__issuer">{cert.issuer}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
