import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";

const navLinks = [
  { id: 1, title: "About", url: "#about" },
  { id: 2, title: "Experience", url: "#experience" },
  { id: 3, title: "Projects", url: "#projects" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`outline-none fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between outline-none">
        <a
          className="text-xl font-bold tracking-tight hover:text-primary"
          href="#"
        >
          Ismael<span className="text-primary"> Lares</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact me</Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.title}
              </a>
            ))}
            <a href="#contact">
              <Button onClick={() => setIsMobileMenuOpen(false)}>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
