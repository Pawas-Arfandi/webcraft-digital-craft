import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Store",
      category: "Online Shopping",
      image: portfolio1,
      description: "Modern e-commerce platform with seamless checkout"
    },
    {
      title: "Corporate Website",
      category: "Business",
      image: portfolio2,
      description: "Professional corporate site with service showcase"
    },
    {
      title: "Creative Portfolio",
      category: "Portfolio",
      image: portfolio3,
      description: "Elegant portfolio for creative professionals"
    },
    {
      title: "Restaurant Website",
      category: "Food & Beverage",
      image: portfolio4,
      description: "Appetizing restaurant site with online menu"
    }
  ];

  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Recent projects that showcase our expertise and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-large transition-smooth animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                <div className="p-6 text-primary-foreground w-full">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium opacity-90">{project.category}</p>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <ExternalLink className="w-6 h-6" />
                  </div>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
