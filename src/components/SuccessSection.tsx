import { Star, Quote, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./motion/ScrollReveal";
import AnimatedCounter from "./motion/AnimatedCounter";
import OrganicShape from "./decorative/OrganicShape";
import teamPhoto from "@/assets/team-photo.png";

const testimonials = [
  { quote: "Apping has implemented an integrated system seamlessly following our unique requirements across multiple departments. Now we have all data in one platform. No more scattered data and we're able to analyze reports for every departments; enabling us to better understand how to make informed decisions.", author: "Triny Kong", role: "Malaysia", rating: 5 },
  { quote: "The sales operating system is excellent and very easy to use, it has all the necessary entries and records we need and we are now able to record our sales much faster. The team always responded to us promptly and addressed our issues quickly and responsibly. Everyone is very nice, professional & easy to work with. We are very confident in the operating system & really appreciative of the team.", author: "Angela Wong", role: "Hong Kong", rating: 5 },
  { quote: "Our tailor-made application for registering orders was out of date and always crashed. So we sought help from Apping who was able to meet our needs. Apping provided us with a simple yet sophisticated application customized to meet our needs in a very short period of time.", author: "Abdo Elaloudi", role: "Hong Kong", rating: 5 },
];

const awards = [
  { year: "2026", title: "Top 30 Finalist", event: "Alibaba Jumpstarter (2nd consecutive year)" },
  { year: "2025", title: "HK Tech300 Top 10 Winner", event: "USD 140K investment" },
  { year: "2025", title: "Top 30 Finalist", event: "Alibaba Jumpstarter Global Championship" },
  { year: "2025", title: "Top 10 Finalist", event: "Hainan SEA AI Hardware Battle" },
  { year: "2024", title: "Major Contracts", event: "Airbus, LHDN & JKR" },
  { year: "2022", title: "Cradle Fund CIP Sprint", event: "Top 1%" },
];


const SuccessSection = () => {
  return (
    <section id="success" aria-label="Client success stories" className="py-14 md:py-20 bg-card relative overflow-hidden grain-overlay">
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

        <ScrollReveal delay={0.4}>
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={teamPhoto}
                  alt="The Apping Technology team"
                  className="w-full h-auto object-cover"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              <div>
                <p className="text-foreground font-semibold text-lg mb-1">
                  Award-Winning Company in APAC
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                  Started with a background in ERP (Enterprise Resource Planning) software — and has since evolved into a full-service outsourcing partner.
                </p>

                <div className="space-y-4">
                  {awards.map((award) => (
                    <div key={award.year} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Trophy size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-[15px]">
                          <span className="text-primary">{award.year}</span> — {award.title}
                        </p>
                        <p className="text-muted-foreground text-sm">{award.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default SuccessSection;
