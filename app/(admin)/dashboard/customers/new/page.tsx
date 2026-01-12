"use client";

import React, { useState } from "react";
import { 
  LuUserPlus, 
  LuMail, 
  LuPhone, 
  LuMapPin, 
  LuBuilding2, 
  LuShieldCheck,
  LuHistory,
  LuSave
} from "react-icons/lu";

// Import de vos nouveaux composants de structure
import { PageHeader, ActionButton } from "@/components/ui";
// Import de vos composants de formulaire
import { Input, Select, Textarea, FileInput, Radio } from "@/components/ui";

export default function NewCustomerPage() {
  const [customerType, setCustomerType] = useState("Particulier");
  const [category, setCategory] = useState("Standard");

  const categories = [
    { value: "std", label: "Client Standard" },
    { value: "vip", label: "Client VIP" },
    { value: "pro", label: "Grossiste / Revendeur" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      {/* HEADER NET ET BIEN RANGÉ */}
      <PageHeader
        title="Nouveau Client"
        description="Enregistrer un nouveau profil dans la base de données commerciale."
        backLink={{ href: "/clients", label: "Retour à la liste" }}
      >
        <div className="flex gap-3">
          <ActionButton variant="secondary" icon={<LuHistory className="w-4 h-4" />}>
            Historique
          </ActionButton>
          <ActionButton variant="primary" icon={<LuSave className="w-4 h-4" />}>
            Enregistrer le profil
          </ActionButton>
        </div>
      </PageHeader>

      <div className="max-w-5xl mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLONNE GAUCHE : FORMULAIRE */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* SECTION : TYPE DE COMPTE */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuBuilding2 className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Nature du Client</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Radio 
                  label="Particulier" 
                  checked={customerType === "Particulier"} 
                  onChange={() => setCustomerType("Particulier")} 
                />
                <Radio 
                  label="Entreprise / Entité" 
                  checked={customerType === "Entreprise"} 
                  onChange={() => setCustomerType("Entreprise")} 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Nom complet / Raison Sociale" placeholder="ex: Jean Dupont ou SARL Pharma" />
                <Select 
                  label="Classification" 
                  options={categories} 
                  value={category} 
                  onChange={setCategory} 
                />
              </div>
            </section>

            {/* SECTION : CONTACT & LOCALISATION */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuPhone className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Coordonnées</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Email" placeholder="client@exemple.com" startIcon={<LuMail className="w-4 h-4" />} />
                <Input label="Téléphone" placeholder="+228 -- -- -- --" startIcon={<LuPhone className="w-4 h-4" />} />
              </div>

              <Input label="Adresse de livraison" placeholder="Rue, Quartier, Ville" startIcon={<LuMapPin className="w-4 h-4" />} />
            </section>

            <section className="space-y-6">
              <Textarea label="Notes & Préférences" placeholder="Préférences de facturation, remises habituelles..." rows={3} />
            </section>
          </div>

          {/* COLONNE DROITE : FIDÉLITÉ & RÉSUMÉ */}
          <div className="space-y-8">
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuShieldCheck className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Paramètres</h2>
              </div>
              <FileInput label="Photo / Logo" helperText="Maximum 2MB" />
            </section>

            {/* CARD DE RÉSUMÉ SOMBRE */}
            <div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Statut de Fidélité</p>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Points cumulés</span>
                  <span className="text-xl font-mono font-medium">0 PTS</span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Crédit autorisé</span>
                  <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">Désactivé</span>
                </div>
              </div>
              <p className="mt-6 text-[11px] text-zinc-500 italic leading-relaxed">
                Le client sera immédiatement éligible aux programmes de fidélité après son premier achat.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}