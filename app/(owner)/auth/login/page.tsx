"use client";

import React, { useState } from "react";
import { LuArrowRight, LuEye, LuEyeOff, LuTerminal, LuLoader, LuShield } from "react-icons/lu";
import { ActionButton } from "@/components/ui/actions/ActionButton";
import { Input } from "@/components/ui/forms";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;
    if (!formData.email) { newErrors.email = "IDENTIFIANT REQUIS"; isValid = false; }
    if (!formData.password) { newErrors.password = "CLEF REQUISE"; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] flex flex-col items-center justify-center p-6 text-black selection:bg-black selection:text-white">
      
      <div className="w-full max-w-95">
        
        {/* LOGO & TITLE SECTION */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm">
              <LuTerminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">Sync_Secure_v2</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter">Connexion.</h1>
          <p className="text-gray-400 text-sm mt-2">Accès restreint au personnel autorisé.</p>
        </header>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-8">
            
            {/* EMAIL FIELD */}
            <div>
              <Input
                label={<span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">01 // Identity_Mail</span>}
                type="email"
                placeholder="nom@entreprise.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={loading}
                error={errors.email || undefined}
              />
            </div>

            {/* PASSWORD FIELD */}
            <div>
              <div className="flex justify-between items-center">
                <label className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">02 // Secret_Key</label>
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                disabled={loading}
                error={errors.password || undefined}
                endIcon={
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-300 hover:text-black">
                    {showPassword ? <LuEyeOff size={16} /> : <LuEye size={16} />}
                  </button>
                }
              />
              <div className="flex justify-between items-center mt-3">
                {errors.password ? (
                  <span className="text-[9px] font-bold text-red-500 uppercase">{errors.password}</span>
                ) : (
                  <span />
                )}
                <a href="/auth/recovery-password" className="text-sm font-medium text-rose-600 hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <ActionButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading}
            className="w-full justify-center"
            icon={loading ? <LuLoader className="w-5 h-5 animate-spin" /> : undefined}
            showArrow={!loading}
          >
            <span className="font-mono text-[11px] font-black uppercase tracking-[0.3em]">Authentifier</span>
          </ActionButton>
        </form>

        {/* Security info and footer removed as requested */}

      </div>
    </div>
  );
}