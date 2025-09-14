import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Heart, Star, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Dermatologist",
      description: "Board-certified with years of specialized training in dermatology and aesthetic medicine.",
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Each treatment plan is customized to your unique skin type and aesthetic goals.",
    },
    {
      icon: Heart,
      title: "Passionate About Beauty",
      description: "Dedicated to helping you achieve your confidence and natural radiance.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Using only the finest medical-grade products and latest technology.",
    },
    {
      icon: Clock,
      title: "Convenient Hours",
      description: "Flexible scheduling to accommodate your busy lifestyle and needs.",
    },
    {
      icon: Shield,
      title: "Safe & Sterile",
      description: "Maintaining the highest standards of safety and hygiene in all procedures.",
    },
  ];

  return (
  <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet <span className="text-transparent bg-gradient-primary bg-clip-text">Dr. Mayada</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Welcome to Dr. Mayada Derma Beauty Clinic, where artistry meets medical expertise. With a passion for
                enhancing natural beauty and a commitment to excellence, Dr. Mayada brings years of specialized training
                in dermatology and aesthetic medicine to help you achieve your beauty goals.
              </p>

              <p className="leading-relaxed">
                Our clinic combines the latest in medical technology with a warm, feminine touch to create a sanctuary
                where you can feel pampered, cared for, and confident. Every treatment is carefully tailored to your
                unique needs, ensuring results that enhance your natural radiance while maintaining the highest
                standards of safety.
              </p>

              <p className="leading-relaxed">
                From advanced skin rejuvenation to cosmetic enhancements, we believe that everyone deserves to feel
                beautiful and confident in their own skin. Let us help you bloom into your most radiant self.
              </p>
            </div>

            <Button asChild variant="hero" size="lg">
              <Link to="/appointment">Book Your Consultation</Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group hover:shadow-card transition-spring hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                      <IconComponent className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto bg-background/50 backdrop-blur-sm shadow-card animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Dr. Mayada's clinic is a haven of beauty and professionalism. The results exceeded my expectations, and
                the caring, feminine atmosphere made me feel completely comfortable throughout my journey. I can't
                recommend this clinic enough!"
              </blockquote>
              <cite className="text-sm font-medium text-primary">— Sarah M., Happy Client</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
