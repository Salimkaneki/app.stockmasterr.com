"use client";

import React from "react";
import Link from "next/link";
import { 
  LuArrowRight, LuPlus, LuShoppingBag, 
  LuSmartphone
} from "react-icons/lu";

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* HEADER */}
      <nav className="flex justify-between items-center px-12 py-8 fixed w-full top-0 bg-white/50 backdrop-blur-md z-50 border-b border-zinc-50">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-zinc-900 rounded-full animate-pulse" />
            <span className="text-sm font-black uppercase tracking-[0.3em]">Studio Boutique</span>
        </div>
        <div className="hidden md:flex items-center gap-12">
          <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
            Accès Gérant
          </Link>
          <Link href="/dashboard" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border border-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-500">
            Démarrer <LuPlus className="w-3 h-3 group-hover:rotate-90 transition-transform duration-500" />
          </Link>
        </div>
      </nav>

      <main className="pt-40">
        
        {/* HERO */}
        <section className="px-12 max-w-6xl mx-auto mb-40">
          <h1 className="text-[12vw] md:text-[8.5vw] font-black tracking-tightest leading-[0.82] mb-16">
            Vendre <br /> 
            <span className="text-zinc-200">mieux.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-5">
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <LuShoppingBag className="w-4 h-4" /> Retail Intelligence
                </p>
                <p className="text-2xl font-medium leading-relaxed font-['Google_Sans'] text-zinc-500">
                    L'outil de gestion qui redonne aux boutiques le contrôle total sur leur stock, leurs ventes et leur croissance.
                </p>
            </div>
            <div className="md:col-span-7 flex justify-end">
                 <Link href="/dashboard" className="flex flex-col items-end group">
                    <div className="w-28 h-28 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-700 hover:scale-105">
                        <LuArrowRight className="w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                    </div>
                    <span className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 group-hover:text-zinc-900 transition-colors">
                        Ouvrir l'inventaire
                    </span>
                 </Link>
            </div>
          </div>
        </section>

        {/* LOGO BAR (SUBTILE) */}
        <section className="px-12 max-w-6xl mx-auto mb-40">
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-8">Ils utilisent Studio</p>
            <div className="flex flex-wrap gap-x-20 gap-y-8 opacity-40 grayscale">
                <span className="text-xl font-black tracking-tighter">MAISON-K</span>
                <span className="text-xl font-black tracking-tighter">LOME_STORE</span>
                <span className="text-xl font-black tracking-tighter">CONCEPT.B</span>
                <span className="text-xl font-black tracking-tighter">URBAN_A</span>
            </div>
        </section>

        {/* INTERFACE PREVIEW */}
        <section className="px-6 mb-40">
            <div className="bg-zinc-50 rounded-[3.5rem] border border-zinc-100 overflow-hidden aspect-video md:aspect-21/9 relative group">
                <div className="absolute top-20 left-20 right-20 bottom-0 bg-white rounded-t-4xl shadow-[0_-20px_100px_rgba(0,0,0,0.04)] border-t border-x border-zinc-100 p-10">
                    <div className="grid grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-4">
                                <div className="aspect-square bg-zinc-50 rounded-2xl" />
                                <div className="h-2 w-2/3 bg-zinc-100 rounded-full" />
                                <div className="h-2 w-1/3 bg-zinc-50 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION METRICS (NOUVEAU) */}
        <section className="px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 border-y border-zinc-50 py-20">
            <div className="text-center md:text-left">
                <p className="text-5xl font-black tracking-tighter mb-2 italic">+40%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Efficacité de stock</p>
            </div>
            <div className="text-center md:text-left">
                <p className="text-5xl font-black tracking-tighter mb-2 italic">0.5s</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Temps d'encaissement</p>
            </div>
            <div className="text-center md:text-left">
                <p className="text-5xl font-black tracking-tighter mb-2 italic">24/7</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sync. Multiboutique</p>
            </div>
        </section>

        {/* FOCUS MOBILE (NOUVEAU) */}
        <section className="px-12 max-w-6xl mx-auto mb-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
                <div className="w-64 h-125 bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl relative overflow-hidden mx-auto md:mx-0">
                    <div className="absolute top-0 w-full h-6 bg-zinc-800 flex justify-center">
                        <div className="w-20 h-4 bg-zinc-900 rounded-b-xl" />
                    </div>
                    <div className="p-6 pt-12">
                        <div className="w-full h-32 bg-zinc-800 rounded-2xl mb-4 animate-pulse" />
                        <div className="space-y-3">
                            <div className="w-full h-3 bg-zinc-800 rounded-full" />
                            <div className="w-2/3 h-3 bg-zinc-800 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
                <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center">
                    <LuSmartphone className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Votre boutique,<br/>dans votre poche.</h2>
                <p className="text-zinc-500 font-['Google_Sans'] text-lg">Suivez vos ventes depuis votre smartphone. Validez un réapprovisionnement en un clic, où que vous soyez.</p>
                <ul className="space-y-4">
                    {["Alertes Push", "Scan Code-barres", "Rapports Flash"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                            <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        {/* ARGUMENTS MÉTIERS */}
        <section className="px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 pb-40">
            {[
                { label: "01", title: "Stock Précis", desc: "Suivi unitaire de chaque article. Soyez alerté avant la rupture." },
                { label: "02", title: "Ventes Live", desc: "Analysez vos performances de vente en temps réel depuis n'importe où." },
                { label: "03", title: "Omnicanal", desc: "Une seule source de vérité pour votre boutique physique et en ligne." }
            ].map((feature) => (
                <div key={feature.label} className="space-y-6 border-l border-zinc-50 pl-8 font-['Google_Sans']">
                    <span className="font-mono text-zinc-300 text-sm font-bold">{feature.label}</span>
                    <h3 className="text-lg font-black tracking-tight uppercase text-zinc-900">{feature.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{feature.desc}</p>
                </div>
            ))}
        </section>

        {/* CTA FINAL */}
        <section className="px-12 pb-40 text-center">
            <h2 className="text-5xl font-black tracking-tightest mb-8 uppercase">Reprenez le contrôle.</h2>
            <Link href="/dashboard" className="inline-flex items-center gap-4 bg-zinc-900 text-white px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:scale-110 transition-all duration-500 shadow-xl shadow-zinc-200">
                Lancer Studio Boutique <LuArrowRight className="w-4 h-4" />
            </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-12 py-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
            © 2026 Studio System — Lomé, Togo
        </div>
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-zinc-400">
            <Link href="#" className="hover:text-zinc-900 transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</Link>
        </div>
      </footer>
    </div>
  );
}