"use client";

import React from "react";
import Link from "next/link";
import { 
  LuArrowRight, LuZap, LuActivity, 
  LuShield, LuGlobe, LuCpu 
} from "react-icons/lu";

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-blue-600 selection:text-white">
      
      {/* 1. TOP BAR (Ligne technique bleue) */}
      <div className="h-1 w-full bg-blue-600 fixed top-0 z-60" />

      {/* 2. NAV MINIMALISTE */}
      <nav className="flex justify-between items-center px-8 py-8 fixed w-full top-1 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
            <div className="w-6 h-6 border-2 border-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600" />
            </div>
            <span className="text-sm font-black uppercase tracking-[0.3em]">Studio System</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-blue-600 transition-colors">Infrastructure</Link>
          <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-all">
            Dashboard
          </Link>
        </div>
      </nav>

      <main className="pt-48">
        
        {/* 3. HERO : TYPOGRAPHIE FINE & ACCENTS BLEUS */}
        <section className="px-8 max-w-7xl mx-auto mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
                <h1 className="text-6xl md:text-[7vw] font-light tracking-tighter leading-[0.9] mb-12">
                    L'intelligence <br /> 
                    <span className="text-blue-600 font-black italic">distribuée</span> <br />
                    pour le retail.
                </h1>
                <p className="max-w-xl text-xl text-zinc-400 font-light leading-relaxed mb-12">
                    Une architecture logicielle conçue pour la rapidité. <br />
                    Synchronisez vos stocks à Lomé, Paris ou Dubaï en <span className="text-blue-600 font-bold">12ms</span>.
                </p>
                <Link href="/dashboard" className="inline-flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                        <LuArrowRight className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.4em] border-b border-zinc-200 group-hover:border-blue-600 transition-all">Démarrer le déploiement</span>
                </Link>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end border-l border-zinc-100 pl-8 space-y-8">
                <div>
                    <p className="text-blue-600 font-mono text-xs mb-2">01. CLOUD SYNC</p>
                    <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">Disponibilité garantie de 99.9% sur toutes vos instances.</p>
                </div>
                <div>
                    <p className="text-blue-600 font-mono text-xs mb-2">02. SECURITY</p>
                    <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">Chiffrement AES-256 de bout en bout sur vos transactions.</p>
                </div>
            </div>
          </div>
        </section>

        {/* 4. VISUEL TECHNIQUE (Plan d'architecte) */}
        <section className="px-8 mb-40">
            <div className="bg-zinc-50 rounded-3xl border border-zinc-100 aspect-video relative overflow-hidden group">
                {/* Grille de fond bleue très légère */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f611_1px,transparent_1px),linear-gradient(to_bottom,#3b82f611_1px,transparent_1px)] bg-size-[40px_40px]" />
                
                {/* Fausse fenêtre de code / terminal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white shadow-2xl rounded-xl border border-blue-100 overflow-hidden">
                    <div className="bg-blue-50 px-4 py-2 border-b border-blue-100 flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-blue-200" />
                        <div className="w-2 h-2 rounded-full bg-blue-200" />
                    </div>
                    <div className="p-8 font-mono text-[10px] space-y-2">
                        <p className="text-blue-600">{"{"}</p>
                        <p className="pl-4 text-zinc-400">&quot;status&quot;: <span className="text-blue-600">&quot;synchronized&quot;</span>,</p>
                        <p className="pl-4 text-zinc-400">&quot;location&quot;: <span className="text-blue-600">&quot;Lomé_Main_Store&quot;</span>,</p>
                        <p className="pl-4 text-zinc-400">&quot;inventory&quot;: 2405,</p>
                        <p className="pl-4 text-zinc-400">&quot;last_sale&quot;: <span className="text-blue-600">&quot;just now&quot;</span></p>
                        <p className="text-blue-600">{"}"}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 5. FONCTIONNALITÉS (Lignes bleues fines) */}
        <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-40">
            {[
                { icon: <LuZap />, title: "Live POS", desc: "Vendez plus vite que l'éclair." },
                { icon: <LuActivity />, title: "Analytics", desc: "Données brutes transformées." },
                { icon: <LuGlobe />, title: "Multistore", desc: "Gérez 1 ou 100 boutiques." },
                { icon: <LuShield />, title: "Backup", desc: "Zéro perte de données." }
            ].map((item, i) => (
                <div key={i} className="group cursor-default">
                    <div className="text-blue-600 mb-6 transition-transform group-hover:-translate-y-2">
                        {React.cloneElement(item.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 } as React.SVGProps<SVGSVGElement>)}
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-3">{item.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed uppercase">{item.desc}</p>
                    <div className="h-0.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 mt-4" />
                </div>
            ))}
        </section>

        {/* 6. CTA BLEU MASSIF */}
        <section className="px-8 pb-40">
            <div className="bg-blue-600 py-24 rounded-[3rem] text-center text-white overflow-hidden relative">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tightest mb-12 uppercase">Connecter votre shop.</h2>
                    <Link href="/dashboard" className="inline-flex items-center gap-4 bg-white text-blue-600 px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-110 transition-transform shadow-xl">
                        Démarrer l&apos;infrastructure <LuArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                {/* Décoration de fond */}
                <LuCpu className="absolute -bottom-10 -right-10 w-64 h-64 text-blue-500 opacity-20" />
            </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className="px-8 py-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-300">
            System Studio v2.6 — Built for Performance
        </div>
        <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-blue-600">
            <Link href="#" className="hover:opacity-50">Privacy</Link>
            <Link href="#" className="hover:opacity-50">Status</Link>
            <Link href="#" className="hover:opacity-50">Twitter</Link>
        </div>
      </footer>
    </div>
  );
}