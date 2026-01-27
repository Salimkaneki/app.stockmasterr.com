"use client";

import React, { useEffect, useRef } from "react";

export interface OtpInputProps {
  length?: number;
  value: string[];
  onChange: (v: string[]) => void;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  inputClassName?: string;
}

export default function OtpInput({
  length = 6,
  value,
  onChange,
  disabled = false,
  error = false,
  className = "",
  inputClassName = "",
}: OtpInputProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const setAt = (index: number, val: string) => {
    const next = [...value];
    next[index] = val;
    onChange(next);
  };

  const handleChange = (index: number, raw: string) => {
    if (disabled) return;
    const numeric = raw.replace(/[^0-9]/g, "");
    if (!numeric) {
      setAt(index, "");
      return;
    }

    // If user pasted multiple chars, fill forward
    if (numeric.length > 1) {
      const chars = numeric.split("").slice(0, length - index);
      const next = [...value];
      chars.forEach((c, i) => {
        next[index + i] = c;
      });
      onChange(next);
      const last = Math.min(index + chars.length - 1, length - 1);
      inputsRef.current[last]?.focus();
      return;
    }

    setAt(index, numeric);
    if (numeric && index < length - 1) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (e.key === "Backspace") {
      if (value[index]) {
        setAt(index, "");
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
    if (e.key === "ArrowLeft" && index > 0) inputsRef.current[index - 1]?.focus();
    if (e.key === "ArrowRight" && index < length - 1) inputsRef.current[index + 1]?.focus();
  };

  return (
    <div className={`flex justify-between gap-2 ${className}`}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => { inputsRef.current[i] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          aria-label={`Chiffre ${i + 1}`}
          value={value[i] ?? ""}
          onChange={(e) => handleChange(i, e.target.value)}
          onPaste={(e) => {
            e.preventDefault();
            const paste = e.clipboardData.getData("text");
            handleChange(i, paste);
          }}
          onKeyDown={(e) => handleKeyDown(i, e)}
          disabled={disabled}
          className={
            `w-full h-14 text-center text-xl font-medium rounded-none border-b-2 transition-all duration-200 bg-transparent outline-none disabled:opacity-30 ${
              error ? "border-red-500" : value[i] ? "border-black" : "border-gray-200"
            } ` + inputClassName
          }
        />
      ))}
    </div>
  );
}
