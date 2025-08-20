import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "small" | "large";
}

export function Container({ 
  className, 
  size = "default",
  children,
  ...props 
}: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-6",
        {
          "max-w-4xl": size === "small",
          "max-w-[1240px]": size === "default",
          "max-w-7xl": size === "large",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}