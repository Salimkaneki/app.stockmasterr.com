"use client";

import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { FormSection } from '@/components/ui/layout/FormSection'
import { Input } from '@/components/ui/forms/Input'
import { Select } from '@/components/ui/forms/Select'
import { LuArrowLeft, LuSave, LuX } from 'react-icons/lu'
import Link from 'next/link'
import { use } from 'react'

export default function CustomerEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  return (
    <PageLayout>
      <PageHeader
        title="Modifier Client"
        description={`Client #${id}`}
        backLink={{
          href: `/dashboard/customers/${id}`,
          label: 'Retour au détail'
        }}
      >
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
            <LuSave className="w-4 h-4" />
            Sauvegarder
          </button>
          <Link
            href={`/dashboard/customers/${id}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors"
          >
            <LuX className="w-4 h-4" />
            Annuler
          </Link>
        </div>
      </PageHeader>

      <PageContainer>
        <div className="max-w-4xl space-y-8">
          <FormSection title="Informations personnelles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Prénom"
                placeholder="Prénom du client"
                defaultValue="Jean"
              />
              <Input
                label="Nom"
                placeholder="Nom du client"
                defaultValue={`Dupont #${id}`}
              />
              <Input
                label="Email"
                type="email"
                placeholder="email@exemple.com"
                defaultValue={`client${id}@example.com`}
              />
              <Input
                label="Téléphone"
                placeholder="+33 6 XX XX XX XX"
                defaultValue="+33 6 XX XX XX XX"
              />
            </div>
          </FormSection>

          <FormSection title="Adresse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Adresse"
                placeholder="Numéro et rue"
                defaultValue="123 Rue de la Paix"
              />
              <Input
                label="Complément"
                placeholder="Appartement, étage..."
              />
              <Input
                label="Code postal"
                placeholder="75001"
                defaultValue="75001"
              />
              <Input
                label="Ville"
                placeholder="Paris"
                defaultValue="Paris"
              />
              <Select
                label="Pays"
                options={[
                  { value: 'fr', label: 'France' },
                  { value: 'be', label: 'Belgique' },
                  { value: 'ch', label: 'Suisse' },
                ]}
                value="fr"
                onChange={() => {}}
              />
            </div>
          </FormSection>

          <FormSection title="Préférences et statut">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Statut"
                options={[
                  { value: 'active', label: 'Actif' },
                  { value: 'inactive', label: 'Inactif' },
                  { value: 'suspended', label: 'Suspendu' },
                ]}
                value="active"
                onChange={() => {}}
              />
              <Select
                label="Segment"
                options={[
                  { value: 'vip', label: 'VIP' },
                  { value: 'regular', label: 'Régulier' },
                  { value: 'new', label: 'Nouveau' },
                ]}
                value="regular"
                onChange={() => {}}
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  defaultChecked
                  className="rounded border-zinc-300"
                />
                <label htmlFor="newsletter" className="text-sm text-zinc-700">
                  Inscription newsletter
                </label>
              </div>
            </div>
          </FormSection>

          <FormSection title="Notes internes">
            <textarea
              className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              rows={4}
              placeholder="Notes internes sur le client..."
              defaultValue="Client régulier, satisfait des services."
            />
          </FormSection>
        </div>
      </PageContainer>
    </PageLayout>
  )
}