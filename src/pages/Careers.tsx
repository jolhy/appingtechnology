import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SEO from "@/components/SEO";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

import bukaPuasa from "@/assets/careers/buka-puasa.jpg";
import networking from "@/assets/careers/networking.png";
import teamDinner from "@/assets/careers/team-dinner.jpg";
import cipsprint from "@/assets/careers/cipsprint.png";
import teamFun from "@/assets/careers/team-fun.jpg";

const carouselImages = [
  { src: bukaPuasa, alt: "Apping Technology team buka puasa gathering celebrating company culture" },
  { src: networking, alt: "Apping Technology networking event for business professionals" },
  { src: teamDinner, alt: "Apping Technology team dinner celebration building team spirit" },
  { src: cipsprint, alt: "CIPSprint innovation event showcasing technology startups" },
  { src: teamFun, alt: "Apping Technology team fun moments at the office" },
];

const openings = [
  { title: "Creative Marketing Associate", department: "Marketing", location: "Remote", type: "Full-time", description: "Create compelling marketing campaigns and content that drive brand awareness and engagement using AI tools and creative strategies." },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Careers at Apping Technology | Join Our Team"
        description="Join Apping Technology and help businesses outsource smarter with AI and talent. Explore open positions in marketing, operations, AI, and technology across Malaysia and Hong Kong."
        keywords="careers Apping Technology, jobs AI company, marketing jobs Malaysia, technology careers Hong Kong, BPO careers, AI jobs remote"
        canonical="/careers"
      />
      <Header />
      <main className="pt-20">
        <section className="py-14 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Careers</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl text-foreground mb-4">
                Join <span className="text-primary">Apping Technology</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Help businesses outsource smarter with <strong className="text-foreground">AI automation</strong> and world-class talent. Build your career at one of APAC's fastest-growing BPO and technology companies.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4">
                <Button size="xl" asChild className="rounded-full px-10">
                  <a href="#cv-drop">Drop Your CV<ArrowRight size={18} /></a>
                </Button>
                <Button size="xl" variant="outline" asChild className="rounded-full px-10">
                  <a href="#openings">View Open Positions</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Life at Apping</p>
                <h2 className="text-4xl md:text-5xl text-foreground">Our Culture</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]} className="w-full">
                  <CarouselContent>
                    {carouselImages.map((img, i) => (
                      <CarouselItem key={i} className="basis-2/3 md:basis-1/2">
                        <div className="overflow-hidden rounded-2xl aspect-video">
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="openings" className="py-14 md:py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-10">
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

        <section id="cv-drop" className="py-14 md:py-20 bg-card">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl text-foreground mb-4">Don't see the right role?</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Email us at{" "}
                  <a href="mailto:recruitment@appingtechnology.com" className="text-primary hover:underline font-medium">
                    recruitment@appingtechnology.com
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl text-foreground mb-6 text-center">Why Work at <span className="italic text-primary/80">Apping Technology</span></h2>
                <div className="space-y-4 text-muted-foreground text-[17px] leading-relaxed">
                  <p>
                    At Apping Technology, we're building the future of <strong className="text-foreground">business process outsourcing</strong> by combining AI automation with human expertise. Our team works on cutting-edge AI projects, serves clients across industries, and enjoys a collaborative, supportive culture that values innovation and growth.
                  </p>
                  <p>
                    We offer remote and flexible working arrangements, professional development opportunities, and the chance to work with leading-edge <strong className="text-foreground">AI tools for business</strong>. Our award-winning team has been recognised at Alibaba Jumpstarter, HK Tech300, and other prestigious competitions across the APAC region.
                  </p>
                  <p>
                    Learn more <Link to="/about" className="text-primary hover:underline font-medium">about our company</Link>, explore our <Link to="/services" className="text-primary hover:underline font-medium">outsourcing services</Link>, or <Link to="/contact" className="text-primary hover:underline font-medium">get in touch</Link> with us directly.
                  </p>
                </div>
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
