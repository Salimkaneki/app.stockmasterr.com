import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { InfoCard } from '@/components/ui/layout/InfoCard'
import { LuArrowLeft, LuPencil, LuTrash2, LuBuilding, LuMail, LuPhone, LuMapPin, LuPackage, LuDollarSign, LuCalendar } from 'react-icons/lu'
import Link from 'next/link'
import { use } from 'react'

export default function SupplierDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return (
    <PageLayout>
      <PageHeader
        title="Détail Fournisseur"
        description={`Fournisseur #${id}`}
        backLink={{
          href: '/dashboard/suppliers',
          label: 'Retour aux fournisseurs'
        }}
      >
        <div className="flex gap-2">
          <Link
            href={`/dashboard/suppliers/${id}/edit`}
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
          {/* Infos principales */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <div className="flex gap-6">
                <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center">
                  <LuBuilding className="w-8 h-8 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-zinc-900">Fournisseur Exemple #{id}</h2>
                  <p className="text-zinc-600 mt-1">Catégorie: Alimentation - Depuis le 15 janvier 2024</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <LuMail className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">{`contactfournisseur${id}@example.com`}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuPhone className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">+33 1 XX XX XX XX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                <LuMapPin className="w-5 h-5" />
                Adresse
              </h3>
              <div className="text-zinc-700">
                <p>123 Rue de la Paix</p>
                <p>75001 Paris</p>
                <p>France</p>
              </div>
            </div>

            {/* Produits fournis */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                <LuPackage className="w-5 h-5" />
                Produits fournis
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                  <div>
                    <p className="font-medium">Produit #1234</p>
                    <p className="text-sm text-zinc-500">Catégorie: Alimentation</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">€25.99</p>
                    <p className="text-sm text-green-600">En stock</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                  <div>
                    <p className="font-medium">Produit #1235</p>
                    <p className="text-sm text-zinc-500">Catégorie: Alimentation</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">€12.50</p>
                    <p className="text-sm text-orange-600">Stock faible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historique des commandes */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                <LuCalendar className="w-5 h-5" />
                Dernières commandes
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                  <div>
                    <p className="font-medium">Commande #CMD-2024-001</p>
                    <p className="text-sm text-zinc-500">15 janv. 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">€1,245.67</p>
                    <p className="text-sm text-green-600">Livrée</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                  <div>
                    <p className="font-medium">Commande #CMD-2024-002</p>
                    <p className="text-sm text-zinc-500">10 janv. 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">€890.50</p>
                    <p className="text-sm text-blue-600">En cours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar avec stats */}
          <div className="space-y-6">
            <InfoCard title="Statistiques fournisseur">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Total commandes</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Montant total</span>
                  <span className="font-semibold">€18,450.67</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Commande moyenne</span>
                  <span className="font-semibold">€768.78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Dernière commande</span>
                  <span className="font-semibold">15 janv.</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Informations commerciales">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Conditions paiement</span>
                  <span className="font-semibold">30 j. fin de mois</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Délai livraison</span>
                  <span className="font-semibold">3-5 jours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Minimum commande</span>
                  <span className="font-semibold">€500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Statut</span>
                  <span className="font-semibold text-green-600">Actif</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Contact principal">
              <div className="space-y-2">
                <p className="font-medium">Jean Dupont</p>
                <p className="text-sm text-zinc-600">Directeur commercial</p>
                <div className="pt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <LuPhone className="w-3 h-3 text-zinc-400" />
                    <span className="text-sm">+33 6 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuMail className="w-3 h-3 text-zinc-400" />
                    <span className="text-sm">jean.dupont@fournisseur.com</span>
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </PageContainer>
    </PageLayout>
  )
}