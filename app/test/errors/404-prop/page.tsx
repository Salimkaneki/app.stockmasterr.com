"use client";

import React from "react";
import Link from "next/link";
import { LuArrowRight, LuUndo2, LuGhost } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6 selection:bg-zinc-900 selection:text-white overflow-hidden">
      
      {/* Background : Grille discrète style plan d'architecte */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Visuel central : Un élément "égaré" */}
        <div className="relative mb-16">
            <div className="w-24 h-32 bg-zinc-50 border border-zinc-200 rounded-sm relative shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden group">
                {/* L'ombre portée stylisée */}
                <div className="absolute inset-0 bg-linear-to-br from-transparent to-zinc-100/50" />
                
                {/* Icône fantôme ou point d'interrogation */}
                <LuGhost className="w-8 h-8 text-zinc-200 group-hover:text-zinc-400 transition-colors duration-500" />
                
                {/* Ligne de scan qui passe */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-zinc-900/5 shadow-[0_0_10px_rgba(0,0,0,0.1)] animate-[scan_3s_ease-in-out_infinite]" />
            </div>
            
            {/* Étiquette volante style prix/tag */}
            <div className="absolute -bottom-4 -right-8 bg-zinc-900 text-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] shadow-xl rotate-12">
                Missing_Item
            </div>
        </div>

        {/* Texte élégant */}
        <div className="text-center max-w-lg">
            <h1 className="text-[120px] md:text-[160px] font-black tracking-tighter leading-none text-zinc-100 absolute -top-32 left-1/2 -translate-x-1/2 -z-10 select-none">
                404
            </h1>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-6">
                Oups. Mauvaise <br/> <span className="text-zinc-400 font-serif italic font-light">étagère.</span>
            </h2>
            
            <p className="text-zinc-500 font-medium leading-relaxed mb-12 max-w-xs mx-auto">
                Cet article n'est pas répertorié dans notre inventaire actuel. Il a peut-être été déplacé.
            </p>
        </div>

        {/* Navigation épurée */}
        <div className="flex flex-col items-center gap-8">
            <Link 
                href="/" 
                className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-900 hover:text-zinc-500 transition-colors"
            >
                Retourner à l'accueil 
                <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 group-hover:translate-x-1 transition-all">
                    <LuArrowRight className="w-4 h-4" />
                </div>
            </Link>
            
            <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors text-[10px] font-bold uppercase tracking-widest"
            >
                <LuUndo2 className="w-3 h-3" /> Revenir en arrière
            </button>
        </div>
      </div>

      {/* Détail de bas de page */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Path_Not_Found_Exception</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0%, 100% { top: 0%; }
          50% { top: 100%; }
        }
      `}</style>
    </div>
  );
}