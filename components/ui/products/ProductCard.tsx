import React from "react";

export interface ProductCardProps {
  name: string;
  price: number;
  sku?: string;
  category?: string;
  inStock?: boolean;
  image?: string;
  onClick?: () => void;
  className?: string;
}

export function ProductCard({
  name,
  price,
  sku,
  category,
  inStock = true,
  image,
  onClick,
  className = ""
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <button
      onClick={onClick}
      className={`group bg-white border-2 border-zinc-200 p-6 rounded-none hover:border-zinc-900 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all text-left flex flex-col active:translate-x-1 active:translate-y-1 active:shadow-none ${className}`}
    >
      <div className="mb-6 flex justify-between items-start">
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 ${
          inStock ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-500'
        }`}>
          {inStock ? 'En Stock' : 'Rupture'}
        </span>
        <p className="text-2xl font-mono font-black italic">{formatPrice(price)}</p>
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-zinc-900 text-lg leading-tight mb-2">{name}</h3>
        {category && (
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{category}</p>
        )}
        {sku && (
          <p className="text-xs text-zinc-400 font-mono mt-1">{sku}</p>
        )}
      </div>
    </button>
  );
}