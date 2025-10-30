import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "WebCraft transformed our online presence completely. The team delivered a stunning website that perfectly captures our brand and has significantly increased our leads.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Owner, Chen's Restaurant",
      content: "Outstanding service from start to finish. Our new website looks amazing and our online orders have tripled since launch. Highly recommend WebCraft!",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Creative Director, Studio Nine",
      content: "Professional, creative, and incredibly responsive. WebCraft didn't just build us a website – they became true partners in our digital success.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it – hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-large transition-smooth animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
