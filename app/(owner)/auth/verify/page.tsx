"use client";

import React, { useState, useRef, useEffect } from "react";
import { LuLoader, LuArrowRight, LuCheck, LuTriangleAlert } from "react-icons/lu";
import { ActionButton } from "@/components/ui/actions/ActionButton";
import OtpInput from "@/components/ui/forms/OtpInput";

export default function VerifyPage() {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // OTP input handled by OtpInput component

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (otp.join("") === "123456") {
        setSuccess(true);
      } else {
        setError("Code de sécurité invalide");
      }
    } catch (err) {
      setError("Une erreur système est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 text-black selection:bg-black selection:text-white">
      
      <div className="w-full max-w-100">
        {/* Logo Minimaliste */}
        <div className="mb-12 flex justify-start">
            <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
                <div className="h-4 w-4 bg-white rounded-sm rotate-45"></div>
            </div>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight italic uppercase italic-none">
            Verification
          </h1>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Un code a été envoyé à l'adresse <br />
            <span className="text-black font-medium">admin@sync.com</span>
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          <OtpInput
            length={6}
            value={otp}
            onChange={(v) => {
              setError("");
              setOtp(v);
            }}
            disabled={loading || success}
            error={!!error}
          />

          <div className="min-h-5">
            {error && (
              <div className="flex items-center gap-2 text-red-600 text-xs font-medium animate-in fade-in slide-in-from-left-2">
                <LuTriangleAlert className="w-4 h-4" />
                {error}
              </div>
            )}
            {success && (
              <div className="flex items-center gap-2 text-black text-xs font-bold animate-in fade-in">
                <LuCheck className="w-4 h-4" />
                IDENTITÉ CONFIRMÉE
              </div>
            )}
          </div>

          <ActionButton
            type="submit"
            variant={success ? "secondary" : "primary"}
            size="lg"
            disabled={loading || otp.includes("") || success}
            className="w-full justify-between"
            icon={loading ? <LuLoader className="w-5 h-5 animate-spin" /> : undefined}
            showArrow={!loading && !success}
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              {loading ? "Chargement..." : success ? "Terminé" : "Valider"}
            </span>
          </ActionButton>
        </form>

        <footer className="mt-12 flex flex-col gap-4">
          <ActionButton
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => !loading && timer === 0 && setTimer(30)}
            disabled={timer > 0 || loading}
            className="text-left"
          >
            {timer > 0 ? `Renvoyer le code (${timer}s)` : "Demander un nouveau code"}
          </ActionButton>
          
          <div className="h-px w-full bg-gray-100"></div>
          
          <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
            <span>Security Protocol v2.4</span>
            <a href="#" className="hover:text-black transition-colors text-right">Support technique</a>
          </div>
        </footer>
      </div>
    </div>
  );
}