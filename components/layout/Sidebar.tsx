"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LuLayoutDashboard, LuShoppingCart, LuUsers, 
  LuSettings, LuPackage, LuReceipt,
  LuChevronsUpDown, LuBell, LuUserCheck,
  LuCreditCard, LuTruck, LuArchive
} from "react-icons/lu";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

interface MenuGroup {
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  items: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: "Tableau de bord", href: "/dashboard", icon: LuLayoutDashboard },
  { name: "Inventaire", href: "/dashboard/inventory", icon: LuPackage },
  { name: "Stock", href: "/dashboard/stock", icon: LuArchive },
  { name: "Ventes", href: "/dashboard/sales", icon: LuShoppingCart },
  { name: "Clients", href: "/dashboard/customers", icon: LuUsers },
  { name: "Personnel", href: "/dashboard/staff", icon: LuUserCheck },
  { name: "Fournisseurs", href: "/dashboard/suppliers", icon: LuTruck },
  { name: "Notifications", href: "/dashboard/notifications", icon: LuBell },
];

const menuGroups: MenuGroup[] = [
  {
    name: "Finances",
    icon: LuReceipt,
    items: [
      { name: "Factures", href: "/dashboard/invoices", icon: LuReceipt },
      { name: "Dettes", href: "/dashboard/debts", icon: LuCreditCard },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-zinc-200 flex flex-col sticky top-0 font-sans">
      
      {/* 1. HEADER : PUR & MINIMALISTE */}
      <div className="h-24 px-8 flex items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-zinc-900 flex items-center justify-center shrink-0">
          <div className="w-2 h-2 bg-zinc-900 rounded-full" />
        </div>
        <span className="text-lg font-black text-zinc-900 tracking-tighter uppercase">
          Ma Boutique
        </span>
      </div>

      {/* 2. NAVIGATION MÉTIER */}
      <nav className="flex-1 px-3 mt-2 space-y-1 overflow-y-auto">
        {/* Éléments de menu principaux */}
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                group flex items-center gap-4 px-5 py-4 rounded-lg text-[15px] font-bold transition-all
                ${isActive 
                  ? "bg-zinc-200 text-zinc-900" 
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                }
              `}
            >
              <item.icon 
                className={`w-5 h-5 transition-colors ${isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-900"}`}
                strokeWidth={isActive ? 2.5 : 2} 
              />
              <span className="tracking-tight">{item.name}</span>
            </Link>
          );
        })}

        {/* --- SECTION GROUPE AMÉLIORÉE --- */}
        {menuGroups.map((group) => {
          const isGroupActive = group.items.some(item => pathname === item.href);
          
          return (
            <div key={group.name} className="pt-6 pb-2">
              {/* En-tête du groupe - Plus typographique */}
              <div className={`
                flex items-center gap-4 px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em]
                ${isGroupActive ? "text-zinc-900" : "text-zinc-400"}
              `}>
                <span>{group.name}</span>
              </div>
              
              {/* Sous-éléments avec ligne de liaison latérale */}
              <div className="mt-1 ml-7 border-l-2 border-zinc-100 space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        group flex items-center justify-between px-5 py-3 text-[14px] font-bold transition-all
                        ${isActive 
                          ? "text-zinc-900" 
                          : "text-zinc-500 hover:text-zinc-900 hover:translate-x-1"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <item.icon 
                          className={`w-4 h-4 transition-colors ${isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-900"}`}
                          strokeWidth={isActive ? 2.5 : 2} 
                        />
                        <span className="tracking-tight">{item.name}</span>
                      </div>

                      {/* Indicateur de sélection minimaliste */}
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 mr-1" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* 3. FOOTER : ALERTES, PARAMÈTRES & PROFIL */}
      <div className="p-3 border-t border-zinc-100 space-y-1">
        <Link 
          href="/dashboard/settings"
          className={`flex items-center gap-4 px-5 py-4 rounded-lg text-[15px] font-bold transition-colors
            ${pathname === "/dashboard/settings" ? "bg-zinc-200 text-zinc-900" : "text-zinc-500 hover:bg-zinc-100"}
          `}
        >
          <LuSettings className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900" />
          <span>Paramètres</span>
        </Link>

        {/* PROFIL CARRÉ */}
        <div className="flex items-center justify-between p-3 mt-2 hover:bg-zinc-100 rounded-lg transition-all cursor-pointer group border border-transparent">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-zinc-900 flex items-center justify-center text-[11px] font-black text-white">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-black text-zinc-900 leading-none">John Doe</span>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-1.5">Admin</span>
            </div>
          </div>
          <LuChevronsUpDown className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900" />
        </div>
      </div>
    </aside>
  );
}