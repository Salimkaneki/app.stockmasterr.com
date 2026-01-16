"use client";

import React, { useState } from "react";
import { 
  LuShoppingCart, 
  LuPlus, 
  LuUser, 
  LuCreditCard, 
  LuBanknote,
  LuSearch,
  LuTicket
} from "react-icons/lu";

// Import de vos composants UI
import { Input, Radio } from "@/components/ui";
import { PageHeader } from "@/components/ui/layout";

export default function NewSalesPage() {
  const [paymentMethod, setPaymentMethod] = useState("Espèces");
  
  // Simulation d'un panier (À lier avec votre logique d'état plus tard)
  const cart = [
    { id: 1, name: "Clavier Mécanique RGB", qty: 1, price: 45000 },
    { id: 2, name: "Souris Sans Fil", qty: 2, price: 15000 },
  ];

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.18; // Exemple TVA 18%
  const total = subtotal + tax;

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      {/* HEADER */}
      <PageHeader
        title="Nouvelle Vente"
        description="Enregistrer une transaction en temps réel."
        backLink={{
          href: "/sales",
          label: "Retour aux ventes"
        }}
      >
        <button className="bg-zinc-900 text-white px-8 py-2.5 rounded-lg text-base font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2">
          <LuShoppingCart className="w-4 h-4" />
          Finaliser la vente
        </button>
      </PageHeader>

      <div className="max-w-5xl mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLONNE GAUCHE : PANIER ET SÉLECTION */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* SÉLECTION PRODUIT */}
            <section className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-50">
                <div className="flex items-center gap-2">
                  <LuSearch className="w-4 h-4 text-zinc-400" />
                  <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Ajouter des articles</h2>
                </div>
                <span className="text-[10px] bg-zinc-100 px-2 py-0.5 rounded font-bold uppercase">Scanner actif (F2)</span>
              </div>
              
              <div className="relative">
                <Input 
                  placeholder="Rechercher par nom ou scanner le code-barres..." 
                  className="pl-10"
                />
                <LuPlus className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 cursor-pointer hover:text-zinc-900" />
              </div>

              {/* LISTE DES ARTICLES DANS LE PANIER */}
              <div className="space-y-1">
                <div className="grid grid-cols-5 text-[11px] font-black uppercase text-zinc-400 px-4 mb-2 tracking-widest">
                  <div className="col-span-2">Article</div>
                  <div className="text-center">Quantité</div>
                  <div className="text-right">Prix</div>
                  <div className="text-right">Total</div>
                </div>
                
                {cart.map((item) => (
                  <div key={item.id} className="grid grid-cols-5 items-center p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                    <div className="col-span-2 font-bold text-sm">{item.name}</div>
                    <div className="flex justify-center items-center gap-3">
                      <button className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-100">-</button>
                      <span className="font-mono font-bold text-sm">{item.qty}</span>
                      <button className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-100">+</button>
                    </div>
                    <div className="text-right text-zinc-500 text-sm">{item.price.toLocaleString()} F</div>
                    <div className="text-right font-bold text-sm">{(item.price * item.qty).toLocaleString()} F</div>
                  </div>
                ))}

                {cart.length === 0 && (
                  <div className="py-12 text-center border-2 border-dashed border-zinc-100 rounded-2xl">
                    <p className="text-zinc-400 text-sm">Le panier est vide</p>
                  </div>
                )}
              </div>
            </section>

            {/* INFORMATIONS CLIENT (Optionnel) */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuUser className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Client (Optionnel)</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Nom du client" startIcon={<LuUser className="w-4 h-4" />} />
                <Input placeholder="N° de téléphone" />
              </div>
            </section>
          </div>

          {/* COLONNE DROITE : PAIEMENT & TOTAL */}
          <div className="space-y-8">
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-50">
                <LuCreditCard className="w-4 h-4 text-zinc-400" />
                <h2 className="font-bold text-sm uppercase tracking-widest text-zinc-500">Paiement</h2>
              </div>
              
              <div className="space-y-3">
                <Radio 
                  label={<div className="flex items-center gap-2"><LuBanknote className="w-4 h-4"/> Espèces</div>} 
                  checked={paymentMethod === "Espèces"} 
                  onChange={() => setPaymentMethod("Espèces")} 
                />
                <Radio 
                  label={<div className="flex items-center gap-2"><LuCreditCard className="w-4 h-4"/> Carte / TPE</div>} 
                  checked={paymentMethod === "Carte"} 
                  onChange={() => setPaymentMethod("Carte")} 
                />
                <Radio 
                  label={<div className="flex items-center gap-2"><LuTicket className="w-4 h-4"/> Mobile Money</div>} 
                  checked={paymentMethod === "Momo"} 
                  onChange={() => setPaymentMethod("Momo")} 
                />
              </div>
            </section>

            {/* CARD DE TOTAL SOMBRE */}
            <div className="bg-zinc-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Résumé de la vente</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500">Sous-total</span>
                    <span className="font-mono">{subtotal.toLocaleString()} F CFA</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500">Remise / Taxe</span>
                    <span className="font-mono text-rose-400">+{tax.toLocaleString()} F</span>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-6">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Total à payer</span>
                    <span className="text-3xl font-mono font-medium text-emerald-400 tracking-tighter">
                      {total.toLocaleString()} F
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Effet visuel discret en arrière-plan */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
            </div>

            <div className="p-4 border border-zinc-100 rounded-2xl">
               <button className="w-full text-zinc-400 text-xs font-medium hover:text-zinc-900 transition-colors flex items-center justify-center gap-2">
                 <LuPlus className="w-3 h-3" /> Appliquer un code promo
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}