import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";
import AnimatedCounter from "./motion/AnimatedCounter";
import OrganicShape from "./decorative/OrganicShape";

const testimonials = [
  { quote: "Apping Technology handles our entire customer support with AI chatbots and a dedicated team. Response times dropped by 80% and our customers love it.", author: "Sarah Chen", role: "COO, Bloom Boutique", rating: 5 },
  { quote: "We outsourced our accounting and HR to Apping. The combination of AI automation and skilled professionals saved us over 40% in operational costs.", author: "Marcus Johnson", role: "CEO, TechFix Solutions", rating: 5 },
  { quote: "Their talent outsourcing for our sales team was a game changer. We scaled from 2 to 15 reps in three months without the hiring headaches.", author: "Lisa Martinez", role: "Director, Healthy Harvest Co.", rating: 5 },
];

const stats = [
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 50, suffix: "%", label: "Avg. Cost Savings" },
  { value: 500, suffix: "+", label: "Professionals Deployed" },
  { value: 30, suffix: "", label: "Days to Full Deployment" },
];

const SuccessSection = () => {
  return (
    <section id="success" className="py-24 md:py-36 bg-card relative overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <OrganicShape
        className="w-[350px] h-[350px] -bottom-24 -right-24 bg-primary/[0.03]"
        variant="blob"
      />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">Client Success</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-5">
              Trusted by <span className="italic">growing</span> businesses
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">See how companies outsource smarter with Apping Technology.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.author} delay={i * 0.1}>
              <motion.div
                className="relative p-8 rounded-2xl bg-background border border-border/60 h-full flex flex-col overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Decorative quote mark */}
                <Quote size={48} className="absolute -top-1 -right-1 text-primary/[0.06] rotate-180" />
                
                <div className="flex gap-0.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 flex-1 italic">"{testimonial.quote}"</p>
                <div className="pt-5 border-t border-border/60">
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <motion.div
                className="text-center p-6 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Subtle decorative line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-primary/20" />
                <p className="text-4xl md:text-5xl font-serif text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
