import React from "react";
import { LuArrowRight } from "react-icons/lu";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  showArrow?: boolean;
  children: React.ReactNode;
}

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm",
  secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
  ghost: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
  outline: "border border-zinc-200 text-zinc-900 hover:bg-zinc-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function ActionButton({
  variant = "primary",
  size = "md",
  icon,
  showArrow = false,
  children,
  className = "",
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg font-bold transition-all ${buttonStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon}
      {children}
      {showArrow && <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}