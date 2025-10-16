import { Card } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react"; // Added ExternalLink icon

const articleData = [
  {
    title: "Dark Web Investigations: Tools, Techniques, and Challenges",
    description: "Explore the depths of the dark web, understanding investigation tools, techniques, and the inherent challenges.",
    link: "https://github.com/JayG1711/-Dark-Web-Investigations-Tools-Techniques-and-Challenges",
  },
  {
    title: "Basics of Software Design",
    description: "A foundational look into the principles and best practices of effective software design.",
    link: "https://github.com/JayG1711/Basics-of-Software-Design",
  },
  {
    title: "Personalized Google Website Portfolio",
    description: "How to create a custom Google-themed website portfolio to showcase your projects and skills.",
    link: "https://github.com/JayG1711/Personalized-Google-Website-Portfolio",
  },
  {
    title: "Applications of Turing Machines in AI and Problem Solving",
    description: "Delve into the theoretical power of Turing Machines and their practical applications in AI and computational problem-solving.",
    link: "https://github.com/JayG1711/Applications-of-Turing-Machines-in-Artificial-Intelligence-and-Problem-Solving",
  },
  // Add more articles here if you have them in the future
];

const Articles = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-gradient mb-4">Articles</h1>
          <p className="text-xl text-muted-foreground">
            Insights, tutorials, and write-ups on cybersecurity and technology
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articleData.map((article, index) => (
            <Card 
              key={index} 
              className="card-glass p-6 h-full flex flex-col justify-between animate-slide-up"
            >
              <div>
                <div className="flex items-center justify-center p-4 mb-4 rounded-md bg-primary/10 border border-primary/20">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
              </div>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mt-auto"
              >
                Read on GitHub 
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Card>
          ))}
          
          {/* You can still have a "more coming soon" card if you like,
              or remove it and just have the article grid.
              For now, I'll remove the original "Coming Soon" card
              and just show the article links.
          */}
        </div>
      </div>
    </div>
  );
};

export default Articles;