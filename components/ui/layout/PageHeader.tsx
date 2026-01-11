import React from "react";

export interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({ title, description, children, className = "" }: PageHeaderProps) {
  return (
    <div className={`border-b border-zinc-100 px-8 py-10 ${className}`}>
      <div className="max-w-350 mx-auto flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-zinc-400 text-base mt-1 font-['Google_Sans']">{description}</p>
          )}
        </div>
        {children && (
          <div className="flex gap-3">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}