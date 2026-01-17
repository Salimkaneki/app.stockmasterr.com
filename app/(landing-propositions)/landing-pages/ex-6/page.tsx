"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Ajout de framer-motion
import { 
  LuArrowRight, LuSmartphone, LuLayers, LuArrowUpRight, 
  LuCheck, LuScanBarcode, LuPrinter, LuWifi, LuGlobe, 
  LuChevronDown, LuPlay, LuCreditCard, LuZap 
} from "react-icons/lu";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white antialiased">
      
      {/* --- 1. NAVBAR (Ultra-minimaliste) --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 fixed w-full top-0 bg-white/70 backdrop-blur-md z-50 border-b border-zinc-100/80">
        <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-black uppercase tracking-[0.3em] bg-clip-text text-transparent bg-linear-to-r from-zinc-900 to-zinc-500">
                Studio
            </span>
        </div>
        
        <div className="hidden lg:flex gap-8 items-center">
            {["Produit", "Matériel", "Tarifs", "Solutions"].map(item => (
                <Link key={item} href="#" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-all">
                    {item}
                </Link>
            ))}
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-zinc-900">Log In</Link>
          <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all">
            Démarrer gratuitement
          </button>
        </div>
      </nav>

      <main>
        
        {/* --- 2. HERO SECTION --- */}
        <section className="pt-48 pb-32 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/50 mb-10"
                >
                    <LuZap className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">Engine v2.4 est en ligne</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-[110px] font-black tracking-tightest leading-[0.85] mb-10"
                >
                    Le nouveau standard <br/>
                    <span className="text-zinc-300">du retail moderne.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-12"
                >
                    Une infrastructure logicielle invisible pour les commerçants exigeants. Synchronisez vos boutiques physiques et digitales sur une interface unique.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col md:flex-row gap-4 mb-24"
                >
                    <button className="group bg-zinc-900 text-white h-14 px-10 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-zinc-800 transition-all">
                        Déployer maintenant <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-white border border-zinc-200 h-14 px-10 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-zinc-50 transition-all">
                        <LuPlay className="w-4 h-4 fill-zinc-900" /> Démo Live
                    </button>
                </motion.div>

                {/* Dashboard Preview avec effet de lueur */}
                <div className="relative w-full max-w-6xl group">
                    <div className="absolute -inset-1 bg-linear-to-r from-zinc-200 to-zinc-100 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative rounded-4xl border border-zinc-200 bg-white p-3 shadow-2xl">
                        <div className="rounded-3xl bg-zinc-50 overflow-hidden aspect-video border border-zinc-100">
                             <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] flex items-center justify-center">
                                 <span className="text-zinc-300 font-black text-4xl uppercase tracking-[1em] opacity-20">Preview v2</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 4. BENTO GRID MODERNISÉ --- */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
                
                {/* Carte Principale: Inventaire */}
                <div className="col-span-12 md:col-span-8 bg-zinc-50 rounded-[2.5rem] p-12 border border-zinc-100 flex flex-col justify-between min-h-125 group overflow-hidden">
                    <div className="max-w-md">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center mb-8">
                            <LuLayers className="w-6 h-6 text-zinc-900" />
                        </div>
                        <h3 className="text-4xl font-black tracking-tighter mb-4">Architecture d'inventaire distribuée.</h3>
                        <p className="text-zinc-500 font-medium">Gérez des dizaines de points de vente comme s'il s'agissait d'un seul. Mise à jour des stocks en micro-secondes.</p>
                    </div>
                    
                    <div className="relative mt-12 translate-y-6 group-hover:translate-y-2 transition-transform duration-700">
                        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xl shadow-zinc-200/50">
                             <div className="flex items-center justify-between mb-6">
                                 <div className="h-2 w-24 bg-zinc-100 rounded-full" />
                                 <div className="h-6 w-20 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black flex items-center justify-center">SYNCED</div>
                             </div>
                             <div className="space-y-3">
                                 {[1, 2].map(i => (
                                     <div key={i} className="h-12 bg-zinc-50 rounded-xl border border-zinc-100" />
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Carte Noire: Analytics */}
                <div className="col-span-12 md:col-span-4 bg-zinc-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="z-10">
                        <LuArrowUpRight className="text-zinc-500 mb-6 w-8 h-8" />
                        <h3 className="text-2xl font-bold tracking-tight">Intelligence <br/>Décisionnelle.</h3>
                    </div>
                    <div className="z-10">
                        <div className="text-5xl font-black mb-4 tracking-tighter">98.2%</div>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Précision des prévisions</p>
                    </div>
                    {/* Effet visuel d'arrière plan */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                </div>

                {/* Omnicanalité */}
                <div className="col-span-12 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 p-12 flex flex-col md:flex-row items-center justify-between gap-12 group">
                    <div className="max-w-xl">
                        <div className="inline-block px-3 py-1 bg-zinc-200 rounded-full text-[9px] font-black tracking-widest mb-6">OMNICHANNEL</div>
                        <h3 className="text-4xl font-black tracking-tighter mb-4">Le pont entre le clic et la brique.</h3>
                        <p className="text-zinc-500 font-medium">L'unification totale de votre site e-commerce et de votre boutique physique. Vendez partout, gérez à un seul endroit.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-32 h-32 bg-white rounded-3xl border border-zinc-200 shadow-sm flex items-center justify-center group-hover:rotate-6 transition-transform">
                            <LuGlobe className="w-8 h-8 text-zinc-300" />
                        </div>
                        <div className="w-32 h-32 bg-white rounded-3xl border border-zinc-200 shadow-sm flex items-center justify-center group-hover:-rotate-6 transition-transform">
                            <LuSmartphone className="w-8 h-8 text-zinc-300" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 5. HARDWARE (Style Industriel) --- */}
        <section className="py-32 bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
                <div>
                    <h2 className="text-5xl font-black tracking-tightest mb-8 leading-none">Compatible par design.</h2>
                    <p className="text-zinc-400 text-lg mb-12">Nous ne vendons pas de matériel propriétaire. Nous rendons votre matériel actuel plus intelligent.</p>
                    
                    <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                        {[
                            { label: "Protocoles", val: "Cloud & Local" },
                            { label: "Connectivité", val: "Bluetooth 5.0" },
                            { label: "Vitesse", val: "< 200ms" },
                            { label: "Offline", val: "Stockage Local" }
                        ].map((stat, i) => (
                            <div key={i} className="border-l border-zinc-800 pl-6">
                                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</div>
                                <div className="text-lg font-bold">{stat.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="aspect-square bg-linear-to-br from-zinc-900 to-zinc-800 rounded-[3rem] border border-zinc-800 flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <LuScanBarcode className="w-32 h-32 text-zinc-700 group-hover:text-zinc-500 transition-colors duration-700" />
                </div>
            </div>
        </section>

      </main>

      {/* --- FOOTER CTA --- */}
      <section className="py-40 px-6 text-center">
            <h2 className="text-6xl md:text-[80px] font-black tracking-tightest mb-12 leading-none">
                Prêt pour le futur <br/> du commerce ?
            </h2>
            <button className="bg-zinc-900 text-white h-16 px-12 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl">
                Ouvrir un compte Studio
            </button>
            <p className="mt-8 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Contrat sans engagement. Installation en 5 minutes.</p>
      </section>

    </div>
  );
}