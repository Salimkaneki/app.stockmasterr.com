"use client";

import React from "react";
import Link from "next/link";
import { PageHeader, ActionButton } from "../../../../../components/ui";
import { 
  LuArrowLeft, 
  LuTrash2, 
  LuClock, 
  LuExternalLink,
  LuLayers,
  LuInfo,
  LuShare2
} from "react-icons/lu";

export default function NotificationsDetailsPage() {
  const notification = {
    id: 1,
    category: "INVENTAIRE",
    title: "Seuil critique atteint",
    message: "Le stock de 'MacBook Pro M3' est descendu en dessous du seuil de sécurité configuré. Actuellement, il ne reste plus que 0 unités en rayon sur le site principal.",
    fullDetails: "Une analyse des ventes récentes indique une rotation accélérée sur ce produit au cours des 48 dernières heures. Le système suggère un réapprovisionnement immédiat de 10 unités pour couvrir la demande prévue de la semaine prochaine.",
    time: "10:24 AM",
    date: "11 Janvier 2026",
    type: "inventory",
    source: "Warehouse-C02",
    priority: "Haute"
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      <PageHeader
        title={notification.title}
        description={`Notification ${notification.category.toLowerCase()} • Log ID #${notification.id.toString().padStart(4, '0')}`}
      >
        <ActionButton variant="secondary" icon={<LuShare2 className="w-4 h-4" />}>
          Partager
        </ActionButton>
        <ActionButton variant="secondary" icon={<LuTrash2 className="w-4 h-4" />}>
          Supprimer
        </ActionButton>
      </PageHeader>

      <div className="max-w-350 mx-auto px-8 mt-8">
        
        {/* RETOUR & BADGES */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <Link 
            href="/dashboard/notifications" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors text-sm font-bold uppercase tracking-widest font-['Google_Sans']"
          >
            <LuArrowLeft className="w-4 h-4" />
            Retour
          </Link>

          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest font-['Google_Sans']
                ${notification.type === 'inventory' ? 'bg-rose-50 text-rose-600' : 'bg-indigo-50 text-indigo-600'}
            `}>
                {notification.category}
            </span>
            <div className="w-1 h-1 bg-zinc-200 rounded-full" />
            <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest font-['Google_Sans']
                ${notification.priority === 'Haute' ? 'text-rose-600' : 'text-amber-600'}
            `}>
                Priorité {notification.priority}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LECTURE PRINCIPALE (8 COLONNES) */}
          <div className="lg:col-span-8 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuInfo className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-400">Résumé</h2>
              </div>
              <p className="text-2xl text-zinc-900 font-bold tracking-tight leading-relaxed font-['Google_Sans']">
                {notification.message}
              </p>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuLayers className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-400">Analyse détaillée</h2>
              </div>
              <div className="bg-zinc-50/50 p-8 rounded-3xl border border-zinc-100">
                <p className="text-zinc-600 text-lg leading-relaxed font-['Google_Sans']">
                  {notification.fullDetails}
                </p>
                <button className="mt-10 flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:shadow-xl hover:shadow-zinc-200 transition-all">
                    Agir sur l&apos;inventaire <LuExternalLink className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>

          {/* MÉTADONNÉES SIMPLIFIÉES (4 COLONNES) */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* BLOC HEURE ÉPURÉ */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-zinc-400">
                <LuClock className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Horodatage</span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-black text-zinc-900 tracking-tighter font-mono italic">
                    {notification.time}
                  </p>
                  <span className="text-xs font-bold text-zinc-300">GMT</span>
                </div>
                <p className="text-base font-bold text-zinc-500 font-['Google_Sans']">
                  {notification.date}
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Événement vérifié</span>
              </div>
            </div>

            {/* INFOS TECHNIQUES SANS CADRE */}
            <div className="pt-10 border-t border-zinc-100 space-y-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Origine du signal</p>
                <p className="text-sm font-bold text-zinc-900 font-['Google_Sans']">{notification.source}</p>
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Référence Log</p>
                <p className="text-xs font-mono font-bold text-zinc-300">
                  SYSTEM_EVENT_TRK_{notification.id.toString().padStart(3, '0')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-32 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-300 font-['Google_Sans']">
            <div className="text-[10px] font-black uppercase tracking-[0.3em]">
                Studio Intelligence v2
            </div>
            <div className="flex gap-2">
                 <div className="w-1 h-1 rounded-full bg-zinc-200" />
                 <div className="w-1 h-1 rounded-full bg-zinc-900" />
            </div>
        </div>
      </div>
    </div>
  );
}