"use client";

import React from "react";

export interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`bg-white min-h-screen pb-20 font-sans text-zinc-900 ${className}`}>
      {children}
    </div>
  );
}