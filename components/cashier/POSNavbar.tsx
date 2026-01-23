"use client";

import React from 'react';
import Link from 'next/link';
import { LuPlus, LuSearch, LuCreditCard, LuUser, LuLock, LuPrinter, LuHistory, LuLogOut } from 'react-icons/lu';

interface Props {
  onNewTicket?: () => void;
  onFocusSearch?: () => void;
  onFocusBarcode?: () => void;
  onOpenPayment?: () => void;
  cartCount?: number;
  total?: number;
}

export default function POSNavbar({ onNewTicket, onFocusSearch, onFocusBarcode, onOpenPayment, cartCount = 0, total = 0 }: Props) {
  return (
    <div className="w-full bg-white border-b border-zinc-200 flex items-center justify-between px-4 py-2 gap-3">
      <div className="flex items-center gap-2">
        <button onClick={onNewTicket} className="px-3 py-2 bg-zinc-900 text-white rounded-md flex items-center gap-2">
          <LuPlus className="w-4 h-4" />
          Nouveau
        </button>

        <button onClick={onFocusSearch} className="px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-md flex items-center gap-2">
          <LuSearch className="w-4 h-4 text-zinc-600" />
          Rechercher
        </button>

        <button onClick={onFocusBarcode} className="px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-md flex items-center gap-2">
          <LuLock className="w-4 h-4 text-zinc-600" />
          Scanner
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-zinc-600">Articles: <span className="font-bold text-zinc-900">{cartCount}</span></div>
        <div className="text-sm text-zinc-600">Total: <span className="font-bold text-zinc-900">{Number(total).toLocaleString()} F</span></div>
        <button onClick={onOpenPayment} className="px-3 py-2 bg-amber-500 text-white rounded-md flex items-center gap-2">
          <LuCreditCard className="w-4 h-4" /> Paiement
        </button>
        <button className="px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-md flex items-center gap-2">
          <LuPrinter className="w-4 h-4 text-zinc-600" /> Imprimer
        </button>

        {/* Navigation buttons */}
        <Link href="/cashier/history" className="px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-md flex items-center gap-2 hover:bg-zinc-100">
          <LuHistory className="w-4 h-4 text-zinc-600" />
          Historique
        </Link>

        <Link href="/cashier/till" className="px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-md flex items-center gap-2 hover:bg-zinc-100">
          <LuLock className="w-4 h-4 text-zinc-600" />
          Caisse
        </Link>

        <Link href="/cashier/login" className="px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-md flex items-center gap-2 hover:bg-zinc-100">
          <LuLogOut className="w-4 h-4 text-zinc-600" />
          Déconnexion
        </Link>

        <button className="px-2 py-2 bg-zinc-50 border border-zinc-200 rounded-md flex items-center gap-1">
          <LuUser className="w-4 h-4 text-zinc-600" />
        </button>
      </div>
    </div>
  );
}
