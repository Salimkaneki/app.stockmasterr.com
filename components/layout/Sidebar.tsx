"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { 
  LuLayoutDashboard, LuShoppingCart, LuUsers, 
  LuSettings, LuPackage, LuReceipt,
  LuSearch, LuChevronsUpDown, LuBell, LuCircleHelp
} from "react-icons/lu";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

const menuItems: MenuItem[] = [
  { name: "Tableau de bord", href: "/dashboard", icon: LuLayoutDashboard },
  { name: "Inventaire", href: "/dashboard/inventory", icon: LuPackage },
  { name: "Ventes", href: "/dashboard/sales", icon: LuShoppingCart },
  { name: "Clients", href: "/dashboard/customers", icon: LuUsers },
  { name: "Factures", href: "/dashboard/invoices", icon: LuReceipt },
  { name: "Paramètres", href: "/dashboard/settings", icon: LuSettings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const notificationCount = 5;

  return (
    <aside className="w-64 h-screen bg-white border-r border-zinc-100 flex flex-col sticky top-0 font-sans">
      
      {/* 1. Header: Simple & Clean */}
      <div className="h-20 px-6 flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-900 rounded-md flex items-center justify-center shrink-0">
             <div className="w-3 h-3 border-2 border-white rounded-sm" />
          </div>
          <p className="text-[15px] font-bold text-zinc-900 tracking-tight">Ma Boutique</p>
        </div>
      </div>

      {/* 2. Navigation: Lignes fines et texte clair */}
      <nav className="flex-1 px-3 mt-2 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div
              key={item.name}
              className={`
                group flex items-center gap-3 px-4 py-3 rounded-lg text-[16px] font-medium transition-colors cursor-pointer
                ${isActive 
                  ? "bg-zinc-200 text-zinc-900" 
                  : "text-zinc-900 hover:bg-zinc-100"
                }
              `}
            >
              <item.icon 
                className="w-5 h-5 text-zinc-900" 
                strokeWidth={isActive ? 2.5 : 2} 
              />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>

      {/* 3. Footer: Intégré sans boîtes lourdes */}
      <div className="p-3 border-t border-zinc-100">
        
        {/* Actions discrètes */}
        <div className="flex items-center gap-1 mb-2">
          <button className="flex-1 flex items-center gap-3 px-3 py-2 text-zinc-500 hover:bg-zinc-50 rounded-lg transition-colors text-[13px] font-medium">
            <LuCircleHelp className="w-5 h-5" />
            <span>Assistance</span>
          </button>
          <button className="relative p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
            <LuBell className="w-5 h-5" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
            )}
          </button>
        </div>

        {/* Profil minimaliste */}
        <div className="flex items-center justify-between p-2 hover:bg-zinc-50 rounded-lg transition-all cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-[12px] font-bold text-zinc-600">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-zinc-900">John Doe</span>
            </div>
          </div>
          <LuChevronsUpDown className="w-4 h-4 text-zinc-400" />
        </div>

      </div>
    </aside>
  );
}