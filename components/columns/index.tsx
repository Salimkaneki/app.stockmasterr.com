import { Column } from '../data';
import { UserProfile, StatusBadge } from '../ui';
import { formatPrice, formatQuantity, getStatusColor, getInitials } from '../helpers';
import { LuShieldCheck, LuTriangleAlert, LuImage, LuPen, LuTrash } from 'react-icons/lu';

// --- COLONNES STANDARD POUR LES UTILISATEURS/MEMBRES ---
export const createUserColumns = (onEdit?: (item: any) => void, onDelete?: (item: any) => void): Column[] => [
  {
    key: "user",
    label: "Membre",
    render: (_, member) => (
      <UserProfile
        name={(member as any).name}
        email={(member as any).email}
        initials={getInitials((member as any).name)}
        avatar={(member as any).avatar}
      />
    )
  },
  {
    key: "role",
    label: "Rôle",
    render: (role) => (
      <div className="flex items-center gap-2">
        <LuShieldCheck className="w-3 h-3 text-zinc-400" />
        <span className="text-sm text-zinc-600 font-['Google_Sans']">{role as string}</span>
      </div>
    )
  },
  {
    key: "status",
    label: "Statut",
    render: (status) => <StatusBadge status={status as string} />
  },
  {
    key: "sales",
    label: "Ventes",
    render: (sales) => (
      <span className="text-sm font-medium text-zinc-900 font-['Google_Sans']">
        {formatPrice(sales as number)}
      </span>
    )
  },
  {
    key: "actions",
    label: "Actions",
    render: (_, item) => (
      <div className="flex gap-2">
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onEdit?.(item)}
        >
          <LuPen className="w-4 h-4 text-zinc-600" />
        </button>
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onDelete?.(item)}
        >
          <LuTrash className="w-4 h-4 text-zinc-600" />
        </button>
      </div>
    )
  }
];

// --- COLONNES STANDARD POUR LES CLIENTS ---
export const createCustomerColumns = (onEdit?: (item: any) => void, onDelete?: (item: any) => void): Column[] => [
  {
    key: "user",
    label: "Client",
    render: (_, customer) => (
      <UserProfile
        name={(customer as any).name}
        email={(customer as any).email}
        initials={getInitials((customer as any).name)}
        avatar={(customer as any).avatar}
        animated={true}
      />
    )
  },
  {
    key: "status",
    label: "Statut",
    render: (status) => <StatusBadge status={status as string} />
  },
  {
    key: "totalOrders",
    label: "Commandes",
    render: (orders) => (
      <span className="text-sm font-medium text-zinc-900 font-['Google_Sans']">
        {orders as number}
      </span>
    )
  },
  {
    key: "totalSpent",
    label: "Total dépensé",
    render: (spent) => (
      <span className="text-sm font-medium text-zinc-900 font-['Google_Sans']">
        {formatPrice(spent as number)}
      </span>
    )
  },
  {
    key: "actions",
    label: "Actions",
    render: (_, item) => (
      <div className="flex gap-2">
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onEdit?.(item)}
        >
          <LuPen className="w-4 h-4 text-zinc-600" />
        </button>
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onDelete?.(item)}
        >
          <LuTrash className="w-4 h-4 text-zinc-600" />
        </button>
      </div>
    )
  }
];

