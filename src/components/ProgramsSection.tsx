import { Button } from "@/components/ui/button";
import { Clock, Calendar, Award, ArrowRight } from "lucide-react";

const ProgramsSection = () => {
  const degrees = [
    {
      title: "BSc in Artificial Intelligence",
      duration: "4 Years",
      type: "Undergraduate",
      description: "Comprehensive foundation in AI, machine learning, and intelligent systems design.",
      highlights: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Robotics"],
    },
    {
      title: "MSc in Data Science & AI",
      duration: "2 Years",
      type: "Postgraduate",
      description: "Advanced study in data analytics, AI research methodologies, and applied AI solutions.",
      highlights: ["Advanced ML", "Research Methods", "Big Data", "AI Ethics"],
    },
  ];

  const shortCourses = [
    {
      title: "Python for Data Science",
      duration: "8 Weeks",
      price: "Contact for pricing",
    },
    {
      title: "Introduction to Machine Learning",
      duration: "6 Weeks",
      price: "Contact for pricing",
    },
    {
      title: "Deep Learning Fundamentals",
      duration: "10 Weeks",
      price: "Contact for pricing",
    },
    {
      title: "AI for Business Leaders",
      duration: "4 Weeks",
      price: "Contact for pricing",
    },
    {
      title: "Computer Vision Workshop",
      duration: "5 Weeks",
      price: "Contact for pricing",
    },
    {
      title: "Natural Language Processing",
      duration: "8 Weeks",
      price: "Contact for pricing",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-secondary mb-4">
            <span className="w-8 h-[2px] bg-secondary"></span>
            <span className="font-medium uppercase tracking-wider text-sm">Our Programs</span>
            <span className="w-8 h-[2px] bg-secondary"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Academic Excellence in AI
          </h2>
          <p className="text-muted-foreground text-lg">
            From foundational courses to advanced degrees, we offer comprehensive pathways 
            to master artificial intelligence and emerging technologies.
          </p>
        </div>

        {/* Degree Programs */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
            Degree Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {degrees.map((degree) => (
              <div
                key={degree.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {degree.type}
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                  {degree.title}
                </h4>
                <p className="text-muted-foreground mb-4">{degree.description}</p>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {degree.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Accredited
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {degree.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <Button variant="navyOutline" className="w-full">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Short Courses */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
            Professional Short Courses
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {shortCourses.map((course) => (
              <div
                key={course.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border group"
              >
                <div className="flex items-center gap-2 text-secondary mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {course.title}
                </h4>
                <p className="text-sm text-muted-foreground">{course.price}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="gold" size="lg">
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
