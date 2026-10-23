import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";
import "./Overlay.css";

export default function Overlay({ activeSection, onClose }) {
  // Map section IDs to their components
  const SectionComponent = {
    about: About,
    experience: Experience,
    projects: Projects,
    skills: Skills,
    certifications: Certifications,
    contact: Contact,
  }[activeSection];

  return (
    <AnimatePresence>
      {activeSection && SectionComponent && (
        <motion.div 
          className="overlay__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="overlay__modal glass-panel"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button className="overlay__close" onClick={onClose} aria-label="Close">
              ✕
            </button>
            <div className="overlay__content">
              <SectionComponent />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
