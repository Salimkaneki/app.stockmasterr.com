"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable } from "../../../../components/data";
import { PageHeader, TabNavigation, SkeletonTable, PageLayout, PageContainer, ActionButton } from "../../../../components/ui";
import { createProductColumns } from "../../../../components/columns";
import {
  LuPlus,
  LuChevronRight
} from "react-icons/lu";

// --- CONFIGURATION DES COLONNES ---
const productColumns = createProductColumns();

// --- DONNÉES DE TEST ---
const mockProducts = [
  { id: 1, name: "Robe d'été fleurie", sku: "ROB-001", category: "Vêtements", price: "45 000", stock: 15, status: "En stock" },
  { id: 2, name: "Jean slim noir", sku: "JEA-002", category: "Vêtements", price: "35 000", stock: 8, status: "En stock" },
  { id: 3, name: "Sac à main cuir", sku: "SAC-003", category: "Accessoires", price: "75 000", stock: 3, status: "Faible" },
  { id: 4, name: "Bottes en cuir", sku: "BOT-004", category: "Chaussures", price: "65 000", stock: 0, status: "Rupture" },
  { id: 5, name: "Pull cachemire", sku: "PUL-005", category: "Vêtements", price: "95 000", stock: 12, status: "En stock" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  useEffect(() => {
    // Simulation du chargement
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["Tous", ...Array.from(new Set(products.map(p => p.category)))];

  const tabs = categories;

  // Gestionnaire pour le changement d'onglet
  const handleTabChange = (tab: string) => {
    setLoading(true);
    setSelectedCategory(tab);
    setTimeout(() => setLoading(false), 300);
  };

  // Gestionnaire pour la recherche
  const handleSearchChange = (query: string) => {
    setSearchTerm(query);
  };

  return (
    <PageLayout>
      <PageHeader
        title="Gestion des Produits"
        description="Ajoutez, modifiez et organisez vos produits"
      >
        <Link href="/dashboard/products/new">
          <ActionButton icon={<LuPlus className="w-4 h-4" />} variant="primary">
            Ajouter un Produit
          </ActionButton>
        </Link>
      </PageHeader>

      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >

        {/* Onglets par catégorie */}
        <TabNavigation
          tabs={tabs}
          activeTab={selectedCategory}
          onTabChange={handleTabChange}
          searchQuery={searchTerm}
          onSearchChange={handleSearchChange}
          searchPlaceholder="Rechercher un produit..."
        />

        {/* Tableau des produits */}
        {loading ? (
          <SkeletonTable columns={productColumns.length} rows={5} />
        ) : (
          <DataTable
            data={filteredProducts}
            columns={productColumns}
            variant="clean"
            emptyMessage="Aucun produit trouvé. Commencez par ajouter votre premier produit."
          />
        )}


      </motion.div>
      </PageContainer>
    </PageLayout>
  );
}