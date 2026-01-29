import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight, Users, Heart, Rocket, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const perks = [
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Learn and grow with a fast-moving team at the forefront of AI technology.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented, supportive people who celebrate each other's wins.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible schedules and remote options because life happens outside work too.",
  },
  {
    icon: Coffee,
    title: "Great Benefits",
    description: "Competitive salary, health coverage, and perks that matter to you.",
  },
];

const openings = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and improve our AI content generation systems. Experience with LLMs and computer vision preferred.",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    description: "Help our clients succeed with strategic campaign management and optimization.",
  },
  {
    title: "Client Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Be the trusted advisor for our SME clients, ensuring they get maximum value from our services.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Shape the future of our platform with intuitive, beautiful designs that clients love.",
  },
  {
    title: "Business Development Representative",
    department: "Sales",
    location: "Hybrid",
    type: "Full-time",
    description: "Connect with growing businesses and show them how Apping can transform their marketing.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 gradient-hero-light relative overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Careers at Apping
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Build the Future of <span className="text-gradient-hero">AI Marketing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Join a passionate team that's making powerful marketing accessible to growing businesses everywhere. We're always looking for talented people who want to make a difference.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="#openings">
                  View Open Positions
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Why Join Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                More Than Just a Job
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Apping, we believe great work comes from happy, supported people. Here's what you can expect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, index) => (
                <div
                  key={perk.title}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-5 shadow-glow">
                    <perk.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-20 md:py-28 gradient-hero-light">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Open Positions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Your Next Role
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our current openings and find the perfect fit for your skills and ambitions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openings.map((job, index) => (
                <div
                  key={job.title}
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {job.department}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-5">
                    {job.description}
                  </p>
                  <Button variant="outline" size="default" asChild>
                    <Link to="/contact">
                      Apply Now
                      <Briefcase size={16} />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're always interested in meeting talented people. Send us your resume and let us know how you'd like to contribute.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
