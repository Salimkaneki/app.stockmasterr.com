"use client";

import React from "react";
import { 
  LuArrowRight, LuMinus, LuPlus, LuCompass, 
  LuMaximize, LuShield, LuFingerprint, LuZap 
} from "react-icons/lu";

export default function ArchitecturalLanding() {
  return (
    <div className="bg-[#F5F5F3] min-h-screen font-sans text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white">
      
      {/* --- SIDE NAVIGATION (Fixed & Minimal) --- */}
      <div className="fixed left-0 top-0 h-full w-20 border-r border-zinc-200 hidden xl:flex flex-col items-center justify-between py-12 z-50 bg-[#F5F5F3]">
        <div className="rotate-90 text-[10px] font-black tracking-[0.5em] uppercase origin-left translate-x-3 mt-8">
          Studio.System
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-1 h-1 bg-black rounded-full" />
          <div className="w-1 h-1 bg-zinc-300 rounded-full" />
          <div className="w-1 h-1 bg-zinc-300 rounded-full" />
        </div>
        <div className="flex flex-col gap-6 text-zinc-400">
          <LuCompass className="w-5 h-5" />
        </div>
      </div>

      <main className="xl:pl-20">
        
        {/* --- HERO : THE MONOLITH --- */}
        <section className="min-h-screen flex flex-col justify-end px-8 md:px-24 pb-24 relative overflow-hidden">
          <div className="absolute top-20 right-0 w-1/2 h-[70vh] bg-zinc-200/50 -z-10" />
          
          <div className="max-w-6xl">
            <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.8] tracking-tighter mb-12">
              L'ORDRE <br/> PAR LE <br/> <span className="text-zinc-400">DESIGN.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-20 items-end">
              <p className="text-xl md:text-2xl font-light leading-snug max-w-md">
                Studio redéfinit la gestion retail à travers une interface chirurgicale et une infrastructure sans faille.
              </p>
              <div className="flex flex-col gap-6">
                <div className="h-px w-full bg-black/10" />
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-bold uppercase tracking-widest">Explorer le système</span>
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <LuArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 01 : PRECISION (The "Grid" Section) --- */}
        <section className="py-40 px-8 md:px-24 bg-white">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8 block">01 / Efficacité</span>
              <h2 className="text-4xl font-bold tracking-tighter leading-none mb-8">Une clarté visuelle, une puissance brute.</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="aspect-video bg-[#F5F5F3] relative overflow-hidden mb-12 border border-zinc-100">
                {/* Abstract UI representation */}
                <div className="absolute inset-10 border border-zinc-200 p-8 flex flex-col justify-between">
                   <div className="flex justify-between">
                     <div className="w-24 h-2 bg-zinc-300" />
                     <LuPlus className="w-4 h-4" />
                   </div>
                   <div className="space-y-4">
                     <div className="w-full h-px bg-zinc-100" />
                     <div className="w-full h-px bg-zinc-100" />
                     <div className="w-full h-px bg-zinc-900" />
                   </div>
                </div>
              </div>
              <p className="text-zinc-500 font-light leading-relaxed max-w-xl">
                Chaque pixel a sa raison d'être. Nous avons supprimé le superflu pour ne laisser que l'essentiel : vos données, vos ventes, votre croissance.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 02 : THE CORE STACK --- */}
        <section className="py-40 px-8 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
              {[
                { t: "INTÉGRITÉ", d: "Base de données relationnelle hautement sécurisée.", i: <LuFingerprint /> },
                { t: "FLUX", d: "Synchronisation instantanée sur l'ensemble du réseau.", i: <LuZap /> },
                { t: "STRUCTURE", d: "Architecture modulaire adaptable à votre échelle.", i: <LuMaximize /> }
              ].map((item, i) => (
                <div key={i} className="bg-[#F5F5F3] p-16 hover:bg-white transition-colors group">
                  <div className="mb-12 text-zinc-300 group-hover:text-black transition-colors">{item.i}</div>
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6">{item.t}</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 03 : DARK STATEMENT --- */}
        <section className="py-40 bg-[#1A1A1A] text-white px-8 md:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 italic">"La simplicité est l'ultime sophistication."</h2>
            <div className="flex justify-center gap-12">
              <div className="text-left">
                <p className="text-4xl font-light mb-2">99.9%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Uptime Réseau</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-light mb-2">10ms</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Temps de réponse</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING : MINIMALIST TABLE --- */}
        <section className="py-40 px-8 md:px-24 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-20 text-center">Plan d'accès</h3>
            
            <div className="border-t border-black pt-12 grid md:grid-cols-2 gap-20">
              <div>
                <h4 className="text-2xl font-bold mb-6">Licence Annuelle</h4>
                <p className="text-zinc-500 font-light mb-12">Solution complète pour les entreprises cherchant une stabilité totale et un support prioritaire.</p>
                <div className="text-6xl font-light tracking-tighter mb-4">250.000 <span className="text-xl">CFA</span></div>
                <p className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Facturation par point de vente / an</p>
              </div>
              <div className="flex flex-col justify-end">
                <ul className="space-y-4 mb-12">
                  {["Support Dédié", "Mises à jour à vie", "Accès API illimité", "Cloud Privé"].map(item => (
                    <li key={item} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b border-zinc-100 pb-4">
                      <LuMinus className="text-zinc-300" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-black text-white py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all">
                  Acquérir une licence
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER : THE END --- */}
        <footer className="py-20 px-8 md:px-24 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <p className="text-sm font-bold uppercase tracking-widest mb-6 underline decoration-zinc-200 underline-offset-8">Studio System</p>
            <p className="text-[10px] text-zinc-400 leading-relaxed font-medium uppercase tracking-wider">
              Une division de l'ingénierie retail dédiée à la performance opérationnelle.
            </p>
          </div>
          <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.3em]">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-zinc-400">Legal</a>
              <a href="#" className="hover:text-zinc-400">Privacy</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-zinc-400">Documentation</a>
              <a href="#" className="hover:text-zinc-400">Changelog</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}