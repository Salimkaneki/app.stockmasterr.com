import React from "react";
import { LuLoader } from "react-icons/lu";

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function LoadingSpinner({ size = "md", className = "", text }: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <LuLoader className={`${sizeClasses[size]} animate-spin text-zinc-400`} />
      {text && <span className="text-sm text-zinc-500">{text}</span>}
    </div>
  );
}