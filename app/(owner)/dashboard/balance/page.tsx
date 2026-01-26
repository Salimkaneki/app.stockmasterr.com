"use client";

import React from "react";
import { PageLayout, PageHeader } from "../../../../components/ui/layout";
import { LuArrowUpRight, LuMenu } from "react-icons/lu";

export default function BalancePage() {
  return (
    <PageLayout className="bg-white">
      <PageHeader 
        title="Solde Principal" 
        description="Aperçu de votre trésorerie temps réel"
      >
         <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors border border-zinc-100">
            <LuMenu className="w-5 h-5 text-zinc-400" />
          </button>
      </PageHeader>

      <div className="max-w-160 mx-auto px-6 py-12">

        {/* Section Montant - Focus pur */}
        <section className="mb-24">
          <div className="flex items-baseline gap-1">
            <span className="text-6xl font-light tracking-tight text-zinc-900 font-mono">854.200</span>
            <span className="text-xl font-light text-zinc-400">FCFA</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[13px] text-zinc-500 font-medium">Disponible pour transfert</span>
          </div>
        </section>

        {/* Action & Info Prochain Virement */}
        <div className="grid grid-cols-1 gap-12">
          
          <section>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-6">
              Prochain virement
            </h2>
            <div className="group cursor-pointer">
              <div className="flex justify-between items-end pb-4 border-b border-zinc-100 group-hover:border-zinc-300 transition-colors">
                <div>
                  <p className="text-sm text-zinc-900 font-medium">Bank Of Africa •••• 4289</p>
                  <p className="text-sm text-zinc-500">Prévu pour demain, 17:00</p>
                </div>
                <LuArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
              </div>
            </div>
          </section>

          {/* Activité récente - Style ultra-flat */}
          <section>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400 mb-6">
              Activité
            </h2>
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600">Ventes du jour</span>
                <span className="text-sm font-medium text-zinc-900 font-mono tracking-tighter">+ 45,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600">Virement sortant</span>
                <span className="text-sm font-medium text-zinc-400 font-mono tracking-tighter">- 128,500</span>
              </div>
            </div>
            
            <button className="mt-10 text-[13px] font-medium text-zinc-400 hover:text-zinc-900 transition-colors">
              Voir tout l'historique
            </button>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}