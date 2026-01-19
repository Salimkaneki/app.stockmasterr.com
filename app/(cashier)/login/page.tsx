"use client";

import { useState } from 'react';
import { LuUser, LuLock, LuEye, LuEyeOff, LuStore } from 'react-icons/lu';

export default function CashierLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
            <LuStore className="w-8 h-8 text-zinc-900" />
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-wider">Point de Vente</h1>
          <p className="text-zinc-400 mt-2">Connexion Caissier</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-bold text-zinc-700 uppercase tracking-wider mb-2">
                Nom d'utilisateur
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LuUser className="w-5 h-5 text-zinc-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-zinc-200 rounded-xl focus:border-zinc-900 focus:ring-0 text-lg font-medium transition-colors"
                  placeholder="Votre identifiant"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-bold text-zinc-700 uppercase tracking-wider mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LuLock className="w-5 h-5 text-zinc-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 border-2 border-zinc-200 rounded-xl focus:border-zinc-900 focus:ring-0 text-lg font-medium transition-colors"
                  placeholder="Votre mot de passe"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <LuEyeOff className="w-5 h-5 text-zinc-400 hover:text-zinc-600" />
                  ) : (
                    <LuEye className="w-5 h-5 text-zinc-400 hover:text-zinc-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-lg uppercase tracking-wider hover:bg-zinc-800 transition-colors active:scale-95"
            >
              Se connecter
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-zinc-500">
              En cas de problème, contactez votre superviseur
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-zinc-500 text-sm">
            © 2026 - Système de Gestion Commerciale
          </p>
        </div>
      </div>
    </div>
  );
}