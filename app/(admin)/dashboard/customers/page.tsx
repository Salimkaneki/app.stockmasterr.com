"use client";

import React, { useState } from "react";
import DataTable, { Column } from "../../../../components/DataTable";
import {
  LuPlus,
  LuSearch,
  LuDownload,
  LuChevronRight,
  LuUserPlus,
  LuMail
} from "react-icons/lu";

// --- CONFIGURATION DES COLONNES (Style Minimaliste & Couleurs) ---
const customerColumns: Column[] = [
  {
    key: "user",
    label: "Client",
    render: (_, customer) => (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center overflow-hidden shrink-0">
          {customer.avatar ? (
            <img src={customer.avatar} alt="" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs font-black text-zinc-400 font-['Google_Sans']">{customer.initials}</span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{customer.name}</span>
          <span className="text-xs text-zinc-400 font-['Google_Sans']">{customer.email}</span>
        </div>
      </div>
    )
  },
  {
    key: "status",
    label: "Statut",
    render: (status) => {
      const styles: any = {
        "Actif": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "Nouveau": "bg-blue-50 text-blue-700 border-blue-100",
        "Inactif": "bg-zinc-50 text-zinc-400 border-zinc-200",
      };
      return (
        <span className={`px-2.5 py-1 rounded-full text-xs font-black border uppercase tracking-widest font-['Google_Sans'] ${styles[status]}`}>
          {status}
        </span>
      );
    }
  },
  {
    key: "totalOrders",
    label: "Commandes",
    align: "center",
    render: (val) => <span className="font-mono font-medium text-zinc-900">{val}</span>
  },
  {
    key: "spent",
    label: "Dépenses",
    align: "right",
    render: (val) => <span className="font-medium text-zinc-900 font-['Google_Sans']">{val} €</span>
  },
  {
    key: "actions",
    label: "",
    align: "right",
    render: () => (
      <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors group">
        <LuChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900" />
      </button>
    )
  }
];

const customerData = [
  { id: 1, name: "Marie Dupont", email: "marie@example.com", initials: "MD", status: "Actif", totalOrders: 12, spent: "1,450.00", avatar: null },
  { id: 2, name: "Jean Martin", email: "j.martin@mail.fr", initials: "JM", status: "Actif", totalOrders: 5, spent: "420.50", avatar: null },
  { id: 3, name: "Lucas Bernard", email: "lucas@pme.com", initials: "LB", status: "Inactif", totalOrders: 1, spent: "89.00", avatar: null },
];

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState("Tous les clients");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      {/* HEADER MINIMALISTE */}
      <div className="border-b border-zinc-100 px-8 py-10">
        <div className="max-w-350 mx-auto flex justify-between items-end">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Clients</h1>
            <p className="text-zinc-400 text-sm mt-1 font-['Google_Sans']">Gestion de la base client et fidélisation.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              <LuMail className="w-4 h-4" />
              Campagne Email
            </button>
            <button className="bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2">
              <LuUserPlus className="w-4 h-4" />
              Nouveau Client
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-8 mt-12">
        
        {/* FILTRES DISCRETS (TABS) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {["Tous les clients", "Actifs", "Nouveaux", "Inactifs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold pb-4 -mb-4.25 transition-colors relative font-['Google_Sans'] ${
                  activeTab === tab ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900" />}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <LuSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-900 transition-colors w-4 h-4" />
            <input 
              type="text" 
              placeholder="Rechercher un client..." 
              className="pl-6 pr-4 py-1 text-sm outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all font-['Google_Sans']"
            />
          </div>
        </div>

        {/* TABLEAU */}
        <DataTable 
          columns={customerColumns} 
          data={customerData} 
          variant="clean"
        />

        {/* FOOTER DE PAGE DISCRET (KPIs) */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
            <div className="flex gap-12">
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Total Clients</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter">1,284</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Panier Moyen</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter">84.20 €</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Fidélité</p>
                    <p className="text-emerald-600 text-2xl font-mono font-bold tracking-tighter">12%</p>
                </div>
            </div>
            <div className="text-xs font-['Google_Sans']">
                Dernière activité : Il y a 5 min
            </div>
        </div>
      </div>
    </div>
  );
}