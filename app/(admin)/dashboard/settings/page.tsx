"use client";

import React, { useState } from "react";
import {
  LuSave,
  LuDownload,
  LuSearch,
  LuStore,
  LuCreditCard,
  LuTruck,
  LuBell,
  LuShield,
  LuImage
} from "react-icons/lu";
import { Input, Select, FileInput, Checkbox } from "../../../../components/ui";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Général");
  const [currency, setCurrency] = useState("FCFA");

  const tabs = [
    { key: "Général", icon: LuStore },
    { key: "Paiement", icon: LuCreditCard },
    { key: "Livraison", icon: LuTruck },
    { key: "Notifications", icon: LuBell },
    { key: "Sécurité", icon: LuShield }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">
      
      {/* HEADER MINIMALISTE (Identique à Clients/Inventaire) */}
      <div className="border-b border-zinc-100 px-8 py-10">
        <div className="max-w-350 mx-auto flex justify-between items-end">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Paramètres</h1>
            <p className="text-zinc-400 text-sm mt-1 font-['Google_Sans']">Configuration globale de votre écosystème.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-['Google_Sans']">
              <LuDownload className="w-4 h-4" />
              Exporter Config
            </button>
            <button className="bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2 font-['Google_Sans']">
              <LuSave className="w-4 h-4" />
              Sauvegarder
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-8 mt-12">
        
        {/* FILTRES DISCRETS (TABS - Identique à Facturation) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-sm font-bold pb-4 -mb-4.25 transition-colors relative font-['Google_Sans'] flex items-center gap-2 ${
                  activeTab === tab.key ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.key}
                {activeTab === tab.key && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900" />}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <LuSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-900 transition-colors w-4 h-4" />
            <input 
              type="text" 
              placeholder="Rechercher un réglage..." 
              className="pl-6 pr-4 py-1 text-sm outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all font-['Google_Sans']"
            />
          </div>
        </div>

        {/* CONTENU DES PARAMÈTRES (Aéré et Propre) */}
        <div className="max-w-4xl space-y-16 animate-in fade-in duration-500">
          
          {activeTab === "Général" && (
            <>
              <section className="space-y-8">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Identité Boutique</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input label="Nom commercial" defaultValue="Ma Boutique" placeholder="Ex: Sync Studio" />
                    <Input label="Email de contact" type="email" defaultValue="contact@boutique.com" />
                    <Input label="Téléphone" type="tel" defaultValue="+225 01 02 03 04" />
                    <Input label="Localisation" defaultValue="Abidjan, Côte d'Ivoire" />
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-50">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Visuels</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FileInput label="Logo Principal" maxSize={2} helperText="PNG transparent de préférence" />
                    <FileInput label="Bannière" maxSize={5} />
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "Paiement" && (
            <section className="space-y-8">
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Configuration Financière</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Select
                    label="Devise de référence"
                    options={[
                      { value: "FCFA", label: "Franc CFA (XOF)" },
                      { value: "EUR", label: "Euro (€)" },
                      { value: "USD", label: "Dollar ($)" }
                    ]}
                    value={currency}
                    onChange={setCurrency}
                  />
                  <Input label="TVA (%)" type="number" defaultValue="18" />
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-50">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Méthodes de Paiement</h3>
                <div className="space-y-4">
                  <Checkbox label="Activer Orange Money & Wave" defaultChecked />
                  <Checkbox label="Paiement par carte bancaire (Stripe)" />
                  <Checkbox label="Paiement à la livraison" defaultChecked />
                </div>
              </div>
            </section>
          )}

          {activeTab === "Notifications" && (
            <section className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Préférences d'alertes</h3>
              {[
                { title: "Commandes clients", desc: "Recevoir un mail pour chaque vente", active: true },
                { title: "Stocks", desc: "Alerte automatique si rupture proche", active: true },
                { title: "Newsletter", desc: "Rapports hebdomadaires d'activité", active: false }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-zinc-100 bg-zinc-50/30">
                  <div>
                    <p className="font-bold text-zinc-900 font-['Google_Sans']">{item.title}</p>
                    <p className="text-xs text-zinc-400 font-['Google_Sans']">{item.desc}</p>
                  </div>
                  <button className={`w-10 h-6 rounded-full relative p-1 transition-all ${item.active ? 'bg-zinc-900' : 'bg-zinc-200'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'translate-x-4' : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* FOOTER DE PAGE (KPIs/Statut - Identique à Inventaire) */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
            <div className="flex gap-12">
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Dernière Modif</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter">10.01.26</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Serveur</p>
                    <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter italic">Stable</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Statut Sync</p>
                    <p className="text-emerald-600 text-2xl font-mono font-bold tracking-tighter">100%</p>
                </div>
            </div>
            <div className="text-xs font-['Google_Sans']">
                Sync OS // v2.1.0
            </div>
        </div>
      </div>
    </div>
  );
}