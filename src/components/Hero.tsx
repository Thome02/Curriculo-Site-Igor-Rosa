
import GlitchText from "./GlitchText";
import CyberButton from "./CyberButton";
import { Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
        <span className="inline-block">Olá, eu sou </span>
        <GlitchText 
          text="Igor" 
          className="neon-text text-5xl md:text-7xl font-bold" 
          variant="heavy"
        />
      </h1>
      
      <div className="w-full md:w-3/4 mb-8">
        <p className="text-base md:text-xl text-white/90 leading-relaxed px-4 md:px-0 break-words">
          Tenho 17 anos. Estudo pentest, curto automação e IA. Meu objetivo é ser o melhor no que me proponho a fazer.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <CyberButton 
          color="purple"
          onClick={() => window.open('mailto:igortx30902@gmail.com')}
          icon={<Mail className="w-5 h-5" />}
        >
          Email
        </CyberButton>
        <span className="text-white/50">|</span>
        <CyberButton 
          color="blue"
          onClick={() => window.open('https://www.linkedin.com/in/igor-thomé/')}
          icon={<Linkedin className="w-5 h-5" />}
        >
          LinkedIn
        </CyberButton>
      </div>
    </div>
  );
};

export default Hero;
