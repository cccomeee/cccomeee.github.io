import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "首頁", path: "/" },
    { label: "心得", path: "/insights" },
    { label: "日記", path: "/diary" },
    { label: "教學", path: "/tutorials" },
    { label: "聯繫", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-mono font-bold hover-elevate rounded-md px-3 py-2" data-testid="link-home">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              hihiprogamer
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`relative px-4 py-2 rounded-md font-medium transition-all duration-300 hover-elevate hover:-translate-y-0.5 ${
                  location === item.path ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-nav-${item.label}`}
              >
                {item.label}
                {location === item.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-md font-medium transition-colors hover-elevate ${
                  location === item.path ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
                data-testid={`link-mobile-${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
