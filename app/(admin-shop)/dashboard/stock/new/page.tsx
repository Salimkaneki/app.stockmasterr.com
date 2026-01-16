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
import { Input, Select } from "@/components/ui";
import { PageHeader } from "@/components/ui";

export default function NewStockPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("Réception fournisseur");

  // Simulation de données de produits (à remplacer par votre logique de données)
  const products = [
    { value: "PRD-001", label: "Café Éthiopie Sidamo", currentStock: 45, unit: "unités" },
    { value: "PRD-002", label: "Filtres V60 (x100)", currentStock: 3, unit: "paquets" },
    { value: "PRD-003", label: "Moulin Manuel Hario", currentStock: 0, unit: "unités" },
    { value: "PRD-004", label: "Tasse Céramique", currentStock: 12, unit: "unités" },
  ];

  const reasons = [
    { value: "Réception fournisseur", label: "Réception fournisseur" },
    { value: "Ajustement inventaire", label: "Ajustement inventaire" },
    { value: "Retour client", label: "Retour client" },
    { value: "Correction erreur", label: "Correction d'erreur" },
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

                <Select
                  label="Motif du restockage"
                  options={reasons}
                  value={reason}
                  onChange={setReason}
                />
              </div>

            </section>

            {/* SECTION : INFORMATIONS COMPLÉMENTAIRES */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuFileText className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Informations Complémentaires</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Référence commande (optionnel)"
                  placeholder="CMD-2024-001"
                  startIcon={<LuFileText className="w-4 h-4" />}
                />

                <Input
                  label="Coût d'achat unitaire (optionnel)"
                  type="number"
                  placeholder="0"
                  step="0.01"
                  endIcon={<span className="text-[10px] font-bold">€</span>}
                />
              </div>

              <Input
                label="Fournisseur (optionnel)"
                placeholder="Nom du fournisseur ou référence"
                startIcon={<LuPackage className="w-4 h-4" />}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Numéro de lot (optionnel)"
                  placeholder="LOT-2024-001"
                />

                <Input
                  label="Date d'expiration (optionnel)"
                  type="date"
                />
              </div>
            </section>
          </div>

          {/* COLONNE DROITE : APERÇU & RÉSUMÉ */}
          <div className="space-y-8">
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuTrendingUp className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Aperçu du Stock</h2>
              </div>

              {selectedProductData ? (
                <div className="bg-zinc-50 p-6 rounded-xl space-y-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-zinc-700 mb-2">{selectedProductData.label}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">SKU: {selectedProduct}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-zinc-600">Stock actuel</span>
                      <span className="font-mono font-bold text-lg">{selectedProductData.currentStock} {selectedProductData.unit}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-zinc-600">Quantité ajoutée</span>
                      <span className="font-mono font-bold text-lg text-emerald-600">+{quantity || 0}</span>
                    </div>

                    <div className="border-t border-zinc-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-zinc-900">Nouveau stock</span>
                        <span className="font-mono font-bold text-xl text-zinc-900">{newStockLevel} {selectedProductData.unit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-zinc-50 p-6 rounded-xl text-center">
                  <LuPackage className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
                  <p className="text-sm text-zinc-500">Sélectionnez un produit pour voir l&apos;aperçu</p>
                </div>
              )}
            </section>

            {/* SECTION : DERNIERS RESTOCKAGES */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuTrendingUp className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Historique Récent</h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Café Éthiopie Sidamo</p>
                    <p className="text-xs text-zinc-500">+25 unités • Réception fournisseur</p>
                  </div>
                  <span className="text-xs text-zinc-400">Il y a 2h</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Filtres V60 (x100)</p>
                    <p className="text-xs text-zinc-500">+10 paquets • Ajustement inventaire</p>
                  </div>
                  <span className="text-xs text-zinc-400">Hier</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Tasse Céramique</p>
                    <p className="text-xs text-zinc-500">+5 unités • Retour client</p>
                  </div>
                  <span className="text-xs text-zinc-400">3 jours</span>
                </div>
              </div>
            </section>

            {/* CARD DE RÉSUMÉ */}
            <div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Résumé de l&apos;opération</p>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Type d&apos;opération</span>
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Restockage</span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Motif</span>
                  <span className="text-sm font-medium">{reason}</span>
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