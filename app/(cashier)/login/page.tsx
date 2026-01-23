"use client";

import React, { useState, useEffect } from 'react';
import { LuDelete, LuLock, LuUser, LuChevronRight, LuFingerprint, LuCornerDownLeft } from 'react-icons/lu';

export default function PinLoginScreen() {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const PIN_LENGTH = 4;

  const handleKeyPress = (num: string) => {
    if (pin.length < PIN_LENGTH) {
      setPin(prev => prev + num);
      setError(false);
    }
  };

  const handleDelete = () => setPin(prev => prev.slice(0, -1));

  useEffect(() => {
    if (pin.length === PIN_LENGTH) {
      if (pin === "1234") {
        // Redirection logique
      } else {
        setError(true);
        setTimeout(() => setPin(''), 600);
      }
    }
  }, [pin]);

  return (
    <div className="h-screen w-full bg-white text-zinc-900 flex overflow-hidden">
      
      {/* Côté Gauche : Branding Minimaliste */}
      <div className="flex-1 flex flex-col justify-between p-16">
        <div>
          <div className="flex items-center gap-3 mb-20">
            <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-sm">
              <div className="w-4 h-1 bg-white" />
            </div>
            <span className="font-black text-2xl tracking-[0.2em]">Ma Boutik</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-7xl font-light tracking-tighter text-zinc-900">
              Session <br />
              <span className="font-serif italic text-zinc-400 text-6xl">Verrouillée</span>
            </h1>
            <p className="text-zinc-500 max-w-xs leading-relaxed">
              Veuillez saisir votre identifiant personnel pour accéder au terminal de vente.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-5 p-4 -ml-4 rounded-2xl border border-transparent hover:border-zinc-100 transition-all cursor-pointer group">
            <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
              <LuUser className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Opérateur</p>
              <p className="text-lg font-medium">Marc-Antoine K.</p>
            </div>
            <LuChevronRight className="ml-auto text-zinc-300 group-hover:text-zinc-900" />
          </div>
        </div>
      </div>

      {/* Côté Droit : Interface de saisie ultra-claire */}
      <div className="w-150 bg-zinc-50 flex flex-col items-center justify-center p-16 relative border-l border-zinc-100">
        
        {/* Indicateurs de PIN - Modernes */}
        <div className="mb-20 flex flex-col items-center">
          <div className="flex gap-4">
            {[...Array(PIN_LENGTH)].map((_, i) => (
              <div
                key={i}
                className={`h-16 w-12 flex items-center justify-center border-b-2 transition-all duration-500 ${
                  i < pin.length 
                    ? 'border-zinc-900 transform -translate-y-2' 
                    : 'border-zinc-200'
                } ${error ? 'border-red-500 text-red-500' : ''}`}
              >
                {i < pin.length ? (
                  <span className="text-2xl font-light">●</span>
                ) : (
                  <span className="text-zinc-100 text-2xl font-light">0</span>
                )}
              </div>
            ))}
          </div>
          <div className="h-6 mt-4">
            {error && <span className="text-red-500 text-xs font-bold uppercase tracking-[0.2em]">Accès Refusé</span>}
          </div>
        </div>

        {/* Clavier Numérique Épuré */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num.toString())}
              className="h-20 w-20 flex items-center justify-center text-3xl font-light text-zinc-400 hover:text-zinc-900 transition-colors active:scale-90"
            >
              {num}
            </button>
          ))}
          <button 
            onClick={() => setPin('')}
            className="h-20 w-20 flex items-center justify-center"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-300 hover:text-red-500 transition-colors">Vider</span>
          </button>
          <button
            onClick={() => handleKeyPress('0')}
            className="h-20 w-20 flex items-center justify-center text-3xl font-light text-zinc-400 hover:text-zinc-900 transition-colors active:scale-90"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="h-20 w-20 flex items-center justify-center text-zinc-300 hover:text-zinc-900 transition-colors"
          >
            <LuDelete className="w-6 h-6" />
          </button>
        </div>

        {/* Aide mémoire / Sécurité */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <button className="flex items-center gap-3 text-zinc-400 hover:text-zinc-600 transition-colors">
            <LuFingerprint className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Touch ID</span>
          </button>
          <div className="flex items-center gap-2 text-[10px] text-zinc-300 uppercase tracking-widest mt-4">
            <LuLock className="w-3 h-3" />
            <span>Cryptage AES-256 actif</span>
          </div>
        </div>
      </div>
    </div>
  );
}