// components/ui/Skeleton.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular";
  width?: string | number;
  height?: string | number;
  animation?: boolean;
}

export function Skeleton({
  className = "",
  variant = "text",
  width,
  height,
  animation = true
}: SkeletonProps) {
  const baseClasses = "bg-zinc-200 dark:bg-zinc-700";

  const variantClasses = {
    text: "h-4 rounded",
    rectangular: "rounded-lg",
    circular: "rounded-full"
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === "number" ? `${width}px` : width;
  if (height) style.height = typeof height === "number" ? `${height}px` : height;

  if (animation) {
    return (
      <motion.div
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        style={style}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

// Composants Skeleton spécialisés
export function SkeletonText({ lines = 1, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} variant="text" className="w-full" />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`p-4 border border-zinc-200 rounded-lg space-y-3 ${className}`}>
      <Skeleton variant="rectangular" height={24} className="w-3/4" />
      <SkeletonText lines={2} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width={80} height={32} />
        <Skeleton variant="rectangular" width={60} height={32} />
      </div>
    </div>
  );
}

export function SkeletonTable({ rows = 5, columns = 4, className = "" }: {
  rows?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex gap-4">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} variant="text" className="flex-1" height={16} />
        ))}
      </div>

      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              variant="text"
              className="flex-1"
              height={14}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkeletonAvatar({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
    />
  );
}