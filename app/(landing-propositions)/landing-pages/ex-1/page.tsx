"use client";

import React from "react";
import Link from "next/link";
import { 
  LuArrowRight, LuShoppingBag, 
  LuSmartphone, LuLayers, LuArrowUpRight, LuCircleDollarSign, LuActivity 
} from "react-icons/lu";

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* NAV STYLE SQUARE - ÉPURÉE */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-6 fixed w-full top-0 bg-white/80 backdrop-blur-xl z-50 border-b border-zinc-100/50">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-zinc-900 rounded-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em]">Studio</span>
            </div>
            <div className="hidden lg:flex gap-8">
                {["Logiciel", "Matériel", "Entreprise"].map(item => (
                    <Link key={item} href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">{item}</Link>
                ))}
            </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-[10px] font-bold uppercase tracking-widest">Connexion</Link>
          <Link href="/dashboard" className="bg-zinc-900 text-white px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all">
            Démarrer
          </Link>
        </div>
      </nav>

      <main>
        {/* HERO : LE POUVOIR DE L'UNIFICATION */}
        <section className="pt-52 pb-32 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full">
                    <div className="w-1 h-1 bg-emerald-600 rounded-full animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Disponible à Lomé</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tightest leading-[0.9]">
                    Gérez votre <br />commerce <br /><span className="text-zinc-300">en un bloc.</span>
                </h1>
                <p className="max-w-md text-xl text-zinc-500 font-medium font-['Google_Sans'] leading-relaxed">
                    Ventes, inventaire et paiements. Tout ce dont vous avez besoin pour faire tourner votre boutique est enfin réuni.
                </p>
                <div className="flex gap-4">
                    <Link href="/dashboard" className="flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] group transition-all hover:bg-black">
                        Lancer l'interface <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
            {/* VISUEL PRODUCT - STYLE SQUARE */}
            <div className="relative aspect-square bg-zinc-50 rounded-3xl border border-zinc-100 p-8 flex items-center justify-center overflow-hidden">
                <div className="w-64 h-80 bg-white rounded-2xl shadow-2xl border border-zinc-100 flex flex-col p-6 space-y-4">
                    <div className="flex justify-between border-b border-zinc-50 pb-4">
                        <LuShoppingBag className="w-5 h-5 text-zinc-300" />
                        <span className="font-mono text-[10px] font-bold">POS_V2.0</span>
                    </div>
                    <div className="flex-1 space-y-3 pt-2">
                        <div className="h-2 w-full bg-zinc-50 rounded-full" />
                        <div className="h-2 w-2/3 bg-zinc-50 rounded-full" />
                        <div className="flex gap-2 pt-4">
                            <div className="w-12 h-12 bg-zinc-100 rounded-lg" />
                            <div className="w-12 h-12 bg-zinc-100 rounded-lg" />
                        </div>
                    </div>
                    <div className="bg-zinc-900 text-white py-3 rounded-lg text-center text-[10px] font-black uppercase tracking-widest">
                        Payer 45.000 CFA
                    </div>
                </div>
                {/* ÉLÉMENT DÉCORATIF "CARD" */}
                <div className="absolute -bottom-4 -left-4 w-48 h-32 bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 rotate-12 flex flex-col justify-between">
                    <div className="w-8 h-6 bg-zinc-100 rounded-md" />
                    <span className="font-mono text-xs font-bold tracking-widest">**** 9012</span>
                </div>
            </div>
          </div>
        </section>

        {/* SECTION "POURQUOI STUDIO" - GRILLE À LA STRIPE */}
        <section className="py-32 px-8 md:px-16 bg-zinc-50 border-y border-zinc-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-4">
                    <div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center">
                        <LuCircleDollarSign className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest">Flux financier</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-['Google_Sans']">
                        Suivez chaque transaction, de l'encaissement à la banque. Rapports de fin de journée automatisés.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center">
                        <LuLayers className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest">Sync d'inventaire</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-['Google_Sans']">
                        Vos stocks sont mis à jour instantanément sur tous vos points de vente. Ne vendez jamais ce que vous n'avez plus.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center">
                        <LuSmartphone className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest">Hardware Ready</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-['Google_Sans']">
                        Compatible avec les terminaux de paiement, imprimantes thermiques et scanners Bluetooth.
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION "THE DASHBOARD" - IMMERSION */}
        <section className="py-40 px-8 md:px-16 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">L'intelligence en temps réel.</h2>
            <div className="relative mx-auto max-w-5xl group">
                <div className="absolute inset-0 bg-linear-to-b from-zinc-200/50 to-transparent blur-3xl rounded-full -z-10 opacity-50" />
                <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                    {/* SIMULATION BARRE NAV STUDIO */}
                    <div className="bg-zinc-50 h-10 border-b border-zinc-200 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                        </div>
                    </div>
                    {/* CONTENU DASHBOARD SIMULÉ */}
                    <div className="p-12 text-left space-y-8">
                        <div className="grid grid-cols-4 gap-4">
                            {[1,2,3,4].map(i => <div key={i} className="h-24 bg-zinc-50 rounded-lg animate-pulse" />)}
                        </div>
                        <div className="h-64 bg-zinc-50 rounded-xl flex items-center justify-center border-2 border-dashed border-zinc-100">
                             <LuActivity className="w-10 h-10 text-zinc-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION FINALE - NOIRE */}
        <section className="mx-8 md:mx-16 mb-16 bg-zinc-900 rounded-[2.5rem] py-32 px-8 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-white rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black tracking-tightest leading-none mb-12">PRÊT À ÉVOLUER ?</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <Link href="/dashboard" className="bg-white text-zinc-900 px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">
                        Démarrer l'essai gratuit
                    </Link>
                    <button className="border border-white/20 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                        Contacter le sales
                    </button>
                </div>
            </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-16 py-12 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
        <div className="text-[10px] font-black uppercase tracking-[0.4em]">© 2026 Studio System — Powered by MEVTR</div>
        <div className="flex gap-8">
            <LuArrowUpRight className="w-4 h-4" />
        </div>
      </footer>
    </div>
  );
}