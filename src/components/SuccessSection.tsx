import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";
import AnimatedCounter from "./motion/AnimatedCounter";
import OrganicShape from "./decorative/OrganicShape";

const testimonials = [
  { quote: "Apping has implemented an integrated system seamlessly following our unique requirements across multiple departments. Now we have all data in one platform. No more scattered data and we're able to analyze reports for every departments; enabling us to better understand how to make informed decisions.", author: "Triny Kong", role: "Malaysia", rating: 5 },
  { quote: "The sales operating system is excellent and very easy to use, it has all the necessary entries and records we need and we are now able to record our sales much faster. The team always responded to us promptly and addressed our issues quickly and responsibly. Everyone is very nice, professional & easy to work with. We are very confident in the operating system & really appreciative of the team.", author: "Angela Wong", role: "Hong Kong", rating: 5 },
  { quote: "Our tailor-made application for registering orders was out of date and always crashed. So we sought help from Apping who was able to meet our needs. Apping provided us with a simple yet sophisticated application customized to meet our needs in a very short period of time.", author: "Abdo Elaloudi", role: "Hong Kong", rating: 5 },
];


const SuccessSection = () => {
  return (
    <section id="success" className="py-14 md:py-20 bg-card relative overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <OrganicShape
        className="w-[350px] h-[350px] -bottom-24 -right-24 bg-primary/[0.03]"
        variant="blob"
      />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Client Success</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-4">
              Trusted by <span className="italic">growing</span> businesses
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">See how companies outsource smarter with Apping Technology.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
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

        <ScrollReveal delay={0.3}>
          <p className="text-center text-2xl md:text-3xl italic text-foreground/80 font-serif max-w-2xl mx-auto">
            "We believe that it takes great people to deliver great products"
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default SuccessSection;
