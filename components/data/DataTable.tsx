"use client";

import React from "react";
import { LuArrowRight, LuInbox } from "react-icons/lu";

export interface Column<T = Record<string, unknown>> {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: string;
  render?: (value: unknown, row: T) => React.ReactNode;
}

interface DataTableProps<T = Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  title?: string;
  isLoading?: boolean;
  showViewAll?: boolean;
  onViewAll?: () => void;
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  className?: string;
  variant?: "default" | "clean";
}

export default function DataTable<T = Record<string, unknown>>({
  columns,
  data,
  title,
  isLoading = false,
  showViewAll = false,
  onViewAll,
  onRowClick,
  emptyMessage = "Aucune donnée disponible",
  className = "",
  variant = "default",
}: DataTableProps) {
  
  // Style minimaliste : fond blanc pur ou transparent
  const baseStyles = variant === "default" 
    ? "bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden" 
    : "w-full";

  if (isLoading) {
    return (
      <div className={`${baseStyles} ${className} p-8 space-y-4`}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-12 bg-zinc-50 animate-pulse rounded-lg w-full" />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center">
        <LuInbox className="w-8 h-8 text-zinc-200 mb-3" />
        <p className="text-zinc-400 text-base font-medium font-['Google_Sans']">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {/* Title section (seulement si présent) */}
      {title && (
        <div className="px-6 py-5 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-zinc-900 tracking-tight font-['Google_Sans']">{title}</h2>
          {showViewAll && (
            <button onClick={onViewAll} className="text-sm font-bold text-zinc-400 hover:text-zinc-900 flex items-center gap-2 transition-colors">
              VOIR TOUT <LuArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-spacing-0">
          <thead>
            <tr className="border-b border-zinc-100">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`
                    px-6 py-4 text-[12px] font-semibold text-zinc-500 uppercase tracking-[0.12em]
                    ${column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left'}
                  `}
                  style={{ width: column.width }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {data.map((row, index) => (
              <tr 
                key={index} 
                onClick={() => onRowClick && onRowClick(row)}
                className={`
                  group transition-all
                  ${onRowClick ? "cursor-pointer hover:bg-zinc-50/50" : "hover:bg-zinc-50/30"}
                `}
              >
                {columns.map((column) => (
                  <td 
                    key={column.key} 
                    className={`
                      px-6 py-5 text-[15px] text-zinc-600 font-medium
                      ${column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left'}
                    `}
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : <span className="font-['Google_Sans'] text-zinc-900">{row[column.key] as string}</span>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}