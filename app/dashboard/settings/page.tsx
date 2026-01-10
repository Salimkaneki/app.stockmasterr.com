"use client";

import React, { useState } from "react";
import {
  LuSettings,
  LuSave,
  LuDownload,
  LuStore,
  LuCreditCard,
  LuTruck,
  LuBell,
  LuShield,
  LuChevronRight
} from "react-icons/lu";
import { Input, Select, FileInput, Textarea, Checkbox } from "../../../components/ui";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Général");

  // Données d'exemple pour les paramètres
  const settingsData = [
    {
      category: "Informations générales",
      items: [
        { label: "Nom de la boutique", value: "Ma Boutique", type: "text" },
        { label: "Email de contact", value: "contact@boutique.com", type: "email" },
        { label: "Téléphone", value: "+225 01 02 03 04 05", type: "tel" },
        { label: "Adresse", value: "Abidjan, Côte d'Ivoire", type: "text" }
      ]
    },
    {
      category: "Paramètres de paiement",
      items: [
        { label: "Devise", value: "FCFA", type: "select" },
        { label: "Méthode de paiement", value: "Orange Money, Wave, Carte", type: "text" },
        { label: "TVA", value: "18%", type: "number" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-zinc-900">

      {/* HEADER MINIMALISTE */}
      <div className="border-b border-zinc-100 px-8 py-10">
        <div className="max-w-350 mx-auto flex justify-between items-end">
          <div>
            <h1 className="text-xl font-bold tracking-tight font-['Google_Sans']">Paramètres</h1>
            <p className="text-zinc-400 text-sm mt-1 font-['Google_Sans']">Configuration de votre boutique en ligne.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-['Google_Sans']">
              <LuDownload className="w-4 h-4" />
              Exporter config
            </button>
            <button className="bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2 font-['Google_Sans']">
              <LuSave className="w-4 h-4" />
              Sauvegarder
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-8 mt-12">

        {/* ONGLET DE PARAMÈTRES */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-8">
            {[
              { key: "Général", icon: LuStore },
              { key: "Paiement", icon: LuCreditCard },
              { key: "Livraison", icon: LuTruck },
              { key: "Notifications", icon: LuBell },
              { key: "Sécurité", icon: LuShield }
            ].map(({ key, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-sm font-bold pb-4 -mb-4.25 transition-colors relative font-['Google_Sans'] flex items-center gap-2 ${
                  activeTab === key ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                {key}
                {activeTab === key && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900" />}
              </button>
            ))}
          </div>

          <div className="relative group">
            <LuSettings className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-900 transition-colors w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher un paramètre..."
              className="pl-6 pr-4 py-1 text-sm outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all font-['Google_Sans']"
            />
          </div>
        </div>

        {/* CONTENU DES PARAMÈTRES */}
        <div className="space-y-8">

          {/* Section Informations générales */}
          <div className="bg-zinc-50/80 rounded-2xl border border-zinc-200 p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-6 font-['Google_Sans'] flex items-center gap-3">
              <LuStore className="w-5 h-5 text-zinc-600" />
              Informations générales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nom de la boutique"
                defaultValue="Ma Boutique"
                placeholder="Entrez le nom de votre boutique"
              />
              <Input
                label="Email de contact"
                type="email"
                defaultValue="contact@boutique.com"
                placeholder="contact@exemple.com"
              />
              <Input
                label="Téléphone"
                type="tel"
                defaultValue="+225 01 02 03 04 05"
                placeholder="+225 XX XX XX XX XX"
              />
              <Input
                label="Adresse"
                defaultValue="Abidjan, Côte d'Ivoire"
                placeholder="Votre adresse complète"
              />
            </div>
          </div>

          {/* Section Paramètres de paiement */}
          <div className="bg-zinc-50/80 rounded-2xl border border-zinc-200 p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-6 font-['Google_Sans'] flex items-center gap-3">
              <LuCreditCard className="w-5 h-5 text-zinc-600" />
              Paramètres de paiement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Devise"
                options={[
                  { value: "FCFA", label: "FCFA (Franc CFA)" },
                  { value: "EUR", label: "EUR (Euro)" },
                  { value: "USD", label: "USD (Dollar)" }
                ]}
                defaultValue="FCFA"
              />
              <Input
                label="TVA (%)"
                type="number"
                defaultValue="18"
                placeholder="0"
              />
              <Input
                label="Frais de port (FCFA)"
                type="number"
                defaultValue="2500"
                placeholder="0"
              />
            </div>
          </div>

          {/* Section Logo et médias */}
          <div className="bg-zinc-50/80 rounded-2xl border border-zinc-200 p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-6 font-['Google_Sans'] flex items-center gap-3">
              <LuStore className="w-5 h-5 text-zinc-600" />
              Logo et médias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileInput
                label="Logo de la boutique"
                accept="image/*"
                maxSize={2}
                helperText="Format recommandé : PNG ou JPG, 200x200px max"
              />
              <FileInput
                label="Image de couverture"
                accept="image/*"
                maxSize={5}
                helperText="Format recommandé : JPG, max 5MB"
              />
            </div>
          </div>

          {/* Section Notifications */}
          <div className="bg-zinc-50/80 rounded-2xl border border-zinc-200 p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-6 font-['Google_Sans'] flex items-center gap-3">
              <LuBell className="w-5 h-5 text-zinc-600" />
              Notifications
            </h2>
            <div className="space-y-4">
              <Checkbox
                label="Notifications par email pour les nouvelles commandes"
                defaultChecked={true}
              />
              <Checkbox
                label="Alertes de stock faible"
                defaultChecked={true}
              />
              <Checkbox
                label="Rapports hebdomadaires"
                defaultChecked={false}
              />
              <Checkbox
                label="Notifications de paiement"
                defaultChecked={true}
              />
            </div>
          </div>

          {/* Section Description */}
          <div className="bg-zinc-50/80 rounded-2xl border border-zinc-200 p-8">
            <h2 className="text-lg font-bold text-zinc-900 mb-6 font-['Google_Sans'] flex items-center gap-3">
              <LuStore className="w-5 h-5 text-zinc-600" />
              Description de la boutique
            </h2>
            <Textarea
              label="Description"
              placeholder="Décrivez votre boutique en quelques mots..."
              rows={4}
              helperText="Cette description sera affichée sur votre page d'accueil"
            />
          </div>

        </div>

        {/* FOOTER AVEC STATUT */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
            <div className="flex gap-12">
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Dernière sauvegarde</p>
                    <p className="text-zinc-900 text-sm font-medium font-['Google_Sans']">10 Jan. 2026 - 14:30</p>
                </div>
                <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Statut</p>
                    <span className="px-2.5 py-1 rounded-full text-xs font-black border uppercase tracking-widest bg-emerald-50 text-emerald-700 border-emerald-100 font-['Google_Sans']">
                      Actif
                    </span>
                </div>
            </div>
            <div className="text-xs font-['Google_Sans']">
                Configuration boutique v2.1
            </div>
        </div>
      </div>
    </div>
  );
}