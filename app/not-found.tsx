"use client";

import React from "react";
import Link from "next/link";
import { LuArrowUpRight, LuMoveLeft } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col selection:bg-zinc-900 selection:text-white">
      
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        
        {/* Côté Gauche : Impact Visuel & Typographique */}
        <div className="bg-zinc-50 flex flex-col justify-center p-12 md:p-24 border-r border-zinc-100">
            <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Error Code</span>
                <h1 className="text-[12rem] md:text-[16rem] font-black tracking-tighter leading-none text-zinc-900">
                    404
                </h1>
            </div>
            <div className="mt-auto">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-300">
                    Studio System / Discovery Phase
                </p>
            </div>
        </div>

        {/* Côté Droit : Contenu & Redirection */}
        <div className="flex flex-col justify-center p-12 md:p-24 bg-white">
            <div className="max-w-md">
                <h2 className="text-4xl md:text-5xl font-black tracking-tightest leading-tight mb-8">
                    Le contenu que vous <br/>
                    recherchez est <span className="italic font-serif font-light text-zinc-400">indisponible.</span>
                </h2>
                
                <p className="text-zinc-500 font-medium leading-relaxed mb-12 text-lg">
                    Il semble que cette adresse n'existe plus ou ait été déplacée. Nous vous invitons à reprendre votre navigation depuis l'accueil.
                </p>

                <div className="space-y-8">
                    <Link 
                        href="/" 
                        className="group flex items-center justify-between w-full border-b-2 border-zinc-900 pb-4 transition-all hover:opacity-60"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Retourner à l'accueil</span>
                        <LuArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>

                    <Link 
                        href="/#features" 
                        className="group flex items-center justify-between w-full border-b border-zinc-100 pb-4 transition-all hover:border-zinc-900"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 group-hover:text-zinc-900">Explorer les fonctionnalités</span>
                        <LuArrowUpRight className="w-5 h-5 text-zinc-200 group-hover:text-zinc-900 transition-all" />
                    </Link>
                </div>

                <button 
                    onClick={() => window.history.back()}
                    className="mt-16 flex items-center gap-2 text-zinc-300 hover:text-zinc-900 transition-colors text-[10px] font-black uppercase tracking-[0.3em]"
                >
                    <LuMoveLeft className="w-3 h-3" /> Revenir en arrière
                </button>
            </div>
        </div>

      </main>

      {/* Barre de statut ultra-fine en bas */}
      <div className="h-1 bg-zinc-900 w-full fixed bottom-0 left-0" />
      
    </div>
  );
}