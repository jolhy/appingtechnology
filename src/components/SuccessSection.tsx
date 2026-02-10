import { Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";
import AnimatedCounter from "./motion/AnimatedCounter";

const testimonials = [
  { quote: "Apping transformed how we approach marketing. The AI-generated content looks professional, and the monthly meetings keep us on track. Our social engagement has tripled!", author: "Sarah Chen", role: "Owner, Bloom Boutique", rating: 5 },
  { quote: "As a small business, we couldn't afford a marketing agency. Apping gave us enterprise-level marketing at a price we could actually manage. Game changer.", author: "Marcus Johnson", role: "CEO, TechFix Solutions", rating: 5 },
  { quote: "The monthly strategy sessions are incredibly valuable. They actually listen, adapt, and bring fresh ideas. It feels like having an in-house marketing team.", author: "Lisa Martinez", role: "Director, Healthy Harvest Cafe", rating: 5 },
];

const stats = [
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 40, suffix: "%", label: "Avg. Cost Savings" },
  { value: 2.5, suffix: "x", label: "Engagement Increase" },
  { value: 30, suffix: "", label: "Days to See Results" },
];

const SuccessSection = () => {
  return (
    <section id="success" className="py-24 md:py-36 bg-card relative">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Client Success</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-5">Trusted by growing businesses</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Don't just take our word for it — here's what our clients say.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.author} delay={i * 0.1}>
              <motion.div
                className="p-8 rounded-2xl bg-background border border-border/60 h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 flex-1">"{testimonial.quote}"</p>
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
              <div className="text-center p-6">
                <p className="text-4xl md:text-5xl font-serif text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
