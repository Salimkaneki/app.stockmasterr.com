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
  trend: number; // Pourcentage
  icon: React.ElementType;
  color: "indigo" | "emerald" | "orange" | "rose";
}

const KPICard = ({ title, value, trend, icon: Icon, color }: KPICardProps) => {
  const isPositive = trend > 0;

  // Mapping des couleurs pour le design
  const styles = {
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        {/* Icône avec fond doux */}
        <div className={`p-3 rounded-2xl border ${styles[color]}`}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Badge de tendance */}
        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
          isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        }`}>
          {isPositive ? <LuTrendingUp className="w-3.5 h-3.5" /> : <LuTrendingDown className="w-3.5 h-3.5" />}
          {Math.abs(trend)}%
        </div>
      </div>

      <div>
        <p className="text-zinc-500 text-[14px] font-semibold uppercase tracking-wider mb-1">
          {title}
        </p>
        <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">
          {value}
        </h3>
        <p className="text-zinc-400 text-xs mt-2 font-medium">
          vs. le mois dernier
        </p>
      </div>
    </div>
  );
};

export default function KPI() {
  return (
    <div className="p-8 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-900">Vue d'ensemble</h1>
          <p className="text-zinc-500 font-medium">Voici les performances de votre boutique aujourd'hui.</p>
        </header>

        {/* Grille de KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard 
            title="Chiffre d'affaires" 
            value="12 450,00 €" 
            trend={12.5} 
            icon={LuDollarSign} 
            color="indigo" 
          />
          <KPICard 
            title="Nouveaux Clients" 
            value="+ 154" 
            trend={8.2} 
            icon={LuUsers} 
            color="emerald" 
          />
          <KPICard 
            title="Commandes" 
            value="892" 
            trend={-2.4} 
            icon={LuShoppingCart} 
            color="orange" 
          />
          <KPICard 
            title="Stock Alert" 
            value="12" 
            trend={-5.0} 
            icon={LuPackage} 
            color="rose" 
          />
        </div>
      </div>
    </div>
  );
}