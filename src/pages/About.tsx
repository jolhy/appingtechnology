import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import appingLogo from "@/assets/apping-logo.png";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy, every decision is focused on delivering measurable results for your business.",
  },
  {
    icon: Users,
    title: "Partnership First",
    description: "We're not just a vendor — we're an extension of your team, invested in your success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We leverage cutting-edge AI to make enterprise-level marketing accessible to growing businesses.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality matters. We deliver professional content that represents your brand with pride.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "15+ years in digital marketing and AI innovation.",
  },
  {
    name: "Sarah Miller",
    role: "Head of AI Development",
    bio: "Former ML engineer at leading tech companies.",
  },
  {
    name: "James Wilson",
    role: "Client Success Director",
    bio: "Passionate about helping SMEs achieve their goals.",
  },
  {
    name: "Maria Santos",
    role: "Creative Director",
    bio: "Award-winning designer with a keen eye for brands.",
  },
];

const About = () => {
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
              <div className="flex justify-center mb-8">
                <img src={appingLogo} alt="Apping" className="h-24 w-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient-hero">Apping</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We believe every growing business deserves powerful marketing. Our mission is to make AI-driven marketing accessible, affordable, and effective for SMEs worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Empowering Growth Through Technology
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Apping Technology was founded with a simple observation: small and medium businesses often struggle to compete with larger corporations when it comes to marketing. The agencies are expensive, the tools are complex, and the time investment is massive.
                </p>
                <p>
                  We saw an opportunity. By harnessing the power of AI, we could create professional-quality marketing content at a fraction of the traditional cost. But we knew technology alone wasn't enough — businesses need a partner who understands their unique challenges and goals.
                </p>
                <p>
                  That's why we built Apping to be more than just a tool. We combine cutting-edge AI with genuine human partnership. Our monthly strategy meetings ensure we're always aligned with your vision, adapting and improving as your business grows.
                </p>
                <p>
                  Today, we're proud to serve hundreds of businesses across industries, helping them reach new customers, build stronger brands, and achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 gradient-hero-light">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <value.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the People Behind Apping
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A passionate team of marketers, engineers, and strategists dedicated to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
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
                Ready to Work Together?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join the hundreds of businesses growing with Apping. Let's create something amazing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
