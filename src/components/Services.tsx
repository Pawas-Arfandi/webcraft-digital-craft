import { Palette, Code2, ShoppingCart, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Beautiful, user-friendly designs that capture your brand's essence and engage your audience.",
      features: ["UI/UX Design", "Responsive Layouts", "Brand Identity"]
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom-built websites using modern technologies for optimal performance and scalability.",
      features: ["React & Next.js", "Custom CMS", "API Integration"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Powerful online stores that convert visitors into customers with seamless checkout experiences.",
      features: ["Payment Gateway", "Inventory Management", "Shopping Cart"]
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Ongoing support and updates to keep your website secure, fast, and up-to-date.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-large transition-smooth border-border hover:border-primary/30 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
