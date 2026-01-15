"use client";

import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "./Avatar";

interface UserProfileProps {
  name: string;
  email: string;
  initials: string;
  avatar?: string | null;
  className?: string;
  animated?: boolean;
}

export function UserProfile({
  name,
  email,
  initials,
  avatar,
  className = "",
  animated = false
}: UserProfileProps) {
  const avatarElement = (
    <Avatar
      src={avatar}
      alt={name}
      initials={initials}
    />
  );

  const content = (
    <div className={`flex items-center gap-4 ${className}`}>
      {animated ? (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {avatarElement}
        </motion.div>
      ) : (
        avatarElement
      )}
      <div className="flex flex-col">
        <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{name}</span>
        <span className="text-xs text-zinc-400 font-['Google_Sans']">{email}</span>
      </div>
    </div>
  );

  return animated ? (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </motion.div>
  ) : (
    content
  );
}