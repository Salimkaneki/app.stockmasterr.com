"use client";

import React from "react";
import { LuArrowRight } from "react-icons/lu";

export interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title?: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
  emptyMessage?: string;
  className?: string;
}

export default function DataTable({
  columns,
  data,
  title,
  showViewAll = false,
  onViewAll,
  emptyMessage = "Aucune donnée disponible",
  className = ""
}: DataTableProps) {
  if (data.length === 0) {
    return (
      <div className={`bg-white rounded-4xl border border-zinc-200 shadow-sm p-8 ${className}`}>
        {title && <h2 className="text-lg font-bold text-zinc-900 mb-4">{title}</h2>}
        <p className="text-zinc-500 text-center py-8">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-4xl border border-zinc-200 shadow-sm overflow-hidden ${className}`}>
      {title && (
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-zinc-900">{title}</h2>
          {showViewAll && (
            <button
              onClick={onViewAll}
              className="text-zinc-400 text-sm font-bold flex items-center gap-1 hover:text-zinc-900 transition-colors"
            >
              Voir tout <LuArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-zinc-50/50 border-b border-zinc-200">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="text-left p-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-zinc-50/50 transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className="p-4 text-sm text-zinc-900">
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]
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