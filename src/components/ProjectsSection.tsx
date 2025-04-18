
import GlitchText from "./GlitchText";

const ProjectsSection = () => {
  return (
    <>
      <h2 className="section-heading text-white text-center">
        <GlitchText text="Projetos" variant="light" />
      </h2>
      
      <div className="mt-8 border border-cyber-neonpink/30 bg-cyber-darkpurple/20 backdrop-blur-sm rounded-lg p-4 sm:p-8 text-center">
        <div className="animate-text-flicker text-xl sm:text-2xl md:text-3xl text-white mb-6">
          <GlitchText text="Área em construção..." variant="heavy" className="text-cyber-neonpink" />
        </div>
        
        <div className="w-16 h-1 bg-cyber-neonpink/50 mx-auto"></div>
      </div>
    </>
  );
};

export default ProjectsSection;
