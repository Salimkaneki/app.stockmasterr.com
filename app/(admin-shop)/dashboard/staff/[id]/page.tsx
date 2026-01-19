import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { InfoCard } from '@/components/ui/layout/InfoCard'
import { LuArrowLeft, LuPencil, LuTrash2, LuUser, LuMail, LuPhone, LuMapPin, LuCalendar, LuDollarSign, LuShield } from 'react-icons/lu'
import Link from 'next/link'
import { use } from 'react'

export default function StaffDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return (
    <PageLayout>
      <PageHeader
        title="Détail Employé"
        description={`Employé #${id}`}
        backLink={{
          href: '/dashboard/staff',
          label: 'Retour au personnel'
        }}
      >
        <div className="flex gap-2">
          <Link
            href={`/dashboard/staff/${id}/edit`}
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
                  <LuUser className="w-8 h-8 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-zinc-900">Employé Exemple #{id}</h2>
                  <p className="text-zinc-600 mt-1">Caissier - Depuis le 15 janvier 2024</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <LuMail className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">employe{id}@boutique.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuPhone className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-600">+33 6 XX XX XX XX</span>
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

            {/* Historique des ventes */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                <LuDollarSign className="w-5 h-5" />
                Statistiques de vente
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-zinc-50 rounded-lg">
                  <p className="text-2xl font-bold text-zinc-900">€2,450</p>
                  <p className="text-sm text-zinc-600">Ventes ce mois</p>
                </div>
                <div className="text-center p-4 bg-zinc-50 rounded-lg">
                  <p className="text-2xl font-bold text-zinc-900">127</p>
                  <p className="text-sm text-zinc-600">Transactions</p>
                </div>
                <div className="text-center p-4 bg-zinc-50 rounded-lg">
                  <p className="text-2xl font-bold text-zinc-900">€19.29</p>
                  <p className="text-sm text-zinc-600">Panier moyen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar avec stats */}
          <div className="space-y-6">
            <InfoCard title="Informations employé">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Rôle</span>
                  <span className="font-semibold">Caissier</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Statut</span>
                  <span className="font-semibold text-green-600">Actif</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Début contrat</span>
                  <span className="font-semibold">15 janv. 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Salaire horaire</span>
                  <span className="font-semibold">€12.50</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Permissions">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LuShield className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Ventes</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuShield className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuShield className="w-4 h-4 text-red-500" />
                  <span className="text-sm">Paramètres</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuShield className="w-4 h-4 text-red-500" />
                  <span className="text-sm">Suppression données</span>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Horaires de travail">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h - 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </PageContainer>
    </PageLayout>
  )
}