// --- COLONNES STANDARD POUR LES PRODUITS ---
export const createProductColumns = (onEdit?: (item: any) => void, onDelete?: (item: any) => void): Column[] => [
  {
    key: "name",
    label: "Article",
    render: (_, item) => (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
          <LuImage className="w-4 h-4 text-zinc-300" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-zinc-900 text-base font-['Google_Sans']">{(item as any).name}</span>
          <span className="text-xs text-zinc-400 uppercase font-medium tracking-wider">{(item as any).category}</span>
        </div>
      </div>
    )
  },
  {
    key: "sku",
    label: "SKU",
    render: (val) => <span className="text-sm font-mono text-zinc-500 uppercase">{val as string}</span>
  },
  {
    key: "price",
    label: "Prix",
    render: (price) => (
      <span className="text-sm font-medium text-zinc-900 font-['Google_Sans']">
        {formatPrice(price as number)}
      </span>
    )
  },
  {
    key: "status",
    label: "État Stock",
    render: (status) => {
      const statusValue = status as string;
      return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(statusValue)}`}>
          {statusValue}
        </span>
      );
    }
  },
  {
    key: "actions",
    label: "Actions",
    render: (_, item) => (
      <div className="flex gap-2">
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onEdit?.(item)}
        >
          <LuPen className="w-4 h-4 text-zinc-600" />
        </button>
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onDelete?.(item)}
        >
          <LuTrash className="w-4 h-4 text-zinc-600" />
        </button>
      </div>
    )
  }
];

// --- COLONNES STANDARD POUR LE STOCK ---
export const createStockColumns = (onEdit?: (item: any) => void, onDelete?: (item: any) => void): Column[] => [
  {
    key: "sku",
    label: "SKU",
    render: (val) => <span className="text-zinc-400 font-mono text-xs uppercase">{val as string}</span>
  },
  {
    key: "name",
    label: "Produit",
    render: (_, row) => (
      <div className="flex flex-col">
        <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{(row as any).name}</span>
        <span className="text-xs text-zinc-400 font-['Google_Sans']">{(row as any).category}</span>
      </div>
    )
  },
  {
    key: "quantity",
    label: "Quantité",
    render: (qty) => {
      const quantity = qty as number;
      const isLow = quantity <= 5;
      return (
        <div className="flex items-center gap-2">
          <span className={`font-medium font-['Google_Sans'] ${isLow ? "text-rose-600" : "text-zinc-900"}`}>
            {formatQuantity(quantity)}
          </span>
          {isLow && <LuTriangleAlert className="w-3 h-3 text-rose-500" />}
        </div>
      );
    }
  },
  {
    key: "price",
    label: "Prix",
    render: (price) => (
      <span className="font-medium text-zinc-900 font-['Google_Sans']">
        {formatPrice(price as number)}
      </span>
    )
  },
  {
    key: "status",
    label: "Statut",
    render: (status) => <StatusBadge status={status as string} />
  },
  {
    key: "actions",
    label: "Actions",
    render: (_, item) => (
      <div className="flex gap-2">
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onEdit?.(item)}
        >
          <LuPen className="w-4 h-4 text-zinc-600" />
        </button>
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onDelete?.(item)}
        >
          <LuTrash className="w-4 h-4 text-zinc-600" />
        </button>
      </div>
    )
  }
];

// --- COLONNES STANDARD POUR LES VENTES ---
export const createSalesColumns = (onEdit?: (item: any) => void, onDelete?: (item: any) => void): Column[] => [
  {
    key: "orderNumber",
    label: "Référence",
    render: (val) => <span className="font-semibold text-zinc-900 font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "customer",
    label: "Client",
    render: (_, sale) => (
      <div className="flex flex-col">
        <span className="text-zinc-900 font-medium font-['Google_Sans'] text-base">{(sale as any).customer}</span>
        <span className="text-xs text-zinc-400 uppercase tracking-tighter font-['Google_Sans']">{(sale as any).date}</span>
      </div>
    )
  },
  {
    key: "amount",
    label: "Montant",
    align: "right",
    render: (amount) => (
      <span className="font-medium text-zinc-900 font-['Google_Sans']">
        {formatPrice(amount as number)}
      </span>
    )
  },
  {
    key: "status",
    label: "État",
    render: (status) => <StatusBadge status={status as string} />
  },
  {
    key: "paymentMethod",
    label: "Méthode",
    render: (val) => <span className="text-zinc-500 text-xs font-['Google_Sans']">{val as string}</span>
  },
  {
    key: "actions",
    label: "Actions",
    render: (_, item) => (
      <div className="flex gap-2">
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onEdit?.(item)}
        >
          <LuPen className="w-4 h-4 text-zinc-600" />
        </button>
        <button
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => onDelete?.(item)}
        >
          <LuTrash className="w-4 h-4 text-zinc-600" />
        </button>
      </div>
    )
  }
];