// components/ui/LoadingSpinner.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  color = "text-zinc-900",
  className = ""
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${color} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.div>
  );
}

// Composant de skeleton loading
interface SkeletonProps {
  className?: string;
  animate?: boolean;
}

export function Skeleton({ className = "", animate = true }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-zinc-200 rounded ${className}`}
      animate={animate ? {
        opacity: [0.5, 1, 0.5],
      } : {}}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

// Skeleton pour une ligne de tableau
export function TableRowSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-zinc-100">
      <Skeleton className="w-10 h-10 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-8 w-8 rounded" />
    </div>
  );
}

// Skeleton pour une carte
export function CardSkeleton() {
  return (
    <div className="p-6 border border-zinc-100 rounded-xl">
      <div className="space-y-4">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}

// Composant de chargement pleine page
export function PageLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-zinc-600 font-medium">Chargement...</p>
      </div>
    </div>
  );
}

// Composant de chargement avec overlay
interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

export function LoadingOverlay({ isVisible, message = "Chargement..." }: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-zinc-600 font-medium">{message}</p>
      </div>
    </motion.div>
  );
}