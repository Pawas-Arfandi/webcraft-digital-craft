import { Target, Lightbulb, Shield, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses with cutting-edge web solutions that drive growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace the latest technologies to deliver future-proof websites."
    },
    {
      icon: Shield,
      title: "Trustworthy",
      description: "Your success is our priority. We build long-lasting partnerships."
    },
    {
      icon: Rocket,
      title: "Results Focused",
      description: "Every project is optimized for performance, speed, and conversions."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">WebCraft</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not just developers – we're digital craftsmen dedicated to building exceptional web experiences. 
            Our approach combines creativity, technical expertise, and a deep understanding of your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth border border-border hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
