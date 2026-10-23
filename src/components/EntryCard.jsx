import { motion } from "framer-motion";
import Tag from "./Tag";
import "./EntryCard.css";

/**
 * Generic card for "title + subtitle + bullet points + tech tags".
 * Used by Experience and Projects so both sections stay visually
 * and structurally consistent. Edit this file to change the look
 * of both at once.
 */
export default function EntryCard({ title, subtitle, points, tech }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.article variants={itemVariants} className="entry glass-panel">
      <h3 className="entry__title">{title}</h3>
      {subtitle && <p className="entry__subtitle">{subtitle}</p>}
      {points?.length > 0 && (
        <ul className="entry__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {tech?.length > 0 && (
        <div className="entry__tags">
          {tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </motion.article>
  );
}
