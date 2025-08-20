import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "default" | "small" | "large" | "none";
}

export function Section({ 
  className, 
  spacing = "default",
  children,
  ...props 
}: SectionProps) {
  return (
    <section
      className={cn(
        {
          "py-20": spacing === "default",
          "py-12": spacing === "small",
          "py-32": spacing === "large",
          "py-0": spacing === "none",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}