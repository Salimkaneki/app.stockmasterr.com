"use client";

import React from "react";
import { 
  LuArrowUpRight, LuBox, LuZap, 
  LuChartBar, LuLayoutDashboard, LuShoppingBag, LuCircleCheck 
} from "react-icons/lu";

export default function NeoBrutalistLanding() {
  return (
    <div className="bg-[#FFFDF9] min-h-screen font-sans text-zinc-900 selection:bg-yellow-300 selection:text-black">
      
      {/* --- TOP BAR (TICKER) --- */}
      <div className="bg-zinc-900 text-white py-2 overflow-hidden border-b-2 border-zinc-900">
        <div className="flex gap-12 animate-infinite-scroll whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em]">
          <span>• Nouvelle intégration WhatsApp Cloud disponible</span>
          <span>• Gestion de stock temps réel v4.0</span>
          <span>• Support client 24/7 actif</span>
          <span>• Exportation comptable OHADA simplifiée</span>
        </div>
      </div>

      {/* --- NAV --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 sticky top-0 bg-[#FFFDF9]/80 backdrop-blur-md z-50 border-b-2 border-zinc-900">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-400 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            <LuBox className="w-6 h-6" />
          </div>
          <span className="text-xl font-black uppercase tracking-tighter">Studio</span>
        </div>
        
        <div className="hidden lg:flex gap-10">
          {["Features", "Tarifs", "Blog"].map(i => (
            <a key={i} href="#" className="font-black text-xs uppercase tracking-widest hover:text-yellow-600 transition-colors">{i}</a>
          ))}
        </div>

        {/* Correction Tailwind: translate-x-0.5 au lieu de [2px] */}
        <button className="bg-zinc-900 text-white px-6 py-3 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(252,211,77,1)] font-black text-xs uppercase tracking-widest hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
          Essai Gratuit
        </button>
      </nav>

      <main>
        {/* --- HERO --- */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              Gérez votre shop <br/>
              <span className="bg-yellow-400 px-4 border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">sans friction.</span>
            </h1>
            <p className="text-xl font-bold text-zinc-600 max-w-xl mb-10 leading-relaxed">
              La plateforme de gestion qui transforme la complexité en simplicité. Inventaire, ventes et analytiques réunis sous un même toit.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-zinc-900 text-white px-10 py-5 font-black text-sm uppercase tracking-widest border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                Lancer mon projet
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white border-2 border-zinc-900 font-bold italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Déjà utilisé par +500 boutiques
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-blue-400 border-2 border-zinc-900 p-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3">
              <div className="bg-white border-2 border-zinc-900 p-6 space-y-6">
                 <div className="flex justify-between items-center border-b-2 border-zinc-100 pb-4">
                   <div className="font-black italic">PANIER LIVE</div>
                   <LuShoppingBag />
                 </div>
                 {[1, 2].map(i => (
                   <div key={i} className="flex gap-4 items-center">
                     <div className="w-12 h-12 bg-zinc-100 border-2 border-zinc-900" />
                     <div className="flex-1">
                       <div className="h-3 w-20 bg-zinc-900 mb-2" />
                       <div className="h-2 w-12 bg-zinc-200" />
                     </div>
                     <div className="font-black italic">12.500 F</div>
                   </div>
                 ))}
                 <div className="pt-4 border-t-2 border-zinc-900">
                   <button className="w-full bg-yellow-400 py-3 border-2 border-zinc-900 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                     ENCAISSER
                   </button>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section className="py-24 px-6 bg-white border-y-2 border-zinc-900">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            
            <div className="p-8 border-2 border-zinc-900 bg-emerald-50 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)]">
              <LuZap className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Vitesse Ultime</h3>
              <p className="font-bold text-zinc-600">Encaissez vos clients en moins de 10 secondes. Interface optimisée pour le rush.</p>
            </div>

            <div className="p-8 border-2 border-zinc-900 bg-purple-50 shadow-[8px_8px_0px_0px_rgba(168,85,247,1)]">
              <LuChartBar className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Data Claire</h3>
              <p className="font-bold text-zinc-600">Pas de graphiques illisibles. Juste les chiffres dont vous avez besoin pour décider.</p>
            </div>

            <div className="p-8 border-2 border-zinc-900 bg-orange-50 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]">
              <LuLayoutDashboard className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Multi-Stocks</h3>
              <p className="font-bold text-zinc-600">Gérez 1 ou 50 boutiques depuis le même écran. Synchronisation immédiate.</p>
            </div>

          </div>
        </section>

        {/* --- LIST SECTION --- */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 uppercase italic">Pourquoi choisir Studio ?</h2>
          <div className="space-y-6">
            {[
              "Synchronisation automatique avec WhatsApp Business",
              "Gestion des droits employés ultra-précise",
              "Fonctionne sans connexion internet (mode offline)",
              "Support technique local basé à Lomé"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-6 p-6 border-2 border-zinc-900 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-50 transition-all">
                <LuCircleCheck className="w-8 h-8 text-emerald-500 shrink-0" />
                <span className="text-xl font-black">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- PRICING --- */}
        <section className="py-24 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter">Un prix unique. <span className="text-yellow-400 underline italic">Tout illimité.</span></h2>
            <div className="max-w-md mx-auto bg-white border-2 border-white p-1 shadow-[10px_10px_0px_0px_rgba(250,204,21,1)] transform hover:scale-105 transition-transform">
              <div className="bg-zinc-900 border-2 border-white p-12">
                <div className="text-sm font-black text-yellow-400 mb-4 tracking-[0.3em]">PLAN STUDIO PRO</div>
                <div className="text-6xl font-black mb-4 uppercase tracking-tighter">25.000<span className="text-lg font-black ml-1 uppercase">F</span></div>
                <div className="text-zinc-400 mb-10 font-bold uppercase tracking-widest text-xs">Par mois / par boutique</div>
                <button className="w-full bg-yellow-400 text-zinc-900 py-4 font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                  Commencer l'essai
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t-2 border-zinc-900 text-center font-black uppercase tracking-widest text-[10px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 border-2 border-zinc-900" />
            <span>Studio © 2026</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div className="text-zinc-400">Build with Studio OS v4.2</div>
        </div>
      </footer>
    </div>
  );
}