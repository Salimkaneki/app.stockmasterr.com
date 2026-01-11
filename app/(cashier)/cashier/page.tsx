"use client";

import React, { useState } from "react";
import { 
  LuSearch, 
  LuPlus, 
  LuMinus, 
  LuX, 
  LuArrowRight, 
  LuShoppingBag,
  LuLayoutGrid
} from "react-icons/lu";

export default function HighVisibilityCashier() {
  const [cart, setCart] = useState([
    { id: 1, name: "Clavier Mécanique RGB", price: 45000, qty: 1, category: "Hardware" },
  ]);

  return (
    <div className="h-screen w-full bg-white flex font-sans text-zinc-900 overflow-hidden">
      
      {/* --- SECTION GAUCHE : CATALOGUE --- */}
      <div className="flex-1 flex flex-col border-r-[3px] border-zinc-900">
        
        {/* Barre de recherche ultra-nette */}
        <header className="h-28 px-10 flex items-center bg-white border-b-2 border-zinc-100">
          <div className="flex-1 flex items-center gap-6">
            <LuSearch className="w-6 h-6 text-zinc-900" />
            <input 
              type="text" 
              placeholder="RECHERCHER UN ARTICLE..." 
              className="w-full text-xl font-black uppercase tracking-tighter outline-none placeholder:text-zinc-200"
            />
          </div>
          <div className="flex gap-4">
            <div className="h-12 w-0.5 bg-zinc-100 mx-4" />
            <button className="flex items-center gap-2 px-6 py-3 bg-zinc-100 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
                <LuLayoutGrid className="w-4 h-4" /> Catégories
            </button>
          </div>
        </header>

        {/* Grille avec visibilité renforcée */}
        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-2 xl:grid-cols-3 gap-6 bg-zinc-50/50">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <button key={i} className="group bg-white border-2 border-zinc-200 p-6 rounded-none hover:border-zinc-900 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all text-left flex flex-col active:translate-x-1 active:translate-y-1 active:shadow-none">
              <div className="mb-6 flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-zinc-900 text-white px-2 py-1">In Stock</span>
                <p className="text-2xl font-mono font-black italic">15,000</p>
              </div>
              <h3 className="text-xl font-black leading-none mb-2 uppercase wrap-break-word">Article Produit {i}</h3>
              <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Hardware / Tech</p>
              
              <div className="mt-8 flex items-center gap-2 text-zinc-900 font-black text-xs uppercase group-hover:gap-4 transition-all">
                Ajouter au panier <LuArrowRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* --- SECTION DROITE : PANIER --- */}
      <div className="w-125 flex flex-col bg-white">
        
        <div className="h-28 px-10 flex items-center justify-between border-b-2 border-zinc-100">
          <div className="flex items-center gap-4">
            <div className="relative">
                <LuShoppingBag className="w-7 h-7 text-zinc-900" />
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {cart.length}
                </span>
            </div>
            <h2 className="text-xl font-black uppercase tracking-tighter">Votre Panier</h2>
          </div>
        </div>

        {/* Liste avec gros texte */}
        <div className="flex-1 overflow-y-auto px-10">
          {cart.map((item) => (
            <div key={item.id} className="py-8 border-b-2 border-zinc-100 group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black uppercase leading-none mb-1">{item.name}</h3>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Unité : {item.price.toLocaleString()} F</span>
                </div>
                <button className="p-2 hover:bg-rose-50 rounded-lg text-zinc-300 hover:text-rose-600 transition-colors">
                  <LuX className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 bg-zinc-900 p-1.5 rounded-lg">
                  <button className="w-10 h-10 flex items-center justify-center bg-zinc-800 text-white rounded-md hover:bg-zinc-700"><LuMinus className="w-4 h-4"/></button>
                  <span className="text-lg font-black text-white w-6 text-center">{item.qty}</span>
                  <button className="w-10 h-10 flex items-center justify-center bg-zinc-800 text-white rounded-md hover:bg-zinc-700"><LuPlus className="w-4 h-4"/></button>
                </div>
                <p className="text-3xl font-mono font-black italic tracking-tighter">
                  {(item.price * item.qty).toLocaleString()} F
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Panier - IMPACT MAXIMAL */}
        <div className="p-10 bg-zinc-900 text-white">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">Total à payer</span>
            <div className="text-right">
                <p className="text-5xl font-mono font-black italic tracking-tighter leading-none">45,000</p>
                <p className="text-xs font-bold text-zinc-500 mt-2">FRANC CFA (TTC)</p>
            </div>
          </div>

          <button className="w-full bg-white text-zinc-900 flex items-center justify-center gap-4 py-6 rounded-none hover:bg-zinc-200 transition-all active:scale-95">
            <span className="text-lg font-black uppercase tracking-[0.2em]">Valider la vente</span>
            <LuArrowRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}