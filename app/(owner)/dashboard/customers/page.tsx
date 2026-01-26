"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable } from "../../../../components/data";
import {
  PageHeader,
  ActionButton,
  Modal,
  SkeletonTable,
  SkeletonCard,
  TabNavigation,
  PageLayout
} from "../../../../components/ui";
import { createCustomerColumns, Customer } from "../../../../components/columns";
import {
  LuPlus,
  LuChevronRight,
  LuUserPlus,
  LuMail,
  LuPhone,
  LuMapPin
} from "react-icons/lu";

// --- CONFIGURATION DES COLONNES ---
const customerColumns = createCustomerColumns();

const customerData: Customer[] = [
  { id: 1, name: "Marie Dupont", email: "marie@example.com", initials: "MD", status: "Actif", totalOrders: 12, totalSpent: 1450.00, avatar: null },
  { id: 2, name: "Jean Martin", email: "j.martin@mail.fr", initials: "JM", status: "Actif", totalOrders: 5, totalSpent: 420.50, avatar: null },
  { id: 3, name: "Lucas Bernard", email: "lucas@pme.com", initials: "LB", status: "Inactif", totalOrders: 1, totalSpent: 89.00, avatar: null },
];

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState("Tous les clients");
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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

  const filteredData = customerData.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtrage par statut selon l'onglet actif
  const getFilteredByStatus = (data: typeof customerData) => {
    switch (activeTab) {
      case "Actifs":
        return data.filter(customer => customer.status === "Actif");
      case "Inactifs":
        return data.filter(customer => customer.status === "Inactif");
      case "Nouveaux":
        return data.filter(customer => customer.totalOrders <= 2);
      default:
        return data;
    }
  };

  const displayData = getFilteredByStatus(filteredData);

  return (
    <PageLayout>
      <PageHeader
        title="Clients"
        description="Gestion de la base client et fidélisation."
      >
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ActionButton variant="secondary" icon={<LuMail className="w-4 h-4" />}>
            Campagne Email
          </ActionButton>
          <ActionButton
            variant="primary"
            icon={<LuUserPlus className="w-4 h-4" />}
            onClick={() => setIsAddModalOpen(true)}
          >
            Nouveau Client
          </ActionButton>
        </motion.div>
      </PageHeader>

      <div className="max-w-350 mx-auto px-8 mt-12">
        {/* FILTRES DISCRETS (TABS) */}
        <TabNavigation
          tabs={["Tous les clients", "Actifs", "Nouveaux", "Inactifs"]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          searchPlaceholder="Rechercher un client..."
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
              <DataTable<Customer>
                columns={customerColumns}
                data={displayData}
                variant="clean"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOTER DE PAGE DISCRET (KPIs) */}
        <motion.div
          className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-base font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Total Clients</p>
              <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter">1,284</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-base font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Panier Moyen</p>
              <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter">84.20 €</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-base font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Fidélité</p>
              <p className="text-emerald-600 text-2xl font-mono font-bold tracking-tighter">12%</p>
            </motion.div>
          </div>
          <div className="text-xs font-['Google_Sans']">
            Dernière activité : Il y a 5 min
          </div>
        </motion.div>
      </div>

      {/* MODAL AJOUT CLIENT */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Nouveau Client"
        size="lg"
      >
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Prénom
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Marie"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Dupont"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Email
            </label>
            <div className="relative">
              <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="email"
                className="w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="marie@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Téléphone
            </label>
            <div className="relative">
              <LuPhone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="tel"
                className="w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+33 6 12 34 56 78"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Adresse
            </label>
            <div className="relative">
              <LuMapPin className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
              <textarea
                rows={3}
                className="w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123 Rue de la Paix, 75001 Paris"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg font-medium transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Créer le client
            </button>
          </div>
        </form>
      </Modal>
    </PageLayout>
  );
}