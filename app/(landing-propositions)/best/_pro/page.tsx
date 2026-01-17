"use client";

import React from "react";
import { 
  LuArrowUpRight, LuBox, LuPlus, LuCheck, LuArrowRight,
  LuChartBar, LuLayoutDashboard, LuShoppingBag, LuZap
} from "react-icons/lu";

export default function HighContrastPrecision() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen font-sans text-black selection:bg-black selection:text-white">
      
      {/* --- THIN TOP BAR --- */}
      <div className="h-10 border-b border-zinc-100 flex items-center px-6 justify-between bg-zinc-50/50">
        <div className="flex gap-4 items-center">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">Version 4.0 Stable</span>
          <div className="h-3 w-[1px] bg-zinc-200" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">Lomé, TG</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-black cursor-pointer transition-colors">Documentation</span>
        </div>
      </div>

      {/* --- MAIN NAV --- */}
      <nav className="border-b border-zinc-100 h-20 flex items-center px-6 md:px-12 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 mr-16">
          <div className="w-5 h-5 bg-black" />
          <span className="text-lg font-black tracking-tighter uppercase">Studio.</span>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center">
          {["Système", "Hardware", "Tarification"].map(i => (
            <a key={i} href="#" className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 hover:text-black transition-colors">{i}</a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-6">
          <button className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Login</button>
          <button className="bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all">
            Déployer le système
          </button>
        </div>
      </nav>

      <main>
        {/* --- HERO : THE GRID LAYOUT --- */}
        <section className="border-b border-zinc-100">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2">
            <div className="p-8 md:p-20 lg:border-r border-zinc-100">
              <div className="w-12 h-[2px] bg-orange-500 mb-10" />
              <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-12">
                L'outil de <br/>gestion pour <br/><span className="italic text-zinc-300 font-light">professionnels.</span>
              </h1>
              <p className="text-lg text-zinc-500 max-w-md leading-relaxed mb-12">
                Une infrastructure de vente robuste, conçue pour la rapidité d'exécution et la précision comptable.
              </p>
              <button className="group flex items-center gap-6 text-xs font-bold uppercase tracking-[0.3em] hover:gap-10 transition-all">
                Démarrer maintenant <LuArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-zinc-50 flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
               {/* Abstract Canvas for UI Preview */}
               <div className="w-full aspect-square bg-white border border-zinc-200 shadow-2xl p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-1">Stock Total</div>
                      <div className="text-4xl font-light">1.284</div>
                    </div>
                    <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                      <LuBox className="text-zinc-400" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-px w-full bg-zinc-100" />
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-zinc-400">Ventes du jour</span>
                      <span>+12.4%</span>
                    </div>
                    <div className="h-8 bg-black w-3/4" />
                  </div>
               </div>
               {/* Grid deco */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
          </div>
        </section>

        {/* --- THREE COLUMN METRICS --- */}
        <section className="border-b border-zinc-100 bg-white">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-3">
            {[
              { t: "Latency", v: "0.04ms", d: "Synchronisation instantanée." },
              { t: "Uptime", v: "99.99%", d: "Architecture redondante." },
              { t: "Security", v: "AES-256", d: "Chiffrement de bout-en-bout." }
            ].map((item, i) => (
              <div key={i} className="p-12 border-r border-zinc-100 last:border-r-0">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">{item.t}</p>
                <h3 className="text-4xl font-light tracking-tighter mb-4">{item.v}</h3>
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- FEATURES : THE "LINEAR" STYLE --- */}
        <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl font-medium tracking-tighter">Une suite logicielle <br/> sans friction.</h2>
            <div className="h-px flex-1 bg-zinc-100 mb-4 hidden md:block" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Scroll to explore</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
            {[
              { icon: <LuZap />, title: "Vente Rapide", desc: "Interface POS optimisée pour le débit massif." },
              { icon: <LuChartBar />, title: "Analytics", desc: "Rapports précis sur vos marges et vos stocks." },
              { icon: <LuLayoutDashboard />, title: "Multi-site", desc: "Gestion centralisée de tous vos magasins." },
              { icon: <LuShoppingBag />, title: "Stock", desc: "Alertes automatiques de réapprovisionnement." },
              { icon: <LuPlus />, title: "API First", desc: "Connectez vos outils existants sans effort." },
              { icon: <LuCheck />, title: "Certifié", desc: "Conforme aux normes fiscales locales." }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-12 hover:bg-zinc-50 transition-colors group cursor-pointer">
                <div className="mb-8 text-black group-hover:text-orange-600 transition-colors">{feat.icon}</div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4">{feat.title}</h4>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PRICING : BOLD & MONOLITHIC --- */}
        <section className="py-32 bg-black text-white px-6 md:px-12">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="w-1 h-12 bg-orange-500 mb-12" />
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-12 uppercase">Une licence unique. <br/> Aucune limite.</h2>
            <div className="flex flex-col items-center gap-4">
              <div className="text-[15vw] md:text-[8vw] font-black leading-none italic">25.000<span className="text-2xl font-bold not-italic text-zinc-700 ml-4">CFA/MO</span></div>
              <button className="mt-8 bg-white text-black px-12 py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all">
                Activer Studio Pro
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* --- MINIMAL FOOTER --- */}
      <footer className="py-20 px-6 md:px-12 border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-black" />
            <span className="text-sm font-black uppercase tracking-widest">Studio.OS</span>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Security</a>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">© 2026 Built for performance</p>
        </div>
      </footer>
    </div>
  );
}