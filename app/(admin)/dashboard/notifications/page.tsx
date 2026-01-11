"use client";

import React, { useState } from "react";
import { 
  LuCheckCheck, LuTrash2, LuZap, LuShoppingBag, 
  LuPackage, LuTriangle, LuArrowRight, LuFilter
} from "react-icons/lu";
import { PageHeader, ActionButton } from "@/components/ui";

const notificationsData = [
  {
    id: 1,
    category: "INVENTAIRE",
    title: "Seuil critique atteint",
    message: "Le stock de 'MacBook Pro M3' est épuisé. 0 unités restantes en rayon.",
    time: "À l'instant",
    read: false,
    type: "inventory",
    icon: <LuPackage className="w-4 h-4" />
  },
  {
    id: 2,
    category: "COMMERCE",
    title: "Nouvelle vente",
    message: "Transaction de 850 000 F CFA validée par Caisse 02.",
    time: "14:20",
    read: false,
    type: "sale",
    icon: <LuShoppingBag className="w-4 h-4" />
  },
  {
    id: 3,
    category: "SYSTÈME",
    title: "Sauvegarde terminée",
    message: "La synchronisation cloud v2.1 a été effectuée sans erreur.",
    time: "12:05",
    read: true,
    type: "system",
    icon: <LuZap className="w-4 h-4" />
  },
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("Toutes");

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title="Journal"
        description="L'essentiel de votre activité, sans bruit."
      >
        <div className="flex items-center gap-2">
           <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
              <LuFilter className="w-5 h-5" />
           </button>
           <div className="w-px h-6 bg-zinc-100 mx-2" />
           <ActionButton variant="secondary" icon={<LuCheckCheck className="w-4 h-4" />}>
             Tout marquer
           </ActionButton>
        </div>
      </PageHeader>

      <div className="max-w-3xl mx-auto px-8 mt-16">
        
        {/* TABS ULTRA-FINS */}
        <div className="flex gap-8 mb-16 border-b border-zinc-50">
          {["Toutes", "Alertes", "Système"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[11px] font-black uppercase tracking-[0.25em] transition-all relative ${
                activeTab === tab ? "text-zinc-900" : "text-zinc-300 hover:text-zinc-500"
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900" />}
            </button>
          ))}
        </div>

        {/* LISTE DE LECTURE ÉPURÉE */}
        <div className="space-y-0">
          {notificationsData.map((notif) => (
            <div 
              key={notif.id}
              className={`group relative flex items-start gap-8 py-8 border-b border-zinc-50 transition-all
                ${notif.read ? 'opacity-40' : 'opacity-100'}
              `}
            >
              {/* INDICATEUR DE LECTURE MINIMAL (Point Indigo) */}
              {!notif.read && (
                <div className="absolute -left-6 top-9.5 w-2 h-2 bg-indigo-600 rounded-full" />
              )}

              {/* DATE / TEMPS (Colonne fixe pour l'alignement) */}
              <div className="w-20 pt-1">
                <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-tighter">
                  {notif.time}
                </span>
              </div>

              {/* CONTENU PRINCIPAL */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest
                    ${notif.type === 'inventory' ? 'bg-rose-50 text-rose-600' : ''}
                    ${notif.type === 'sale' ? 'bg-indigo-50 text-indigo-600' : ''}
                    ${notif.type === 'system' ? 'bg-zinc-100 text-zinc-600' : ''}
                  `}>
                    {notif.category}
                  </span>
                </div>
                
                <h3 className="text-[17px] font-black tracking-tight text-zinc-900">
                  {notif.title}
                </h3>
                
                <p className="text-zinc-500 text-[15px] leading-relaxed font-medium max-w-xl">
                  {notif.message}
                </p>
              </div>

              {/* ACTION DISCRÈTE AU SURVOL */}
              <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pt-1">
                <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
                  Ouvrir <LuArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 flex justify-center">
          <button className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-300 hover:text-zinc-900 transition-colors">
            Charger l'historique ancien
          </button>
        </div>

      </div>
    </div>
  );
}