"use client";

import React, { useState } from "react";
import { DataTable, Column } from "../../../../components/data";
import { 
  LuSearch, 
  LuPlus, 
  LuDownload,
  LuChevronRight,
  LuImage,
  LuBox
} from "react-icons/lu";
import { PageHeader } from "../../../../components/ui";

// --- CONFIGURATION DES COLONNES ---
const inventoryColumns: Column[] = [
  {
    key: "name",
    label: "Article",
    render: (_, item) => (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
          <LuImage className="w-4 h-4 text-zinc-300" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-zinc-900 text-base font-['Google_Sans']">{item.name}</span>
          <span className="text-xs text-zinc-400 uppercase font-medium tracking-wider">{item.category}</span>
        </div>
      </div>
    )
  },
  {
    key: "sku",
    label: "SKU",
    render: (val) => <span className="text-sm font-mono text-zinc-500 uppercase">{val}</span>
  },
  {
    key: "status",
    label: "État Stock",
    render: (status, item) => {
      const colors: any = {
        "En stock": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "Critique": "bg-amber-50 text-amber-700 border-amber-100",
        "Faible": "bg-orange-50 text-orange-700 border-orange-100",
        "Rupture": "bg-rose-50 text-rose-700 border-rose-100",
      };
      return (
        <div className="flex flex-col gap-1.5">
          <span className={`w-fit px-2.5 py-1 rounded-full text-xs font-black border uppercase tracking-wider ${colors[status]}`}>
            {status}
          </span>
          <span className="text-xs font-medium text-zinc-400 ml-1">{item.stock} unités</span>
        </div>
      );
    }
  },
  {
    key: "price",
    label: "Prix de vente",
    align: "right",
    render: (val) => <span className="font-medium text-zinc-900 font-['Google_Sans']">{val} F CFA</span>
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

const inventoryData = [
  { id: 1, name: "Clavier Mécanique RGB", sku: "ELEC-001", category: "Électronique", price: "45 000", stock: 2, status: "Critique" },
  { id: 2, name: "Souris Sans Fil", sku: "ACC-042", category: "Accessoires", price: "15 000", stock: 24, status: "En stock" },
  { id: 3, name: "Écran 24 pouces UltraSharp", sku: "ELEC-089", category: "Électronique", price: "110 000", stock: 0, status: "Rupture" },
  { id: 5, name: "Casque Audio Pro", sku: "ELEC-102", category: "Électronique", price: "35 000", stock: 8, status: "Faible" },
];

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState("Tous les articles");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title="Inventaire"
        description="Gestion des stocks et catalogue produits."
      >
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            <LuDownload className="w-4 h-4" />
            Exporter
          </button>
          <a href="/dashboard/inventory/new" className="bg-zinc-900 text-white px-5 py-2 rounded-lg text-base font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2">
            <LuPlus className="w-4 h-4" />
            Créer un article
          </a>
        </div>
      </PageHeader>

      <div className="max-w-350 mx-auto px-8 mt-12">
        
        {/* FILTRES DISCRETS (TABS) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {["Tous les articles", "En stock", "Alertes stock", "Ruptures"].map((tab) => (
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
              placeholder="Nom, SKU..." 
              className="pl-6 pr-4 py-2 text-base outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all font-['Google_Sans']"
            />
          </div>
        </div>

        {/* TABLEAU */}
        <DataTable 
          columns={inventoryColumns} 
          data={inventoryData} 
          variant="clean"
        />

        {/* FOOTER DE PAGE DISCRET */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
            <div className="flex gap-12">
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Valeur du stock</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter">1,450,000 F CFA</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Articles Totaux</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter">124</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Alertes</p>
                    <p className="text-rose-600 text-2xl font-mono font-bold tracking-tighter">12</p>
                </div>
            </div>
            <div className="text-xs font-['Google_Sans']">
                Dernier inventaire : Hier, 18:45
            </div>
        </div>
      </div>
    </div>
  );
}