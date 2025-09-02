import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Star } from "lucide-react";
import beautyAnimation from "@/assets/skincare.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden pt-20 mx-10">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-10 text-primary/20 animate-float" size={24} />
        <Heart
          className="absolute top-32 right-20 text-accent/20 animate-float"
          size={20}
          style={{ animationDelay: "1s" }}
        />
        <Star
          className="absolute bottom-40 left-20 text-primary-glow/20 animate-float"
          size={16}
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="absolute bottom-20 right-10 text-accent-glow/20 animate-float"
          size={28}
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Beauty <span className="text-transparent bg-gradient-primary bg-clip-text">Journey</span> Starts Here
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Experience the finest dermatological and aesthetic treatments at Dr. Mayada's clinic, where science meets
              beauty and your confidence blooms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="hero" size="xl">
                <Link to="/appointment">Book Your Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#services">Explore Services</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-evenly animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute inset-0 blur-2xl opacity-20 animate-glow"></div>
              <img
                src={beautyAnimation}
                alt="Beauty and Dermatology Services"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain animate-float hover:scale-105 transition-spring cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
