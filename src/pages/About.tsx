import { Card } from "@/components/ui/card";
import { GraduationCap, Shield, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-gradient mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Get to know more about my journey in cybersecurity
          </p>
        </div>

        {/* Academic Background */}
        <Card className="card-glass p-8 mb-8 animate-slide-up">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Academic Background</h2>
              <p className="text-muted-foreground">
                Currently pursuing <span className="text-primary font-medium">B.Tech in Cyber Security</span> at{" "}
                <span className="text-foreground font-medium">
                  Shah and Anchor Kutchhi Engineering College
                </span>{" "}
                (2023–2027)
              </p>
            </div>
          </div>
          <p className="text-foreground/90 leading-relaxed mt-4 pl-16">
            My academic journey focuses on understanding the fundamentals of cybersecurity, 
            from network security and cryptography to ethical hacking and digital forensics. 
            I'm constantly learning and applying theoretical knowledge to real-world scenarios 
            through labs, CTF competitions, and personal projects.
          </p>
        </Card>

        {/* Certifications */}
        <Card className="card-glass p-8 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
            </div>
          </div>
          <div className="space-y-4 pl-16">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-medium text-primary">CEH v13 Certified Ethical Hacker</h3>
              <p className="text-muted-foreground">Certified by EC-Council</p>
            </div>
            <div className="border-l-2 border-primary/50 pl-4">
              <h3 className="text-lg font-medium">CompTIA Security+</h3>
              <p className="text-muted-foreground">In Progress</p>
            </div>
          </div>
        </Card>

        {/* Interests & Focus Areas */}
        <Card className="card-glass p-8 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Interests & Focus Areas</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 pl-16">
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">Technical Interests</h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Hardware Hacking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  AI in Cybersecurity
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Digital Forensics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Vulnerability Research
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Penetration Testing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">Goals</h3>
              <p className="text-foreground/90 leading-relaxed">
                My mission is to contribute to a safer digital ecosystem by identifying 
                vulnerabilities before malicious actors can exploit them, developing 
                innovative security tools, and sharing knowledge with the cybersecurity community.
              </p>
            </div>
          </div>
        </Card>

        {/* Beyond Tech */}
        <Card className="card-glass p-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Beyond Tech</h2>
            </div>
          </div>
          <p className="text-foreground/90 leading-relaxed pl-16">
            When I'm not diving into cybersecurity challenges, you'll find me exploring the 
            mysteries of <span className="text-primary font-medium">astrophysics</span>, 
            capturing stunning landscapes through{" "}
            <span className="text-primary font-medium">photography</span>, or analyzing 
            global affairs through the lens of{" "}
            <span className="text-primary font-medium">geopolitics</span>. These diverse 
            interests help me approach cybersecurity problems with a broader perspective 
            and creative thinking.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
