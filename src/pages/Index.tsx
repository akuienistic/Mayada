import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
  <div id="hero">
        <Hero />
      </div>
  <div id="services">
        <Services />
      </div>
  <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
