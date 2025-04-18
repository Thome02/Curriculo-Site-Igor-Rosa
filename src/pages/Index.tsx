
import { useEffect, useRef, useState } from "react";
import CodeBackground from "@/components/CodeBackground";
import NavBar from "@/components/NavBar";
import SectionContainer from "@/components/SectionContainer";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    tools: useRef<HTMLDivElement>(null),
  };
  
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section in sectionRefs) {
        const sectionKey = section as keyof typeof sectionRefs;
        const sectionRef = sectionRefs[sectionKey];
        
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const sectionHeight = sectionRef.current.offsetHeight;
          
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CodeBackground />
      <NavBar onNavClick={handleNavClick} activeSection={activeSection} />
      
      <SectionContainer id="about" ref={sectionRefs.about} className="pt-28 md:pt-32">
        <Hero />
      </SectionContainer>
      
      <SectionContainer id="skills" ref={sectionRefs.skills}>
        <SkillsSection />
      </SectionContainer>
      
      <SectionContainer id="tools" ref={sectionRefs.tools}>
        <ToolsSection />
      </SectionContainer>
      
      <SectionContainer id="projects" ref={sectionRefs.projects}>
        <ProjectsSection />
      </SectionContainer>
      
      <footer className="py-6 border-t border-cyber-neonpurple/20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-cyber-text/70 text-sm">
            © {new Date().getFullYear()} Igor | Portfólio Cyberpunk
          </p>
          <div className="animate-pulse mt-2">
            <span className="inline-block h-1 w-8 bg-cyber-neonpurple/40 rounded-full mx-1"></span>
            <span className="inline-block h-1 w-4 bg-cyber-neonblue/40 rounded-full mx-1"></span>
            <span className="inline-block h-1 w-6 bg-cyber-neonpink/40 rounded-full mx-1"></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
