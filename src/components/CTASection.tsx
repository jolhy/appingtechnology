import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";
import FloatingElement from "./motion/FloatingElement";
import ParticleField from "./motion/ParticleField";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <ParticleField count={15} />
      <FloatingElement className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" duration={9} distance={20} />
      <FloatingElement className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" duration={11} distance={25} delay={2} />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's grow your brand together. Book a free consultation and discover how AI-powered marketing can work for your business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="accent" size="xl" className="w-full sm:w-auto">
                  <Calendar size={20} />
                  Book Your Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  <Mail size={20} />
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {["No commitment required", "30-minute discovery call", "Tailored recommendations"].map((text) => (
                <motion.div key={text} className="flex items-center gap-2" whileHover={{ x: 4 }}>
                  <ArrowRight size={16} className="text-primary" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
