"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable } from "../../../../components/data";
import { PageHeader, ActionButton, SkeletonTable, TabNavigation, PageLayout } from "../../../../components/ui";
import { createUserColumns, User } from "../../../../components/columns";
import {
  LuUserPlus,
  LuMail,
  LuPhone,
  LuSearch
} from "react-icons/lu";

// --- CONFIGURATION DES COLONNES PERSONNEL ---
const staffColumns = createUserColumns();

const staffData: User[] = [
  { id: 1, name: "Jean-Pierre Dubois", email: "jp@commerce.com", initials: "JD", role: "Administrateur", status: "Actif", sales: 1250000, avatar: null },
  { id: 2, name: "Marie-Louise Chen", email: "ml@commerce.com", initials: "MC", role: "Caissière Senior", status: "Actif", sales: 890000, avatar: null },
  { id: 3, name: "Abdoulaye Diallo", email: "ab@commerce.com", initials: "AD", role: "Caissier", status: "Actif", sales: 450000, avatar: null },
  { id: 4, name: "Sophie Martin", email: "sm@commerce.com", initials: "SM", role: "Manager", status: "En congé", sales: 720000, avatar: null },
  { id: 5, name: "Lucas Bernard", email: "lb@commerce.com", initials: "LB", role: "Caissier", status: "Actif", sales: 380000, avatar: null },
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
          <ActionButton variant="secondary" icon={<LuMail className="w-4 h-4" />}>
            Message Équipe
          </ActionButton>
          <ActionButton variant="primary" icon={<LuUserPlus className="w-4 h-4" />}>
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
              <DataTable<User>
                columns={staffColumns}
                data={displayData}
                variant="clean"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
}