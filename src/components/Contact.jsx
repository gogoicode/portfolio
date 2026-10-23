import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "./Contact.css";

export default function Contact() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      id="contact" 
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.p variants={itemVariants} className="section-eyebrow">Contact</motion.p>
      <motion.h2 variants={itemVariants} className="section-title">Let's Connect</motion.h2>
      
      <motion.div variants={itemVariants} className="contact__panel glass-panel">
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
      </motion.div>
      <motion.footer variants={itemVariants} className="contact__footer">
        © {new Date().getFullYear()} {profile.name}
      </motion.footer>
    </motion.section>
  );
}
