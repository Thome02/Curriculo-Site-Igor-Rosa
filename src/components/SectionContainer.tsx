
import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(({ 
  id, 
  className,
  children 
}, ref) => {
  return (
    <section 
      id={id}
      ref={ref}
      className={cn(
        "min-h-screen flex flex-col justify-center py-20", 
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
