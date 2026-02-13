import { motion } from "framer-motion";

interface OrganicShapeProps {
  className?: string;
  variant?: "blob" | "circle" | "ring";
  animate?: boolean;
}

const OrganicShape = ({ className = "", variant = "blob", animate = true }: OrganicShapeProps) => {
  const shapes = {
    blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
    circle: "50%",
    ring: "50%",
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ borderRadius: shapes[variant] }}
      animate={animate ? {
        borderRadius: variant === "blob" ? [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ] : undefined,
        scale: [1, 1.05, 1],
      } : undefined}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default OrganicShape;
