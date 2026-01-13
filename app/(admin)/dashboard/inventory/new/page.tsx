"use client";

import React, { useState } from "react";
import {
  LuInfo, 
  LuPackage, 
  LuTag, 
  LuDollarSign, 
  LuLayers,
  LuSave
} from "react-icons/lu";

// Import de vos composants personnalisés
import { Input, Select, Textarea, FileInput, Radio } from "@/components/ui";
import { PageHeader } from "@/components/ui";

export default function InventoryCreatePage() {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("En stock");

  const categories = [
    { value: "elec", label: "Électronique" },
    { value: "acc", label: "Accessoires" },
    { value: "bur", label: "Bureau" },
    { value: "serv", label: "Services" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title="Nouvel Article"
        description="Ajouter un produit au catalogue et définir son stock initial."
        backLink={{
          href: "/dashboard/inventory",
          label: "Retour à l'inventaire"
        }}
      >
        <button className="bg-zinc-900 text-white px-8 py-2.5 rounded-lg text-base font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2">
          <LuSave className="w-4 h-4" />
          Enregistrer l&apos;article
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
                  label="Nom de l'article" 
                  placeholder="ex: Clavier Mécanique RGB" 
                  startIcon={<LuPackage className="w-4 h-4" />}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="SKU / Référence" 
                    placeholder="ex: ELEC-001" 
                    className="font-mono uppercase"
                  />
                  <Select 
                    label="Catégorie" 
                    options={categories} 
                    value={category} 
                    onChange={setCategory} 
                    placeholder="Choisir une catégorie"
                  />
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
                label="Photo de l'article"
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
                L&apos;article sera immédiatement ajouté à la liste de l&apos;inventaire après validation.
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
      </div>
    </div>
  );
}