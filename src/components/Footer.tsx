import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © 2025 Jay Gurav | Cybersecurity Portfolio
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-primary fill-primary" /> and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
