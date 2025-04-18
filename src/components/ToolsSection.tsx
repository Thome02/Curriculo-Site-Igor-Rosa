
import GlitchText from "./GlitchText";
import SkillItem from "./SkillItem";
import { 
  ExcelIcon, PowerBIIcon, MakeIcon, PowerAutomateIcon,
  LookerStudioIcon, SupabaseIcon, AIWebsiteIcon
} from "./icons/SkillIcons";

const ToolsSection = () => {
  return (
    <>
      <h2 className="section-heading text-white text-center">
        <GlitchText text="Ferramentas e Tecnologias" variant="light" />
      </h2>
      
      <div className="mt-10 border border-cyber-neongreen/30 bg-cyber-darkpurple/20 backdrop-blur-sm rounded-lg p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <SkillItem name="Excel" icon={<ExcelIcon />} color="green" />
          <SkillItem name="Power BI" icon={<PowerBIIcon />} color="blue" />
          <SkillItem name="Make (Integromat)" icon={<MakeIcon />} />
          <SkillItem name="Power Automate" icon={<PowerAutomateIcon />} color="blue" />
          <SkillItem name="Looker Studio" icon={<LookerStudioIcon />} color="green" />
          <SkillItem name="Supabase" icon={<SupabaseIcon />} color="pink" />
          <SkillItem name="Criação de Sites com IA" icon={<AIWebsiteIcon />} />
        </div>
      </div>
    </>
  );
};

export default ToolsSection;
