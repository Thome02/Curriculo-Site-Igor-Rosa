
import { cn } from "@/lib/utils";
import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  variant?: "light" | "heavy";
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className,
  variant = "light"
}) => {
  return (
    <div 
      className={cn(
        "relative inline-block", 
        variant === "heavy" ? "animate-glitch-text" : "",
        className
      )}
    >
      {variant === "heavy" ? (
        text
      ) : (
        <div data-text={text} className="glitch-effect">
          {text}
        </div>
      )}
    </div>
  );
};

export default GlitchText;
