"use client";

import React, { useState, useRef, useEffect } from "react";
import { LuArrowRight, LuLoader, LuShieldCheck, LuRefreshCw } from "react-icons/lu";
import { ActionButton } from "@/components/ui";

export default function VerifyPage() {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
    
    // Timer countdown
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const chars = value.split("").slice(0, 6);
      const newOtp = [...otp];
      chars.forEach((char, i) => {
        if (index + i < 6) newOtp[index + i] = char;
      });
      setOtp(newOtp);
      // Focus last filled input or next empty one
      const nextIndex = Math.min(index + chars.length, 5);
      inputsRef.current[nextIndex]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Focus previous input on backspace if current is empty
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.some(digit => !digit)) return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("OTP Vérifié:", otp.join(""));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    setTimer(30);
    // Logic to resend code
  };

  return (
    <div className="min-h-screen w-full bg-zinc-50 flex items-center justify-center p-6 text-zinc-900 font-sans">
      
      {/* Conteneur principal plus large et aéré */}
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100">
        
        {/* HEADER avec focus sur la typographie */}
        <header className="mb-10 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2 font-['Google_Sans']">
              Double authentification
            </h1>
            <p className="text-zinc-500 text-sm leading-relaxed px-4">
              Entrez le code à 6 chiffres envoyé à <br />
              <span className="font-medium text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded text-xs">admin@sync.com</span>
            </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
            {/* INPUTS OTP - Style unifié et sans distraction */}
            <div className="space-y-6">
                <div className="flex justify-between items-center gap-2">
                    {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => { inputsRef.current[index] = el; }} 
                        type="text"
                        maxLength={6} 
                        inputMode="numeric"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={(e) => {
                          e.preventDefault();
                          const pastText = e.clipboardData.getData('text');
                          handleChange(index, pastText);
                        }}
                        disabled={loading}
                        className={`
                        w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-semibold rounded-xl bg-zinc-50 border transition-all duration-200 outline-none
                        ${digit 
                            ? 'text-zinc-900 border-zinc-900 bg-white shadow-sm' 
                            : 'text-zinc-400 border-zinc-200 focus:border-zinc-500 focus:bg-white'}
                        `}
                    />
                    ))}
                </div>
                
                {/* STATUS BAR Minimaliste */}
                <div className="flex items-center justify-center h-4"> 
                   {loading && <span className="text-xs text-zinc-400 animate-pulse font-medium">Vérification en cours...</span>}
                   {!loading && timer > 0 && <span className="text-xs text-zinc-400 font-mono">Code valide encore {timer}s</span>}
                </div>
            </div>

            <div className="space-y-4">
                <ActionButton 
                    type="submit"
                    disabled={loading || otp.some(d => !d)}
                    className="w-full justify-center py-4 rounded-xl text-sm font-semibold tracking-wide shadow-none hover:shadow-lg hover:shadow-zinc-200 transition-all bg-zinc-900 text-white hover:bg-zinc-800"
                >
                    {loading ? (
                    <LuLoader className="w-5 h-5 animate-spin" />
                    ) : (
                    "Vérifier l'identité"
                    )}
                </ActionButton>

                <button 
                    type="button" 
                    onClick={handleResend}
                    disabled={timer > 0 || loading}
                    className="w-full text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors py-2"
                >
                    {timer > 0 ? "Renvoyer le code" : "Je n'ai rien reçu, renvoyer"}
                </button>
            </div>
        </form>

      </div>
      
      {/* FOOTER FLOTTANT DISCRET */}
      <div className="absolute bottom-6 left-0 w-full text-center">
        <p className="text-[10px] uppercase tracking-widest text-zinc-300 font-bold opacity-60">Sync Secure Auth</p>
      </div>

    </div>
  );
}
