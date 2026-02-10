import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";
import AnimatedCounter from "./motion/AnimatedCounter";
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer";

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
    <section id="success" className="py-20 md:py-32 gradient-hero-light relative overflow-hidden">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Client Success</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Growing Businesses</h2>
            <p className="text-muted-foreground text-lg">Don't just take our word for it. Here's what our clients have to say about working with Apping.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <motion.div
                className="p-8 rounded-2xl bg-card border border-border shadow-soft h-full"
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px hsl(240 25% 12% / 0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Quote size={20} className="text-primary" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring" }}>
                      <Star size={18} className="text-accent fill-accent" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="text-center p-6 rounded-xl bg-card/50 border border-border/50"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient-hero mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SuccessSection;
