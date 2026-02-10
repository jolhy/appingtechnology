import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value >= 100) return Math.round(latest);
    return Number(latest.toFixed(1));
  });
  const display = useTransform(rounded, (latest) => `${prefix}${latest}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration, ease: "easeOut" });
    }
  }, [isInView, value, count, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

export default AnimatedCounter;
