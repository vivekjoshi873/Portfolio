import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: "Home", path: "/hero-landing", icon: "Home" },
    { label: "About", path: "/about", icon: "User" },
    { label: "Skills", path: "/skills", icon: "Code" },
    { label: "Projects", path: "/projects", icon: "FolderGit2" },
    { label: "Experience", path: "/experience", icon: "Briefcase" },
    { label: "Contact", path: "/contact", icon: "Mail" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const isActivePath = (path: string) => location.pathname === path;

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-base ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        } ${className}`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/hero-landing"
              className="flex items-center space-x-2 group"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform transition-transform duration-base group-hover:scale-110">
                  <span className="text-primary-foreground font-bold text-xl font-mono">
                    V
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-subtle"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-foreground font-headline">
                  DevPortfolio
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-fast ${
                    isActivePath(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-text-secondary hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                <a href="/Resume.pdf" download="Resume.pdf">
                  Download CV
                </a>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 rounded-md text-text-secondary hover:text-foreground hover:bg-muted transition-colors duration-fast"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? "X" : "Menu"}
                size={24}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-base ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-lg z-50 lg:hidden transform transition-transform duration-base ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-lg font-bold text-foreground font-headline">
              Menu
            </span>
            <button
              className="p-2 rounded-md text-text-secondary hover:text-foreground hover:bg-muted transition-colors duration-fast"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <Icon name="X" size={24} strokeWidth={2} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-fast ${
                    isActivePath(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-text-secondary hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon name={item.icon} size={20} strokeWidth={2} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="p-4 border-t border-border space-y-3">
            <div className="flex items-center justify-center space-x-2 px-3 py-2 bg-success/10 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-subtle"></div>
              <span className="text-sm font-medium text-success">
                Currently Available
              </span>
            </div>
            <Button
              asChild
              variant="outline"
              size="default"
              fullWidth
              iconName="Download"
              iconPosition="left"
              iconSize={18}
            >
              <a
                href="/public/Resume.pdf"
                download="Resume.pdf"
                onClick={closeMobileMenu}
              >
                Download CV
              </a>
            </Button>
            <Button
              variant="default"
              size="default"
              fullWidth
              iconName="Mail"
              iconPosition="left"
              iconSize={18}
              onClick={() => {
                window.location.href = "/contact";
                closeMobileMenu();
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
