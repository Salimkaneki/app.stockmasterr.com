import React, { forwardRef } from "react";
import { LuChevronDown } from "react-icons/lu";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  placeholder?: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, error, helperText, placeholder, options, ...props }, ref) => {
    const baseClasses = "w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all font-['Google_Sans'] appearance-none";
    const errorClasses = error ? "border-red-300 focus:ring-red-100 focus:border-red-500" : "";
    const combinedClasses = `${baseClasses} ${errorClasses} ${className}`.trim();

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-zinc-700 font-['Google_Sans']">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            className={combinedClasses}
            ref={ref}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
            <LuChevronDown className="w-4 h-4" />
          </div>
        </div>
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

Select.displayName = "Select";

export { Select };