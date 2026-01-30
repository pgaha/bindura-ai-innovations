import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Lightbulb } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Bindura University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span className="font-medium text-sm">Bindura University of Science Education</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Centre for Artificial Intelligence & 
            <span className="text-gradient-gold block mt-2">Emerging Technologies</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Pioneering excellence in AI education, research, and innovation. 
            Shaping the future of technology in Zimbabwe and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl">
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Request Information
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">15+</p>
              <p className="text-sm text-primary-foreground/70">Courses Offered</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">500+</p>
              <p className="text-sm text-primary-foreground/70">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Lightbulb className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">25+</p>
              <p className="text-sm text-primary-foreground/70">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
