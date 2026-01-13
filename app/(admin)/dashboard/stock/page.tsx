"use client";

import React, { useState } from "react";
import { DataTable, Column } from "../../../../components/data";
import {
  LuPlus,
  LuSearch,
  LuDownload,
  LuChevronRight,
  LuTriangleAlert,
  LuPackage,
  LuRefreshCw,
} from "react-icons/lu";
import { PageHeader, ActionButton, SearchBar, StatusBadge } from "../../../../components/ui";

// --- CONFIGURATION DES COLONNES STOCK ---
const stockColumns: Column[] = [
  {
    key: "sku",
    label: "SKU",
    render: (val) => <span className="text-zinc-400 font-mono text-xs uppercase">{val as string}</span>
  },
  {
    key: "name",
    label: "Produit",
    render: (_, row) => (
      <div className="flex flex-col">
        <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{(row as any).name}</span>
        <span className="text-xs text-zinc-400 font-['Google_Sans']">{(row as any).category}</span>
      </div>
    )
  },
  {
    key: "quantity",
    label: "Quantité",
    render: (qty) => {
      const quantity = qty as number;
      const isLow = quantity <= 5;
      return (
        <div className="flex items-center gap-2">
          <span className={`font-medium font-['Google_Sans'] ${isLow ? "text-rose-600" : "text-zinc-900"}`}>
            {quantity} unités
          </span>
          {isLow && <LuTriangleAlert className="w-3 h-3 text-rose-500" />}
        </div>
      );
    }
  },
  {
    key: "status",
    label: "Disponibilité",
    render: (status) => <StatusBadge status={status as string} />
  },
  {
    key: "price",
    label: "Prix Unitaire",
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

const stockData = [
  { sku: "PRD-001", name: "Café Éthiopie Sidamo", category: "Grains", quantity: 45, price: "18,00 €", status: "En Stock" },
  { sku: "PRD-002", name: "Filtres V60 (x100)", category: "Accessoires", quantity: 3, price: "7,50 €", status: "Stock Faible" },
  { sku: "PRD-003", name: "Moulin Manuel Hario", category: "Équipement", quantity: 0, price: "45,00 €", status: "Rupture" },
  { sku: "PRD-004", name: "Tasse Céramique", category: "Art de la table", quantity: 12, price: "12,00 €", status: "En Stock" },
];

export default function StockPage() {
  const [activeTab, setActiveTab] = useState("Tous");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title="Inventaire"
        description="Gestion des niveaux de stock et réapprovisionnement."
      >
        <div className="flex gap-3">
          <ActionButton variant="ghost" icon={<LuRefreshCw className="w-4 h-4" />}>
            Actualiser
          </ActionButton>
          <ActionButton variant="primary" icon={<LuPlus className="w-4 h-4" />}>
            Ajouter un produit
          </ActionButton>
        </div>
      </PageHeader>

      <div className="max-w-350 mx-auto px-8 mt-12">
        
        {/* FILTRES & RECHERCHE */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {["Tous", "En Stock", "Stock Faible", "Rupture"].map((tab) => (
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
          
          <SearchBar 
            placeholder="Rechercher par SKU ou nom..."
            className="w-48 focus-within:w-64 transition-all"
          />
        </div>

        {/* TABLEAU DES STOCKS */}
        <DataTable 
          columns={stockColumns} 
          data={stockData} 
          variant="clean"
        />

        {/* STATISTIQUES D'INVENTAIRE */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
            <div className="flex gap-12">
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Valeur Totale</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">14,250.00 €</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Articles Uniques</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">124</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Alertes Rupture</p>
                    <p className="text-rose-600 text-2xl font-mono font-medium">3</p>
                </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-['Google_Sans']">
                <LuPackage className="w-4 h-4" />
                Dernier inventaire : Il y a 2 heures
            </div>
        </div>
      </div>
    </div>
  );
}