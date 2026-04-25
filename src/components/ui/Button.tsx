import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-signal-teal-text text-white hover:bg-teal-700",
      secondary: "bg-surface-secondary text-zinc-900 dark:text-zinc-100 hover:bg-border-default",
      ghost: "text-zinc-600 hover:bg-surface-secondary hover:text-zinc-900",
      outline: "border border-border-default text-zinc-700 hover:bg-surface-secondary",
      danger: "text-signal-red-text hover:bg-signal-red-bg",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
      icon: "p-2",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-badge font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none font-sans",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
