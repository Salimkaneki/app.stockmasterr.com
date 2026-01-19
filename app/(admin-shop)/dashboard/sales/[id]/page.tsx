import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { InfoCard } from '@/components/ui/layout/InfoCard'
import { LuArrowLeft, LuPrinter, LuReceipt, LuUser, LuCalendar, LuDollarSign, LuPackage, LuTruck } from 'react-icons/lu'
import Link from 'next/link'

export default function SaleDetailPage({ params }: { params: { id: string } }) {
  return (
    <PageLayout>
      <PageHeader
        title="Détail Vente"
        description={`Vente #${params.id}`}
        backLink={{
          href: '/dashboard/sales',
          label: 'Retour aux ventes'
        }}
      >
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
            <LuPrinter className="w-4 h-4" />
            Réimprimer ticket
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors">
            <LuReceipt className="w-4 h-4" />
            Voir facture
          </button>
        </div>
      </PageHeader>

      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Détail de la vente */}
          <div className="lg:col-span-2 space-y-6">
            {/* En-tête vente */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">Vente #{params.id}</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <LuCalendar className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">15 janv. 2024, 14:30</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuUser className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">Client #{params.id}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-zinc-900">€89.99</div>
                  <div className="text-sm text-green-600 font-medium">Payée</div>
                </div>
              </div>

              {/* Articles vendus */}
              <div className="border-t border-zinc-200 pt-6">
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Articles vendus</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center">
                        <LuPackage className="w-6 h-6 text-zinc-400" />
                      </div>
                      <div>
                        <p className="font-medium">Produit Exemple #1</p>
                        <p className="text-sm text-zinc-500">SKU: PROD-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-500">Qté: 2 × €29.99</p>
                      <p className="font-semibold">€59.98</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center">
                        <LuPackage className="w-6 h-6 text-zinc-400" />
                      </div>
                      <div>
                        <p className="font-medium">Produit Exemple #2</p>
                        <p className="text-sm text-zinc-500">SKU: PROD-002</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-500">Qté: 1 × €29.99</p>
                      <p className="font-semibold">€29.99</p>
                    </div>
                  </div>
                </div>

                {/* Totaux */}
                <div className="border-t border-zinc-200 mt-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Sous-total</span>
                      <span>€89.97</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">TVA (20%)</span>
                      <span>€17.99</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg border-t border-zinc-200 pt-2">
                      <span>Total</span>
                      <span>€107.96</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations de livraison */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                <LuTruck className="w-5 h-5" />
                Livraison
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Adresse de livraison</h4>
                  <div className="text-sm text-zinc-600">
                    <p>Client Exemple #{params.id}</p>
                    <p>123 Rue de la Paix</p>
                    <p>75001 Paris</p>
                    <p>France</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Statut livraison</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-zinc-600">Commande préparée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-zinc-600">Expédiée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-zinc-600">Livrée</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <InfoCard title="Paiement">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Méthode</span>
                  <span className="font-semibold">Espèces</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Montant reçu</span>
                  <span className="font-semibold">€110.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Monnaie</span>
                  <span className="font-semibold">€2.04</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Caissier</span>
                  <span className="font-semibold">John Doe</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Statut commande">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Statut</span>
                  <span className="font-semibold text-blue-600">En cours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Date commande</span>
                  <span className="font-semibold">15 janv. 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Date livraison</span>
                  <span className="font-semibold">17 janv. 2024</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Actions">
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-50 rounded">
                  Modifier commande
                </button>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-50 rounded">
                  Annuler commande
                </button>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-50 rounded">
                  Contacter client
                </button>
              </div>
            </InfoCard>
          </div>
        </div>
      </PageContainer>
    </PageLayout>
  )
}