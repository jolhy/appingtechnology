import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FloatingElementProps {
  children?: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}

const FloatingElement = ({
  children,
  className,
  duration = 6,
  distance = 15,
  delay = 0,
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
