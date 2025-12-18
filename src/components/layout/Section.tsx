"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "surface" | "gradient";
}

const backgroundStyles = {
  default: "bg-background",
  surface: "bg-surface",
  gradient: "bg-gradient-to-b from-background via-surface/50 to-background",
};

export function Section({
  children,
  className,
  id,
  background = "default",
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("py-20 lg:py-28", backgroundStyles[background], className)}
    >
      {children}
    </motion.section>
  );
}
