"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable, Column, KPI } from "../../../../components/data";
import { 
  LuSearch, 
  LuPlus, 
  LuDownload,
  LuChevronRight,
  LuImage,
  LuBox
} from "react-icons/lu";
import { PageHeader, TabNavigation, SkeletonTable, PageLayout } from "../../../../components/ui";

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
          <span className="font-bold text-zinc-900 text-base font-['Google_Sans']">{(item as any).name}</span>
          <span className="text-xs text-zinc-400 uppercase font-medium tracking-wider">{(item as any).category}</span>
        </div>
      </div>
    )
  },
  {
    key: "sku",
    label: "SKU",
    render: (val) => <span className="text-sm font-mono text-zinc-500 uppercase">{val as string}</span>
  },
  {
    key: "status",
    label: "État Stock",
    render: (status, item) => {
      const statusValue = status as string;
      const colors: Record<string, string> = {
        "En stock": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "Critique": "bg-amber-50 text-amber-700 border-amber-100",
        "Faible": "bg-orange-50 text-orange-700 border-orange-100",
        "Rupture": "bg-rose-50 text-rose-700 border-rose-100",
      };
      return (
        <div className="flex flex-col gap-1.5">
          <span className={`w-fit px-2.5 py-1 rounded-full text-xs font-black border uppercase tracking-wider ${colors[statusValue]}`}>
            {statusValue}
          </span>
          <span className="text-xs font-medium text-zinc-400 ml-1">{(item as any).stock} unités</span>
        </div>
      );
    }
  },
  {
    key: "price",
    label: "Prix de vente",
    align: "right",
    render: (val) => <span className="font-medium text-zinc-900 font-['Google_Sans']">{val as string} F CFA</span>
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
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulation du chargement initial
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Simulation du chargement lors du changement d'onglet
  const handleTabChange = (tab: string) => {
    setIsLoading(true);
    setActiveTab(tab);
    // Petit délai pour simuler le chargement des données filtrées
    setTimeout(() => setIsLoading(false), 300);
  };

  // Simulation du chargement lors de la recherche
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setIsLoading(true);
      // Petit délai pour simuler la recherche
      setTimeout(() => setIsLoading(false), 200);
    }
  };

  const filteredData = inventoryData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtrage par statut selon l'onglet actif
  const getFilteredByStatus = (data: typeof inventoryData) => {
    switch (activeTab) {
      case "En stock":
        return data.filter(item => item.status === "En stock");
      case "Alertes stock":
        return data.filter(item => item.status === "Critique" || item.status === "Faible");
      case "Ruptures":
        return data.filter(item => item.status === "Rupture");
      default:
        return data;
    }
  };

  const displayData = getFilteredByStatus(filteredData);

  return (
    <PageLayout>

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

      {/* KPI SECTION */}
      <KPI />

      <div className="max-w-350 mx-auto px-8 mt-12">
        
        {/* FILTRES DISCRETS (TABS) */}
        <TabNavigation
          tabs={["Tous les articles", "En stock", "Alertes stock", "Ruptures"]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          searchPlaceholder="Nom, SKU..."
        />

        {/* TABLEAU OU SKELETON */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SkeletonTable rows={5} columns={5} />
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DataTable
                columns={inventoryColumns}
                data={displayData}
                variant="clean"
              />
            </motion.div>
          )}
        </AnimatePresence>

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
    </PageLayout>
  );
}