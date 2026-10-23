import { motion } from "framer-motion";
import { skills } from "../data/profile";
import Tag from "./Tag";
import "./Skills.css";

export default function Skills() {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id="skills" 
      className="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.p variants={itemVariants} className="section-eyebrow">Skills</motion.p>
      <motion.h2 variants={itemVariants} className="section-title">Toolbox</motion.h2>
      <div className="skills__grid">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div variants={itemVariants} className="skills__group glass-panel" key={category}>
            <h3 className="skills__category">{category}</h3>
            <div className="skills__tags">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
