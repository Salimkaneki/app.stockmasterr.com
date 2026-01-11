import React from "react";
import { LuSearch } from "react-icons/lu";

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
}

export function SearchBar({
  placeholder = "RECHERCHER...",
  className = "",
  iconClassName = "",
  inputClassName = "",
  ...props
}: SearchBarProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <LuSearch className={`w-5 h-5 text-zinc-400 ${iconClassName}`} />
      <input
        type="text"
        placeholder={placeholder}
        className={`flex-1 outline-none placeholder:text-zinc-300 text-base font-medium ${inputClassName}`}
        {...props}
      />
    </div>
  );
}