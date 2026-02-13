import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./motion/ScrollReveal";

const faqs = [
  {
    question: "How much can BPO save my company?",
    answer:
      "While the exact cost savings will vary depending on the specific services outsourced, we can conduct a thorough analysis of your needs to identify potential cost reductions. Outsourcing can save you money on labor costs, infrastructure and technology.",
  },
  {
    question: "How will you ensure the security of my data?",
    answer:
      "We take data security very seriously. We have robust security protocols in place and adhere to industry best practices for data protection.",
  },
  {
    question: "How will you maintain the quality of service I expect?",
    answer:
      "We maintain high standards for quality and control. We have a proven track record of delivering high-quality services to our clients. We use a rigorous selection process for our employees and provide them with ongoing training and development.",
  },
  {
    question: "How will we communicate and collaborate effectively?",
    answer:
      "We believe in open communication and collaboration. We will assign a dedicated account manager who will be your single point of contact and ensure clear and consistent communication throughout the engagement.",
  },
  {
    question: "Can your Outsourcing service scale to meet my changing needs?",
    answer:
      "Our Outsourcing services are highly scalable and flexible. We can easily adjust our resources to meet your changing needs, whether you experience seasonal fluctuations or require additional support for new projects.",
  },
  {
    question: "What happens if I want to end the Outsourcing contract?",
    answer:
      "We understand that business needs can change. We will work with you to develop a clear exit strategy that is fair and minimizes disruption to your operations.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl text-foreground">
              You have questions,{" "}
              <span className="italic">we have answers</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-[17px] font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
