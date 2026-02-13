import { motion } from "framer-motion";
import ScrollReveal from "../motion/ScrollReveal";

interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <ScrollReveal className={`flex items-center justify-center py-4 ${className}`}>
      <div className="flex items-center gap-3">
        <motion.div
          className="h-px w-12 bg-primary/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-primary/40"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
        <motion.div
          className="h-px w-12 bg-primary/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
      </div>
    </ScrollReveal>
  );
};

export default SectionDivider;
