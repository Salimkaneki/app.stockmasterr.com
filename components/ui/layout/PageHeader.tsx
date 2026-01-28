import React from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export interface PageHeaderProps {
  title: string;
  description?: string;
  backLink?: {
    href: string;
    label: string;
  };
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({ title, description, backLink, children, className = "" }: PageHeaderProps) {
  return (
    <div className={`border-b border-zinc-100 px-8 py-10 ${className}`}>
      <div className="max-w-350 mx-auto flex justify-between items-end">
        <div>
          {backLink && (
            <Link 
              href={backLink.href} 
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors mb-4 text-sm font-medium"
            >
              <LuArrowLeft className="w-4 h-4" />
              {backLink.label}
            </Link>
          )}
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">{title}</h1>
          {description && (
            <p className="text-zinc-400 text-base mt-1 font-['Google_Sans']">{description}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}