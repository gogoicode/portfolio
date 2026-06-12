import { profile } from "../data/profile";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="section-eyebrow">Contact</p>
      <h2 className="section-title">Let's Connect</h2>
      <p className="contact__text">
        Open to opportunities in data science, IoT, and software development.
        Reach out via email or connect on LinkedIn / GitHub.
      </p>
      <div className="contact__links">
        <a href={`mailto:${profile.email}`} className="btn btn--primary">
          {profile.email}
        </a>
        <a href={`tel:${profile.phone}`} className="btn btn--ghost">
          {profile.phone}
        </a>
      </div>
      <div className="contact__social">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <footer className="contact__footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}
