"use client";

import POSInterface from '@/components/cashier/POSInterface';
import POSNavbar from '@/components/cashier/POSNavbar';

export default function CashierPage() {
  return (
    <div className="h-screen w-full bg-white flex flex-col font-sans text-zinc-900 overflow-hidden">
      <POSNavbar
        onNewTicket={() => {}}
        onFocusSearch={() => {}}
        onFocusBarcode={() => {}}
        onOpenPayment={() => {}}
        cartCount={0}
        total={0}
      />
      <div className="flex-1 overflow-hidden">
        <POSInterface />
      </div>
    </div>
  );
}