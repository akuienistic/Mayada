import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Droplets,
  Zap,
  Scissors,
  Syringe,
  Pill,
  HandMetal,
  Eye,
  Palette,
  Users,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Pharmaceuticals & Cosmetics",
      description: "Custom formulation of medical-grade skincare and cosmetic products tailored to your unique needs.",
      category: "Formulation",
    },
    {
      icon: Droplets,
      title: "Hydra Facial & Deep Cleaning",
      description: "Advanced hydrating facial treatment that cleanses, exfoliates, and nourishes your skin deeply.",
      category: "Facial Care",
    },
    {
      icon: Scissors,
      title: "Hair Stroke",
      description: "Precision hair stroke technique for natural-looking eyebrow enhancement and hair line correction.",
      category: "Aesthetic",
    },
    {
      icon: Zap,
      title: "Fractional Laser",
      description: "Advanced laser technology for skin resurfacing, scar reduction, and anti-aging treatments.",
      category: "Laser Therapy",
    },
    {
      icon: Shield,
      title: "Skin Tags Removal",
      description: "Safe and effective removal of skin tags using advanced medical techniques.",
      category: "Dermatology",
    },
    {
      icon: Syringe,
      title: "Body Filler",
      description: "Professional body contouring and enhancement using premium dermal fillers.",
      category: "Injectable",
    },
    {
      icon: HandMetal,
      title: "Hands Rejuvenation",
      description: "Complete hand rejuvenation using fillers and plasma therapy for youthful-looking hands.",
      category: "Anti-Aging",
    },
    {
      icon: Sparkles,
      title: "Botox Treatment",
      description: "Expert Botox injections for wrinkle reduction and facial rejuvenation.",
      category: "Injectable",
    },
    {
      icon: Palette,
      title: "Glutathione Injection",
      description: "Skin brightening and antioxidant therapy for radiant, healthy-looking skin.",
      category: "IV Therapy",
    },
    {
      icon: Users,
      title: "Butt Enhancement",
      description: "Non-surgical butt enhancement using vacuum therapy for natural-looking results.",
      category: "Body Contouring",
    },
    {
      icon: Heart,
      title: "Complete Skin Care",
      description: "Comprehensive skin care services including analysis, treatment planning, and maintenance.",
      category: "Skin Care",
    },
    {
      icon: Eye,
      title: "Lashes Services",
      description: "Professional lash enhancement, extensions, and removal services for beautiful eyes.",
      category: "Beauty",
    },
  ];

  const categories = [...new Set(services.map((service) => service.category))];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Premium <span className="text-transparent bg-gradient-gold bg-clip-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of advanced dermatological and aesthetic treatments, designed to enhance
            your natural beauty and boost your confidence.
          </p>
        </div>

        {/* Service Categories Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <span key={category} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {category}
            </span>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-card transition-spring hover:-translate-y-2 border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">{service.title}</CardTitle>
                  <div className="text-xs text-accent font-medium">{service.category}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
