"use client";

import React, { useState } from "react";
import { DataTable, Column } from "../../../../components/data";
import {
  LuPlus,
  LuSearch,
  LuDownload,
  LuChevronRight,
  LuReceipt,
  LuClock,
  LuCheck,
  LuX
} from "react-icons/lu";
import { PageHeader, ActionButton, StatusBadge } from "../../../../components/ui";

const invoiceColumns: Column[] = [
  {
    key: "number",
    label: "Référence",
    render: (val) => <span className="font-semibold text-zinc-900 font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "client",
    label: "Bénéficiaire",
    render: (_, row) => (
      <div className="flex flex-col">
        <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{(row as any).clientName}</span>
        <span className="text-xs text-zinc-400 uppercase tracking-tighter font-['Google_Sans']">{(row as any).category}</span>
      </div>
    )
  },
  {
    key: "status",
    label: "État",
    render: (status) => <StatusBadge status={status as string} />
  },
  {
    key: "date",
    label: "Échéance",
    render: (val) => <span className="text-zinc-500 text-xs font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "amount",
    label: "Total",
    align: "right",
    render: (val) => <span className="font-medium text-zinc-900 font-['Google_Sans']">{val as string} €</span>
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

const invoiceData = [
  { id: 1, number: "INV-001", clientName: "Acme Studio", category: "Design Service", date: "12 Jan. 2026", status: "Payée", amount: "1,200.00" },
  { id: 2, number: "INV-002", clientName: "Minimal Co.", category: "Consulting", date: "15 Jan. 2026", status: "En attente", amount: "850.00" },
  { id: 3, number: "INV-003", clientName: "Zéro Inc.", category: "SaaS Subscription", date: "02 Jan. 2026", status: "Annulée", amount: "45.00" },
];

export default function InvoicesPage() {
  const [activeTab, setActiveTab] = useState("Tous");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title="Facturation"
        description="Historique des transactions et documents."
      >
        <div className="flex gap-3">
          <ActionButton variant="secondary" icon={<LuDownload className="w-4 h-4" />}>
            Exporter (.csv)
          </ActionButton>
          <ActionButton variant="primary" icon={<LuPlus className="w-4 h-4" />}>
            Nouvelle Facture
          </ActionButton>
        </div>
      </PageHeader>

      <div className="max-w-350 mx-auto px-8 mt-12">

        {/* GRILLE DE STATISTIQUES (KPI CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Encaissé", val: "42,890 €", growth: "+12%", icon: <LuCheck />, color: "text-emerald-600" },
            { label: "En Attente", val: "2,150 €", growth: "3 factures", icon: <LuClock />, color: "text-amber-600" },
            { label: "Moyenne", val: "890 €", growth: "Par facture", icon: <LuReceipt />, color: "text-blue-600" },
            { label: "Ce Mois", val: "8,450 €", growth: "+8%", icon: <LuReceipt />, color: "text-zinc-600" },
          ].map((kpi, i) => (
            <div key={i} className="border border-zinc-100 p-6 rounded-2xl hover:border-zinc-200 transition-colors">
              <div className="flex items-center gap-2 mb-4 text-zinc-400">
                {React.cloneElement(kpi.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-3.5 h-3.5" })}
                <span className="text-[10px] font-black uppercase tracking-widest">{kpi.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold font-mono tracking-tighter">{kpi.val}</h3>
                <span className={`text-[10px] font-bold uppercase ${kpi.color}`}>{kpi.growth}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FILTRES DISCRETS */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {["Tous", "Payés", "En attente", "Archives"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base font-bold pb-4 -mb-4.25 transition-colors relative ${
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
              placeholder="Rechercher..." 
              className="pl-6 pr-4 py-2 text-base outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all"
            />
          </div>
        </div>

        {/* TABLEAU */}
        <DataTable 
          columns={invoiceColumns} 
          data={invoiceData} 
          variant="clean"
        />

        {/* FOOTER DE PAGE DISCRET */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
            <div className="flex gap-12">
                <div>
                    <p className="text-[15px] font-bold uppercase tracking-widest mb-1">Total Encaissé</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">42,890.00 €</p>
                </div>
                <div>
                    <p className="text-[15px] font-bold uppercase tracking-widest mb-1">En attente</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium">2,150.00 €</p>
                </div>
            </div>
            <div className="text-xs">
                Page 1 sur 12
            </div>
        </div>
      </div>
    </div>
  );
}