"use client";

import React from "react";
import Link from "next/link";
import { LuArrowLeft, LuSearch, LuChrome } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="bg-[#FCFDFF] min-h-screen flex items-center justify-center p-6 font-sans text-zinc-900 selection:bg-blue-600 selection:text-white overflow-hidden relative">
      
      {/* Éléments de fond subtils (Style Studio) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-600/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-50" />
      
      <div className="max-w-xl w-full text-center relative z-10">
        
        {/* L'indicateur visuel 404 */}
        <div className="relative inline-block mb-12">
          <span className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter text-zinc-100 select-none">
            404
          </span>
          {/* Le "Glitch" Bleu Studio */}
          <div className="absolute inset-0 flex items-center justify-center translate-x-2 -translate-y-2">
            <span className="text-4xl md:text-6xl font-black uppercase italic tracking-widest text-blue-600 mix-blend-multiply">
              Perdu <br /> dans le <br /> <span className="underline decoration-4">système</span>
            </span>
          </div>
        </div>

        {/* Message de contenu */}
        <div className="space-y-6 mb-12">
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-tightest">
            Erreur de synchronisation
          </h1>
          <p className="text-zinc-500 font-medium leading-relaxed max-w-sm mx-auto">
            L'inventaire de cette page est vide ou l'URL a été déplacée vers un autre entrepôt.
          </p>
        </div>

        {/* Actions - Style Square/Studio */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-zinc-900/10 group"
          >
            <LuChrome className="w-4 h-4" />
            Retour au Dashboard
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-3 bg-white border border-zinc-200 text-zinc-400 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:text-zinc-900 hover:border-zinc-900 transition-all group"
          >
            <LuArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Page précédente
          </button>
        </div>

        {/* Footer minimaliste de l'erreur */}
        <div className="mt-20 pt-8 border-t border-zinc-50 flex items-center justify-center gap-8 opacity-40">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-zinc-900 rounded-sm flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest">Studio System v2.6</span>
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest">Code: 0x404_NOT_FOUND</span>
        </div>
      </div>

      {/* Grille de fond très légère */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f605_1px,transparent_1px),linear-gradient(to_bottom,#3b82f605_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
    </div>
  );
}