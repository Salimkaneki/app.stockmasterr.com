import React from "react";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className = ""
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      {icon && (
        <div className="w-12 h-12 text-zinc-300 mx-auto mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium text-zinc-900 mb-2">{title}</h3>
      {description && (
        <p className="text-zinc-500 mb-6 max-w-sm mx-auto">{description}</p>
      )}
      {action && (
        <div className="flex justify-center">
          {action}
        </div>
      )}
    </div>
  );
}