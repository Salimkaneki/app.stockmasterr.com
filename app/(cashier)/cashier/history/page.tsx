"use client";

import { useState } from 'react';
import { LuArrowLeft, LuSearch, LuReceipt, LuCalendar, LuDollarSign, LuUser, LuPrinter } from 'react-icons/lu';
import Link from 'next/link';

interface Sale {
  id: string;
  date: string;
  customer?: string;
  items: number;
  total: number;
  paymentMethod: string;
  status: 'completed' | 'refunded' | 'cancelled';
}

export default function SalesHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Mock sales data
  const sales: Sale[] = [
    {
      id: 'V20241201001',
      date: '2024-12-01T14:30:00',
      customer: 'Jean Dupont',
      items: 3,
      total: 45000,
      paymentMethod: 'Espèces',
      status: 'completed'
    },
    {
      id: 'V20241201002',
      date: '2024-12-01T15:45:00',
      items: 2,
      total: 25000,
      paymentMethod: 'Carte',
      status: 'completed'
    },
    {
      id: 'V20241201003',
      date: '2024-12-01T16:20:00',
      customer: 'Marie Martin',
      items: 1,
      total: 120000,
      paymentMethod: 'Mobile',
      status: 'completed'
    },
    {
      id: 'V20241130001',
      date: '2024-11-30T10:15:00',
      items: 4,
      total: 35000,
      paymentMethod: 'Espèces',
      status: 'refunded'
    },
  ];

  const filteredSales = sales.filter(sale => {
    const matchesSearch = sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sale.customer?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !dateFilter || sale.date.startsWith(dateFilter);
    return matchesSearch && matchesDate;
  });

  const totalSales = filteredSales
    .filter(sale => sale.status === 'completed')
    .reduce((sum, sale) => sum + sale.total, 0);

  const getStatusColor = (status: Sale['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'refunded': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: Sale['status']) => {
    switch (status) {
      case 'completed': return 'Terminée';
      case 'refunded': return 'Remboursée';
      case 'cancelled': return 'Annulée';
    }
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
            <h1 className="text-2xl font-bold text-zinc-900">Historique des Ventes</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-zinc-600">Total aujourd'hui</p>
              <p className="text-xl font-bold text-zinc-900">{totalSales.toLocaleString()} F</p>
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

      {/* Filters */}
      <div className="bg-white border-b border-zinc-200 px-6 py-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher par numéro de vente ou client..."
                className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg focus:border-zinc-900 focus:ring-0"
              />
            </div>
          </div>
          <div>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-zinc-300 rounded-lg focus:border-zinc-900 focus:ring-0"
            />
          </div>
        </div>
      </div>

      {/* Sales List */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    Vente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    Articles
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    Paiement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {filteredSales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-zinc-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <LuReceipt className="w-4 h-4 text-zinc-400 mr-2" />
                        <span className="text-sm font-medium text-zinc-900">{sale.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <LuCalendar className="w-4 h-4 text-zinc-400 mr-2" />
                        <span className="text-sm text-zinc-600">
                          {new Date(sale.date).toLocaleDateString('fr-FR')} à{' '}
                          {new Date(sale.date).toLocaleTimeString('fr-FR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {sale.customer ? (
                        <div className="flex items-center">
                          <LuUser className="w-4 h-4 text-zinc-400 mr-2" />
                          <span className="text-sm text-zinc-900">{sale.customer}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-zinc-400">Client anonyme</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-zinc-900">{sale.items} article{sale.items > 1 ? 's' : ''}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-zinc-900">{sale.paymentMethod}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <LuDollarSign className="w-4 h-4 text-zinc-400 mr-1" />
                        <span className="text-sm font-medium text-zinc-900">
                          {sale.total.toLocaleString()} F
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(sale.status)}`}>
                        {getStatusText(sale.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <LuPrinter className="w-4 h-4" />
                      </button>
                      <button className="text-zinc-600 hover:text-zinc-900">
                        Détails
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSales.length === 0 && (
            <div className="text-center py-12">
              <LuReceipt className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
              <p className="text-zinc-500">Aucune vente trouvée</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}