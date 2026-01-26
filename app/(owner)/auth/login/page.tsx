"use client";

import React, { useState } from "react";
import { LuArrowRight, LuEye, LuEyeOff, LuTerminal, LuLoader } from "react-icons/lu";
import { Input } from "@/components/ui";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "Identifiant requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Mot de passe requis";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Connecté");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-6 text-zinc-900">
      
      <div className="w-full max-w-95 space-y-12">
        
        {/* HEADER : MIX GOOGLE SANS ET ACCENT MONO */}
        <header className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="w-14 h-14 bg-zinc-900 rounded-[20px] flex items-center justify-center text-white shadow-xl shadow-zinc-200">
              <LuTerminal className="w-6 h-6" />
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter font-['Google_Sans']">Bienvenue.</h1>
            <p className="text-zinc-400 text-sm font-['Google_Sans']">Accès console d'administration.</p>
          </div>
        </header>

        {/* FORMULAIRE : ÉPURÉ */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-5">
            <Input 
              label={<span className="font-mono text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase">01_Identifier</span>}
              type="email" 
              placeholder="admin@sync.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              disabled={loading}
              className="font-['Google_Sans']"
            />
            
            <div className="relative group">
              <Input 
                label={<span className="font-mono text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase">02_Security_Key</span>}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                error={errors.password}
                disabled={loading}
                className="font-['Google_Sans'] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9.5 text-zinc-300 hover:text-zinc-900 transition-colors"
                disabled={loading}
              >
                {showPassword ? <LuEyeOff className="w-4 h-4" /> : <LuEye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex justify-end">
              <button 
                type="button" 
                className="text-[10px] font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest font-['Google_Sans']"
              >
                Mot de passe oublié ?
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-mono text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:bg-zinc-200"
          >
            {loading ? (
              <LuLoader className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Entrer_System
                <LuArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* FOOTER SIMPLIFIÉ */}
        <footer className="pt-8 text-center">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase opacity-50 text-zinc-400">©2026</span>
        </footer>

      </div>
    </div>
  );
}
