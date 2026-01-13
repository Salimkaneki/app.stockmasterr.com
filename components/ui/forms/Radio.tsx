import React, { forwardRef } from "react";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: string;
  helperText?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, helperText, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative shrink-0">
            <input
              type="radio"
              className="sr-only"
              ref={ref}
              {...props}
            />
            <div className={`w-5 h-5 border-2 rounded-full transition-all ${
              props.checked
                ? 'border-zinc-900'
                : 'border-zinc-300 group-hover:border-zinc-400'
            }`}>
              {props.checked && (
                <div className="w-3 h-3 bg-zinc-900 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
            </div>
          </div>
          {label && (
            <span className="text-sm font-medium text-zinc-700 font-['Google_Sans'] group-hover:text-zinc-900 transition-colors">
              {label}
            </span>
          )}
        </label>
        {error && (
          <p className="text-sm text-red-600 font-['Google_Sans'] ml-8">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-zinc-500 font-['Google_Sans'] ml-8">{helperText}</p>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";

export { Radio };