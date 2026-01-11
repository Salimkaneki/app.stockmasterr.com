"use client";

import React, { useState } from "react";
import { LuPlus, LuMinus, LuTrash2, LuSearch, LuArrowRight, LuLayoutGrid, LuCircle } from "react-icons/lu";

export default function CashierPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Clavier Mécanique RGB", price: 45000, qty: 1, type: "commerce" },
  ]);

  // Simuler le nom du caissier
  const cashierName = "Jean-Pierre";

  return (
    <div className="h-screen w-full bg-white flex font-sans text-zinc-900 overflow-hidden">
      
      {/* 01_ZONE_CATALOGUE */}
      <div className="flex-1 flex flex-col border-r border-zinc-100">
        
        <header className="px-10 py-10 border-b border-zinc-50">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">Caisse</h1>
              <div className="flex items-center gap-2 mt-1">
                <LuCircle className="w-4 h-4 text-zinc-400" />
                <span className="text-sm font-medium text-zinc-500">Caissier : <span className="text-zinc-900">{cashierName}</span></span>
              </div>
            </div>
            
            <div className="relative group">
              <LuSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-commerce transition-colors w-4 h-4" />
              <input 
                type="text" 
                placeholder="Rechercher un produit..." 
                className="pl-6 pr-4 py-1 text-sm outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all border-b border-transparent focus:border-commerce-light font-medium"
              />
            </div>
          </div>
        </header>

        {/* Grille de produits simple et colorée */}
        <div className="flex-1 overflow-y-auto p-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            { id: 1, name: "Stock_Hardware", type: "hardware", price: "12 500" },
            { id: 2, name: "Item_Commerce", type: "commerce", price: "8 000" },
            { id: 3, name: "Menu_Restaurant", type: "restaurant", price: "4 500" },
            { id: 4, name: "Stock_Hardware", type: "hardware", price: "25 000" },
            { id: 5, name: "Item_Commerce", type: "commerce", price: "15 000" },
            { id: 6, name: "Menu_Restaurant", type: "restaurant", price: "2 500" },
          ].map((prod) => (
            <button 
              key={prod.id}
              className="group flex flex-col text-left space-y-4 active:scale-98 transition-all"
            >
              <div className={`aspect-square rounded-lg flex items-center justify-center border border-transparent transition-all relative overflow-hidden bg-white group-hover:shadow-md group-hover:brightness-95
                ${prod.type === 'commerce' ? 'bg-commerce-light text-commerce group-hover:border-commerce' : ''}
                ${prod.type === 'hardware' ? 'bg-hardware-light text-hardware group-hover:border-hardware' : ''}
                ${prod.type === 'restaurant' ? 'bg-restaurant-light text-restaurant group-hover:border-restaurant' : ''}
              `}>
                <LuLayoutGrid className="w-8 h-8 opacity-30 group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <LuPlus className="w-4 h-4 text-zinc-900" />
                </div>
              </div>
              <div className="px-1">
                <p className="font-semibold text-xl leading-tight tracking-tight text-zinc-900">{prod.name}</p>
                <p className="text-lg font-mono font-medium mt-1 text-zinc-900">
                  {prod.price} F CFA
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 02_ZONE_TICKET */}
      <div className="w-100 flex flex-col bg-zinc-50/40">
        
        <div className="p-10 flex-1 flex flex-col">
          <div className="mb-10">
            <h2 className="text-xl font-bold tracking-tight">Panier</h2>
            <p className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-widest">Aujourd'hui, 14:30</p>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-start group">
                <div className="space-y-1">
                  <p className="font-semibold text-lg leading-tight text-zinc-900">{item.name}</p>
                  <div className="flex items-center gap-3">
                     <span className="font-mono text-lg font-medium text-zinc-900">{item.price.toLocaleString()} F</span>
                     <div className="flex items-center gap-2">
                        <button className="text-zinc-300 hover:text-zinc-900"><LuMinus className="w-3 h-3"/></button>
                        <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                        <button className="text-zinc-300 hover:text-zinc-900"><LuPlus className="w-3 h-3"/></button>
                     </div>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-zinc-300 hover:text-rose-500">
                  <LuTrash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            
            {cart.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-zinc-300 space-y-3">
                <LuLayoutGrid className="w-10 h-10 opacity-20" />
                <p className="text-sm font-medium">Panier vide</p>
              </div>
            )}
          </div>

          {/* RÉSUMÉ TOTAL */}
          <div className="mt-10 pt-10 border-t border-zinc-100 space-y-6">
            <div className="space-y-3 px-1">
              <div className="flex justify-between text-zinc-400 text-sm font-medium">
                <span>Sous-total</span>
                <span className="font-mono">45 000 F</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="font-black text-sm uppercase tracking-widest">Total</span>
                <span className="text-3xl font-black tracking-tighter text-zinc-900">45 000 F</span>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-4.5 rounded-2xl font-mono text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200">
              Valider la vente
              <LuArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}