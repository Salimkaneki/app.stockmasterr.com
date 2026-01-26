"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { LuArrowRight, LuArrowLeft, LuCheck, LuTerminal } from "react-icons/lu";
import { Input, Select, FileInput } from "@/components/ui";

function RegisterForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = (searchParams.get("type") || "commerce");
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: "", storeName: "",
    currency: "XOF", address: "", phone: "",
  });

  return (
    <div className="h-screen w-full bg-zinc-50 flex overflow-hidden font-sans text-zinc-900">
      
      {/* SIDEBAR : NAVIGATION STATIQUE */}
      <div className="w-85 bg-white border-r border-zinc-200/60 flex flex-col justify-between p-12">
        <div>
          <div className="flex items-center gap-3 mb-24">
            <div className="w-9 h-9 bg-zinc-900 rounded-xl flex items-center justify-center text-white">
              <LuTerminal className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tighter font-['Google_Sans']">Sync.</h1>
          </div>

          <nav className="space-y-10">
            {[
              { id: "01", label: "COMPTE_ADMIN" },
              { id: "02", label: "BOUTIQUE" },
              { id: "03", label: "FLUX_TRAVAIL" }
            ].map((s, i) => (
              <div key={s.id} className="flex items-center gap-5">
                <span className={`font-mono text-[11px] font-bold ${step === i + 1 ? 'text-zinc-900' : 'text-zinc-300'}`}>
                  {s.id}
                </span>
                <span className={`font-mono text-[10px] tracking-[0.2em] font-black transition-colors ${step === i + 1 ? 'text-zinc-900' : 'text-zinc-200'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </nav>
        </div>

        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
          <p className="font-mono text-[9px] text-zinc-400 tracking-[0.2em] uppercase mb-2">Configuration</p>
          <p className="text-[13px] font-bold font-['Google_Sans'] capitalize">{type} Module</p>
        </div>
      </div>

      {/* ZONE CENTRALE : CONTENU FIXE */}
      <div className="flex-1 flex flex-col relative">
        
        {/* PROGRESS INDICATOR (BARRE FINE) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-200/50">
          <div 
            className="h-full bg-zinc-900 transition-all duration-700 ease-in-out" 
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="flex-1 flex items-center justify-center p-12 lg:p-24">
          <div className="w-full max-w-lg">
            
            <header className="mb-16">
              <h2 className="text-5xl font-bold tracking-tighter text-zinc-900 font-['Google_Sans']">
                {step === 1 && "Accès Administrateur."}
                {step === 2 && "Votre Établissement."}
                {step === 3 && "Options de Gestion."}
              </h2>
            </header>

            {/* CHAMPS SANS SCROLL */}
            <div className="space-y-8 min-h-75">
               {step === 1 && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                      <div className="grid grid-cols-2 gap-8">
                        <Input 
                          label={<span className="font-mono text-[10px] tracking-widest text-zinc-400">NOM</span>} 
                          placeholder="Dupont" 
                          className="font-['Google_Sans']"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                        <Input 
                          label={<span className="font-mono text-[10px] tracking-widest text-zinc-400">PRÉNOM</span>} 
                          placeholder="Jean" 
                          className="font-['Google_Sans']"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <Input label={<span className="font-mono text-[10px] tracking-widest text-zinc-400">EMAIL_PRO</span>} type="email" placeholder="admin@sync.com" />
                      <Input label={<span className="font-mono text-[10px] tracking-widest text-zinc-400">MOT_DE_PASSE</span>} type="password" placeholder="••••••••" />
                  </div>
               )}

               {step === 2 && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                      <Input label={<span className="font-mono text-[10px] tracking-widest text-zinc-400">NOM_ENSEIGNE</span>} placeholder="Ma Boutique" />
                      <Input label={<span className="font-mono text-[10px] tracking-widest text-zinc-400">CONTACT_TEL</span>} placeholder="+225" />
                      <FileInput label="LOGO_BOUTIQUE" />
                  </div>
               )}

               {step === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-500">
                      <div className="p-8 border border-zinc-200 bg-white rounded-3xl flex items-center justify-between">
                          <div>
                              <p className="font-bold text-zinc-900 text-lg font-['Google_Sans']">Suivi de stock</p>
                              <p className="font-mono text-[10px] text-zinc-400 mt-1 tracking-widest uppercase italic">Mode_Actif</p>
                          </div>
                          <button className="w-10 h-6 bg-zinc-900 rounded-full relative p-1 transition-all">
                              <div className="w-4 h-4 bg-white rounded-full translate-x-4" />
                          </button>
                      </div>
                      <div className="p-8 border border-zinc-100 bg-zinc-50/50 rounded-3xl flex items-center justify-between opacity-50">
                          <div>
                              <p className="font-bold text-zinc-900 text-lg font-['Google_Sans']">Export Rapports</p>
                              <p className="font-mono text-[10px] text-zinc-400 mt-1 tracking-widest uppercase italic">Cloud_Sync</p>
                          </div>
                          <LuCheck className="text-zinc-300" />
                      </div>
                  </div>
               )}
            </div>

            {/* ACTIONS FOOTER */}
            <div className="flex items-center justify-between mt-16 pt-8">
               {step > 1 ? (
                  <button onClick={() => setStep(step - 1)} className="font-mono text-[11px] font-black tracking-widest text-zinc-400 hover:text-zinc-900 flex items-center gap-2">
                     <LuArrowLeft className="w-3 h-3" /> RETOUR
                  </button>
               ) : <div />}

               <button 
                  onClick={step === 3 ? () => router.push("/dashboard") : () => setStep(step + 1)}
                  className="bg-zinc-900 text-white px-10 py-4.5 rounded-2xl font-mono text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-5 hover:bg-zinc-800 transition-all active:scale-[0.98]"
               >
                  {step === 3 ? "LANCER_SYSTÈME" : "SUIVANT"}
                  <LuArrowRight className="w-4 h-4" />
               </button>
            </div>

          </div>
        </div>

        {/* METADATA BAS DE PAGE */}
        <div className="px-12 py-8 flex justify-between items-center opacity-30 font-mono text-[8px] tracking-[0.4em] uppercase">
           <span>Session_Encrypted</span>
           <span>Sync_OS_Build_2026</span>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="h-screen bg-zinc-50 flex items-center justify-center font-mono text-[10px] tracking-[0.5em] text-zinc-300">INIT...</div>}>
      <RegisterForm />
    </Suspense>
  );
}