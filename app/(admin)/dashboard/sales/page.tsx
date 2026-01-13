"use client";

import React, { useState } from "react";
import { DataTable, Column } from "../../../../components/data";
import {
  LuPlus,
  LuSearch,
  LuDownload,
  LuChevronRight,
  LuShoppingCart,
} from "react-icons/lu";
import { PageHeader } from "../../../../components/ui";

// --- CONFIGURATION DES COLONNES (Style Minimaliste) ---
const salesColumns: Column[] = [
  {
    key: "orderNumber",
    label: "Référence",
    render: (val) => <span className="font-semibold text-zinc-900 font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "customer",
    label: "Client",
    render: (_, row) => (
      <div className="flex flex-col">
        <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{(row as any).customer}</span>
        <span className="text-xs text-zinc-400 uppercase tracking-tighter font-['Google_Sans']">{(row as any).date}</span>
      </div>
    )
  },
  {
    key: "status",
    label: "État",
    render: (status) => {
      const statusValue = status as string;
      const statusStyles: Record<string, string> = {
        "Payé": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "Terminées": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "En cours": "bg-amber-50 text-amber-700 border-amber-100",
        "Annulées": "bg-rose-50 text-rose-700 border-rose-100",
      };

      return (
        <span className={`px-2.5 py-1 rounded-full text-xs font-black border uppercase tracking-widest font-['Google_Sans'] ${statusStyles[statusValue] || "bg-zinc-50 text-zinc-500 border-zinc-200"}`}>
          {statusValue}
        </span>
      );
    }
  },
  {
    key: "paymentMethod",
    label: "Méthode",
    render: (val) => <span className="text-zinc-500 text-xs font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "amount",
    label: "Montant",
    align: "right",
    render: (val) => <span className="font-medium text-zinc-900 font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "actions",
    label: "",
    align: "right",
    render: () => (
      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors group">
        <LuChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900" />
      </button>
    )
  }
];

const salesData = [
  { orderNumber: "#V-2026-001", date: "09/01/2026", customer: "Marie Dupont", amount: "124,00 €", status: "Payé", paymentMethod: "Carte" },
  { orderNumber: "#V-2026-002", date: "09/01/2026", customer: "Jean Martin", amount: "89,50 €", status: "Payé", paymentMethod: "Comptant" },
  { orderNumber: "#V-2026-003", date: "08/01/2026", customer: "Sophie Bernard", amount: "156,00 €", status: "Payé", paymentMethod: "Carte" },
];

export default function SalesPage() {
  const [activeTab, setActiveTab] = useState("Toutes");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title="Ventes"
        description="Suivi des commandes et flux de revenus."
      >
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-['Google_Sans']">
            <LuDownload className="w-4 h-4" />
            Exporter (.csv)
          </button>
          <button className="bg-zinc-900 text-white px-5 py-2 rounded-lg text-base font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2 font-['Google_Sans']">
            <LuPlus className="w-4 h-4" />
            Nouvelle Vente
          </button>
        </div>
      </PageHeader>

      <div className="max-w-350 mx-auto px-8 mt-12">
        
        {/* FILTRES DISCRETS (TABS STYLE) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {["Toutes", "Terminées", "En cours", "Annulées"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base font-bold pb-4 -mb-4.25 transition-colors relative font-['Google_Sans'] ${
                  activeTab === tab ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900" />}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <LuSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-900 transition-colors w-4 h-4" />
            <input 
              type="text" 
              placeholder="Rechercher une vente..." 
              className="pl-6 pr-4 py-2 text-base outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all font-['Google_Sans']"
            />
          </div>
        </div>

        {/* TABLEAU */}
        <DataTable 
          columns={salesColumns} 
          data={salesData} 
          variant="clean"
        />

        {/* FOOTER DE STATISTIQUES DISCRET (Remplace les KPI Cards) */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
            <div className="flex gap-12">
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Chiffre d&apos;affaires</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">2,847.90 €</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Panier Moyen</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">60.59 €</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Commandes</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">47</p>
                </div>
            </div>
            <div className="text-xs font-['Google_Sans']">
                Mise à jour en temps réel
            </div>
        </div>
      </div>
    </div>
  );
}