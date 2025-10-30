import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract digital background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 500+ Businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-tight">
            Build Your Digital Future
            <br />
            <span className="text-foreground">with WebCraft</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            We create professional, fast, and visually appealing websites that help businesses thrive in the digital world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="lg">
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
