import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart, Instagram, Facebook, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About Dr. Mayada", path: "/#about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Book Appointment", path: "/appointment" }
  ];

  const services = [
    "Hydra Facial",
    "Plasma PRP",
    "Botox Treatment",
    "Laser Therapy",
    "Body Fillers",
    "Skin Care"
  ];

  return (
    <footer className="bg-navy text-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Dr. Mayada Derma Beauty Clinic"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-accent">
                  Dr. Mayada
                </h3>
                <p className="text-sm text-navy-light">Derma Beauty Clinic</p>
              </div>
            </div>
            <p className="text-navy-light mb-6 text-sm leading-relaxed">
              Where science meets beauty and your confidence blooms. Experience
              premium dermatological and aesthetic treatments in a luxurious,
              feminine environment.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="border-navy-light hover:bg-primary hover:border-primary"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-navy-light hover:bg-primary hover:border-primary"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-navy-light hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">
              Popular Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-navy-light text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-navy-light">
                  <p>123 Beauty Avenue</p>
                  <p>Medical District</p>
                  <p>City, State 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-navy-light">
                  +1 (555) 123-4567
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-navy-light">
                  info@drmayada.com
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild variant="gold" size="sm" className="w-full">
                <Link to="/appointment">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-navy-light">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p>
                &copy; 2024 Dr. Mayada Derma Beauty Clinic. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span>Designed and Built by</span>
                <a
                  href="https://www.linkedin.com/in/simon-akuien-atem-710895290 "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-smooth font-medium"
                >
                  Simon
                </a>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer border border-primary/20 hover:border-primary"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;