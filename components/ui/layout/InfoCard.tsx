import React from "react";

export interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

export function InfoCard({ title, children, className = "", variant = "default" }: InfoCardProps) {
  const baseClasses = variant === "dark"
    ? "bg-zinc-900 rounded-2xl p-6 text-white shadow-xl"
    : "bg-white border border-zinc-200 rounded-xl p-6 shadow-sm";

  return (
    <div className={`${baseClasses} ${className}`}>
      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">{title}</p>
      {children}
    </div>
  );
}