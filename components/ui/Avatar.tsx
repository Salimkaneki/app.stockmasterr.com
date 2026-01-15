"use client";

import React from "react";
import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  alt?: string;
  initials: string;
  size?: number;
  className?: string;
}

export function Avatar({
  src,
  alt = "",
  initials,
  size = 40,
  className = ""
}: AvatarProps) {
  return (
    <div
      className={`rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-xs font-black text-zinc-400 font-['Google_Sans']">
          {initials}
        </span>
      )}
    </div>
  );
}