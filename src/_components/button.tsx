import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    
    const variantClass = variant === "outline" 
      ? "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground" 
      : "bg-primary text-primary-foreground hover:bg-primary/90";
      
    const sizeClass = size === "lg" 
      ? "h-11 rounded-md px-8" 
      : "h-10 px-4 py-2";

    // Combina as classes, permitindo que o className passado via props (ex: cores personalizadas) sobrescreva o padrão
    const combinedClasses = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };