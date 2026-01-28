"use client";

import React, { useState } from "react";
import {
  LuSave,
  LuPackage,
  LuPlus,
  LuTrendingUp,
  LuFileText,
  LuLayers
} from "react-icons/lu";

// Import de vos composants UI
import { Input, Select, Textarea } from "@/components/ui";
import { PageHeader } from "@/components/ui";

export default function NewStockPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplier, setSupplier] = useState("");
  const [description, setDescription] = useState("");

  // Simulation de données de produits (à remplacer par votre logique de données)
  const products = [
    { value: "PRD-001", label: "Café Éthiopie Sidamo", currentStock: 45, unit: "unités" },
    { value: "PRD-002", label: "Filtres V60 (x100)", currentStock: 3, unit: "paquets" },
    { value: "PRD-003", label: "Moulin Manuel Hario", currentStock: 0, unit: "unités" },
    { value: "PRD-004", label: "Tasse Céramique", currentStock: 12, unit: "unités" },
  ];


  const selectedProductData = products.find(p => p.value === selectedProduct);
  const newStockLevel = selectedProductData ? selectedProductData.currentStock + (parseInt(quantity) || 0) : 0;
  const isFormValid = selectedProduct && quantity && parseInt(quantity) > 0;

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">

      <PageHeader
        title="Restockage"
        description="Ajouter du stock à un produit existant dans l'inventaire."
        backLink={{
          href: "/dashboard/stock",
          label: "Retour au stock"
        }}
      >
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors border border-zinc-200 rounded-lg hover:bg-zinc-50">
            <LuFileText className="w-4 h-4" />
            Aperçu
          </button>
          <button className="bg-zinc-900 text-white px-8 py-2.5 rounded-lg text-base font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!isFormValid}>
            <LuSave className="w-4 h-4" />
            Valider le restockage
          </button>
        </div>
      </PageHeader>

      <div className="max-w-5xl mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* COLONNE GAUCHE : FORMULAIRE DE RESTOCKAGE */}
          <div className="lg:col-span-2 space-y-10">

            {/* SECTION : SÉLECTION DU PRODUIT */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuPackage className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Sélection du Produit</h2>
              </div>

              <Select
                label="Produit à restocker *"
                options={products.map(p => ({ value: p.value, label: `${p.label} (${p.currentStock} ${p.unit})` }))}
                value={selectedProduct}
                onChange={setSelectedProduct}
                placeholder="Choisir un produit"
                error={selectedProduct ? undefined : "Ce champ est requis"}
              />
            </section>

            {/* SECTION : DÉTAILS DU RESTOCKAGE */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuPlus className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Détails du Restockage</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Quantité à ajouter *"
                  type="number"
                  placeholder="0"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  startIcon={<LuLayers className="w-4 h-4" />}
                  error={quantity && parseInt(quantity) <= 0 ? "La quantité doit être supérieure à 0" : undefined}
                  min="1"
                />

                <Input
                  label="Fournisseur"
                  placeholder="Nom du fournisseur ou référence"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  startIcon={<LuPackage className="w-4 h-4" />}
                />
              </div>

              <Textarea
                label="Raison / Description"
                placeholder="Ex: Réception fournisseur, correction d'inventaire..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </section>

            {/* Informations complémentaires supprimées — formulaire réduit */}
          </div>

          {/* COLONNE DROITE : RÉSUMÉ (aperçu et historique supprimés) */}
          <div className="space-y-8">

            {/* CARD DE RÉSUMÉ */}
            <div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Résumé de l&apos;opération</p>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Type d&apos;opération</span>
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Restockage</span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Fournisseur</span>
                  <span className="text-sm font-medium">{supplier || '—'}</span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Raison / Description</span>
                  <span className="text-sm font-medium">{description || '—'}</span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Impact stock</span>
                  <span className="text-lg font-mono font-medium text-emerald-400">+{quantity || 0}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-zinc-500 text-xs">Date & heure</span>
                  <span className="text-sm font-medium">{new Date().toLocaleString('fr-FR')}</span>
                </div>
              </div>
              <p className="mt-6 text-[11px] text-zinc-500 italic leading-relaxed">
                Cette opération sera enregistrée dans l&apos;historique des mouvements de stock.
              </p>
            </div>
          </div>

        </div>

        {/* FOOTER DE PAGE DISCRET */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-end items-center text-zinc-400">
            <div className="text-xs font-['Google_Sans']">
                Système de gestion de stock v2.0
            </div>
        </div>
      </div>
    </div>
  );
}