"use client";

import React, { useState } from "react";
import { DataTable, Column } from "../../../../components/data";
import { PageHeader, ActionButton, StatusBadge } from "../../../../components/ui";
import {
  LuUserPlus,
  LuShieldCheck,
  LuActivity,
  LuMoveHorizontal,
  LuMail,
  LuPhone,
  LuCircle
} from "react-icons/lu";

// --- CONFIGURATION DES COLONNES PERSONNEL ---
const staffColumns: Column[] = [
  {
    key: "user",
    label: "Membre",
    render: (_, member) => (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center overflow-hidden shrink-0">
          {(member as any).avatar ? (
            <img src={(member as any).avatar} alt="" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs font-black text-zinc-400 font-['Google_Sans']">{(member as any).initials}</span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{(member as any).name}</span>
          <span className="text-xs text-zinc-400 font-['Google_Sans']">{(member as any).email}</span>
        </div>
      </div>
    )
  },
  {
    key: "role",
    label: "Rôle",
    render: (role) => (
      <div className="flex items-center gap-2">
        <LuShieldCheck className="w-3 h-3 text-zinc-400" />
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
        <LuMoveHorizontal className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900" />
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

// ... (imports restants identiques)
import { LuSearch } from "react-icons/lu"; // Remplacer LuPhone par LuSearch

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("Tous les membres");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
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
        
        {/* GRILLE DE STATISTIQUES (KPI CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Membres Actifs", val: "12", growth: "+2 ce mois", icon: <LuCircle /> },
            { label: "Ventes Équipe", val: "3,240K", growth: "+15%", icon: <LuActivity /> },
            { label: "Performance", val: "87%", growth: "+5%", icon: <LuShieldCheck /> },
            { label: "Recrutements", val: "3", growth: "Trimestre", icon: <LuUserPlus /> },
          ].map((kpi, i) => (
            <div key={i} className="border border-zinc-100 p-6 rounded-2xl hover:border-zinc-200 transition-colors">
              <div className="flex items-center gap-2 mb-4 text-zinc-400">
                {React.cloneElement(kpi.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-3.5 h-3.5" })}
                <span className="text-[10px] font-black uppercase tracking-widest">{kpi.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold font-mono tracking-tighter">{kpi.val}</h3>
                <span className="text-[10px] font-bold text-emerald-500 uppercase">{kpi.growth}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FILTRES & RECHERCHE */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {["Tous les membres", "Actifs", "En congé", "Administrateurs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold pb-4 -mb-4.5 transition-all relative ${
                  activeTab === tab ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900" />}
              </button>
            ))}
          </div>

          <div className="relative group border-b border-transparent focus-within:border-zinc-900 transition-all">
            <LuSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-900 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-7 pr-4 py-2 text-sm outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all"
            />
          </div>
        </div>

        {/* TABLEAU */}
        <div className="rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
          <DataTable
            columns={staffColumns}
            data={staffData}
            variant="clean"
          />
        </div>
      </div>
    </div>
  );
}