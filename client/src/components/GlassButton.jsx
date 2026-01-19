import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const GlassButton = forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      children,
      icon,
      href,
      external = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "glassmorphism neon-border btn-hover-effect",
      "inline-flex items-center justify-center gap-2",
      "rounded-full font-medium transition-all duration-300",
      "text-sm text-foreground",
      "hover:text-white focus-visible:outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      {
        "px-6 py-3": size === "default",
        "px-8 py-4 text-lg": size === "lg",
        "px-4 py-2 text-xs": size === "sm",
        "hover:bg-transparent": variant === "ghost",
      },
      className
    );

    const content = (
      <>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={baseClasses}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export default GlassButton;
