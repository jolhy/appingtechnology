import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Apping transformed how we approach marketing. The AI-generated content looks professional, and the monthly meetings keep us on track. Our social engagement has tripled!",
    author: "Sarah Chen",
    role: "Owner, Bloom Boutique",
    rating: 5,
  },
  {
    quote: "As a small business, we couldn't afford a marketing agency. Apping gave us enterprise-level marketing at a price we could actually manage. Game changer.",
    author: "Marcus Johnson",
    role: "CEO, TechFix Solutions",
    rating: 5,
  },
  {
    quote: "The monthly strategy sessions are incredibly valuable. They actually listen, adapt, and bring fresh ideas. It feels like having an in-house marketing team.",
    author: "Lisa Martinez",
    role: "Director, Healthy Harvest Cafe",
    rating: 5,
  },
];

const stats = [
  { value: "95%", label: "Client Retention" },
  { value: "40%", label: "Avg. Cost Savings" },
  { value: "2.5x", label: "Engagement Increase" },
  { value: "30", label: "Days to See Results" },
];

const SuccessSection = () => {
  return (
    <section id="success" className="py-20 md:py-32 gradient-hero-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Client Success
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Apping.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-card border border-border shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Quote size={20} className="text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/50 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient-hero mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
