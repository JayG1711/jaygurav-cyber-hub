import { Card } from "@/components/ui/card";
import { FolderGit2, Clock } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-gradient mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">
            Cybersecurity tools and innovative solutions
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="card-glass p-12 text-center animate-slide-up">
          <div className="flex flex-col items-center space-y-6">
            <div className="p-6 rounded-full bg-primary/10 border border-primary/20 animate-glow-pulse">
              <FolderGit2 className="h-16 w-16 text-primary" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Projects Coming Soon</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay tuned for exciting cybersecurity and AI-based tools by Jay Gurav. 
                I'm currently working on innovative projects that will be showcased here soon.
              </p>
            </div>

            <div className="flex items-center gap-2 text-primary mt-8">
              <Clock className="h-5 w-5 animate-pulse" />
              <span className="text-sm font-medium">Under Construction</span>
            </div>
          </div>
        </Card>

        {/* Placeholder Grid for Future Projects */}
        <div className="grid md:grid-cols-2 gap-6 mt-8 opacity-30">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="card-glass p-6 h-48"></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
