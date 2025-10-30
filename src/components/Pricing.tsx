import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      description: "Perfect for small businesses and startups",
      features: [
        "5 Page Website",
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "1 Month Support",
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "$2,499",
      description: "Most popular for growing businesses",
      features: [
        "10 Page Website",
        "Advanced Design",
        "Advanced SEO",
        "Blog Integration",
        "E-Commerce Ready",
        "3 Months Support",
        "Analytics Setup"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited Pages",
        "Custom Features",
        "Premium SEO",
        "API Integration",
        "Advanced E-Commerce",
        "12 Months Support",
        "Dedicated Account Manager",
        "Performance Optimization"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative animate-fade-in-up transition-smooth ${
                plan.highlighted 
                  ? 'border-primary shadow-large scale-105 bg-gradient-to-b from-primary/5 to-transparent' 
                  : 'hover:shadow-medium'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={plan.highlighted ? "default" : "outline"} 
                  className="w-full" 
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
