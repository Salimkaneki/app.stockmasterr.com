"use client";

import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { FormSection } from '@/components/ui/layout/FormSection'
import { Input } from '@/components/ui/forms/Input'
import { Select } from '@/components/ui/forms/Select'
import { Textarea } from '@/components/ui/forms/Textarea'
import { LuArrowLeft, LuSave, LuX } from 'react-icons/lu'
import Link from 'next/link'
import { useState } from 'react'

export default function SupplierNewPage() {
  const [category, setCategory] = useState('alimentation')
  const [country, setCountry] = useState('france')
  const [status, setStatus] = useState('actif')
  return (
    <PageLayout>
      <PageHeader
        title="Nouveau Fournisseur"
        description="Ajouter un nouveau fournisseur à votre réseau"
        backLink={{
          href: '/dashboard/suppliers',
          label: 'Retour aux fournisseurs'
        }}
      >
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
            <LuSave className="w-4 h-4" />
            Sauvegarder
          </button>
          <Link
            href="/dashboard/suppliers"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors"
          >
            <LuX className="w-4 h-4" />
            Annuler
          </Link>
        </div>
      </PageHeader>

      <PageContainer>
        <div className="max-w-4xl space-y-8">
          <FormSection title="Informations générales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nom de l'entreprise"
                placeholder="Nom du fournisseur"
                required
              />
              <Input
                label="Numéro SIRET"
                placeholder="123 456 789 01234"
              />
              <Input
                label="Contact principal"
                placeholder="Nom du contact"
              />
              <Input
                label="Téléphone"
                type="tel"
                placeholder="+33 1 XX XX XX XX"
              />
              <Input
                label="Email"
                type="email"
                placeholder="contact@fournisseur.com"
              />
              <Select
                label="Catégorie"
                options={[
                  { value: 'alimentation', label: 'Alimentation' },
                  { value: 'textile', label: 'Textile' },
                  { value: 'electronique', label: 'Électronique' },
                  { value: 'cosmetique', label: 'Cosmétique' },
                  { value: 'autre', label: 'Autre' }
                ]}
                value={category}
                onChange={setCategory}
              />
            </div>
          </FormSection>

          <FormSection title="Adresse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Adresse"
                placeholder="123 Rue de la Paix"
                required
              />
              <Input
                label="Complément d'adresse"
                placeholder="Bâtiment, étage, etc."
              />
              <Input
                label="Code postal"
                placeholder="75001"
                required
              />
              <Input
                label="Ville"
                placeholder="Paris"
                required
              />
              <Select
                label="Pays"
                options={[
                  { value: 'france', label: 'France' },
                  { value: 'belgique', label: 'Belgique' },
                  { value: 'suisse', label: 'Suisse' },
                  { value: 'espagne', label: 'Espagne' },
                  { value: 'italie', label: 'Italie' }
                ]}
                value={country}
                onChange={setCountry}
              />
            </div>
          </FormSection>

          <FormSection title="Informations commerciales">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Conditions de paiement"
                placeholder="30 jours fin de mois"
              />
              <Input
                label="Délai de livraison moyen"
                placeholder="3-5 jours ouvrés"
              />
              <Input
                label="Minimum de commande"
                placeholder="€500"
              />
              <Select
                label="Statut"
                options={[
                  { value: 'actif', label: 'Actif' },
                  { value: 'inactif', label: 'Inactif' },
                  { value: 'prospect', label: 'Prospect' }
                ]}
                value={status}
                onChange={setStatus}
              />
            </div>
          </FormSection>

          <FormSection title="Notes et commentaires">
            <Textarea
              label="Notes internes"
              placeholder="Informations complémentaires sur ce fournisseur..."
              rows={4}
            />
          </FormSection>
        </div>
      </PageContainer>
    </PageLayout>
  )
}