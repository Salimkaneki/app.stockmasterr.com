"use client";

import React from "react";

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
  padding?: string;
  marginTop?: string;
}

export function PageContainer({
  children,
  className = "",
  maxWidth = "max-w-350",
  padding = "px-8",
  marginTop = "mt-12"
}: PageContainerProps) {
  return (
    <div className={`${maxWidth} mx-auto ${padding} ${marginTop} ${className}`}>
      {children}
    </div>
  );
}