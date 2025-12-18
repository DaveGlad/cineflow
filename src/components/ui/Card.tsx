"use client";

import { forwardRef, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  variant?: "default" | "glass" | "gradient" | "bordered";
  hover?: boolean;
  glow?: boolean;
  children?: React.ReactNode;
}

const variantStyles = {
  default: "bg-surface",
  glass: "glass",
  gradient: "bg-gradient-to-br from-surface to-background",
  bordered: "bg-surface border border-border",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "bordered",
      hover = true,
      glow = false,
      children,
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
        transition={{ duration: 0.3 }}
        className={cn(
          "rounded-2xl p-6 transition-all duration-300",
          variantStyles[variant],
          hover && "hover:border-border-hover",
          glow && "hover:shadow-lg hover:shadow-primary/10",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-4", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold text-text-primary", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-text-secondary text-sm mt-1", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-6 pt-4 border-t border-border", className)} {...props} />
));
CardFooter.displayName = "CardFooter";
