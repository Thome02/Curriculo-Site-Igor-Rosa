
import { cn } from "@/lib/utils";
import React from "react";

interface CyberButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: 'purple' | 'blue' | 'pink' | 'green';
  icon?: React.ReactNode;
}

const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  className,
  onClick,
  color = 'purple',
  icon
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'border-cyber-neonblue text-cyber-neonblue hover:shadow-[0_0_15px_rgba(30,174,219,0.5)]';
      case 'pink': return 'border-cyber-neonpink text-cyber-neonpink hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]';
      case 'green': return 'border-cyber-neongreen text-cyber-neongreen hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]';
      default: return 'border-cyber-neonpurple text-cyber-neonpurple hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]';
    }
  };
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "button-neon border-2 font-medium transition-all duration-300 flex items-center justify-center gap-2",
        getColorClass(),
        className
      )}
    >
      {icon && <span className="animate-pulse">{icon}</span>}
      {children}
    </button>
  );
};

export default CyberButton;
