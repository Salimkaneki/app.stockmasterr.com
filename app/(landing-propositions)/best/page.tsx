"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  LuArrowRight, LuLayers, LuCheck, 
  LuScanBarcode, LuPrinter, LuWifi, LuGlobe, 
  LuPlay, LuCreditCard, LuZap, LuShieldCheck, LuMenu, LuX
} from "react-icons/lu";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Gestion du scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full top-0 z-100 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? "bg-white/70 backdrop-blur-md border-b border-zinc-100 py-3" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-9 h-9 bg-zinc-900 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                  <span className="text-white font-black text-sm">S.</span>
              </div>
              <span className="text-sm font-black uppercase tracking-[0.3em]">Studio</span>
          </div>
          
          <div className="hidden lg:flex gap-8 bg-zinc-100/50 p-1 rounded-full border border-zinc-200/50">
              {["Fonctionnalités", "Matériel", "Tarifs"].map(item => (
                  <Link key={item} href="#" className="px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors">
                      {item}
                  </Link>
              ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-[11px] font-bold uppercase tracking-widest hover:text-zinc-600 transition-colors">Connexion</Link>
            <Link href="/register" className="bg-zinc-900 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-zinc-200">
              Essai gratuit <LuArrowRight className="w-3 h-3" />
            </Link>
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <LuX size={24}/> : <LuMenu size={24}/>}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-44 pb-32 px-6 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-100 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-zinc-50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 mb-10 shadow-sm animate-bounce-slow">
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">v2.4 : Synchronisation multi-boutiques</span>
                </div>
                
                <h1 className="text-6xl md:text-[100px] font-black tracking-tightest leading-[0.85] mb-10">
                    L&apos;intelligence <br/>
                    <span className="text-zinc-400">en magasin.</span>
                </h1>
                
                <p className="max-w-2xl text-xl text-zinc-500 font-medium leading-relaxed mb-12">
                    Studio transforme votre comptoir en un centre de commandement. Gérez vos stocks, vos employés et vos clients avec une fluidité absolue.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                    <button className="bg-zinc-900 text-white h-16 px-12 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-zinc-400 transition-all active:scale-95">
                        Démarrer l&apos;aventure
                    </button>
                    <button className="bg-white border border-zinc-200 text-zinc-900 h-16 px-10 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-zinc-50 transition-colors flex items-center justify-center gap-3">
                        <div className="w-6 h-6 bg-zinc-100 rounded-full flex items-center justify-center"><LuPlay className="w-3 h-3 fill-zinc-900" /></div> 
                        Voir la démo
                    </button>
                </div>
            </div>

            {/* Dashboard Mockup - Plus réaliste */}
            
            <div className="mt-24 max-w-7xl mx-auto perspective-1000">
                <div className="relative rounded-3xl border border-zinc-200 bg-white p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transform rotate-x-2 transition-transform hover:rotate-x-0 duration-700">
                    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 overflow-hidden aspect-video">
                        <div className="h-10 border-b border-zinc-200 bg-white flex items-center px-4 gap-2">
                             <div className="flex gap-1.5">
                                 {[1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-zinc-200" />)}
                             </div>
                        </div>
                        <div className="p-8 grid grid-cols-4 gap-6">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="h-32 bg-white rounded-2xl border border-zinc-100 shadow-sm p-4">
                                    <div className="w-8 h-2 bg-zinc-100 rounded-full mb-3" />
                                    <div className="w-16 h-4 bg-zinc-900 rounded-full" />
                                </div>
                            ))}
                            <div className="col-span-4 h-64 bg-white rounded-2xl border border-zinc-100 shadow-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- FEATURES BENTO GRID --- */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-5xl font-black tracking-tightest mb-4">Conçu pour la performance.</h2>
                    <p className="text-zinc-500 text-lg">Tout ce dont vous avez besoin, là où vous en avez besoin.</p>
                </div>
                <div className="flex gap-2">
                    <div className="px-4 py-2 bg-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest">Analytics</div>
                    <div className="px-4 py-2 bg-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest">Inventory</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {/* Inventaire */}
                <div className="md:col-span-4 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 p-12 relative group overflow-hidden">
                    <div className="max-w-sm relative z-10">
                        <LuLayers className="w-10 h-10 mb-8 text-zinc-400" />
                        <h3 className="text-3xl font-black mb-4">Stock intelligent</h3>
                        <p className="text-zinc-500 leading-relaxed">Automatisez vos commandes fournisseurs et recevez des alertes prédictives avant la rupture.</p>
                    </div>
                    {/* Visual Effect */}
                    <div className="absolute -right-5 -bottom-5 w-1/2 h-1/2 bg-white rounded-3xl border border-zinc-200 p-6 shadow-2xl rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                        <div className="space-y-4">
                            {[1,2].map(i => (
                                <div key={i} className="flex justify-between items-center p-3 bg-zinc-50 rounded-xl">
                                    <div className="w-8 h-8 bg-zinc-200 rounded-lg" />
                                    <div className="w-24 h-2 bg-zinc-200 rounded-full" />
                                    <div className="w-8 h-4 bg-emerald-100 rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ventes */}
                <div className="md:col-span-2 bg-zinc-900 text-white rounded-[2.5rem] p-12 flex flex-col justify-between hover:bg-zinc-800 transition-colors">
                    <LuZap className="text-amber-400 w-8 h-8" />
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Live Revenue</span>
                        <div className="text-5xl font-black mt-2 tracking-tighter">842K</div>
                        <p className="text-zinc-400 text-sm mt-4">Transactions traitées ce jour en temps réel.</p>
                    </div>
                </div>

                {/* Sécurité */}
                <div className="md:col-span-3 bg-white border border-zinc-200 rounded-[2.5rem] p-12 flex gap-8 items-center">
                    <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center shrink-0">
                        <LuShieldCheck className="w-10 h-10 text-emerald-600" />
                    </div>
                    <div>
                        <h4 className="text-xl font-black mb-2">Données protégées</h4>
                        <p className="text-zinc-500 text-sm italic">Chiffrement de bout en bout et sauvegardes automatiques toutes les 15 minutes.</p>
                    </div>
                </div>

                {/* Omnicanal */}
                <div className="md:col-span-3 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-12 overflow-hidden relative">
                    <div className="relative z-10">
                        <h4 className="text-xl font-black mb-2">Connectivité totale</h4>
                        <p className="text-zinc-500 text-sm">Synchronisez vos ventes Instagram, WhatsApp et votre boutique physique.</p>
                    </div>
                    <LuGlobe className="absolute -right-7.5 -top-7.5 w-48 h-48 text-zinc-200/50" />
                </div>
            </div>
        </section>

        {/* --- HARDWARE INTEGRATION --- */}
        
        <section className="py-32 bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                    <h2 className="text-5xl font-black tracking-tightest mb-8 leading-tight">Zéro friction matériel.</h2>
                    <p className="text-zinc-400 text-xl mb-12">Studio a été conçu pour être agnostique. Branchez, scannez, vendez.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
                        {[
                            { icon: <LuScanBarcode className="w-6 h-6"/>, t: "Scanners", d: "Supporte 100% des douchettes USB/Bluetooth." },
                            { icon: <LuPrinter className="w-6 h-6"/>, t: "Tickets", d: "Impression thermique ultra-rapide 80mm." },
                            { icon: <LuWifi className="w-6 h-6"/>, t: "Offline", d: "Vendez même sans connexion internet." },
                            { icon: <LuCreditCard className="w-6 h-6"/>, t: "Paiement", d: "Intégration TPE terminaux bancaires." }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-zinc-900 transition-all">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold mb-2">{item.t}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                    <div className="relative bg-zinc-900 border border-zinc-800 p-4 rounded-[3rem] shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                         <div className="text-center">
                             <div className="text-[120px] font-black text-zinc-800 select-none">POS</div>
                             <div className="flex gap-4 justify-center -mt-8">
                                 <div className="w-12 h-1 bg-emerald-500 rounded-full animate-pulse" />
                                 <div className="w-12 h-1 bg-emerald-500 rounded-full animate-pulse delay-75" />
                                 <div className="w-12 h-1 bg-emerald-500 rounded-full animate-pulse delay-150" />
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
             <div className="text-center mb-20">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Tarification</span>
                <h2 className="text-5xl font-black tracking-tightest mt-4">Simple, comme bonjour.</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Standard Card */}
                <div className="p-10 rounded-[2.5rem] border border-zinc-100 bg-white hover:shadow-xl transition-all flex flex-col">
                    <h3 className="text-lg font-bold mb-2">Starter</h3>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-5xl font-black tracking-tighter">15k</span>
                        <span className="text-zinc-400 font-bold">/mo</span>
                    </div>
                    <ul className="space-y-4 mb-10 flex-1">
                        {["1 Boutique", "Stock illimité", "Rapports PDF", "Support Email"].map(li => (
                            <li key={li} className="flex gap-3 text-sm text-zinc-500 font-medium">
                                <LuCheck className="text-zinc-900 w-5 h-5 shrink-0" /> {li}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-4 rounded-2xl border border-zinc-200 font-bold text-xs uppercase tracking-widest hover:bg-zinc-50 transition-colors">Choisir Starter</button>
                </div>

                {/* Featured Card */}
                <div className="p-10 rounded-[2.5rem] bg-zinc-900 text-white transform md:-translate-y-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest">Recommandé</div>
                    <h3 className="text-lg font-bold mb-2">Pro Business</h3>
                    <div className="flex items-baseline gap-1 mb-8 text-white">
                        <span className="text-5xl font-black tracking-tighter">35k</span>
                        <span className="text-zinc-500 font-bold">/mo</span>
                    </div>
                    <ul className="space-y-4 mb-10 flex-1">
                        {["Multi-boutiques", "Intelligence Artificielle", "Accès API", "Support 24/7", "Fidélité Client"].map(li => (
                            <li key={li} className="flex gap-3 text-sm text-zinc-300 font-medium">
                                <LuCheck className="text-emerald-400 w-5 h-5 shrink-0" /> {li}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-4 rounded-2xl bg-white text-zinc-900 font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform">Essayer gratuitement</button>
                </div>

                {/* Entreprise Card */}
                <div className="p-10 rounded-[2.5rem] border border-zinc-100 bg-white hover:shadow-xl transition-all flex flex-col">
                    <h3 className="text-lg font-bold mb-2">Réseau</h3>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-4xl font-black tracking-tighter">Sur mesure</span>
                    </div>
                    <p className="text-zinc-500 text-sm mb-10 leading-relaxed">Pour les franchises de plus de 10 points de vente nécessitant une infrastructure dédiée.</p>
                    <button className="w-full py-4 rounded-2xl border border-zinc-200 font-bold text-xs uppercase tracking-widest hover:bg-zinc-50 transition-colors mt-auto">Contacter l&apos;équipe</button>
                </div>
             </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="px-6 pb-20">
            <div className="max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-800/50 via-transparent to-transparent opacity-50" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tightest mb-10">
                        Prêt à passer au niveau supérieur ?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-zinc-900 px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                            Démarrer mon essai de 14 jours
                        </button>
                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">SANS CARTE BANCAIRE</span>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
              <div className="max-w-xs">
                  <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
                          <span className="text-white font-black text-xs">S.</span>
                      </div>
                      <span className="font-black uppercase tracking-widest text-sm text-zinc-900">Studio</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
                      L&apos;OS moderne pour les commerçants ambitieux. Basé à Lomé, au service de l&apos;Afrique.
                  </p>
                  <div className="flex gap-4">
                      {/* Social Icons Placeholder */}
                      {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all cursor-pointer" />)}
                  </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24">
                  {[
                      { t: "Produit", l: ["Features", "Hardware", "Tarifs", "Demo"] },
                      { t: "Société", l: ["À propos", "Blog", "Carrières", "Contact"] },
                      { t: "Légal", l: ["Confidentialité", "Termes", "Cookies"] }
                  ].map(group => (
                      <div key={group.t}>
                          <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-8">{group.t}</h4>
                          <ul className="space-y-4">
                              {group.l.map(link => (
                                  <li key={link}>
                                      <Link href="#" className="text-zinc-600 hover:text-zinc-900 text-sm font-semibold transition-colors">{link}</Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
          <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">© 2026 Studio Retail Systems Inc.</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Fait avec ❤️ pour le commerce local</p>
          </div>
      </footer>
    </div>
  );
}