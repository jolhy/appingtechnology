import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight, Users, Heart, Rocket, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";

const perks = [
  { icon: Rocket, title: "Growth Opportunities", description: "Learn and grow at the forefront of AI and BPO." },
  { icon: Users, title: "Collaborative Culture", description: "Work with talented, supportive people worldwide." },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible schedules and remote-first options." },
  { icon: Coffee, title: "Great Benefits", description: "Competitive salary, health coverage, and more." },
];

const openings = [
  { title: "Senior AI Engineer", department: "Engineering", location: "Remote", type: "Full-time", description: "Build intelligent automation systems for business process outsourcing." },
  { title: "BPO Operations Manager", department: "Operations", location: "Hybrid", type: "Full-time", description: "Oversee outsourced teams and ensure exceptional service delivery." },
  { title: "Client Success Manager", department: "Customer Success", location: "Remote", type: "Full-time", description: "Be the trusted advisor for our outsourcing clients." },
  { title: "Talent Acquisition Lead", department: "HR", location: "Remote", type: "Full-time", description: "Source and hire top talent for our outsourcing operations." },
  { title: "Business Development Rep", department: "Sales", location: "Hybrid", type: "Full-time", description: "Connect with businesses looking to outsource their processes." },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-24 md:py-36 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Careers</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl text-foreground mb-6">
                Join <span className="text-primary">Apping Technology</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Help businesses outsource smarter with AI and world-class talent.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Button size="xl" asChild className="rounded-full px-10">
                  <a href="#openings">View Open Positions<ArrowRight size={18} /></a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why Join Us</p>
                <h2 className="text-4xl md:text-5xl text-foreground">More than just a job</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, i) => (
                <ScrollReveal key={perk.title} delay={i * 0.08}>
                  <motion.div className="text-center p-6 rounded-2xl bg-background border border-border/60" whileHover={{ y: -4 }}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <perk.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{perk.title}</h3>
                    <p className="text-muted-foreground text-sm">{perk.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="openings" className="py-24 md:py-32 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Open Positions</p>
                <h2 className="text-4xl md:text-5xl text-foreground">Find your next role</h2>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto space-y-4">
              {openings.map((job, i) => (
                <ScrollReveal key={job.title} delay={i * 0.06}>
                  <motion.div
                    className="p-6 md:p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl text-foreground mb-1">{job.title}</h3>
                        <p className="text-primary text-sm font-medium">{job.department}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                          <MapPin size={12} />{job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                          <Clock size={12} />{job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-[15px] mb-4">{job.description}</p>
                    <Button variant="outline" size="sm" asChild className="rounded-full">
                      <Link to="/contact">Apply Now<Briefcase size={14} /></Link>
                    </Button>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl text-foreground mb-6">Don't see the right role?</h2>
                <p className="text-muted-foreground text-lg mb-8">We're always looking for talented people. Send us your resume.</p>
                <Button size="xl" asChild className="rounded-full px-10">
                  <Link to="/contact">Get in Touch<ArrowRight size={18} /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
