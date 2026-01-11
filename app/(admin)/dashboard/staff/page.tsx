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
          {member.avatar ? (
            <img src={member.avatar} alt="" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs font-black text-zinc-400 font-['Google_Sans']">{member.initials}</span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{member.name}</span>
          <span className="text-xs text-zinc-400 font-['Google_Sans']">{member.email}</span>
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
        <span className="text-sm text-zinc-600 font-['Google_Sans']">{role}</span>
      </div>
    )
  },
  {
    key: "status",
    label: "Statut",
    render: (status) => <StatusBadge status={status} />
  },
  {
    key: "sales",
    label: "Ventes",
    align: "right",
    render: (val) => (
      <div className="font-mono font-medium text-zinc-900 text-base">
        {val} <span className="text-xs text-zinc-300">F</span>
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

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("Tous les membres");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">

      <PageHeader
        title="Personnel"
        description="Gestion des membres de l'équipe et suivi des performances."
      >
        <ActionButton variant="secondary" icon={<LuMail className="w-4 h-4" />}>
          Message Équipe
        </ActionButton>
        <ActionButton variant="primary" icon={<LuUserPlus className="w-4 h-4" />}>
          Nouveau Membre
        </ActionButton>
      </PageHeader>

      <div className="max-w-400 mx-auto px-8 mt-12">

        {/* STATS RAPIDES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="border border-zinc-100 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4 text-zinc-400">
              <LuCircle className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Membres Actifs</span>
            </div>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl font-medium font-mono tracking-tighter text-zinc-900">12</h3>
              <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">+2 ce mois</span>
            </div>
          </div>

          <div className="border border-zinc-100 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4 text-zinc-400">
              <LuActivity className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ventes Équipe</span>
            </div>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl font-medium font-mono tracking-tighter text-zinc-900">3,240K</h3>
              <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">+15% vs mois dernier</span>
            </div>
          </div>

          <div className="border border-zinc-100 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4 text-zinc-400">
              <LuShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Performance Moy.</span>
            </div>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl font-medium font-mono tracking-tighter text-zinc-900">87%</h3>
              <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">+5% ce trimestre</span>
            </div>
          </div>

          <div className="border border-zinc-100 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4 text-zinc-400">
              <LuUserPlus className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Nouveaux Recrutements</span>
            </div>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl font-medium font-mono tracking-tighter text-zinc-900">3</h3>
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Ce trimestre</span>
            </div>
          </div>
        </div>

        {/* FILTRES */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {["Tous les membres", "Actifs", "En congé", "Administrateurs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base font-bold pb-4 -mb-4.25 transition-colors relative font-['Google_Sans'] ${
                  activeTab === tab ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900" />}
              </button>
            ))}
          </div>

          <div className="relative group">
            <LuPhone className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-900 transition-colors w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher un membre..."
              className="pl-6 pr-4 py-2 text-base outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all font-['Google_Sans']"
            />
          </div>
        </div>

        {/* TABLEAU DU PERSONNEL */}
        <DataTable
          columns={staffColumns}
          data={staffData}
          className="border border-zinc-100 rounded-lg overflow-hidden"
        />

      </div>
    </div>
  );
}