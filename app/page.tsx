"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LuArrowRight, 
  LuSmartphone, LuLayers, LuArrowUpRight, LuCheck, 
  LuScanBarcode, LuPrinter, LuWifi, LuGlobe, LuChevronDown, LuPlay, LuCreditCard 
} from "react-icons/lu";

export default function LandingPage() {
  // Pour l'interactivité des FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* --- 1. NAVBAR (Sticky & Glass) --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 fixed w-full top-0 bg-white/80 backdrop-blur-xl z-50 border-b border-zinc-100/50 transition-all">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">S.</span>
            </div>
            <span className="text-sm font-black uppercase tracking-[0.2em]">Studio</span>
        </div>
        
        <div className="hidden lg:flex gap-10">
            {["Fonctionnalités", "Matériel", "Tarifs", "Ressources"].map(item => (
                <Link key={item} href="#" className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors">
                    {item}
                </Link>
            ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="hidden md:block text-[11px] font-bold uppercase tracking-widest hover:text-zinc-600">Connexion</Link>
          <Link href="/auth/register" className="bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-200 transition-all flex items-center gap-2">
            Essai gratuit <LuArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </nav>

      <main>
        
        {/* --- 2. HERO SECTION (Impact Visuel) --- */}
        <section className="pt-40 pb-24 px-6 md:px-12 max-w-350 mx-auto">
            <div className="flex flex-col items-center text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Nouvelle version 2.0 disponible</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-black tracking-tightest leading-[0.9] mb-8 max-w-5xl">
                    L'OS de votre <br/>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-600">commerce physique.</span>
                </h1>
                
                <p className="max-w-xl text-lg text-zinc-500 font-medium font-['Google_Sans'] leading-relaxed mb-10">
                    Une suite unifiée pour gérer vos stocks, synchroniser vos ventes et piloter votre croissance. Sans le chaos.
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <button className="bg-zinc-900 text-white h-14 px-10 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-zinc-200/50">
                        Commencer maintenant
                    </button>
                    <button className="bg-white border border-zinc-200 text-zinc-900 h-14 px-10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
                        <LuPlay className="w-4 h-4" /> Voir la démo
                    </button>
                </div>
            </div>

            {/* VISUEL HERO : DASHBOARD FLOTTANT */}
            <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-2 md:p-4 shadow-2xl shadow-zinc-200/50">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white via-transparent to-transparent z-10 opacity-50" />
                <div className="bg-white rounded-xl border border-zinc-100 overflow-hidden aspect-video md:aspect-21/9 relative">
                    {/* Simulation UI Header */}
                    <div className="h-12 border-b border-zinc-100 flex items-center px-6 justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-400/20 border border-rose-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400" />
                        </div>
                        <div className="h-2 w-32 bg-zinc-100 rounded-full" />
                    </div>
                    {/* Simulation UI Body */}
                    <div className="p-8 grid grid-cols-12 gap-8">
                        <div className="col-span-3 space-y-4">
                            <div className="h-32 bg-zinc-50 rounded-xl border border-zinc-100" />
                            <div className="h-32 bg-zinc-50 rounded-xl border border-zinc-100" />
                        </div>
                        <div className="col-span-9 bg-zinc-50 rounded-xl border border-zinc-100 h-full relative overflow-hidden">
                             {/* Fausse courbe */}
                             <svg className="absolute bottom-0 left-0 w-full h-32 text-zinc-200" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 20 L0 15 Q20 5 40 12 T80 8 T100 15 L100 20 Z" fill="currentColor" />
                             </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 3. SOCIAL PROOF (Logos) --- */}
        <section className="py-12 border-y border-zinc-100 bg-zinc-50/30">
            <div className="max-w-350 mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale">
                 {["Maison K.", "Atelier Noir", "Concept Store", "Lomé Retail", "Urban S."].map(brand => (
                     <span key={brand} className="text-xl md:text-2xl font-black tracking-tighter font-serif">{brand}</span>
                 ))}
            </div>
        </section>

        {/* --- 4. FEATURES BENTO GRID (Le Cœur) --- */}
        <section className="py-32 px-6 md:px-12 max-w-350 mx-auto">
            <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-black tracking-tightest mb-4">Tout est connecté.</h2>
                <p className="text-zinc-500 max-w-lg">Fini les fichiers Excel dispersés. Studio centralise tout.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-150">
                
                {/* CARTE 1 : INVENTAIRE (Grand) */}
                <div className="md:col-span-2 bg-zinc-50 rounded-4xl border border-zinc-100 p-10 relative overflow-hidden group">
                    <div className="relative z-10 max-w-sm">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                            <LuLayers className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight mb-2">Inventaire Intelligent</h3>
                        <p className="text-zinc-500 text-sm font-medium">Alertes de stock bas, valorisation en temps réel et historique des mouvements par produit.</p>
                    </div>
                    {/* Visualisation Inventaire */}
                    <div className="absolute right-0 bottom-0 w-1/2 h-3/4 bg-white rounded-tl-4xl border-t border-l border-zinc-200 p-6 shadow-lg group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500">
                         <div className="space-y-4">
                             {[1,2,3].map(i => (
                                 <div key={i} className="flex items-center gap-4 border-b border-zinc-50 pb-3">
                                     <div className="w-10 h-10 bg-zinc-100 rounded-md" />
                                     <div className="space-y-2 flex-1">
                                         <div className="w-20 h-2 bg-zinc-100 rounded-full" />
                                         <div className="w-10 h-2 bg-zinc-50 rounded-full" />
                                     </div>
                                     <div className="w-16 h-6 bg-emerald-50 text-emerald-600 rounded text-[10px] flex items-center justify-center font-bold">EN STOCK</div>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>

                {/* CARTE 2 : ANALYTICS (Vertical) */}
                <div className="bg-zinc-900 text-white rounded-4xl p-10 flex flex-col justify-between group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50" />
                    
                    <div>
                        <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                            <LuArrowUpRight className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight mb-2">Ventes Live</h3>
                        <p className="text-zinc-400 text-sm font-medium">Suivez votre chiffre d'affaires à la seconde près.</p>
                    </div>
                    
                    <div className="mt-8">
                        <p className="text-5xl font-mono font-black tracking-tighter mb-2">1.4M <span className="text-base text-zinc-500 align-top">CFA</span></p>
                        <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-white rounded-full" />
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2 text-right">+12% vs hier</p>
                    </div>
                </div>

                {/* CARTE 3 : MOBILE (Carré) */}
                <div className="bg-white border border-zinc-200 rounded-4xl p-8 flex flex-col justify-center items-center text-center group">
                    <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <LuSmartphone className="w-8 h-8 text-zinc-900" />
                    </div>
                    <h3 className="text-lg font-black tracking-tight">Pocket Shop</h3>
                    <p className="text-zinc-500 text-xs mt-2 px-4">Gérez votre boutique depuis votre iPhone ou Android.</p>
                </div>

                {/* CARTE 4 : E-COMMERCE (Large) */}
                <div className="md:col-span-2 bg-zinc-50 rounded-4xl border border-zinc-100 p-10 flex items-center justify-between relative overflow-hidden">
                    <div className="relative z-10 max-w-md">
                         <div className="flex items-center gap-3 mb-4">
                             <LuGlobe className="w-5 h-5" />
                             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Omnicanal</span>
                         </div>
                         <h3 className="text-2xl font-black tracking-tight mb-2">Synchronisation Web</h3>
                         <p className="text-zinc-500 text-sm font-medium">Connectez votre stock physique à votre site e-commerce. Une vente en ligne déduit le stock en magasin instantanément.</p>
                    </div>
                    <div className="hidden md:flex gap-4 opacity-50">
                        <div className="w-20 h-20 border border-zinc-200 rounded-xl rotate-12 bg-white" />
                        <div className="w-20 h-20 border border-zinc-200 rounded-xl -rotate-6 bg-white" />
                    </div>
                </div>
            </div>
        </section>

        {/* --- 5. HARDWARE INTEGRATION (Pragmatique) --- */}
        <section className="py-24 bg-zinc-900 text-white overflow-hidden">
            <div className="max-w-350 mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tightest">Compatible avec <br/>votre matériel.</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                        Pas besoin de tout changer. Studio s'interface avec les standards de l'industrie pour une installation plug-and-play.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                        {[
                            { icon: <LuScanBarcode />, title: "Douchettes", desc: "Scanners USB & Bluetooth" },
                            { icon: <LuPrinter />, title: "Imprimantes", desc: "Thermiques 80mm & 58mm" },
                            { icon: <LuWifi />, title: "Mode Hors-ligne", desc: "Continuez à vendre sans internet" },
                            { icon: <LuCreditCard />, title: "Tiroir Caisse", desc: "Ouverture automatique RJ11" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                    <p className="text-zinc-500 text-xs">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Illustration Hardware Stylisée */}
                <div className="relative h-125 bg-zinc-800 rounded-3xl border border-zinc-700/50 p-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
                    <div className="text-center space-y-4 opacity-50">
                        <span className="text-8xl">Hardware</span>
                        <p className="text-xs uppercase tracking-[0.5em]">Visualization</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 6. PRICING (Clarté) --- */}
        <section className="py-32 px-6 md:px-12 max-w-350 mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-black tracking-tightest mb-4">Tarifs transparents.</h2>
                <p className="text-zinc-500">Pas de frais cachés. Annulable à tout moment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* PLAN STARTER */}
                <div className="p-8 rounded-3xl border border-zinc-100 bg-white hover:border-zinc-300 transition-colors">
                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">Starter</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-black tracking-tighter">15.000</span>
                        <span className="text-xs font-bold text-zinc-400">CFA / mois</span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-8 min-h-10">Pour les petites boutiques qui se lancent.</p>
                    <button className="w-full py-3 border border-zinc-200 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-colors">Choisir Starter</button>
                    <ul className="mt-8 space-y-4">
                        {["1 Utilisateur", "Jusqu'à 100 produits", "Rapports basiques", "Support email"].map(feat => (
                            <li key={feat} className="flex items-center gap-3 text-sm text-zinc-600">
                                <LuCheck className="w-4 h-4 text-zinc-900" /> {feat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* PLAN PRO (Mis en avant) */}
                <div className="p-8 rounded-3xl border-2 border-zinc-900 bg-zinc-50 relative transform md:-translate-y-4 shadow-2xl shadow-zinc-200/50">
                    <div className="absolute top-0 right-0 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl rounded-tr-xl">Populaire</div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900 mb-4">Pro</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-black tracking-tighter">35.000</span>
                        <span className="text-xs font-bold text-zinc-400">CFA / mois</span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-8 min-h-10">L'outil complet pour les commerces en croissance.</p>
                    <button className="w-full py-3 bg-zinc-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-colors">Essayer 14 jours</button>
                    <ul className="mt-8 space-y-4">
                        {["Utilisateurs illimités", "Produits illimités", "Analytiques avancées", "Gestion multi-stocks", "Support prioritaire"].map(feat => (
                            <li key={feat} className="flex items-center gap-3 text-sm font-bold text-zinc-900">
                                <LuCheck className="w-4 h-4" /> {feat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* PLAN ENTREPRISE */}
                <div className="p-8 rounded-3xl border border-zinc-100 bg-white hover:border-zinc-300 transition-colors">
                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">Réseau</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-black tracking-tighter">Sur mesure</span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-8 min-h-10">Pour les franchises et multi-boutiques.</p>
                    <button className="w-full py-3 border border-zinc-200 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-colors">Nous contacter</button>
                    <ul className="mt-8 space-y-4">
                        {["API Dédiée", "Manager de compte", "Formation sur site", "SLA 99.9%"].map(feat => (
                            <li key={feat} className="flex items-center gap-3 text-sm text-zinc-600">
                                <LuCheck className="w-4 h-4 text-zinc-900" /> {feat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* --- 7. FAQ (Accordion Minimaliste) --- */}
        <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto border-t border-zinc-100">
            <h2 className="text-3xl font-black tracking-tight mb-12 text-center">Questions fréquentes</h2>
            <div className="space-y-4">
                {[
                    { q: "Puis-je utiliser mon matériel existant ?", a: "Oui, Studio est compatible avec 90% des douchettes et imprimantes du marché (Epson, Star, Zebra...)." },
                    { q: "Est-ce que ça marche sans internet ?", a: "Absolument. Vous pouvez continuer à encaisser. Les données se synchronisent dès le retour de la connexion." },
                    { q: "Comment se passe l'installation ?", a: "C'est une application web. Rien à installer sur PC/Mac. Pour mobile, l'app est sur les stores." }
                ].map((item, i) => (
                    <div key={i} className="border-b border-zinc-100 pb-4">
                        <button onClick={() => toggleFaq(i)} className="w-full flex justify-between items-center text-left py-2 hover:text-zinc-600 transition-colors">
                            <span className="font-bold text-lg">{item.q}</span>
                            <LuChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                        </button>
                        {openFaq === i && (
                            <p className="text-zinc-500 mt-2 leading-relaxed animate-fade-in text-sm font-medium">
                                {item.a}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>

        {/* --- 8. CTA FINAL (Footer Call) --- */}
        <section className="mx-6 md:mx-12 mb-12 bg-zinc-900 rounded-[3rem] py-32 px-6 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-black tracking-tightest leading-none mb-8">
                    Votre boutique mérite mieux qu'un cahier.
                </h2>
                <div className="flex justify-center gap-6">
                    <Link href="/register" className="bg-white text-zinc-900 px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">
                        Créer mon compte
                    </Link>
                </div>
                <p className="mt-8 text-zinc-500 text-xs font-bold uppercase tracking-widest">Aucune carte bancaire requise</p>
            </div>
        </section>

      </main>

      {/* --- 9. FOOTER --- */}
      <footer className="bg-white pt-20 pb-10 px-6 md:px-12 border-t border-zinc-100">
        <div className="max-w-350 mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-zinc-900 rounded-md" />
                    <span className="font-black uppercase tracking-widest text-sm">Studio</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    Plateforme de gestion nouvelle génération pour le retail moderne en Afrique.
                </p>
            </div>
            
            {[
                { title: "Produit", links: ["Fonctionnalités", "Matériel", "Tarifs", "Mises à jour"] },
                { title: "Support", links: ["Centre d'aide", "API Docs", "Statut système", "Contact"] },
                { title: "Légal", links: ["Confidentialité", "CGV", "Mentions légales"] }
            ].map((col, i) => (
                <div key={i}>
                    <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-zinc-900">{col.title}</h4>
                    <ul className="space-y-4">
                        {col.links.map(link => (
                            <li key={link}>
                                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm font-medium transition-colors">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        
        <div className="max-w-350 mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-50 text-xs font-bold text-zinc-400 uppercase tracking-widest">
            <p>© 2026 Studio System Inc.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <span>Twitter</span>
                <span>Instagram</span>
                <span>LinkedIn</span>
            </div>
        </div>
      </footer>

    </div>
  );
}