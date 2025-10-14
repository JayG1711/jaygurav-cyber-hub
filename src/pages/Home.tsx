import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cyber.jpg";

const Home = () => {
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Shield Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20 animate-glow-pulse">
                <Shield className="h-16 w-16 text-primary" />
              </div>
            </div>

            {/* Name */}
            <h1 className="text-gradient glow-effect">
              Jay Gurav
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Cybersecurity Enthusiast | Ethical Hacker | B.Tech Student
            </p>

            {/* Introduction */}
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                Hi, I'm Jay Gurav — a passionate cybersecurity enthusiast and ethical hacker 
                currently pursuing my B.Tech in Cyber Security at Shah and Anchor Kutchhi 
                Engineering College. I'm deeply interested in discovering vulnerabilities, 
                building defensive tools, and exploring how AI can strengthen digital security. 
                My goal is to make the digital world safer through research, innovation, and 
                hands-on cybersecurity projects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
