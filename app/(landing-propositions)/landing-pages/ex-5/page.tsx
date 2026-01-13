"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LuCheck, LuTrendingUp, LuBox, 
  LuSmartphone, LuCreditCard, LuZap, LuActivity, 
  LuLayoutGrid, LuChevronDown, LuUsers, LuChartBar
} from "react-icons/lu";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-blue-600 selection:text-white">
      
      {/* 1. NAVIGATION */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-zinc-100">
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-zinc-900 rounded-xs flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </div>
                <span className="text-sm font-black uppercase tracking-tighter">Studio System</span>
            </div>
            <div className="hidden lg:flex gap-6 border-l border-zinc-100 pl-6">
                {["Logiciel", "Matériel", "Tarifs", "FAQ"].map(item => (
                    <Link key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">{item}</Link>
                ))}
            </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-[11px] font-bold uppercase tracking-widest px-4">Connexion</Link>
          <Link href="/start" className="bg-blue-600 text-white px-5 py-2 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
            Démarrer
          </Link>
        </div>
      </nav>

      <main>
        
        {/* 2. HERO SECTION */}
        <section className="border-b border-zinc-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-20 flex flex-col justify-center border-r border-zinc-100">
                    <div className="inline-flex items-center gap-2 text-blue-600 mb-6">
                        <LuZap size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Disponible à Lomé</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tightest leading-[0.9] mb-8">
                        Vendre <br /> Partout <br /> <span className="text-blue-600">Facilement.</span>
                    </h1>
                    <p className="max-w-md text-xl text-zinc-500 font-medium mb-10 leading-relaxed">
                        Un système de caisse moderne qui unifie vos stocks physiques et vos ventes en ligne.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/register" className="bg-zinc-900 text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all duration-300">
                            Essai gratuit
                        </Link>
                        <Link href="#tarifs" className="text-xs font-black uppercase tracking-widest border-b-2 border-zinc-900 pb-1">
                            Voir les prix
                        </Link>
                    </div>
                </div>
                <div className="bg-zinc-50 flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
                    <div className="w-full max-w-sm bg-white shadow-2xl rounded-xl border border-zinc-200 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
                        <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Revenu mensuel</span>
                            <LuTrendingUp className="text-blue-600 w-5 h-5" />
                        </div>
                        <div className="p-8">
                            <div className="text-5xl font-black tracking-tighter mb-2 italic">1.240.500 <span className="text-lg text-zinc-300 not-italic">CFA</span></div>
                            <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-widest">
                                <LuActivity size={14} /> +12% ce mois
                            </div>
                        </div>
                        <div className="p-6 bg-zinc-50 border-t border-zinc-100">
                            <div className="flex justify-between mb-2">
                                <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest">Objectif ventes</span>
                                <span className="text-[9px] font-black text-blue-600">85%</span>
                            </div>
                            <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. LOGO CLOUD (Social Proof) */}
        <section className="py-12 border-b border-zinc-100 bg-white">
            <div className="px-6 md:px-12 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                {["MAISON K.", "URBAN STORE", "LOMÉ RETAIL", "CONCEPT A.", "B-SHOP"].map(brand => (
                    <span key={brand} className="text-lg font-black tracking-tighter italic">{brand}</span>
                ))}
            </div>
        </section>

        {/* 4. FEATURES GRID */}
        <section id="logiciel" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-zinc-100">
            {[
                { title: "Point de Vente", icon: <LuZap />, desc: "Encaissement ultra-rapide optimisé pour tablettes." },
                { title: "Stocks", icon: <LuBox />, desc: "Ajustements automatiques et alertes de rupture." },
                { title: "Paiements", icon: <LuCreditCard />, desc: "Support Flooz, T-Money et Cartes Bancaires." },
                { title: "Analytics", icon: <LuChartBar />, desc: "Suivez vos marges et vos produits phares." }
            ].map((item, i) => (
                <div key={i} className="p-12 border-r border-zinc-100 last:border-r-0 hover:bg-zinc-50 transition-colors group">
                    <div className="w-10 h-10 mb-6 text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {React.cloneElement(item.icon, { strokeWidth: 1.5, size: 32 })}
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-4">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </section>

        {/* 5. HARDWARE SECTION */}
        <section id="matériel" className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]">Infrastructure</span>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tightest leading-[0.9]">
                        Zéro configuration <br /> matérielle.
                    </h2>
                    <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                        Studio System fonctionne sur tout ce qui possède un écran. Branchez vos accessoires et vendez en 5 minutes.
                    </p>
                    <div className="grid grid-cols-2 gap-y-6 border-t border-zinc-100 pt-10">
                        {[
                            { label: "Imprimantes", val: "Epson & Star" },
                            { label: "Scanners", val: "USB / Bluetooth" },
                            { label: "Tiroirs", val: "RJ11 Standard" },
                            { label: "Offline", val: "Synchro auto" }
                        ].map(stat => (
                            <div key={stat.label}>
                                <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-1">{stat.label}</p>
                                <p className="font-bold text-sm text-zinc-900">{stat.val}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative p-12 bg-zinc-50 rounded-[3rem]">
                    <div className="relative z-10 grid grid-cols-1 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-xl flex items-center gap-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <LuSmartphone size={24} />
                            </div>
                            <div>
                                <h4 className="font-black text-[10px] uppercase tracking-widest">Mobile Ready</h4>
                                <p className="text-xs text-zinc-400">Interface optimisée pour iPhone & Android.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl flex items-center gap-6 text-white translate-x-6">
                            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-blue-400">
                                <LuLayoutGrid size={24} />
                            </div>
                            <div>
                                <h4 className="font-black text-[10px] uppercase tracking-widest">Dashboard Pro</h4>
                                <p className="text-xs text-zinc-500">Gestion centrale pour Mac et PC.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 6. PRICING TABLE */}
        <section id="tarifs" className="py-32 bg-zinc-900 text-white">
            <div className="px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-4 italic uppercase">Tarification Simple.</h2>
                    <p className="text-zinc-500 font-medium tracking-widest text-[10px] uppercase">Aucun frais caché. Annulable à tout moment.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 max-w-4xl mx-auto">
                    <div className="bg-zinc-900 p-12 space-y-8">
                        <div>
                            <h3 className="text-blue-500 font-black text-xs uppercase tracking-widest mb-4 italic">Standard</h3>
                            <div className="text-6xl font-black tracking-tighter mb-2">15.000 <span className="text-sm font-medium text-zinc-500">CFA/mois</span></div>
                            <p className="text-zinc-500 text-sm">Parfait pour une boutique unique.</p>
                        </div>
                        <ul className="space-y-4">
                            {["1 Point de vente", "Produits illimités", "Stocks auto", "Support email"].map(f => (
                                <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-300">
                                    <LuCheck className="text-blue-600" size={14} /> {f}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 bg-white text-zinc-900 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors">Choisir Standard</button>
                    </div>
                    <div className="bg-zinc-900 p-12 space-y-8 border-l border-zinc-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-blue-600 px-4 py-1 text-[8px] font-black uppercase tracking-widest">Recommandé</div>
                        <div>
                            <h3 className="text-blue-500 font-black text-xs uppercase tracking-widest mb-4 italic">Business</h3>
                            <div className="text-6xl font-black tracking-tighter mb-2">35.000 <span className="text-sm font-medium text-zinc-500">CFA/mois</span></div>
                            <p className="text-zinc-500 text-sm">Multi-boutiques et analytiques avancés.</p>
                        </div>
                        <ul className="space-y-4">
                            {["3 Points de vente", "Gestion Multi-stock", "Accès API", "Support prioritaire 24/7"].map(f => (
                                <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-300">
                                    <LuCheck className="text-blue-600" size={14} /> {f}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors">Démarrer l'essai pro</button>
                    </div>
                </div>
            </div>
        </section>

        {/* 7. FAQ SECTION */}
        <section id="faq" className="py-32 px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black tracking-tightest mb-12 uppercase italic text-center">Questions fréquentes</h2>
            <div className="space-y-2">
                {[
                    { q: "Puis-je utiliser le logiciel sans internet ?", a: "Oui. Studio dispose d'un mode hors-ligne. Vos ventes sont enregistrées localement et synchronisées dès que la connexion revient." },
                    { q: "Est-ce compatible avec mon imprimante ?", a: "Nous supportons 99% des imprimantes thermiques via USB, Bluetooth ou Wi-Fi." },
                    { q: "Comment se passe le paiement de l'abonnement ?", a: "Vous pouvez régler par Mobile Money (T-Money, Flooz) ou par carte bancaire directement depuis votre interface." }
                ].map((item, i) => (
                    <div key={i} className="border border-zinc-100 rounded-lg overflow-hidden transition-all">
                        <button 
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full p-6 flex justify-between items-center text-left hover:bg-zinc-50 transition-colors"
                        >
                            <span className="text-xs font-black uppercase tracking-widest">{item.q}</span>
                            <LuChevronDown className={`transition-transform text-blue-600 ${openFaq === i ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === i && (
                            <div className="p-6 pt-0 text-sm text-zinc-500 leading-relaxed font-medium">
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="bg-zinc-50 py-32 border-y border-zinc-100">
            <div className="px-6 text-center max-w-4xl mx-auto">
                <LuUsers className="text-blue-600 w-12 h-12 mx-auto mb-8" />
                <h2 className="text-4xl md:text-6xl font-black tracking-tightest mb-10 uppercase italic">
                    Rejoignez les meilleurs <br /> commerçants de <span className="text-blue-600 underline">Lomé.</span>
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/register" className="bg-blue-600 text-white px-12 py-5 text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
                        Démarrer maintenant
                    </Link>
                    <Link href="#" className="bg-white border border-zinc-200 px-12 py-5 text-xs font-black uppercase tracking-widest hover:bg-zinc-100 transition-all">
                        Prendre rendez-vous
                    </Link>
                </div>
            </div>
        </section>

      </main>

      {/* 9. FOOTER */}
      <footer className="px-12 py-16 bg-white flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="col-span-2 md:col-span-1 space-y-6">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-zinc-900 rounded-xs flex items-center justify-center">
                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-tighter">Studio System</span>
                </div>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">Infrastructure logicielle pour le commerce physique en Afrique de l'Ouest.</p>
            </div>
            {["Produit", "Société", "Ressources"].map(col => (
                <div key={col} className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">{col}</h4>
                    <ul className="space-y-2">
                        {["Lien un", "Lien deux", "Lien trois"].map(link => (
                            <li key={link} className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-blue-600 cursor-pointer">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-zinc-400">
            <p>© 2026 Studio System Inc. — All Rights Reserved</p>
            <div className="flex gap-6">
                <span className="text-blue-600 hover:underline cursor-pointer">Twitter</span>
                <span className="text-blue-600 hover:underline cursor-pointer">LinkedIn</span>
            </div>
        </div>
      </footer>

    </div>
  );
}