import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Shield, Target } from "lucide-react";

const Achievements = () => {
  const certifications = [
    {
      title: "CEH v13 Certified Ethical Hacker",
      issuer: "EC-Council",
      date: "2024",
      icon: Shield,
      color: "text-primary",
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "In Progress",
      icon: Target,
      color: "text-primary",
    },
  ];

  const platforms = [
    {
      name: "TryHackMe",
      description: "Active learner with multiple completed rooms and challenges",
      icon: Trophy,
      link: "tryhackme.com/p/jaygurav",
    },
    {
      name: "CTF Participations",
      description: "Regular participant in Capture The Flag competitions",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-gradient mb-4">Achievements</h1>
          <p className="text-xl text-muted-foreground">
            Certifications, badges, and milestones in my cybersecurity journey
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Award className="h-7 w-7 text-primary" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={index}
                  className="card-glass p-6 animate-slide-up hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className={`h-8 w-8 ${cert.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Platform Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Trophy className="h-7 w-7 text-primary" />
            Platform Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card
                  key={index}
                  className="card-glass p-6 animate-slide-up hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
                      {platform.link && (
                        <a
                          href={`https://${platform.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          {platform.link}
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <Card className="card-glass p-6 text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground">
            <span className="text-primary font-medium">More achievements</span> will be added as 
            Jay continues his cybersecurity journey and completes new challenges, certifications, 
            and competitions.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
