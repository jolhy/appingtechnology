import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedCounter from "./motion/AnimatedCounter";

const benefits = [
  "AI-powered process automation",
  "Skilled talent outsourcing",
  "End-to-end operations support",
  "Scalable & cost-effective",
];

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
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
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Apping Technology helps businesses outsource their processes — through AI automation or skilled professionals. Marketing, operations, helpdesk, accounting, HR, sales, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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
            className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-20"
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
        </div>

        <div className="border-t border-border/60 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-foreground mb-3">
              Why businesses choose Apping Technology
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your outsourcing partner — powered by AI and world-class talent.
            </p>
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
