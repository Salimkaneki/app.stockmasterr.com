"use client";

import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { FormSection } from '@/components/ui/layout/FormSection'
import { Input } from '@/components/ui/forms/Input'
import { Textarea } from '@/components/ui/forms/Textarea'
import { Select } from '@/components/ui/forms/Select'
import { LuArrowLeft, LuSave, LuX } from 'react-icons/lu'
import Link from 'next/link'

export default function ProductEditPage({ params }: { params: { id: string } }) {
  return (
    <PageLayout>
      <PageHeader
        title="Modifier Produit"
        description={`Produit #${params.id}`}
        backLink={{
          href: `/dashboard/products/${params.id}`,
          label: 'Retour au détail'
        }}
      >
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
            <LuSave className="w-4 h-4" />
            Sauvegarder
          </button>
          <Link
            href={`/dashboard/products/${params.id}`}
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
                label="Nom du produit"
                placeholder="Entrez le nom du produit"
                defaultValue={`Produit Exemple #${params.id}`}
              />
              <Input
                label="SKU"
                placeholder="Code produit unique"
                defaultValue={`PROD-${params.id}`}
              />
              <Select
                label="Catégorie"
                options={[
                  { value: 'electronics', label: 'Électronique' },
                  { value: 'clothing', label: 'Vêtements' },
                  { value: 'books', label: 'Livres' },
                ]}
                value="electronics"
                onChange={() => {}}
              />
              <Select
                label="Marque"
                options={[
                  { value: 'brand1', label: 'Marque 1' },
                  { value: 'brand2', label: 'Marque 2' },
                ]}
                value="brand1"
                onChange={() => {}}
              />
            </div>
            <Textarea
              label="Description"
              placeholder="Description détaillée du produit"
              rows={4}
              defaultValue="Description détaillée du produit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </FormSection>

          <FormSection title="Prix et stock">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Prix d'achat (€)"
                type="number"
                step="0.01"
                placeholder="0.00"
                defaultValue="15.00"
              />
              <Input
                label="Prix de vente (€)"
                type="number"
                step="0.01"
                placeholder="0.00"
                defaultValue="29.99"
              />
              <Input
                label="Stock actuel"
                type="number"
                placeholder="0"
                defaultValue="45"
              />
            </div>
          </FormSection>

          <FormSection title="Caractéristiques physiques">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Poids (kg)"
                type="number"
                step="0.1"
                placeholder="0.0"
                defaultValue="1.5"
              />
              <Input
                label="Longueur (cm)"
                type="number"
                placeholder="0"
                defaultValue="30"
              />
              <Input
                label="Largeur (cm)"
                type="number"
                placeholder="0"
                defaultValue="20"
              />
              <Input
                label="Hauteur (cm)"
                type="number"
                placeholder="0"
                defaultValue="10"
              />
            </div>
          </FormSection>

          <FormSection title="Images et médias">
            <div className="border-2 border-dashed border-zinc-300 rounded-lg p-8 text-center">
              <p className="text-zinc-500">Zone de dépôt d'images</p>
              <p className="text-sm text-zinc-400 mt-1">Glissez-déposez vos images ici ou cliquez pour sélectionner</p>
            </div>
          </FormSection>
        </div>
      </PageContainer>
    </PageLayout>
  )
}