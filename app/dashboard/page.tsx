"use client";

import React from "react";
import KPI from "../../components/KPI";
import { 
  LuArrowRight, 
  LuShoppingBag, 
  LuCoins,
} from "react-icons/lu";

export default function DashboardPage() {
  return (
    <div className="bg-zinc-50 min-h-screen pb-20 font-sans">
      <KPI />
      
      {/* Container CORRIGÉ : max-w-[1400px] et mx-auto */}
      <div className="max-w-350 mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
          {/* COLONNE GAUCHE : VENTES RÉCENTES */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-4xl border border-zinc-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-zinc-900">Ventes récentes</h2>
                <button className="text-zinc-400 text-sm font-bold flex items-center gap-1 hover:text-zinc-900 transition-colors">
                  Voir tout <LuArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="divide-y divide-zinc-50">
                {[1, 2, 3, 4, 5, 6].map((order) => (
                  <div key={order} className="p-5 flex items-center justify-between hover:bg-zinc-50/80 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-white transition-colors">
                        <LuShoppingBag className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900" />
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900 text-[15px]">Commande #8492{order}</p>
                        <p className="text-xs text-zinc-400 font-medium italic">18:45 • Comptant</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-zinc-900 text-[15px]">124 000 F</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : CAISSE & ALERTES */}
          <div className="space-y-8">
            <div className="bg-white rounded-4xl p-8 border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center">
                  <LuCoins className="w-5 h-5 text-zinc-900" />
                </div>
                <p className="text-zinc-900 text-[14px] font-bold tracking-tight">Argent en caisse</p>
              </div>

              <div className="mb-10">
                <h3 className="text-zinc-900 text-5xl font-bold tracking-tighter">
                  850 200 <span className="text-[20px] font-medium text-zinc-400">F CFA</span>
                </h3>
              </div>

              <div className="flex items-end gap-1.5 h-12">
                {[20, 35, 25, 60, 45, 80, 100].map((height, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-full transition-all duration-500 ${i === 6 ? 'bg-zinc-900' : 'bg-zinc-100'}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Lun</span>
                <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-tighter">Aujourd'hui</span>
              </div>
            </div>

            <div className="bg-white rounded-4xl border border-zinc-200 p-8 shadow-sm">
              <h2 className="text-lg font-bold text-zinc-900 mb-8 tracking-tight">Alertes</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-[14px] font-bold text-zinc-900 tracking-tight">Stock critique</p>
                    <p className="text-[13px] text-zinc-400 mt-1">Claviers Mécaniques (2 unités restantes).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 mt-2 shrink-0" />
                  <div>
                    <p className="text-[14px] font-bold text-zinc-900 tracking-tight">Nouveau client</p>
                    <p className="text-[13px] text-zinc-400 mt-1">Inscription d'un nouveau compte pro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}