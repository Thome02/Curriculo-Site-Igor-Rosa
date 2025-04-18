
import React from 'react';
import { cn } from "@/lib/utils";

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  color?: 'purple' | 'blue' | 'pink' | 'green';
}

const SkillItem: React.FC<SkillItemProps> = ({ 
  name, 
  icon,
  color = 'purple'
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'text-cyber-neonblue hover:border-cyber-neonblue/50 hover:shadow-[0_0_10px_rgba(30,174,219,0.5),inset_0_0_10px_rgba(30,174,219,0.2)]';
      case 'pink': return 'text-cyber-neonpink hover:border-cyber-neonpink/50 hover:shadow-[0_0_10px_rgba(217,70,239,0.5),inset_0_0_10px_rgba(217,70,239,0.2)]';
      case 'green': return 'text-cyber-neongreen hover:border-cyber-neongreen/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.5),inset_0_0_10px_rgba(16,185,129,0.2)]';
      default: return 'text-cyber-neonpurple hover:border-cyber-neonpurple/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.5),inset_0_0_10px_rgba(139,92,246,0.2)]';
    }
  };
  
  return (
    <div 
      className={cn(
        "skill-item group", 
        getColorClass()
      )}
    >
      <div className="transition-all duration-300 group-hover:animate-pulse">
        {icon}
      </div>
      <span className="font-mono">{name}</span>
    </div>
  );
};

export default SkillItem;
