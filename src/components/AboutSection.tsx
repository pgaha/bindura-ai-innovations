import { Target, Eye, Cpu, Database, Brain, Shield } from "lucide-react";
import aiLabImage from "@/assets/ai-lab.jpg";

const AboutSection = () => {
  const focusAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and predictive analytics",
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description: "Image processing, object detection, and visual AI systems",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Big data analytics, visualization, and data engineering",
    },
    {
      icon: Shield,
      title: "AI Ethics",
      description: "Responsible AI development and governance frameworks",
    },
  ];

  return (
    <section id="about" className="py-24 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={aiLabImage}
                alt="AI Lab at Bindura University"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-serif text-xl">
                  State-of-the-art AI Research Laboratory
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-2 text-secondary mb-4">
              <span className="w-8 h-[2px] bg-secondary"></span>
              <span className="font-medium uppercase tracking-wider text-sm">About Us</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Advancing AI Excellence in Africa
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The Centre for Artificial Intelligence and Emerging Technologies (CAIET) at Bindura University 
              is a premier hub for AI education, research, and innovation. We are dedicated to developing 
              world-class AI talent and delivering transformative technology solutions for government, 
              industry, and academia.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To be Africa's leading centre for AI education and applied research.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    Empowering communities through ethical and impactful AI solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <area.icon className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{area.title}</p>
                    <p className="text-xs text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
