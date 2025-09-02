import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero" data-aos="fade-up">
        <Hero />
      </div>
      <div id="services" data-aos="fade-up" data-aos-delay="100">
        <Services />
      </div>
      <div id="about" data-aos="fade-up" data-aos-delay="200">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
