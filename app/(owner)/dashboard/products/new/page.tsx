"use client";

import React, { useState } from "react";
import {
  LuInfo,
  LuPackage,
  LuTag,
  LuDollarSign,
  LuLayers,
  LuSave,
  LuPlus
} from "react-icons/lu";

// Import de vos composants personnalisés
import { Input, Select, Textarea, FileInput, Radio, Modal } from "@/components/ui";
import { PageHeader } from "@/components/ui";

export default function ProductsCreatePage() {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("En stock");

  const [categories, setCategories] = useState([
    { value: "elec", label: "Électronique" },
    { value: "acc", label: "Accessoires" },
    { value: "bur", label: "Bureau" },
    { value: "serv", label: "Services" },
  ]);

  const [isCatModalOpen, setCatModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const addCategory = () => {
    const name = newCategoryName.trim();
    if (!name) return;
    const value = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 30);
    const item = { value, label: name };
    setCategories(prev => [...prev, item]);
    setCategory(value);
    setNewCategoryName("");
    setCatModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title="Nouveau Produit"
        description="Ajouter un produit au catalogue et définir son stock initial."
        backLink={{
          href: "/dashboard/products",
          label: "Retour aux produits"
        }}
      >
        <button className="bg-zinc-900 text-white px-8 py-2.5 rounded-lg text-base font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2">
          <LuSave className="w-4 h-4" />
          Enregistrer le produit
        </button>
      </PageHeader>

      <div className="max-w-5xl mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLONNE GAUCHE : FORMULAIRE PRINCIPAL */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* SECTION : INFORMATIONS GÉNÉRALES */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuInfo className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Informations Générales</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <Input 
                  label="Nom du produit" 
                  placeholder="ex: Clavier Mécanique RGB" 
                  startIcon={<LuPackage className="w-4 h-4" />}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="SKU / Référence" 
                    placeholder="ex: ELEC-001" 
                    className="font-mono uppercase"
                  />
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Catégorie</label>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <Select
                          options={categories}
                          value={category}
                          onChange={setCategory}
                          placeholder="Choisir une catégorie"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setCatModalOpen(true)}
                        className="w-10 h-10 bg-linear-to-br from-zinc-900 to-zinc-700 text-white rounded-lg flex items-center justify-center hover:from-zinc-800 shadow-sm hover:shadow-md transition-all ring-1 ring-zinc-900/10"
                        aria-label="Ajouter une catégorie"
                        title="Ajouter une catégorie rapidement"
                      >
                        <LuPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <Textarea 
                  label="Description" 
                  placeholder="Détails techniques, dimensions, spécificités..." 
                  rows={4}
                />
              </div>
            </section>

            {/* SECTION : PRIX ET STOCK */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuDollarSign className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Prix et Inventaire</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Prix de vente (F CFA)" 
                  type="number" 
                  placeholder="0"
                  endIcon={<span className="text-[10px] font-bold">CFA</span>}
                />
                <Input 
                  label="Quantité initiale" 
                  type="number" 
                  placeholder="0"
                  startIcon={<LuLayers className="w-4 h-4" />}
                />
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl space-y-4">
                <p className="text-sm font-medium text-zinc-700 font-['Google_Sans'] mb-4">État initial du stock</p>
                <div className="grid grid-cols-2 gap-4">
                  <Radio 
                    label="En stock" 
                    checked={status === "En stock"} 
                    onChange={() => setStatus("En stock")} 
                  />
                  <Radio 
                    label="Faible" 
                    checked={status === "Faible"} 
                    onChange={() => setStatus("Faible")} 
                  />
                  <Radio 
                    label="Critique" 
                    checked={status === "Critique"} 
                    onChange={() => setStatus("Critique")} 
                  />
                  <Radio 
                    label="Rupture" 
                    checked={status === "Rupture"} 
                    onChange={() => setStatus("Rupture")} 
                  />
                </div>
              </div>
            </section>
          </div>

          {/* COLONNE DROITE : MÉDIAS & RÉSUMÉ */}
          <div className="space-y-8">
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuTag className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Image Produit</h2>
              </div>
              <FileInput 
                label="Photo du produit"
                helperText="Format carré recommandé (PNG, JPG)"
                maxSize={2}
              />
            </section>

            {/* CARD DE RÉSUMÉ (DESIGN COMME DANS L'INVENTAIRE) */}
            <div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Aperçu rapide</p>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Valeur estimée</span>
                  <span className="text-xl font-mono font-medium">0 F CFA</span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Visibilité</span>
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Catalogue Public</span>
                </div>
              </div>
              <p className="mt-6 text-[11px] text-zinc-500 italic leading-relaxed">
                Le produit sera immédiatement ajouté à la liste des produits après validation.
              </p>
            </div>
          </div>

        </div>

        {/* FOOTER DE PAGE DISCRET (RAPPEL) */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-end items-center text-zinc-400">
            <div className="text-xs font-['Google_Sans']">
                Système de gestion d'inventaire v2.0
            </div>
        </div>
        {/* Modal quick action: add category */}
        <Modal isOpen={isCatModalOpen} onClose={() => setCatModalOpen(false)} title="Ajouter une catégorie" size="sm">
          <div className="space-y-4">
            <p className="text-sm text-zinc-500">Action rapide : ajoutez une nouvelle catégorie sans quitter le formulaire.</p>
            <Input
              label="Nom de la catégorie"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Ex: Chaussures"
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setCatModalOpen(false)} className="px-4 py-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50">Annuler</button>
              <button onClick={addCategory} className="px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 flex items-center gap-2">
                <LuPlus className="w-4 h-4" />
                Ajouter
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}