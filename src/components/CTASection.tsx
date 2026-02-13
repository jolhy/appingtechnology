import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";
import OrganicShape from "./decorative/OrganicShape";

const CTASection = () => {
  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-primary/[0.02]" />

      {/* Decorative shapes */}
      <OrganicShape
        className="w-[500px] h-[500px] -top-48 -right-48 bg-primary/[0.04]"
        variant="blob"
      />
      <OrganicShape
        className="w-[300px] h-[300px] -bottom-24 -left-24 bg-primary/[0.03]"
        variant="blob"
      />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Ready to outsource <span className="italic text-primary">smarter?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free consultation and discover how AI automation and skilled talent can transform your operations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button size="xl" asChild className="rounded-full px-10">
                  <Link to="/contact">
                    Book Free Consultation
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="xl" asChild className="rounded-full px-10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              {["No commitment required", "30-minute discovery call", "Custom outsourcing plan"].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
