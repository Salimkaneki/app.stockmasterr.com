"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable, Column, KPI } from "../../../../components/data";
import {
  LuPlus,
  LuSearch,
  LuDownload,
  LuChevronRight,
  LuReceipt,
  LuClock,
  LuCheck,
  LuX
} from "react-icons/lu";
import { PageHeader, ActionButton, StatusBadge, TabNavigation, SkeletonTable, PageLayout } from "../../../../components/ui";

const invoiceColumns: Column<any>[] = [
  {
    key: "number",
    label: "Référence",
    render: (val) => <span className="font-semibold text-zinc-900 font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "client",
    label: "Bénéficiaire",
    render: (_, row) => (
      <div className="flex flex-col">
        <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{(row as any).clientName}</span>
        <span className="text-xs text-zinc-400 uppercase tracking-tighter font-['Google_Sans']">{(row as any).category}</span>
      </div>
    )
  },
  {
    key: "status",
    label: "État",
    render: (status) => <StatusBadge status={status as string} />
  },
  {
    key: "date",
    label: "Échéance",
    render: (val) => <span className="text-zinc-500 text-xs font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "amount",
    label: "Total",
    align: "right",
    render: (val) => <span className="font-medium text-zinc-900 font-['Google_Sans']">{val as string} €</span>
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

const invoiceData = [
  { id: 1, number: "INV-001", clientName: "Acme Studio", category: "Design Service", date: "12 Jan. 2026", status: "Payée", amount: "1,200.00" },
  { id: 2, number: "INV-002", clientName: "Minimal Co.", category: "Consulting", date: "15 Jan. 2026", status: "En attente", amount: "850.00" },
  { id: 3, number: "INV-003", clientName: "Zéro Inc.", category: "SaaS Subscription", date: "02 Jan. 2026", status: "Annulée", amount: "45.00" },
];

export default function InvoicesPage() {
  const [activeTab, setActiveTab] = useState("Tous");
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

  const filteredData = invoiceData.filter(item =>
    item.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtrage par statut selon l'onglet actif
  const getFilteredByStatus = (data: typeof invoiceData) => {
    switch (activeTab) {
      case "Payés":
        return data.filter(item => item.status === "Payée");
      case "En attente":
        return data.filter(item => item.status === "En attente");
      case "Archives":
        return data.filter(item => item.status === "Annulée");
      default:
        return data;
    }
  };

  const displayData = getFilteredByStatus(filteredData);

  return (
    <PageLayout>

      <PageHeader
        title="Facturation"
        description="Historique des transactions et documents."
      >
        <div className="flex gap-3">
          <ActionButton variant="secondary" icon={<LuDownload className="w-4 h-4" />}>
            Exporter (.csv)
          </ActionButton>
          <ActionButton variant="primary" icon={<LuPlus className="w-4 h-4" />}>
            Nouvelle Facture
          </ActionButton>
        </div>
      </PageHeader>

      {/* KPI SECTION */}
      <KPI />

      <div className="max-w-350 mx-auto px-8 mt-12">

        {/* FILTRES DISCRETS */}
        <TabNavigation
          tabs={["Tous", "Payés", "En attente", "Archives"]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          searchPlaceholder="Rechercher..."
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
              <DataTable<any>
                columns={invoiceColumns}
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
                    <p className="text-[15px] font-bold uppercase tracking-widest mb-1">Total Encaissé</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">42,890.00 €</p>
                </div>
                <div>
                    <p className="text-[15px] font-bold uppercase tracking-widest mb-1">En attente</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">2,150.00 €</p>
                </div>
            </div>
            <div className="text-xs">
                Page 1 sur 12
            </div>
        </div>
      </div>
    </PageLayout>
  );
}