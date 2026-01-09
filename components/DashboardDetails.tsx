"use client";

import React from "react";
import { LuArrowRight, LuPackage, LuShoppingBag, LuUserPlus } from "react-icons/lu";

export default function DashboardDetails() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
      
      {/* SECTION 1 : VENTES RÉCENTES (Prend 2 colonnes) */}
      <div className="lg:col-span-2 bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-zinc-900">Ventes récentes</h2>
          <button className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:underline">
            Voir tout <LuArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="divide-y divide-zinc-50">
          {[1, 2, 3, 4].map((order) => (
            <div key={order} className="p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                  <LuShoppingBag className="w-5 h-5 text-zinc-600" />
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-sm">Commande #8492{order}</p>
                  <p className="text-xs text-zinc-500 font-medium">Il y a {order * 5} minutes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-zinc-900 text-sm">124,00 €</p>
                <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Payé</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2 : ACTIVITÉS / ALERTES (Prend 1 colonne) */}
      <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-6">
        <h2 className="text-lg font-bold text-zinc-900 mb-6">Notifications</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
            <div>
              <p className="text-sm font-bold text-zinc-900">Stock faible</p>
              <p className="text-xs text-zinc-500 mt-1">L'article "Clavier Mécanique" n'a plus que 2 unités en stock.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500" />
            <div>
              <p className="text-sm font-bold text-zinc-900">Nouveau client</p>
              <p className="text-xs text-zinc-500 mt-1">Marie Lefebvre vient de créer un compte pro.</p>
            </div>
          </div>
        </div>
        
        {/* Un petit bouton d'action en bas de carte */}
        <button className="w-full mt-8 py-3 bg-zinc-900 text-white rounded-2xl text-sm font-bold hover:bg-zinc-800 transition-colors">
          Gérer les alertes
        </button>
      </div>

    </div>
  );
}