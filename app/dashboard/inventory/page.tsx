"use client";

import React from "react";
import { 
  LuSearch, 
  LuPlus, 
  LuSlidersHorizontal, 
  LuMoveHorizontal, 
  LuArrowUpDown,
  LuChevronLeft,
  LuChevronRight,
  LuImage
} from "react-icons/lu";

const inventoryItems = [
  { id: 1, name: "Clavier Mécanique RGB", sku: "ELEC-001", category: "Électronique", price: "45 000", stock: 2, status: "Critique" },
  { id: 2, name: "Souris Sans Fil", sku: "ACC-042", category: "Accessoires", price: "15 000", stock: 24, status: "En stock" },
  { id: 3, name: "Écran 24 pouces UltraSharp", sku: "ELEC-089", category: "Électronique", price: "110 000", stock: 0, status: "Rupture" },
  { id: 4, name: "Câble HDMI 2.1 - 2m", sku: "ACC-012", category: "Accessoires", price: "5 000", stock: 50, status: "En stock" },
  { id: 5, name: "Casque Audio Pro", sku: "ELEC-102", category: "Électronique", price: "35 000", stock: 8, status: "Faible" },
];

export default function InventoryPage() {
  return (
    <div className="p-8 max-w-350 mx-auto">
      {/* HEADER */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">Articles</h1>
          <nav className="flex gap-4 mt-2">
            <button className="text-sm font-bold border-b-2 border-zinc-900 pb-1">Tous les articles</button>
            <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 pb-1">Catégories</button>
            <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 pb-1">Stocks</button>
          </nav>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-sm">
          Créer un article
        </button>
      </div>
        
      {/* FILTRES & RECHERCHE */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Rechercher par nom, SKU ou code-barres" 
            className="w-full bg-white border border-zinc-300 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-all">
          <LuSlidersHorizontal className="w-4 h-4" />
          Filtres
        </button>
      </div>

      {/* TABLEAU */}
      <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="text-left p-6 pl-8 text-[11px] font-bold text-zinc-500 uppercase tracking-widest w-[40%]">
                <div className="flex items-center gap-2 cursor-pointer">Article <LuArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="text-left p-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">UGS (SKU)</th>
              <th className="text-left p-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Stock</th>
              <th className="text-left p-6 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Prix de vente</th>
              <th className="text-right p-6 pr-8 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Options</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {inventoryItems.map((item) => (
              <tr key={item.id} className="hover:bg-indigo-50/30 transition-colors cursor-pointer group">
                <td className="p-6 pl-8">
                  <div className="flex items-center gap-4">
                    {/* Image Thumbnail */}
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 overflow-hidden">
                       <LuImage className="w-5 h-5 text-zinc-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-900 text-sm group-hover:text-indigo-600 transition-colors">{item.name}</span>
                      <span className="text-xs text-zinc-500">{item.category}</span>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-sm font-mono text-zinc-500">{item.sku}</td>
                <td className="p-6">
                  <div className="flex flex-col">
                    <span className={`text-sm font-bold ${item.stock <= 5 ? 'text-red-600' : 'text-zinc-900'}`}>
                      {item.stock} en stock
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-tight ${
                      item.status === 'Rupture' ? 'text-red-500' : 
                      item.status === 'Critique' ? 'text-orange-500' : 'text-zinc-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </td>
                <td className="p-6 text-sm font-bold text-zinc-900">
                  {item.price} F CFA
                </td>
                <td className="p-6 pr-8 text-right">
                  <button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-all">
                    <LuMoveHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="px-8 py-6 border-t border-zinc-200 flex items-center justify-between bg-white">
          <span className="text-sm text-zinc-500">
            <span className="font-bold text-zinc-900">5</span> résultats
          </span>
          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-400 cursor-not-allowed"><LuChevronLeft className="w-5 h-5" /></button>
            <span className="text-sm font-bold text-zinc-900">Page 1</span>
            <button className="p-2 text-zinc-900 hover:bg-zinc-100 rounded-xl transition-all"><LuChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}