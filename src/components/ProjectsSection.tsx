import { Building2, Landmark, Briefcase, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import researchTeamImage from "@/assets/research-team.jpg";

const ProjectsSection = () => {
  const projectCategories = [
    {
      icon: Landmark,
      title: "Government Projects",
      description: "Partnering with government agencies to develop AI solutions for public services, policy analysis, and national development initiatives.",
      projects: ["Smart Agriculture Systems", "Healthcare AI Analytics", "E-Government Solutions"],
    },
    {
      icon: Building2,
      title: "University Research",
      description: "Conducting cutting-edge research in AI, publishing papers, and contributing to the global body of AI knowledge.",
      projects: ["NLP for Local Languages", "Climate Prediction Models", "Educational AI Tools"],
    },
    {
      icon: Briefcase,
      title: "Industry Partnerships",
      description: "Collaborating with private sector organizations to solve real-world business challenges using AI and emerging technologies.",
      projects: ["Fintech AI Solutions", "Manufacturing Automation", "Retail Analytics"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-secondary mb-4">
            <span className="w-8 h-[2px] bg-secondary"></span>
            <span className="font-medium uppercase tracking-wider text-sm">Our Work</span>
            <span className="w-8 h-[2px] bg-secondary"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Projects & Partnerships
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Delivering impactful AI solutions for government, academia, and industry partners 
            across Zimbabwe and the region.
          </p>
        </div>

        {/* Image and Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={researchTeamImage}
              alt="CAIET Research Team"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground font-serif text-xl mb-2">
                Collaborative Research Excellence
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Our team of researchers and students work together on transformative AI projects.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {projectCategories.map((category) => (
              <div
                key={category.title}
                className="bg-primary-foreground/5 backdrop-blur rounded-xl p-6 border border-primary-foreground/10 hover:border-secondary/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2 flex items-center gap-2">
                      {category.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.projects.map((project) => (
                        <span
                          key={project}
                          className="px-3 py-1 bg-primary-foreground/10 text-primary-foreground text-xs rounded-full"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-primary-foreground/70 mb-6">
            Interested in partnering with us on an AI project?
          </p>
          <Button variant="hero" size="xl">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
