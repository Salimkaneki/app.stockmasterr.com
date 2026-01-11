import React from "react";

export interface FormSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export function FormSection({
  title,
  icon,
  children,
  className = "",
  titleClassName = "",
  contentClassName = ""
}: FormSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className={`flex items-center gap-2 pb-2 border-b border-zinc-50 ${titleClassName}`}>
        {icon && <span className="text-zinc-400">{icon}</span>}
        <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">
          {title}
        </h2>
      </div>
      <div className={contentClassName}>
        {children}
      </div>
    </section>
  );
}