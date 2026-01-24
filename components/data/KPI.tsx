"use client";
import React from "react";
import { LuDollarSign, LuUsers, LuShoppingCart, LuPackage, LuArrowUpRight, LuArrowDownRight } from "react-icons/lu";

export interface KPICardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: React.ComponentType<{ className?: string }>;
}

export const KPICard = ({ title, value, trend, icon: Icon }: KPICardProps) => {
  const isPositive = trend > 0;
  return (
    <div className="group py-2">
      <div className="flex items-center gap-2 mb-4 text-zinc-400">
        <Icon className="w-4 h-4" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{title}</span>
      </div>
      <div className="flex items-baseline gap-3">
        <h3 className="text-4xl font-medium font-mono tracking-tighter text-zinc-900">{value}</h3>
        <div className={`flex items-center text-[11px] font-bold ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
          {isPositive ? <LuArrowUpRight className="w-3 h-3" /> : <LuArrowDownRight className="w-3 h-3" />}
          {Math.abs(trend)}%
        </div>
      </div>
    </div>
  );
};

export default function KPI() {
  return (
    <div className="border-b border-zinc-100 bg-white">
      <div className="max-w-350 mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <KPICard title="CA Quotidien" value="8.45M" trend={12.5} icon={LuDollarSign} />
          <KPICard title="Clients" value="154" trend={8.2} icon={LuUsers} />
          <KPICard title="Commandes" value="892" trend={-2.4} icon={LuShoppingCart} />
          <KPICard title="Alertes" value="12" trend={-5.0} icon={LuPackage} />
        </div>
      </div>
    </div>
  );
}