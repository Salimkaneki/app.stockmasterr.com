"use client";

import React, { useState } from "react";
import { 
  LuCheckCheck, 
  LuSearch, 
  LuTrash2, 
  LuZap,
  LuShoppingBag,
  LuPackage,
  LuTriangle,
  LuMoveHorizontal,
  LuArrowUpRight
} from "react-icons/lu";
import { PageHeader, ActionButton } from "@/components/ui";

const notificationsData = [
  {
    id: 1,
    type: "inventory",
    title: "Stock critique",
    message: "Le produit 'Clavier Mécanique RGB' est descendu sous le seuil d'alerte (2 unités restantes).",
    time: "À l'instant",
    read: false,
    icon: <LuPackage className="w-5 h-5" />
  },
  {
    id: 2,
    type: "sale",
    title: "Vente enregistrée",
    message: "Une nouvelle transaction de 125 000 F CFA a été validée sur le terminal 01.",
    time: "Il y a 12 min",
    read: false,
    icon: <LuShoppingBag className="w-5 h-5" />
  },
  {
    id: 3,
    type: "system",
    title: "Mise à jour v2.1.0",
    message: "Le système a été mis à jour avec succès. Les nouvelles fonctionnalités sont prêtes.",
    time: "Il y a 1 heure",
    read: true,
    icon: <LuZap className="w-5 h-5" />
  },
  {
    id: 4,
    type: "alert",
    title: "Sécurité",
    message: "Tentative de connexion bloquée depuis une adresse IP non répertoriée (Dakar, SN).",
    time: "Il y a 3 heures",
    read: true,
    icon: <LuTriangle className="w-5 h-5" />
  }
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("Toutes");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      {/* HEADER : PLUS AÉRÉ */}
      <PageHeader
        title="Journal d'activité"
        description="Historique complet des événements de votre boutique."
      >
        <div className="flex items-center gap-3">
          <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
            <LuSearch className="w-5 h-5" />
          </button>
          <div className="w-px h-6 bg-zinc-100 mx-2" />
          <ActionButton variant="secondary" icon={<LuCheckCheck className="w-4 h-4" />}>
            Tout marquer
          </ActionButton>
        </div>
      </PageHeader>

      <div className="max-w-4xl mx-auto px-8 mt-16">
        
        {/* TABS MINIMALISTES */}
        <div className="flex gap-10 border-b border-zinc-100 mb-12">
          {["Toutes", "Non lues", "Alertes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[13px] font-black uppercase tracking-[0.2em] transition-all relative ${
                activeTab === tab ? "text-zinc-900" : "text-zinc-300 hover:text-zinc-500"
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900" />}
            </button>
          ))}
        </div>

        {/* LISTE TYPE "TIMELINE" */}
        <div className="relative space-y-0 border-l border-zinc-100 ml-4">
          {notificationsData.map((notif) => (
            <div 
              key={notif.id}
              className={`group relative pl-12 pb-12 transition-all ${notif.read ? 'opacity-50' : 'opacity-100'}`}
            >
              {/* POINT SUR LA LIGNE */}
              <div className={`absolute -left-1.25 top-1 w-2.5 h-2.5 rounded-full border-2 border-white transition-all duration-500 ${
                notif.read ? 'bg-zinc-300' : 'bg-zinc-900 scale-125'
              }`} />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex gap-6 items-start">
                  {/* ICONE SANS FOND LOURD */}
                  <div className={`mt-1 transition-colors ${
                    notif.type === 'inventory' ? 'text-hardware' : 
                    notif.type === 'sale' ? 'text-commerce' : 
                    notif.type === 'alert' ? 'text-rose-500' : 'text-zinc-900'
                  }`}>
                    {notif.icon}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">{notif.time}</span>
                      {!notif.read && <span className="bg-zinc-900 text-white text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter">New</span>}
                    </div>
                    <h3 className="text-lg font-black tracking-tight leading-none group-hover:underline decoration-zinc-200 underline-offset-4 cursor-pointer">
                      {notif.title}
                    </h3>
                    <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-xl">
                      {notif.message}
                    </p>
                  </div>
                </div>

                {/* ACTIONS DISCRÈTES AU BOUT DE LA LIGNE */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                  <button className="flex items-center gap-2 px-4 py-2 bg-zinc-50 rounded-lg text-xs font-bold hover:bg-zinc-900 hover:text-white transition-all">
                    Détails <LuArrowUpRight className="w-3 h-3" />
                  </button>
                  <button className="p-2 text-zinc-300 hover:text-rose-500 transition-colors">
                    <LuTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FIN DE FIL */}
        <div className="ml-4 pl-12 border-l border-zinc-100 py-4">
           <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">Fin de l'historique récent</p>
        </div>

      </div>
    </div>
  );
}