import { motion } from "framer-motion";
import { projects } from "../data/profile";
import EntryCard from "./EntryCard";
import "./ListSection.css";

export default function Projects() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      id="projects" 
      className="list-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.p variants={itemVariants} className="section-eyebrow">Projects</motion.p>
      <motion.h2 variants={itemVariants} className="section-title">What I've Built</motion.h2>
      <div className="list-section__grid">
        {projects.map((item) => (
          <EntryCard key={item.title} {...item} />
        ))}
      </div>
    </motion.section>
  );
}
