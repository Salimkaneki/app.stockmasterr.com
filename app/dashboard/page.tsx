"use client";

import React from "react";
import KPI from "../../components/KPI";
import DataTable, { Column } from "../../components/DataTable";
import { LuCoins, LuArrowRight, LuCircleDot } from "react-icons/lu";

// --- COLONNES SALES (ULTRA-NETTES) ---
const salesColumns: Column[] = [
  {
    key: "orderInfo",
    label: "Flux",
    render: (_, sale) => (
      <div className="flex flex-col py-1">
        <span className="text-[15px] font-bold text-zinc-900 font-['Google_Sans'] tracking-tight">{sale.orderNumber}</span>
        <span className="text-[11px] text-zinc-400 font-medium uppercase tracking-widest">{sale.time}</span>
      </div>
    )
  },
  {
    key: "customer",
    label: "Client",
    render: (val) => <span className="text-[14px] text-zinc-500 font-['Google_Sans']">{val}</span>
  },
  {
    key: "status",
    label: "État",
    render: (status) => (
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-emerald-500" />
        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{status}</span>
      </div>
    )
  },
  {
    key: "amount",
    label: "Montant",
    align: "right",
    render: (val) => (
      <div className="font-mono font-medium text-[16px] text-zinc-900 tracking-tighter">
        {val} <span className="text-[10px] text-zinc-300 ml-0.5">F</span>
      </div>
    )
  }
];

const salesData = [
  { orderNumber: "ORD-9921", time: "18:45", customer: "Marie Dupont", amount: "124,000", status: "Validé" },
  { orderNumber: "ORD-9922", time: "17:32", customer: "Jean Martin", amount: "89,500", status: "Validé" },
  { orderNumber: "ORD-9923", time: "16:15", customer: "Lucas Bernard", amount: "156,000", status: "Validé" },
];

export default function DashboardPage() {
  return (
    <div className="bg-white min-h-screen pb-32 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* HEADER : LA VUE D'ENSEMBLE */}
      <div className="pt-20 pb-12 border-b border-zinc-50 px-8">
        <div className="max-w-350 mx-auto">
          <h1 className="text-5xl font-medium tracking-tighter text-zinc-900 mb-2 font-['Google_Sans']">
            Dashboard<span className="text-zinc-200">.</span>
          </h1>
          <p className="text-zinc-400 text-sm font-medium">Analyse consolidée de votre activité en temps réel.</p>
        </div>
      </div>

      <KPI />
      
      <div className="max-w-350 mx-auto px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
      
          {/* SECTION PRINCIPALE (8/12) */}
          <div className="lg:col-span-8">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-900">Ventes Récentes</h2>
              <button className="text-[11px] font-bold text-zinc-400 hover:text-zinc-900 flex items-center gap-2 transition-all group">
                VOIR TOUT <LuArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <DataTable
              columns={salesColumns}
              data={salesData}
              variant="clean"
            />
          </div>

          {/* SIDEBAR (4/12) */}
          <div className="lg:col-span-4 space-y-20">
            
            {/* WIDGET : CASHFLOW */}
            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-8">Liquidités</p>
              <div className="flex flex-col gap-1 mb-8">
                <span className="text-5xl font-mono font-medium tracking-tighter text-zinc-900">850.2K</span>
                <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">+12% cette semaine</span>
              </div>
              
              {/* MINI VISUALIZER (BORDURES FINES) */}
              <div className="flex items-end gap-0.5 h-10 w-full">
                {[40, 60, 45, 90, 65, 80, 50, 70, 100, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-zinc-100 hover:bg-zinc-900 transition-colors duration-500 cursor-pointer" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* WIDGET : ALERTES RADICALES */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-8">Notifications</p>
              <div className="space-y-10">
                <div className="flex items-start gap-4 group">
                   <LuCircleDot className="w-4 h-4 text-rose-500 mt-0.5" />
                   <div>
                     <p className="text-[14px] font-bold text-zinc-900 leading-none tracking-tight">Rupture de stock imminente</p>
                     <p className="text-[12px] text-zinc-400 mt-2 leading-relaxed">Le produit <span className="text-zinc-900 font-medium">Clavier RGB</span> est passé sous le seuil critique.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 group">
                   <LuCircleDot className="w-4 h-4 text-zinc-200 mt-0.5" />
                   <div>
                     <p className="text-[14px] font-bold text-zinc-900 leading-none tracking-tight">Rapport mensuel prêt</p>
                     <p className="text-[12px] text-zinc-400 mt-2 leading-relaxed">Les statistiques de Décembre 2025 sont disponibles en téléchargement.</p>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}