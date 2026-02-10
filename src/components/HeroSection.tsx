import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users, Check, Clock, DollarSign, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingElement from "./motion/FloatingElement";
import ParticleField from "./motion/ParticleField";
import AnimatedCounter from "./motion/AnimatedCounter";
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer";

const benefits = [
  { icon: DollarSign, title: "Affordable Excellence", description: "Agency-quality marketing at a fraction of the cost." },
  { icon: Clock, title: "Save Time & Energy", description: "We handle everything so you can focus on growth." },
  { icon: Users, title: "Personal Partnership", description: "Monthly meetings keep your strategy on track." },
  { icon: Shield, title: "Reliable & Consistent", description: "Quality content delivered week after week." },
  { icon: TrendingUp, title: "Data-Driven Results", description: "Every decision backed by real performance data." },
  { icon: Check, title: "All-in-One Solution", description: "Marketing, ERP, AI, and BPO under one roof." },
];

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 gradient-hero-light" />
      
      <ParticleField count={25} />

      <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" duration={8} distance={20} />
      <FloatingElement className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" duration={10} distance={25} delay={2} />
      <FloatingElement className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl" duration={7} distance={15} delay={1} />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <Sparkles size={16} />
            </motion.span>
            <span>AI-Powered Marketing for Growing Businesses</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Grow Your Business with{" "}
            <span className="text-gradient-hero">AI-Driven Marketing</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We create high-quality AI-generated ads, manage your social media, and meet with you monthly to review performance. Focus on your business while we handle your marketing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Your Free Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Users, value: 200, suffix: "+", label: "Happy Clients" },
              { icon: TrendingUp, value: 3, suffix: "x", label: "Average ROI" },
              { icon: Sparkles, value: 10, suffix: "K+", label: "Ads Created" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3 text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why Apping - Benefits Section */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Choose Apping?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your growth partner, not just a vendor. We combine AI with genuine partnership to help your business thrive.
            </p>
          </motion.div>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
