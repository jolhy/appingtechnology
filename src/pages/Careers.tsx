import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight, Upload, FileText, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useState, useCallback, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

import bukaPuasa from "@/assets/careers/buka-puasa.jpg";
import networking from "@/assets/careers/networking.png";
import teamDinner from "@/assets/careers/team-dinner.jpg";
import cipsprint from "@/assets/careers/cipsprint.png";
import teamFun from "@/assets/careers/team-fun.jpg";

const carouselImages = [
  { src: bukaPuasa, alt: "Team buka puasa gathering" },
  { src: networking, alt: "Networking event" },
  { src: teamDinner, alt: "Team dinner celebration" },
  { src: cipsprint, alt: "CIPSprint event" },
  { src: teamFun, alt: "Team fun moments" },
];

const openings = [
  { title: "Senior AI Engineer", department: "Engineering", location: "Remote", type: "Full-time", description: "Build intelligent automation systems for business process outsourcing." },
  { title: "BPO Operations Manager", department: "Operations", location: "Hybrid", type: "Full-time", description: "Oversee outsourced teams and ensure exceptional service delivery." },
  { title: "Client Success Manager", department: "Customer Success", location: "Remote", type: "Full-time", description: "Be the trusted advisor for our outsourcing clients." },
  { title: "Talent Acquisition Lead", department: "HR", location: "Remote", type: "Full-time", description: "Source and hire top talent for our outsourcing operations." },
  { title: "Business Development Rep", department: "Sales", location: "Hybrid", type: "Full-time", description: "Connect with businesses looking to outsource their processes." },
];

const Careers = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setCvFile(file);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCvFile(file);
  }, []);

  return (
    <div className="min-h-screen">
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
                Help businesses outsource smarter with AI and world-class talent.
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
                <Carousel opts={{ loop: true }} className="w-full">
                  <CarouselContent>
                    {carouselImages.map((img, i) => (
                      <CarouselItem key={i}>
                        <div className="overflow-hidden rounded-2xl aspect-video">
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
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
                <p className="text-muted-foreground text-lg mb-8">Drop your CV here and we'll reach out when we find the perfect fit for you.</p>

                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-10 transition-all duration-200 ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : cvFile
                        ? "border-primary/40 bg-primary/[0.03]"
                        : "border-border hover:border-primary/40 hover:bg-muted/50"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  {cvFile ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText size={24} className="text-primary" />
                      <span className="text-foreground font-medium">{cvFile.name}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCvFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="ml-2 p-1 rounded-full hover:bg-muted transition-colors"
                      >
                        <X size={16} className="text-muted-foreground" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Upload size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium mb-1">
                          Drag & drop your CV here
                        </p>
                        <p className="text-muted-foreground text-sm">or click to browse · PDF, DOC, DOCX</p>
                      </div>
                    </div>
                  )}
                </div>

                {cvFile && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                    <Button size="xl" className="rounded-full px-10" asChild>
                      <Link to="/contact">Submit Application<ArrowRight size={18} /></Link>
                    </Button>
                  </motion.div>
                )}
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
