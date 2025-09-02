import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
        return;
      }
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/contact" },
  ];

  // ...existing code...
  // Ensure anchor links use handleNavigation for smooth scroll
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path.replace("/#", ""));
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-spring">
            <img src={logo} alt="Dr. Mayada Derma Beauty Clinic" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-accent">Dr. Mayada</h1>
              <p className="text-xs text-muted-foreground">Derma Beauty Clinic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.path.startsWith("/#")) {
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.path)}
                    className={`transition-smooth hover:text-primary ${
                      isActive(link.path) ? "text-primary font-medium" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-smooth hover:text-primary ${
                    isActive(link.path) ? "text-primary font-medium" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Button asChild variant="hero" size="sm">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-card animate-fade-in-up">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                if (link.path.startsWith("/#")) {
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavigation(link.path)}
                      className={`block py-2 transition-smooth text-left w-full ${
                        isActive(link.path) ? "text-primary font-medium" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block py-2 transition-smooth ${
                      isActive(link.path) ? "text-primary font-medium" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button asChild variant="hero" className="w-full mt-4">
                <Link to="/appointment" onClick={() => setIsOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
