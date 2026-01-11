import React from "react";

export type StatusVariant =
  | "active" | "inactive" | "new"
  | "in-stock" | "low" | "critical" | "out-of-stock"
  | "validated" | "pending" | "cancelled"
  | "success" | "warning" | "error" | "info";

export interface StatusBadgeProps {
  status: string;
  variant?: StatusVariant;
  className?: string;
}

const statusStyles: Record<StatusVariant, string> = {
  active: "bg-emerald-50 text-emerald-700 border-emerald-100",
  inactive: "bg-zinc-50 text-zinc-400 border-zinc-200",
  new: "bg-blue-50 text-blue-700 border-blue-100",
  "in-stock": "bg-emerald-50 text-emerald-700 border-emerald-100",
  low: "bg-orange-50 text-orange-700 border-orange-100",
  critical: "bg-amber-50 text-amber-700 border-amber-100",
  "out-of-stock": "bg-rose-50 text-rose-700 border-rose-100",
  validated: "bg-emerald-50 text-emerald-700 border-emerald-100",
  pending: "bg-amber-50 text-amber-700 border-amber-100",
  cancelled: "bg-rose-50 text-rose-700 border-rose-100",
  success: "bg-emerald-50 text-emerald-700 border-emerald-100",
  warning: "bg-amber-50 text-amber-700 border-amber-100",
  error: "bg-rose-50 text-rose-700 border-rose-100",
  info: "bg-blue-50 text-blue-700 border-blue-100",
};

const getVariantFromStatus = (status: string): StatusVariant => {
  const statusMap: Record<string, StatusVariant> = {
    "Actif": "active",
    "Inactif": "inactive",
    "Nouveau": "new",
    "En stock": "in-stock",
    "Faible": "low",
    "Critique": "critical",
    "Rupture": "out-of-stock",
    "Validé": "validated",
    "En cours": "pending",
    "Annulé": "cancelled",
  };

  return statusMap[status] || "info";
};

export function StatusBadge({ status, variant, className = "" }: StatusBadgeProps) {
  const badgeVariant = variant || getVariantFromStatus(status);

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-black border uppercase tracking-wider font-['Google_Sans'] ${statusStyles[badgeVariant]} ${className}`}>
      {status}
    </span>
  );
}