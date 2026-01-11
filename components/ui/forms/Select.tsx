"use client";

import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { LuChevronDown, LuCheck } from "react-icons/lu";

export interface SelectProps {
  label?: React.ReactNode;
  error?: string;
  helperText?: string;
  placeholder?: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Select({ 
  label, error, helperText, placeholder, options, value, onChange, className = "" 
}: SelectProps) {
  
  const selectedOption = options.find(opt => opt.value === value);

  // Design du bouton (Inchangé selon ta demande)
  const baseClasses = "relative w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg text-sm outline-none text-left font-['Google_Sans'] transition-all flex items-center justify-between";
  const focusClasses = "ui-open:ring-2 ui-open:ring-zinc-900/10 ui-open:border-zinc-900";
  const errorClasses = error ? "border-red-300 ring-red-100" : "";

  return (
    <div className="space-y-2 w-full font-['Google_Sans']">
      {label && (
        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 block px-0.5">
          {label}
        </label>
      )}

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className={`${baseClasses} ${focusClasses} ${errorClasses} ${className}`}>
            <span className={`block truncate ${!selectedOption ? "text-zinc-400" : "text-zinc-900 font-medium"}`}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <LuChevronDown className="w-4 h-4 text-zinc-400 transition-transform ui-open:rotate-180" />
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/* MENU GRIS ET BLANC SIMPLE */}
            <Listbox.Options className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white p-1 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-zinc-200/60 focus:outline-none">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={({ active, selected }) => `
                    relative cursor-pointer select-none py-2.5 px-3 rounded-lg transition-all
                    ${active ? "bg-zinc-100 text-zinc-900" : "text-zinc-600"}
                    ${selected ? "bg-zinc-50 font-bold text-zinc-900" : "font-medium"}
                    ${option.disabled ? "opacity-30 cursor-not-allowed" : ""}
                  `}
                >
                  {({ selected }) => (
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="block truncate">{option.label}</span>
                      {selected && (
                        <LuCheck className="w-3.5 h-3.5 text-zinc-900" />
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {error && <p className="text-xs text-red-500 font-medium px-0.5">{error}</p>}
      {helperText && !error && (
        <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-tighter px-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
}