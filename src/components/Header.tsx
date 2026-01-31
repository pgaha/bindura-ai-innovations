import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Programs", href: "#programs" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={`${baseUrl}buselog.png`}
            alt="CAEIT Logo"
            className="w-10 h-10"
          />
          <div
            className={`hidden sm:block transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <p className="font-serif font-semibold text-sm leading-tight">
              Centre for AI &
            </p>
            <p className="font-serif font-semibold text-sm leading-tight">
              Emerging Technologies
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-secondary ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? "gold" : "hero"} size="lg">
            Apply Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={`w-6 h-6 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card shadow-lg animate-fade-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground hover:text-secondary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="gold" size="lg" className="w-full mt-2">
              Apply Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;