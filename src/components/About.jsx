import { motion } from "framer-motion";
import { education } from "../data/profile";
import "./About.css";

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      id="about" 
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.p variants={itemVariants} className="section-eyebrow">About</motion.p>
      <motion.h2 variants={itemVariants} className="section-title">Education</motion.h2>

      <ul className="about__list">
        {education.map((item) => (
          <motion.li variants={itemVariants} className="about__item glass-panel" key={item.degree}>
            <div className="about__item-head">
              <h3>{item.degree}</h3>
              <span className="about__period">{item.period}</span>
            </div>
            <p className="about__place">{item.place}</p>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
