"use client";

import { useState } from 'react';
import { LuArrowLeft, LuLock, LuCalculator, LuPrinter, LuDollarSign, LuBanknote } from 'react-icons/lu';
import Link from 'next/link';

interface CashCount {
  denomination: string;
  value: number;
  count: number;
  total: number;
}

export default function RegisterManagementPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [openingAmount, setOpeningAmount] = useState(0);
  const [cashCounts, setCashCounts] = useState<CashCount[]>([
    { denomination: '10000 F', value: 10000, count: 0, total: 0 },
    { denomination: '5000 F', value: 5000, count: 0, total: 0 },
    { denomination: '2000 F', value: 2000, count: 0, total: 0 },
    { denomination: '1000 F', value: 1000, count: 0, total: 0 },
    { denomination: '500 F', value: 500, count: 0, total: 0 },
    { denomination: '200 F', value: 200, count: 0, total: 0 },
    { denomination: '100 F', value: 100, count: 0, total: 0 },
    { denomination: '50 F', value: 50, count: 0, total: 0 },
  ]);

  const updateCount = (index: number, count: number) => {
    setCashCounts(prev => prev.map((item, i) =>
      i === index
        ? { ...item, count, total: item.value * count }
        : item
    ));
  };

  const totalCash = cashCounts.reduce((sum, item) => sum + item.total, 0);
  const expectedTotal = openingAmount + 150000; // Montant d'ouverture + ventes simulées
  const difference = totalCash - expectedTotal;

  const handleOpenRegister = () => {
    if (openingAmount > 0) {
      setIsOpen(true);
      // TODO: API call to open register
    }
  };

  const handleCloseRegister = () => {
    // TODO: API call to close register with final count
    setIsOpen(false);
    alert(`Caisse fermée. Écart: ${difference.toLocaleString()} F`);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-white border-b border-zinc-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/cashier"
              className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              <LuArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-zinc-900">Gestion de Caisse</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {isOpen ? (
                <div className="flex items-center gap-2 text-green-600">
                  <LuLock className="w-5 h-5" />
                  <span className="font-medium">Caisse ouverte</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <LuLock className="w-5 h-5" />
                  <span className="font-medium">Caisse fermée</span>
                </div>
              )}
            </div>
            <Link
              href="/cashier"
              className="bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Retour à la caisse
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {!isOpen ? (
          /* Opening Register */
          <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-6">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Ouverture de Caisse</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  Montant d'ouverture
                </label>
                <div className="relative">
                  <LuBanknote className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="number"
                    value={openingAmount}
                    onChange={(e) => setOpeningAmount(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-zinc-900 focus:ring-0 text-lg font-medium"
                    placeholder="0"
                    min="0"
                  />
                </div>
                <p className="text-sm text-zinc-600 mt-2">
                  Saisissez le montant en espèces présent dans la caisse
                </p>
              </div>

              <button
                onClick={handleOpenRegister}
                disabled={openingAmount <= 0}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed"
              >
                Ouvrir la Caisse
              </button>
            </div>
          </div>
        ) : (
          /* Closing Register */
          <div className="space-y-6">
            {/* Current Status */}
            <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-6">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">État de la Caisse</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600 font-medium">Montant d'ouverture</p>
                  <p className="text-2xl font-bold text-blue-900">{openingAmount.toLocaleString()} F</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600 font-medium">Ventes du jour</p>
                  <p className="text-2xl font-bold text-green-900">150,000 F</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-600 font-medium">Total attendu</p>
                  <p className="text-2xl font-bold text-purple-900">{expectedTotal.toLocaleString()} F</p>
                </div>
              </div>
            </div>

            {/* Cash Count */}
            <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-6">
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Comptage de la Caisse</h2>

              <div className="space-y-4">
                {cashCounts.map((item, index) => (
                  <div key={item.denomination} className="flex items-center gap-4 p-4 border border-zinc-200 rounded-lg">
                    <div className="w-24 text-sm font-medium text-zinc-700">
                      {item.denomination}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-600">Quantité:</span>
                      <input
                        type="number"
                        value={item.count}
                        onChange={(e) => updateCount(index, Number(e.target.value))}
                        className="w-20 px-3 py-2 border border-zinc-300 rounded-lg text-center"
                        min="0"
                      />
                    </div>
                    <div className="flex-1 text-right">
                      <span className="text-lg font-bold text-zinc-900">
                        {item.total.toLocaleString()} F
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-200">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total compté:</span>
                  <span className="text-zinc-900">{totalCash.toLocaleString()} F</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span>Total attendu:</span>
                  <span className="text-zinc-700">{expectedTotal.toLocaleString()} F</span>
                </div>
                <div className={`flex justify-between items-center mt-2 text-lg font-bold ${
                  difference === 0 ? 'text-green-600' :
                  difference > 0 ? 'text-blue-600' : 'text-red-600'
                }`}>
                  <span>Écart:</span>
                  <span>{difference > 0 ? '+' : ''}{difference.toLocaleString()} F</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-6">
              <div className="flex gap-4">
                <button className="flex-1 bg-zinc-900 text-white py-3 rounded-xl font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                  <LuPrinter className="w-5 h-5" />
                  Imprimer Rapport
                </button>
                <button
                  onClick={handleCloseRegister}
                  className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <LuLock className="w-5 h-5" />
                  Fermer la Caisse
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}