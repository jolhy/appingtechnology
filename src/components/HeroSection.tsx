import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedCounter from "./motion/AnimatedCounter";
import heroImage from "@/assets/hero-image.jpeg";

const benefits = [
  "AI-powered process automation",
  "Skilled talent outsourcing",
  "End-to-end operations support",
  "Scalable & cost-effective",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional business consultant"
          className="w-full h-full object-cover object-[30%_center]"
        />
        {/* Gradient overlay for text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/20 md:to-transparent" />
      </div>

      <div className="container relative z-10 py-32 md:py-44">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
            Business Process Outsourcing — AI & Talent
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6"
          >
            Outsource smarter
            <br />
            <span className="text-primary">with AI & talent</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Apping Technology helps businesses outsource their processes — through AI automation or skilled professionals. Marketing, operations, helpdesk, accounting, HR, sales, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <Button size="xl" asChild className="rounded-full px-10">
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="rounded-full px-10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-10 mb-12"
          >
            {[
              { value: 200, suffix: "+", label: "Clients Served" },
              { value: 50, suffix: "%", label: "Avg. Cost Savings" },
              { value: 500, suffix: "+", label: "Professionals Deployed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-serif text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-sm text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
