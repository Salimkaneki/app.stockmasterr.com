"use client";

import React from "react";
import { 
  LuTrendingUp, 
  LuTrendingDown, 
  LuDollarSign, 
  LuUsers, 
  LuShoppingCart, 
  LuPackage 
} from "react-icons/lu";

interface KPICardProps {
  title: string;
  value: string;
  trend: number;
  icon: React.ElementType;
}

const KPICard = ({ title, value, trend, icon: Icon }: KPICardProps) => {
  const isPositive = trend > 0;

  return (
    <div className="bg-white p-6 rounded-4xl border border-zinc-200 shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-6">
        {/* Icône style Zinc Minimaliste */}
        <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>

        {/* Badge de tendance discret */}
        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold ${
          isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        }`}>
          {isPositive ? <LuTrendingUp className="w-3.5 h-3.5" /> : <LuTrendingDown className="w-3.5 h-3.5" />}
          {Math.abs(trend)}%
        </div>
      </div>

      <div>
        <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest mb-1">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-zinc-900 tracking-tighter">
          {value}
        </h3>
        <p className="text-zinc-300 text-[10px] mt-2 font-medium italic">
          vs. mois précédent
        </p>
      </div>
    </div>
  );
};

export default function KPI() {
  return (
    <div className="bg-zinc-50 pt-10 pb-6">
      {/* Container aligné à 1400px */}
      <div className="max-w-350 mx-auto">
        <header className="mb-8 px-8">
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tighter">Vue d'ensemble</h1>
          <p className="text-zinc-400 text-sm font-medium mt-1 italic">Performances de votre activité aujourd'hui.</p>
        </header>

        {/* Grille de KPI alignée à 1400px */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          <KPICard 
            title="Chiffre d'affaires" 
            value="8 450 000 F" 
            trend={12.5} 
            icon={LuDollarSign} 
          />
          <KPICard 
            title="Nouveaux Clients" 
            value="+ 154" 
            trend={8.2} 
            icon={LuUsers} 
          />
          <KPICard 
            title="Commandes" 
            value="892" 
            trend={-2.4} 
            icon={LuShoppingCart} 
          />
          <KPICard 
            title="Alertes Stock" 
            value="12" 
            trend={-5.0} 
            icon={LuPackage} 
          />
        </div>
      </div>
    </div>
  );
}