"use client";

import React, { useState } from "react";
import { 
  LuUserPlus, 
  LuMail, 
  LuShieldCheck, 
  LuBriefcase,
  LuCalendar,
  LuWallet,
  LuFileBadge
} from "react-icons/lu";

import { Input, Select, Textarea, FileInput, Radio } from "@/components/ui";
import { PageHeader } from "@/components/ui";

export default function NewMemberPage() {
  const [role, setRole] = useState("");
  const [contractType, setContractType] = useState("CDI");

  const roles = [
    { value: "admin", label: "Administrateur" },
    { value: "manager", label: "Gestionnaire de Stock" },
    { value: "staff", label: "Vendeur / Agent" },
    { value: "compta", label: "Comptabilité" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title="Nouveau Membre"
        description="Renseignez les informations personnelles et contractuelles du collaborateur."
        backLink={{
          href: "/dashboard/staff",
          label: "Retour à l'annuaire"
        }}
      >
        <button className="bg-zinc-900 text-white px-8 py-2.5 rounded-lg text-base font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2">
          <LuUserPlus className="w-4 h-4" />
          Enregistrer le membre
        </button>
      </PageHeader>

      <div className="max-w-5xl mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLONNE GAUCHE : FORMULAIRE PRINCIPAL */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* SECTION 1 : IDENTITÉ & POSTE */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuBriefcase className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Identité & Poste</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Input label="Prénom" placeholder="ex: Marc" />
                <Input label="Nom" placeholder="ex: Koffi" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Email professionnel" 
                  placeholder="m.koffi@entreprise.com" 
                  startIcon={<LuMail className="w-4 h-4" />}
                />
                <Select 
                  label="Rôle système" 
                  options={roles} 
                  value={role} 
                  onChange={setRole} 
                  placeholder="Définir les accès"
                />
              </div>
            </section>

            {/* SECTION 2 : CONTRAT & RÉMUNÉRATION */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuFileBadge className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Contrat & Rémunération</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Salaire de base (F CFA)" 
                  type="number"
                  placeholder="0"
                  startIcon={<LuWallet className="w-4 h-4" />}
                />
                <Input 
                  label="Date d'embauche" 
                  type="date"
                  startIcon={<LuCalendar className="w-4 h-4" />}
                />
              </div>

              <div className="bg-zinc-50 p-6 rounded-xl space-y-4">
                <p className="text-sm font-medium text-zinc-700 font-['Google_Sans'] mb-4">Type de contrat</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Radio 
                    label="CDI" 
                    checked={contractType === "CDI"} 
                    onChange={() => setContractType("CDI")} 
                  />
                  <Radio 
                    label="CDD" 
                    checked={contractType === "CDD"} 
                    onChange={() => setContractType("CDD")} 
                  />
                  <Radio 
                    label="Stage" 
                    checked={contractType === "Stage"} 
                    onChange={() => setContractType("Stage")} 
                  />
                  <Radio 
                    label="Essai" 
                    checked={contractType === "Essai"} 
                    onChange={() => setContractType("Essai")} 
                  />
                </div>
              </div>
            </section>

            <section className="space-y-6">
                <Textarea 
                  label="Notes RH" 
                  placeholder="Détails sur les avantages, bonus ou clauses spécifiques..." 
                  rows={3}
                />
            </section>
          </div>

          {/* COLONNE DROITE : MÉDIAS & RÉSUMÉ */}
          <div className="space-y-8">
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuShieldCheck className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Documents</h2>
              </div>
              <FileInput 
                label="Photo d'identité"
                helperText="Format portrait (PNG, JPG)"
                maxSize={1}
              />
            </section>

            {/* CARD DE RÉSUMÉ (DESIGN SOMBRE) */}
            <div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Récapitulatif RH</p>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Coût mensuel</span>
                  <span className="text-lg font-mono font-medium">0 F CFA</span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs">Période</span>
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Actif</span>
                </div>
              </div>
              <p className="mt-6 text-[11px] text-zinc-500 italic leading-relaxed">
                Les données financières sont cryptées et accessibles uniquement par la direction et la comptabilité.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-end items-center text-zinc-400 text-xs font-['Google_Sans']">
            Système de Gestion de Paie & RH v1.0
        </div>
      </div>
    </div>
  );
}