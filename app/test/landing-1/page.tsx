"use client";

import React from "react";
import { LuArrowRight, LuMinus, LuPlus } from "react-icons/lu";

export default function EditorialLanding() {
  return (
    <div className="bg-[#FCFCFA] min-h-screen font-sans text-[#1A1A1A] antialiased">
      
      {/* --- NAVIGATION SILENCIEUSE --- */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-10">
        <div className="text-xl font-serif italic tracking-tight">Studio.</div>
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-400">
          <a href="#" className="hover:text-black transition-colors">L'approche</a>
          <a href="#" className="hover:text-black transition-colors">Solutions</a>
          <a href="#" className="hover:text-black transition-colors">Tarifs</a>
        </div>
        <button className="text-[11px] uppercase tracking-[0.2em] font-bold border-b border-black pb-1">
          Essai Privé
        </button>
      </nav>

      <main>
        {/* --- HERO : POÉSIE VISUELLE --- */}
        <section className="pt-20 pb-32 px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-[100px] font-serif leading-[0.9] tracking-tight mb-16">
              Le commerce, <br /> 
              <span className="italic pl-12 md:pl-24">en toute clarté.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-20 items-end">
              <div className="space-y-8">
                <p className="text-xl text-zinc-600 leading-relaxed font-light">
                  Une interface silencieuse qui s'efface pour laisser place à l'essentiel : votre relation avec vos clients.
                </p>
                <button className="flex items-center gap-6 group">
                  <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <LuArrowRight className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Découvrir l'expérience</span>
                </button>
              </div>
              
              {/* Image Minimaliste (Simulée) */}
              <div className="aspect-[4/5] bg-zinc-100 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2 font-bold">Vue de l'interface</p>
                    <p className="text-lg font-serif italic">Pureté absolue.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION "LE SILENCE" (Focus Fonctionnalité) --- */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1">
                 <div className="w-full aspect-square bg-[#F5F5F3] flex items-center justify-center">
                    {/* Illustration abstraite : un cercle parfait */}
                    <div className="w-48 h-48 border border-zinc-200 rounded-full flex items-center justify-center animate-spin-slow">
                        <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                 </div>
              </div>
              <div className="flex-1 space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">01. Gestion</span>
                  <h2 className="text-4xl font-serif italic">L'intelligence invisible.</h2>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    Studio anticipe vos besoins de stock et automatise vos inventaires sans jamais vous interrompre. Une technologie qui ne demande pas votre attention, mais qui la mérite.
                  </p>
                </div>
                <div className="h-[1px] bg-zinc-100 w-full" />
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">02. Mobilité</span>
                  <h2 className="text-4xl font-serif italic">Partout, avec vous.</h2>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    De votre boutique à votre domicile, gardez un œil bienveillant sur votre activité. Sans bruits, sans notifications inutiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TARIFS : L'ÉPURE --- */}
        <section className="py-40 px-8">
            <div className="max-w-3xl mx-auto text-center space-y-16">
                <div className="space-y-4">
                    <h2 className="text-5xl font-serif tracking-tight">Une offre, une évidence.</h2>
                    <p className="text-zinc-400 font-light italic">Tout ce dont vous avez besoin, sans complexité.</p>
                </div>
                
                <div className="p-20 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] rounded-2xl">
                    <p className="text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">Abonnement Annuel</p>
                    <div className="text-7xl font-serif mb-8">25.000<span className="text-xl ml-2">CFA</span></div>
                    <p className="text-zinc-500 mb-12 font-light max-w-xs mx-auto">Accès complet à l'écosystème Studio, support prioritaire et mises à jour à vie.</p>
                    <button className="bg-black text-white px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
                        Commencer l'expérience
                    </button>
                </div>
            </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="py-40 text-center">
            <div className="max-w-2xl mx-auto px-8">
                <h2 className="text-4xl font-serif italic mb-8">Redéfinissez votre quotidien.</h2>
                <p className="text-zinc-400 mb-12 font-light">Rejoignez les commerces qui ont choisi la clarté.</p>
                <div className="flex justify-center gap-10 items-center">
                    <span className="text-[10px] uppercase tracking-widest font-bold">Contact</span>
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Démonstration</span>
                </div>
            </div>
        </section>
      </main>

      {/* --- FOOTER MINIMAL --- */}
      <footer className="py-20 border-t border-zinc-100 px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-lg font-serif italic">Studio.</div>
            <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                <span>Instagram</span>
                <span>Journal</span>
                <span>Confidentialité</span>
            </div>
            <div className="text-[10px] text-zinc-300 font-medium tracking-widest">© 2026 Studio System</div>
        </div>
      </footer>
    </div>
  );
}