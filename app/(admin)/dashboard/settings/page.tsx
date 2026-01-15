"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Save,
  Download,
  Search,
  Store,
  CreditCard,
  Truck,
  Bell,
  Shield,
  Image,
  Settings,
  Check,
  TriangleAlert,
  Lock
} from "lucide-react";
import { Input, Select, FileInput, Checkbox } from "../../../../components/ui";
import { PageHeader } from "../../../../components/ui";
import { ActionButton } from "../../../../components/ui";
import { PageLayout } from "../../../../components/ui";

interface KPICardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: React.ComponentType<{ className?: string }>;
  index?: number;
}

const KPICard = ({ title, value, trend, icon: Icon, index = 0 }: KPICardProps) => {
  const isPositive = trend > 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group py-2"
    >
      <div className="flex items-center gap-2 mb-4 text-zinc-400">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-4 h-4" />
        </motion.div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{title}</span>
      </div>
      <div className="flex items-baseline gap-3">
        <motion.h3
          className="text-4xl font-medium font-mono tracking-tighter text-zinc-900"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {value}
        </motion.h3>
        <motion.div
          className={`flex items-center text-[11px] font-bold ${isPositive ? "text-emerald-500" : "text-rose-500"}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {isPositive ? "+" : ""}{trend}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Général");
  const [currency, setCurrency] = useState("FCFA");

  const tabs = [
    { key: "Général", icon: Store },
    { key: "Paiement", icon: CreditCard },
    { key: "Livraison", icon: Truck },
    { key: "Notifications", icon: Bell },
    { key: "Sécurité", icon: Shield }
  ];

  return (
    <PageLayout>

      <PageHeader
        title="Paramètres"
        description="Configuration globale de votre écosystème."
      >
        <div className="flex gap-3">
          <ActionButton variant="outline" size="sm" icon={<Download className="w-4 h-4" />}>
            Exporter
          </ActionButton>
          <ActionButton variant="primary" size="sm" icon={<Save className="w-4 h-4" />}>
            Sauvegarder
          </ActionButton>
        </div>
      </PageHeader>

      {/* KPI CARDS */}
      <div className="border-b border-zinc-100 bg-white">
        <div className="max-w-350 mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <KPICard title="Paramètres" value="87%" trend={5.2} icon={Settings} index={0} />
            <KPICard title="Synchronisé" value="100%" trend={0} icon={Check} index={1} />
            <KPICard title="Alertes" value="3" trend={-25} icon={TriangleAlert} index={2} />
            <KPICard title="Sécurité" value="A+" trend={10} icon={Lock} index={3} />
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-8 mt-12">
        
        {/* FILTRES DISCRETS (TABS - Identique à Facturation) */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-zinc-100 pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex gap-8">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-base font-bold pb-4 -mb-4.25 transition-colors relative font-['Google_Sans'] flex items-center gap-2 ${
                  activeTab === tab.key ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  animate={{
                    rotate: activeTab === tab.key ? 360 : 0,
                    scale: activeTab === tab.key ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <tab.icon className="w-4 h-4" />
                </motion.div>
                {tab.key}
                {activeTab === tab.key && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900"
                    layoutId="activeTab"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          <div className="relative group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-900 transition-colors w-4 h-4" />
            <input 
              type="text" 
              placeholder="Rechercher un réglage..." 
              className="pl-6 pr-4 py-2 text-base outline-none bg-transparent placeholder:text-zinc-300 w-48 focus:w-64 transition-all font-['Google_Sans']"
            />
          </div>
        </motion.div>

        {/* CONTENU DES PARAMÈTRES (Aéré et Propre) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-w-4xl space-y-16"
          >
          
          {activeTab === "Général" && (
            <>
              <section className="space-y-8">
                <div>
                  <h3 className="text-base font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Identité Boutique</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input label="Nom commercial" defaultValue="Ma Boutique" placeholder="Ex: Sync Studio" />
                    <Input label="Email de contact" type="email" defaultValue="contact@boutique.com" />
                    <Input label="Téléphone" type="tel" defaultValue="+225 01 02 03 04" />
                    <Input label="Localisation" defaultValue="Abidjan, Côte d'Ivoire" />
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-50">
                  <h3 className="text-base font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Visuels</h3>
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
                <h3 className="text-base font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Configuration Financière</h3>
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
                <h3 className="text-base font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Méthodes de Paiement</h3>
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
              <h3 className="text-base font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Préférences d&apos;alertes</h3>
              {[
                { title: "Commandes clients", desc: "Recevoir un mail pour chaque vente", active: true },
                { title: "Stocks", desc: "Alerte automatique si rupture proche", active: true },
                { title: "Newsletter", desc: "Rapports hebdomadaires d'activité", active: false }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-zinc-100 bg-zinc-50/30">
                  <div>
                    <p className="font-bold text-zinc-900 font-['Google_Sans']">{item.title}</p>
                    <p className="text-sm text-zinc-400 font-['Google_Sans']">{item.desc}</p>
                  </div>
                  <button className={`w-10 h-6 rounded-full relative p-1 transition-all ${item.active ? 'bg-zinc-900' : 'bg-zinc-200'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'translate-x-4' : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </section>
          )}
        </motion.div>
      </AnimatePresence>

        {/* FOOTER DE PAGE (KPIs/Statut - Identique à Inventaire) */}
        <div className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
            <div className="flex gap-12">
                <div>
                  <p className="text-base font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Dernière Modif</p>
                  <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter">10.01.26</p>
                </div>
                <div>
                  <p className="text-base font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Serveur</p>
                  <p className="text-zinc-900 text-2xl font-mono font-medium tracking-tighter italic">Stable</p>
                </div>
                <div>
                  <p className="text-base font-bold uppercase tracking-widest mb-1 font-['Google_Sans']">Statut Sync</p>
                  <p className="text-emerald-600 text-2xl font-mono font-bold tracking-tighter">100%</p>
                </div>
            </div>
            <div className="text-xs font-['Google_Sans']">
                Sync OS // v2.1.0
            </div>
        </div>
      </div>
    </PageLayout>
  );
}