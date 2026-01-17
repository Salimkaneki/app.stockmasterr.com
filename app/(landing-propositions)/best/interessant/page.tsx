"use client";

import React from "react";
import { 
  LuArrowUpRight, LuCheck, LuFingerprint, 
  LuBox, LuActivity, LuTerminal, LuShieldCheck, 
  LuFileSpreadsheet, LuLayers
} from "react-icons/lu";

export default function EnterpriseSwissLanding() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* --- 1. OVERLAY GRID (Décoration technique subtile) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      {/* --- 2. NAVIGATION ÉPURÉE --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-6 h-6 bg-zinc-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="text-sm font-black uppercase tracking-[0.4em]">Studio<span className="font-light text-zinc-400">OS</span></span>
            </div>
            <div className="hidden lg:flex gap-10">
              {["Système", "Intégrations", "Sécurité", "Support"].map(item => (
                <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:block text-[10px] font-bold text-zinc-300 uppercase tracking-widest">v4.0.2 Stable</span>
            <button className="bg-zinc-900 text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95">
              Accès Développeur
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- 3. HERO (IMPACT ÉDITORIAL) --- */}
        <section className="pt-32 pb-40 px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-3 mb-12">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Système opérationnel • 100% Uptime</span>
                </div>
                <h1 className="text-7xl md:text-[120px] font-light tracking-tighter leading-[0.85] mb-16 text-zinc-900">
                  La gestion sans <br/>
                  <span className="font-medium">compromis.</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                   <button className="group flex items-center gap-4 bg-zinc-900 text-white pl-8 pr-4 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-700 transition-all">
                      Débuter le déploiement
                      <div className="w-8 h-8 bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                         <LuArrowUpRight className="w-4 h-4" />
                      </div>
                   </button>
                   <p className="max-w-xs text-xs text-zinc-400 font-medium leading-relaxed uppercase tracking-wider">
                     Propulsez votre infrastructure retail avec la suite logicielle la plus robuste du marché.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. DATA VISUALIZATION (TECHNICAL LOOK) --- */}
        <section className="px-8 pb-32">
            <div className="max-w-[1400px] mx-auto border border-zinc-100 bg-zinc-50/30 p-4">
                <div className="bg-white border border-zinc-100 p-8 grid md:grid-cols-3 gap-12">
                    {[
                        { icon: <LuActivity />, title: "Temps Réel", desc: "Flux de données synchronisé à 50ms sur l'ensemble de vos terminaux." },
                        { icon: <LuTerminal />, title: "Interface POS", desc: "Optimisé pour la rapidité d'exécution. Moins de 3 clics par vente." },
                        { icon: <LuLayers />, title: "Multi-couches", desc: "Gestion complexe des stocks, des variantes et des entrepôts." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="mb-6 text-zinc-900">{item.icon}</div>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4">{item.title}</h3>
                            <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- 5. CORE ARCHITECTURE (The "Serious" part) --- */}
        <section className="py-32 bg-zinc-900 text-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-5xl font-light tracking-tighter mb-12">Une architecture bâtie <br/> pour durer.</h2>
                        <div className="space-y-12">
                            {[
                                { t: "Sécurité Cryptographique", d: "Chiffrement AES-256 de chaque transaction bancaire et donnée client.", i: <LuFingerprint /> },
                                { t: "Redondance Géographique", d: "Vos données sont sauvegardées simultanément sur trois centres de serveurs.", i: <LuShieldCheck /> },
                                { t: "Exportation Native", d: "Compatibilité directe avec les formats Excel, PDF et systèmes comptables.", i: <LuFileSpreadsheet /> }
                            ].map((feat, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700 transition-colors group-hover:border-zinc-500">
                                        {feat.i}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-2">{feat.t}</h4>
                                        <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-sm">{feat.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Visual: Abstract Schema */}
                    <div className="relative aspect-square bg-zinc-800/50 border border-zinc-800 flex items-center justify-center">
                         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                         <LuBox className="w-32 h-32 text-zinc-700 animate-pulse" />
                         <div className="absolute top-10 left-10 text-[10px] font-mono text-zinc-600">SYS_LOG: 200 OK</div>
                         <div className="absolute bottom-10 right-10 text-[10px] font-mono text-zinc-600">ENCRYPT_MODE: ACTIVE</div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 6. PRICING MODULAR --- */}
        <section className="py-32 px-8 max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <div>
                    <h2 className="text-4xl font-light tracking-tighter mb-4 text-zinc-900">Engagement & Licence.</h2>
                    <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest italic">Choisissez votre niveau de puissance.</p>
                </div>
                <div className="h-[1px] flex-1 bg-zinc-100 mb-4 hidden md:block" />
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
                <div className="bg-white p-16">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">Édition Business</h3>
                    <div className="text-5xl font-light tracking-tighter mb-8">25.000 <span className="text-base text-zinc-300">CFA/mo</span></div>
                    <ul className="space-y-6 mb-12">
                        {["Jusqu'à 5 points de vente", "Support technique 24h/7j", "Tableau de bord analytics pro"].map(t => (
                            <li key={t} className="flex items-center gap-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                <LuCheck className="text-zinc-900 w-4 h-4" /> {t}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-5 bg-white border border-zinc-900 text-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-50 transition-all">S'abonner au plan</button>
                </div>
                <div className="bg-zinc-50 p-16">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">Édition Network</h3>
                    <div className="text-5xl font-light tracking-tighter mb-8 italic text-zinc-400">Custom</div>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed mb-12 max-w-xs">
                        Pour les réseaux de franchises dépassant 10 boutiques. Solution on-premise disponible.
                    </p>
                    <button className="w-full py-5 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all">Contacter Sales</button>
                </div>
            </div>
        </section>

        {/* --- 7. FINAL CALL --- */}
        <section className="py-40 text-center px-8 border-t border-zinc-100">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">Prêt pour la stabilité ?</h2>
            <button className="text-[11px] font-black uppercase tracking-[0.3em] bg-zinc-900 text-white px-12 py-6 hover:px-16 transition-all duration-500">
                Demander une démonstration privée
            </button>
        </section>

      </main>

      {/* --- 8. FOOTER TECHNIQUE --- */}
      <footer className="bg-white py-16 px-8 border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-black uppercase tracking-[0.3em]">Studio Global © 2026</div>
            <div className="flex gap-12">
                {["Privacy", "SLA", "Status", "Contact"].map(item => (
                    <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors">
                        {item}
                    </a>
                ))}
            </div>
            <div className="text-[10px] font-medium text-zinc-300 uppercase tracking-widest">Proudly engineered in Lomé</div>
        </div>
      </footer>
    </div>
  );
}