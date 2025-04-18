
import SkillItem from "./SkillItem";
import GlitchText from "./GlitchText";
import { 
  JavaIcon, PythonIcon, PHPIcon, CIcon, BashIcon, ShellIcon, BatIcon,
  NmapIcon, MetasploitIcon, GobusterIcon, SqlIcon, NiktoIcon, WiresharkIcon, 
  BurpSuiteIcon, OwaspZapIcon
} from "./icons/SkillIcons";

const SkillsSection = () => {
  return (
    <>
      <h2 className="section-heading text-white text-center">
        <GlitchText text="Skills" variant="light" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="border border-cyber-neonpurple/30 bg-cyber-darkpurple/20 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6 neon-text">Linguagens</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SkillItem name="Java" icon={<JavaIcon />} color="blue" />
            <SkillItem name="Python" icon={<PythonIcon />} color="green" />
            <SkillItem name="PHP" icon={<PHPIcon />} color="pink" />
            <SkillItem name="C" icon={<CIcon />} />
            <SkillItem name="Bash Script" icon={<BashIcon />} color="green" />
            <SkillItem name="Shell Script" icon={<ShellIcon />} color="blue" />
            <SkillItem name="BAT" icon={<BatIcon />} color="pink" />
          </div>
        </div>
        
        <div className="border border-cyber-neonblue/30 bg-cyber-darkpurple/20 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6 neon-text-blue">Ferramentas de Pentest</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SkillItem name="Nmap" icon={<NmapIcon />} color="blue" />
            <SkillItem name="Metasploit" icon={<MetasploitIcon />} color="pink" />
            <SkillItem name="Gobuster" icon={<GobusterIcon />} />
            <SkillItem name="SQL" icon={<SqlIcon />} color="blue" />
            <SkillItem name="Nikto" icon={<NiktoIcon />} color="green" />
            <SkillItem name="Wireshark" icon={<WiresharkIcon />} color="blue" />
            <SkillItem name="Burp Suite" icon={<BurpSuiteIcon />} color="pink" />
            <SkillItem name="OWASP ZAP" icon={<OwaspZapIcon />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
