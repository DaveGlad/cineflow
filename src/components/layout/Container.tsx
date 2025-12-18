import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small" | "large";
}

const sizeStyles = {
  small: "max-w-4xl",
  default: "max-w-7xl",
  large: "max-w-[1400px]",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  );
}
