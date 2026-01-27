"use client";

import React, { useState } from "react";
import { LuLoader, LuMail, LuCheck, LuTerminal } from "react-icons/lu";
import { ActionButton } from "@/components/ui/actions/ActionButton";
import { Input } from "@/components/ui/forms";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Veuillez entrer votre adresse e-mail.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] flex flex-col items-center justify-center p-6 text-black selection:bg-black selection:text-white">

      <div className="w-full max-w-95">
        
        {/* LOGO & TITLE SECTION - unified with login */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm">
              <LuTerminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">Sync_Secure_v2</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter">Réinitialisation.</h1>
          <p className="text-gray-400 text-sm mt-2">Entrez l'adresse e-mail associée à votre compte pour recevoir un lien de récupération.</p>
        </header>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-8">
              <div>
                <Input
                  label={<span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">01 // Identity_Mail</span>}
                  type="email"
                  placeholder="nom@entreprise.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  disabled={loading}
                  error={error || undefined}
                />
              </div>
            </div>

            <ActionButton
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="w-full justify-center"
              icon={loading ? <LuLoader className="w-5 h-5 animate-spin" /> : undefined}
              showArrow={!loading}
            >
              <span className="font-mono text-[11px] font-black uppercase tracking-[0.3em]">Envoyer le lien</span>
            </ActionButton>
          </form>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8">
              <div className="h-12 w-12 bg-black text-white flex items-center justify-center rounded-full mb-8">
                <LuCheck className="w-6 h-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight uppercase">Vérifiez vos mails</h1>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">Si un compte existe pour <span className="text-black font-medium">{email}</span>, vous recevrez un lien d'accès d'ici quelques instants.</p>
            </header>

            <div className="space-y-4">
              <ActionButton
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => setSubmitted(false)}
              >
                <span className="text-sm font-bold uppercase tracking-widest">Renvoyer l'e-mail</span>
              </ActionButton>

              <p className="text-center text-[11px] text-gray-400">Pensez à vérifier vos courriers indésirables (spams).</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}