"use client";

import React from "react";
import Link from "next/link";
import { 
  LuArrowRight, LuCircleCheck, LuLayoutDashboard, 
  LuSmartphone, LuBox, LuTrendingUp, LuShieldCheck 
} from "react-icons/lu";

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* 1. NAVBAR : CAPSULE FLOTTANTE */}
      <div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4">
          <nav className="bg-zinc-900/90 backdrop-blur-md text-white px-2 py-2 rounded-full flex items-center gap-1 shadow-2xl shadow-zinc-400/20 ring-1 ring-white/10">
            <div className="px-6 py-2 font-black uppercase tracking-[0.2em] text-xs">Studio.</div>
            <div className="hidden md:flex items-center">
                {["Produit", "Matériel", "Tarifs"].map(item => (
                    <Link key={item} href="#" className="px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                        {item}
                    </Link>
                ))}
            </div>
            <Link href="/dashboard" className="bg-white text-zinc-900 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                Connexion
            </Link>
          </nav>
      </div>

      <main>
        
        {/* 2. HERO : CENTRÉ ET MASSIF */}
        <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-zinc-200 bg-zinc-50 rounded-full px-4 py-1.5 mb-8">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-900"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Mise à jour v2.4</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tightest leading-[0.9] mb-8 text-zinc-900">
                La gestion de boutique <br />
                <span className="text-zinc-300">enfin clarifiée.</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-lg md:text-xl text-zinc-500 font-medium font-['Google_Sans'] leading-relaxed mb-12">
                Une seule plateforme pour gérer votre stock, encaisser vos clients et analyser votre croissance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
                <Link href="/register" className="h-14 px-10 rounded-full bg-zinc-900 text-white flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                    Essayer Gratuitement <LuArrowRight className="w-4 h-4" />
                </Link>
                <button className="h-14 px-10 rounded-full border border-zinc-200 hover:bg-zinc-50 flex items-center justify-center text-xs font-black uppercase tracking-widest transition-colors text-zinc-600">
                    Voir la démo vidéo
                </button>
            </div>

            {/* HERO IMAGE : EFFET 3D LÉGER */}
            <div className="relative mx-auto max-w-5xl group perspective-1000">
                <div className="bg-zinc-50 border border-zinc-200 rounded-t-3xl p-3 pb-0 shadow-2xl shadow-zinc-200/50 transform transition-transform duration-700 group-hover:rotate-x-2">
                    <div className="bg-white rounded-t-2xl border-t border-x border-zinc-100 overflow-hidden aspect-video relative">
                        {/* Simulation UI */}
                        <div className="absolute inset-0 bg-white flex flex-col">
                            <div className="h-14 border-b border-zinc-50 flex items-center justify-between px-6">
                                <div className="w-32 h-3 bg-zinc-100 rounded-full" />
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 bg-zinc-100 rounded-full" />
                                    <div className="w-8 h-8 bg-zinc-900 rounded-full" />
                                </div>
                            </div>
                            <div className="flex-1 p-8 grid grid-cols-12 gap-8">
                                <div className="col-span-3 space-y-4">
                                    <div className="h-full bg-zinc-50 rounded-xl border border-zinc-50" />
                                </div>
                                <div className="col-span-9 space-y-6">
                                    <div className="flex gap-6">
                                        <div className="h-32 flex-1 bg-zinc-50 rounded-xl border border-zinc-50" />
                                        <div className="h-32 flex-1 bg-zinc-50 rounded-xl border border-zinc-50" />
                                        <div className="h-32 flex-1 bg-zinc-50 rounded-xl border border-zinc-50" />
                                    </div>
                                    <div className="h-64 bg-zinc-50 rounded-xl border border-zinc-50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. SOCIAL PROOF : BANDEAU GRIS */}
        <section className="py-12 bg-zinc-50 border-y border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Rejoignez 500+ commerçants</span>
                <div className="flex gap-12 opacity-30 grayscale mix-blend-multiply">
                    <span className="text-xl font-black font-serif">VOGUE.Retail</span>
                    <span className="text-xl font-black font-serif">Maison.K</span>
                    <span className="text-xl font-black font-serif">Lomé.Store</span>
                    <span className="text-xl font-black font-serif">Urban.Lab</span>
                </div>
            </div>
        </section>

        {/* 4. ZIG-ZAG SECTION 1 : INVENTAIRE */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Texte à gauche */}
                <div className="order-2 lg:order-1 space-y-8">
                    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
                        <LuBox className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl font-black tracking-tight">Inventaire <br/>Temps Réel.</h2>
                    <p className="text-zinc-500 text-lg leading-relaxed font-['Google_Sans']">
                        Ne perdez plus jamais une vente à cause d'un stock fantôme. Chaque entrée et sortie est synchronisée instantanément sur tous vos appareils.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Alertes de stock bas automatiques", 
                            "Gestion des variantes (Tailles/Couleurs)", 
                            "Import/Export Excel facile"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                                <LuCircleCheck className="w-5 h-5 text-zinc-300" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Image à droite */}
                <div className="order-1 lg:order-2 bg-zinc-50 rounded-[3rem] p-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] bg-size-[16px_16px] opacity-50" />
                    <div className="relative bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 rotate-3 group-hover:rotate-0 transition-all duration-500">
                        {/* Fake Product Card */}
                        <div className="flex gap-4 items-center mb-6">
                            <div className="w-16 h-16 bg-zinc-100 rounded-lg" />
                            <div>
                                <div className="w-32 h-3 bg-zinc-900 rounded-full mb-2" />
                                <div className="w-20 h-2 bg-zinc-200 rounded-full" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                            <span className="text-xs font-black uppercase tracking-wider text-zinc-400">En Stock</span>
                            <span className="text-xl font-black">124 <span className="text-xs text-zinc-400">Unités</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 5. ZIG-ZAG SECTION 2 : VENTES & MOBILE */}
        <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Image à gauche */}
                <div className="bg-zinc-900 rounded-[3rem] p-12 relative overflow-hidden flex items-center justify-center">
                     <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-zinc-800 to-zinc-950" />
                     {/* Fake Mobile Phone */}
                     <div className="relative z-10 w-64 h-112.5 bg-zinc-950 border-8 border-zinc-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
                        <div className="w-full h-full bg-white flex flex-col">
                            <div className="h-20 bg-zinc-50 border-b border-zinc-100 flex items-end p-4">
                                <div className="w-8 h-8 bg-zinc-200 rounded-full" />
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="h-24 bg-zinc-100 rounded-xl" />
                                <div className="h-12 bg-zinc-50 rounded-xl" />
                                <div className="h-12 bg-zinc-50 rounded-xl" />
                            </div>
                        </div>
                     </div>
                </div>
                {/* Texte à droite */}
                <div className="space-y-8">
                    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
                        <LuSmartphone className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl font-black tracking-tight">Gérez tout<br/>depuis votre poche.</h2>
                    <p className="text-zinc-500 text-lg leading-relaxed font-['Google_Sans']">
                        L'application mobile Studio vous permet de suivre les ventes en direct, de scanner des codes-barres et de valider des commandes, où que vous soyez.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <div className="px-6 py-3 bg-zinc-50 rounded-lg border border-zinc-100 text-xs font-black uppercase tracking-widest text-zinc-600">
                            iOS App
                        </div>
                        <div className="px-6 py-3 bg-zinc-50 rounded-lg border border-zinc-100 text-xs font-black uppercase tracking-widest text-zinc-600">
                            Android App
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 6. GRID FEATURES (CARTE BLANCHE) */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black tracking-tight mb-4">Puissance Studio.</h2>
                <p className="text-zinc-500">Conçu pour la performance et la fiabilité.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Analytiques", icon: <LuTrendingUp />, desc: "Graphiques de ventes quotidiens, hebdomadaires et mensuels." },
                    { title: "Sécurité", icon: <LuShieldCheck />, desc: "Données chiffrées et sauvegardées automatiquement dans le cloud." },
                    { title: "Interface", icon: <LuLayoutDashboard />, desc: "Design minimaliste conçu pour réduire la fatigue visuelle." },
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-zinc-100 bg-white hover:border-zinc-300 transition-colors shadow-sm">
                        <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-900 mb-6">
                            {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                        </div>
                        <h3 className="text-lg font-black tracking-tight mb-3">{item.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed font-['Google_Sans']">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 7. CTA FINAL (STACKED) */}
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-white rounded-full blur-[100px]" />
                </div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tightest leading-none mb-8">
                        Prêt à transformer <br/>votre commerce ?
                    </h2>
                    <p className="text-zinc-400 mb-12 font-medium">Rejoignez la nouvelle génération de commerçants.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/register" className="h-14 px-12 rounded-full bg-white text-zinc-900 flex items-center justify-center text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                            Créer mon compte
                        </Link>
                    </div>
                    <p className="mt-8 text-[10px] text-zinc-500 uppercase tracking-widest">14 jours d'essai gratuit • Sans engagement</p>
                </div>
            </div>
        </section>

        {/* 8. FOOTER SIMPLE */}
        <footer className="py-12 px-6 text-center border-t border-zinc-100">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-4">
                Studio System Inc.
            </div>
            <div className="flex justify-center gap-8 text-xs font-bold text-zinc-400">
                <Link href="#" className="hover:text-zinc-900">Instagram</Link>
                <Link href="#" className="hover:text-zinc-900">Twitter</Link>
                <Link href="#" className="hover:text-zinc-900">Contact</Link>
            </div>
        </footer>

      </main>
    </div>
  );
}