import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { InfoCard } from '@/components/ui/layout/InfoCard'
import { LuArrowLeft, LuPencil, LuTrash2, LuPackage, LuDollarSign, LuTag } from 'react-icons/lu'
import Link from 'next/link'
import { use } from 'react'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  return (
    <PageLayout>
      <PageHeader
        title="Détail Produit"
        description={`Produit #${id}`}
        backLink={{
          href: '/dashboard/products',
          label: 'Retour aux produits'
        }}
      >
        <div className="flex gap-2">
          <Link
            href={`/dashboard/products/${id}/edit`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <LuPencil className="w-4 h-4" />
            Modifier
          </Link>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <LuTrash2 className="w-4 h-4" />
            Supprimer
          </button>
        </div>
      </PageHeader>

      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image et infos principales */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <div className="flex gap-6">
                <div className="w-32 h-32 bg-zinc-100 rounded-lg flex items-center justify-center">
                  <LuPackage className="w-12 h-12 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-zinc-900">Produit Exemple #{id}</h2>
                  <p className="text-zinc-600 mt-2">Description détaillée du produit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <LuTag className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">SKU: PROD-{id}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuDollarSign className="w-4 h-4 text-zinc-400" />
                      <span className="text-lg font-semibold text-zinc-900">€29.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations détaillées */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Informations détaillées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-zinc-500">Catégorie</label>
                  <p className="text-zinc-900">Électronique</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-500">Marque</label>
                  <p className="text-zinc-900">Marque Exemple</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-500">Poids</label>
                  <p className="text-zinc-900">1.5 kg</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-500">Dimensions</label>
                  <p className="text-zinc-900">30x20x10 cm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar avec stats */}
          <div className="space-y-6">
            <InfoCard title="Statistiques">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Stock actuel</span>
                  <span className="font-semibold">45 unités</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Vendus ce mois</span>
                  <span className="font-semibold">23 unités</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Revenus générés</span>
                  <span className="font-semibold">€689.77</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Prix et marges">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Prix d'achat</span>
                  <span className="font-semibold">€15.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Prix de vente</span>
                  <span className="font-semibold">€29.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Marge</span>
                  <span className="font-semibold text-green-600">50%</span>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </PageContainer>
    </PageLayout>
  )
}