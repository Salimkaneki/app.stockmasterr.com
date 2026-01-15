"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  searchPlaceholder?: string;
  className?: string;
}

export function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Rechercher...",
  className = ""
}: TabNavigationProps) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex gap-8">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`text-base font-bold pb-4 -mb-4.25 transition-colors relative font-['Google_Sans'] ${
              activeTab === tab ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {onSearchChange && (
        <div className="relative group">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-900 transition-colors w-4 h-4" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-6 pr-4 py-2 text-base outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all font-['Google_Sans']"
          />
        </div>
      )}
    </motion.div>
  );
}