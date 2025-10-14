import { Card } from "@/components/ui/card";
import { FileText, Clock } from "lucide-react";

const Articles = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-gradient mb-4">Articles</h1>
          <p className="text-xl text-muted-foreground">
            Insights, tutorials, and write-ups on cybersecurity
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="card-glass p-12 text-center animate-slide-up">
          <div className="flex flex-col items-center space-y-6">
            <div className="p-6 rounded-full bg-primary/10 border border-primary/20 animate-glow-pulse">
              <FileText className="h-16 w-16 text-primary" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Articles Coming Soon</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Articles and write-ups on cybersecurity topics, penetration testing techniques, 
                vulnerability research, and security best practices will be published here soon.
              </p>
            </div>

            <div className="flex items-center gap-2 text-primary mt-8">
              <Clock className="h-5 w-5 animate-pulse" />
              <span className="text-sm font-medium">Under Construction</span>
            </div>
          </div>
        </Card>

        {/* Placeholder Grid for Future Articles */}
        <div className="grid md:grid-cols-3 gap-6 mt-8 opacity-30">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="card-glass p-6 h-64"></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
