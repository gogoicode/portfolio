import { motion } from "framer-motion";
import { certifications } from "../data/profile";
import "./Certifications.css";

export default function Certifications() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id="certifications" 
      className="certs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.p variants={itemVariants} className="section-eyebrow">Certifications</motion.p>
      <motion.h2 variants={itemVariants} className="section-title">Training & Courses</motion.h2>
      <ul className="certs__list">
        {certifications.map((cert) => (
          <motion.li variants={itemVariants} className="certs__item glass-panel" key={cert.title}>
            <span className="certs__title">{cert.title}</span>
            <span className="certs__issuer">{cert.issuer}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
