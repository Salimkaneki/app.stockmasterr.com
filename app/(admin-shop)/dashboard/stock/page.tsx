"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable, Column, KPI } from "../../../../components/data";
import {
  Plus,
  Search,
  Download,
  ChevronRight,
  TriangleAlert,
  Package,
  RefreshCw,
} from "lucide-react";
import { PageHeader, ActionButton, SearchBar, StatusBadge, SkeletonTable, TabNavigation, PageLayout } from "../../../../components/ui";

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
          {isLow && <TriangleAlert className="w-3 h-3 text-rose-500" />}
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
        <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900" />
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
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulation du chargement des données
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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

  const filteredData = stockData.filter(item =>
    item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtrage par statut selon l'onglet actif
  const getFilteredByStatus = (data: typeof stockData) => {
    switch (activeTab) {
      case "En Stock":
        return data.filter(item => item.status === "En Stock");
      case "Stock Faible":
        return data.filter(item => item.status === "Stock Faible");
      case "Rupture":
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
        description="Gestion des niveaux de stock et réapprovisionnement."
      >
        <div className="flex gap-3">
          <ActionButton variant="ghost" icon={<RefreshCw className="w-4 h-4" />}>
            Actualiser
          </ActionButton>
          <ActionButton variant="primary" icon={<Plus className="w-4 h-4" />}>
            Ajouter un produit
          </ActionButton>
        </div>
      </PageHeader>

      {/* KPI SECTION */}
      <KPI />

      <div className="max-w-350 mx-auto px-8 mt-12">
        
        {/* FILTRES & RECHERCHE */}
        <div className="mb-8 border-b border-zinc-100 pb-4">
          <TabNavigation
            tabs={["Tous", "En Stock", "Stock Faible", "Rupture"]}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            className="mb-4"
          />
          <div className="flex justify-end">
            <SearchBar
              placeholder="Rechercher par SKU ou nom..."
              className="w-48 focus-within:w-64 transition-all"
            />
          </div>
        </div>

        {/* TABLEAU DES STOCKS OU SKELETON */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SkeletonTable rows={6} columns={6} />
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
                columns={stockColumns}
                data={displayData}
                variant="clean"
              />
            </motion.div>
          )}
        </AnimatePresence>

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
                <Package className="w-4 h-4" />
                Dernier inventaire : Il y a 2 heures
            </div>
        </div>
      </div>
    </PageLayout>
  );
}