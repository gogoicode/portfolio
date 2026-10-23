import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "./Hero.css";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="home" 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p variants={itemVariants} className="section-eyebrow">Portfolio</motion.p>
      <motion.h1 variants={itemVariants} className="hero__title">{profile.name}</motion.h1>
      <motion.p variants={itemVariants} className="hero__role">{profile.role}</motion.p>
      <motion.div variants={itemVariants} className="glass-panel hero__summary-panel">
        <p className="hero__summary">{profile.summary}</p>
      </motion.div>
      <motion.div variants={itemVariants} className="hero__actions">
        <a href="#projects" className="btn btn--primary">View Projects</a>
        <a href="#contact" className="btn btn--ghost">Get in Touch</a>
      </motion.div>
    </motion.section>
  );
}
