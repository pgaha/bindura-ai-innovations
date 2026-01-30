import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: "BSc in Artificial Intelligence", href: "#" },
      { name: "MSc in Data Science & AI", href: "#" },
      { name: "Short Courses", href: "#programs" },
      { name: "Corporate Training", href: "#" },
    ],
    resources: [
      { name: "Research Papers", href: "#" },
      { name: "AI Blog", href: "#" },
      { name: "Student Portal", href: "#" },
      { name: "Library Resources", href: "#" },
    ],
    about: [
      { name: "Our Team", href: "#" },
      { name: "Facilities", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Careers", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-serif font-bold text-secondary-foreground text-xl">BU</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-lg">Centre for AI &</p>
                <p className="font-serif font-semibold text-lg">Emerging Technologies</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Advancing AI education, research, and innovation at Bindura University of Science Education. 
              Building Zimbabwe's future technology leaders.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Bindura University - Centre for AI & Emerging Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Terms of Service
            </a>
            <a
              href="mailto:caiet@buse.ac.zw"
              className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              caiet@buse.ac.zw
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
