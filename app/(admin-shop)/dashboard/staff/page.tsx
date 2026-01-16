"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable, Column } from "../../../../components/data";
import { PageHeader, ActionButton, StatusBadge, SkeletonTable, TabNavigation, PageLayout, UserProfile } from "../../../../components/ui";
import {
  UserPlus,
  ShieldCheck,
  Activity,
  MoveHorizontal,
  Mail,
  Phone,
  Circle,
  Search
} from "lucide-react";

// --- CONFIGURATION DES COLONNES PERSONNEL ---
const staffColumns: Column[] = [
  {
    key: "user",
    label: "Membre",
    render: (_, member) => (
      <UserProfile
        name={(member as any).name}
        email={(member as any).email}
        initials={(member as any).initials}
        avatar={(member as any).avatar}
      />
    )
  },
  {
    key: "role",
    label: "Rôle",
    render: (role) => (
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-3 h-3 text-zinc-400" />
        <span className="text-sm text-zinc-600 font-['Google_Sans']">{role as string}</span>
      </div>
    )
  },
  {
    key: "status",
    label: "Statut",
    render: (status) => <StatusBadge status={status as string} />
  },
  {
    key: "sales",
    label: "Ventes",
    align: "right",
    render: (val) => (
      <div className="font-mono font-medium text-zinc-900 text-base">
        {val as string} <span className="text-xs text-zinc-300">F</span>
      </div>
    )
  },
  {
    key: "actions",
    label: "",
    align: "right",
    render: () => (
      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors group">
        <MoveHorizontal className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900" />
      </button>
    )
  }
];

const staffData = [
  { id: 1, name: "Jean-Pierre Dubois", email: "jp@commerce.com", initials: "JD", role: "Administrateur", status: "Actif", sales: "1,250,000", avatar: null },
  { id: 2, name: "Marie-Louise Chen", email: "ml@commerce.com", initials: "MC", role: "Caissière Senior", status: "Actif", sales: "890,000", avatar: null },
  { id: 3, name: "Abdoulaye Diallo", email: "ab@commerce.com", initials: "AD", role: "Caissier", status: "Actif", sales: "450,000", avatar: null },
  { id: 4, name: "Sophie Martin", email: "sm@commerce.com", initials: "SM", role: "Manager", status: "En congé", sales: "720,000", avatar: null },
  { id: 5, name: "Lucas Bernard", email: "lb@commerce.com", initials: "LB", role: "Caissier", status: "Actif", sales: "380,000", avatar: null },
];

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("Tous les membres");
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

  const filteredData = staffData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtrage par statut selon l'onglet actif
  const getFilteredByStatus = (data: typeof staffData) => {
    switch (activeTab) {
      case "Actifs":
        return data.filter(item => item.status === "Actif");
      case "En congé":
        return data.filter(item => item.status === "En congé");
      case "Administrateurs":
        return data.filter(item => item.role === "Administrateur" || item.role === "Manager");
      default:
        return data;
    }
  };

  const displayData = getFilteredByStatus(filteredData);

  return (
    <PageLayout>
      <PageHeader
        title="Personnel"
        description="Gestion des membres de l'équipe et suivi des performances."
      >
        <div className="flex gap-3">
          <ActionButton variant="secondary" icon={<Mail className="w-4 h-4" />}>
            Message Équipe
          </ActionButton>
          <ActionButton variant="primary" icon={<UserPlus className="w-4 h-4" />}>
            Nouveau Membre
          </ActionButton>
        </div>
      </PageHeader>


      <div className="max-w-350 mx-auto px-8 mt-12">

        {/* FILTRES & RECHERCHE */}
        <TabNavigation
          tabs={["Tous les membres", "Actifs", "En congé", "Administrateurs"]}
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
              <SkeletonTable rows={6} columns={5} />
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
                <DataTable
                  columns={staffColumns}
                  data={displayData}
                  variant="clean"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
}