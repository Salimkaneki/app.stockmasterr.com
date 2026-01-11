import React, { forwardRef } from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", label, error, helperText, resize = "vertical", rows = 4, ...props }, ref) => {
    const baseClasses = "w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all font-['Google_Sans'] placeholder:text-zinc-400 resize-" + resize;
    const errorClasses = error ? "border-red-300 focus:ring-red-100 focus:border-red-500" : "";
    const combinedClasses = `${baseClasses} ${errorClasses} ${className}`.trim();

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-zinc-700 font-['Google_Sans']">
            {label}
          </label>
        )}
        <textarea
          rows={rows}
          className={combinedClasses}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600 font-['Google_Sans']">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-zinc-500 font-['Google_Sans']">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };