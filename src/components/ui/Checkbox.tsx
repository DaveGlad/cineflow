"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2)}`;

    return (
      <div className="w-full">
        <label
          htmlFor={checkboxId}
          className={cn(
            "flex items-start gap-3 cursor-pointer group",
            props.disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                "w-5 h-5 rounded-md border-2 transition-all duration-200",
                "border-border bg-surface",
                "peer-checked:bg-primary peer-checked:border-primary",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background",
                "group-hover:border-border-hover",
                error && "border-error"
              )}
            />
            <Check
              className={cn(
                "absolute top-0.5 left-0.5 w-4 h-4 text-white",
                "opacity-0 scale-50 transition-all duration-200",
                "peer-checked:opacity-100 peer-checked:scale-100"
              )}
              strokeWidth={3}
            />
          </div>
          {label && (
            <span className="text-sm text-text-secondary leading-relaxed">
              {label}
            </span>
          )}
        </label>
        {error && <p className="mt-2 text-sm text-error">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
