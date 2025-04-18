
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

interface NavLink {
  id: string;
  label: string;
}

interface NavBarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ onNavClick, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links: NavLink[] = [
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'tools', label: 'Ferramentas' },
    { id: 'projects', label: 'Projetos' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-2",
        scrolled ? "bg-cyber-darkpurple/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-2xl font-bold">
            <span className="text-white">Igor</span>
            <span className="neon-text"> _</span>
          </div>
          
          <button 
            className="md:hidden text-white hover:text-cyber-neonpurple"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        
        <nav className={cn(
          "flex flex-wrap justify-center mt-2 md:mt-0 space-x-1 md:space-x-3",
          mobileMenuOpen ? "flex" : "hidden md:flex"
        )}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavClick(link.id);
                setMobileMenuOpen(false);
              }}
              className={cn(
                "text-xs sm:text-sm font-medium transition-all duration-300 hover:text-cyber-neonpurple py-1 px-1.5 sm:px-2",
                activeSection === link.id ? "active-section" : "text-white/80"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
