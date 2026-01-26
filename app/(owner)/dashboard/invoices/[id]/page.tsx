import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { InfoCard } from '@/components/ui/layout/InfoCard'
import { LuArrowLeft, LuDownload, LuPrinter, LuFileText, LuUser, LuCalendar, LuDollarSign, LuCreditCard } from 'react-icons/lu'
import Link from 'next/link'
import { use } from 'react'

export default function InvoiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  return (
    <PageLayout>
      <PageHeader
        title="Détail Facture"
        description={`Facture #${id}`}
        backLink={{
          href: '/dashboard/invoices',
          label: 'Retour aux factures'
        }}
      >
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
            <LuDownload className="w-4 h-4" />
            Télécharger PDF
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors">
            <LuPrinter className="w-4 h-4" />
            Imprimer
          </button>
        </div>
      </PageHeader>

      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Détail de la facture */}
          <div className="lg:col-span-2 space-y-6">
            {/* En-tête facture */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">Facture #{id}</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <LuCalendar className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">15 janv. 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuUser className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">Client #{id}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-zinc-900">€149.99</div>
                  <div className="text-sm text-green-600 font-medium">Payée</div>
                </div>
              </div>

              {/* Articles */}
              <div className="border-t border-zinc-200 pt-6">
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Articles</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <div className="flex-1">
                      <p className="font-medium">Produit Exemple #1</p>
                      <p className="text-sm text-zinc-500">SKU: PROD-001</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-500">Qté: 2</p>
                      <p className="font-semibold">€59.98</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <div className="flex-1">
                      <p className="font-medium">Produit Exemple #2</p>
                      <p className="text-sm text-zinc-500">SKU: PROD-002</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-500">Qté: 1</p>
                      <p className="font-semibold">€89.99</p>
                    </div>
                  </div>
                </div>

                {/* Totaux */}
                <div className="border-t border-zinc-200 mt-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Sous-total</span>
                      <span>€149.97</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">TVA (20%)</span>
                      <span>€29.99</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg border-t border-zinc-200 pt-2">
                      <span>Total</span>
                      <span>€179.96</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations client */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Informations client</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Facturation</h4>
                  <div className="text-sm text-zinc-600">
                    <p>Client Exemple #{id}</p>
                    <p>123 Rue de la Paix</p>
                    <p>75001 Paris</p>
                    <p>client{id}@example.com</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Livraison</h4>
                  <div className="text-sm text-zinc-600">
                    <p>Client Exemple #{id}</p>
                    <p>123 Rue de la Paix</p>
                    <p>75001 Paris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <InfoCard title="Statut et paiement">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Statut</span>
                  <span className="font-semibold text-green-600">Payée</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Méthode</span>
                  <span className="font-semibold flex items-center gap-1">
                    <LuCreditCard className="w-4 h-4" />
                    CB
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Date paiement</span>
                  <span className="font-semibold">15 janv. 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Référence</span>
                  <span className="font-semibold text-xs">TXN-123456</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Actions">
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-50 rounded">
                  Envoyer par email
                </button>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-50 rounded">
                  Marquer comme envoyée
                </button>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-50 rounded">
                  Dupliquer
                </button>
              </div>
            </InfoCard>
          </div>
        </div>
      </PageContainer>
    </PageLayout>
  )
}