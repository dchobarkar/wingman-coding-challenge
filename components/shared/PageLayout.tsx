import { JSX } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "default" | "full" | "narrow";
  background?: "white" | "gray" | "dark" | "transparent";
  id?: string;
  padding?: "default" | "none" | "lg";
  as?: keyof JSX.IntrinsicElements;
  animate?: boolean;
  ariaLabelledby?: string;
}

const PageLayout = ({
  children,
  className = "",
  maxWidth = "default",
  background = "transparent",
  id,
  padding = "default",
  as: Component = "section",
  animate = true,
  ariaLabelledby,
  ...rest
}: PageLayoutProps) => {
  const maxWidthClass = {
    default: "max-w-7xl",
    full: "w-full",
    narrow: "max-w-3xl",
  }[maxWidth];

  const backgroundClass = {
    white: "bg-card text-foreground",
    gray: "bg-muted text-foreground",
    dark: "bg-foreground text-card",
    transparent: "text-foreground",
  }[background];

  const paddingClass = {
    default: "px-4 py-16 md:py-20",
    none: "",
    lg: "px-6 py-24 md:py-32",
  }[padding];

  return (
    <Component
      id={id}
      role={id ? "region" : undefined}
      aria-labelledby={ariaLabelledby}
      className={`
        ${maxWidthClass} mx-auto
        ${paddingClass}
        ${backgroundClass}
        font-body
        ${animate ? "fade-in" : ""}
        ${className}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default PageLayout;
