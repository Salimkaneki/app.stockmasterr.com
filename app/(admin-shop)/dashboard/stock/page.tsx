"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable } from "../../../../components/data";
import { PageHeader, ActionButton, SearchBar, SkeletonTable, TabNavigation, PageLayout } from "../../../../components/ui";
import { createStockColumns } from "../../../../components/columns";
import {
  LuPlus,
  LuChevronRight,
  LuPackage,
  LuRefreshCw
} from "react-icons/lu";

// --- CONFIGURATION DES COLONNES STOCK ---
const stockColumns = createStockColumns();

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
        title="Stock"
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
                <LuPackage className="w-4 h-4" />
                Dernier inventaire : Il y a 2 heures
            </div>
        </div>
      </div>
    </PageLayout>
  );
}