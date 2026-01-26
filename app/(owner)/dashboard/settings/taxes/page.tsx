"use client";

import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { FormSection } from '@/components/ui/layout/FormSection'
import { Input } from '@/components/ui/forms/Input'
import { Select } from '@/components/ui/forms/Select'
import { Checkbox } from '@/components/ui/forms/Checkbox'
import { LuArrowLeft, LuSave, LuPercent, LuPlus, LuTrash2 } from 'react-icons/lu'
import Link from 'next/link'
import { useState } from 'react'

export default function TaxesSettingsPage() {
  const [defaultVat, setDefaultVat] = useState('20')
  const [country, setCountry] = useState('france')
  const [declarationPeriod, setDeclarationPeriod] = useState('monthly')
  return (
    <PageLayout>
      <PageHeader
        title="Configuration des Taxes"
        description="Gérer les taux de TVA et règles fiscales"
        backLink={{
          href: '/dashboard/settings',
          label: 'Retour aux paramètres'
        }}
      >
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
          <LuSave className="w-4 h-4" />
          Sauvegarder
        </button>
      </PageHeader>

      <PageContainer>
        <div className="max-w-4xl space-y-8">
          <FormSection title="Taux de TVA par défaut">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="TVA par défaut"
                options={[
                  { value: '20', label: 'TVA 20% (standard)' },
                  { value: '10', label: 'TVA 10% (produits alimentaires)' },
                  { value: '5.5', label: 'TVA 5.5% (eau, médicaments)' },
                  { value: '2.1', label: 'TVA 2.1% (livres)' },
                  { value: '0', label: 'TVA 0% (exonéré)' }
                ]}
                value={defaultVat}
                onChange={setDefaultVat}
              />
              <div className="flex items-center gap-2">
                <Checkbox defaultChecked />
                <span className="text-sm">Inclure la TVA dans les prix affichés</span>
              </div>
            </div>
          </FormSection>

          <FormSection title="Taux de TVA personnalisés">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuPercent className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">Alimentation générale</p>
                    <p className="text-sm text-zinc-600">Produits alimentaires transformés</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="10.00"
                    className="w-20"
                    defaultValue="10"
                  />
                  <span className="text-sm">%</span>
                  <Checkbox defaultChecked />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuPercent className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">Boissons alcoolisées</p>
                    <p className="text-sm text-zinc-600">Vins, bières, spiritueux</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="20.00"
                    className="w-20"
                    defaultValue="20"
                  />
                  <span className="text-sm">%</span>
                  <Checkbox defaultChecked />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuPercent className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">Produits culturels</p>
                    <p className="text-sm text-zinc-600">Livres, journaux, musique</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="2.10"
                    className="w-20"
                    defaultValue="2.1"
                  />
                  <span className="text-sm">%</span>
                  <Checkbox />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuPercent className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">Produits médicaux</p>
                    <p className="text-sm text-zinc-600">Médicaments, équipements médicaux</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="5.50"
                    className="w-20"
                    defaultValue="5.5"
                  />
                  <span className="text-sm">%</span>
                  <Checkbox />
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-4 py-2 text-zinc-600 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors">
                <LuPlus className="w-4 h-4" />
                Ajouter un taux personnalisé
              </button>
            </div>
          </FormSection>

          <FormSection title="Configuration fiscale">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Input
                label="Numéro de TVA intracommunautaire"
                placeholder="FR12345678901"
              />
              <div className="flex items-center gap-2">
                <Checkbox />
                <span className="text-sm">Assujetti à la TVA</span>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox defaultChecked />
                <span className="text-sm">Franchise en base de TVA</span>
              </div>
            </div>
          </FormSection>

          <FormSection title="Seuils et exemptions">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Seuil de franchise TVA (€)"
                  placeholder="34500"
                  type="number"
                />
                <Input
                  label="Seuil d'exonération (€)"
                  placeholder="90000"
                  type="number"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Rappel des seuils français</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Franchise en base de TVA : 36 800 € (2024)</li>
                  <li>• Régime réel simplifié : jusqu'à 250 000 €</li>
                  <li>• Régime réel normal : au-delà de 250 000 €</li>
                </ul>
              </div>
            </div>
          </FormSection>

          <FormSection title="Options d'affichage">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Afficher les prix TTC</p>
                  <p className="text-sm text-zinc-600">Inclure la TVA dans tous les prix affichés</p>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Détailler la TVA sur les reçus</p>
                  <p className="text-sm text-zinc-600">Montrer le détail TVA par taux sur les tickets</p>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Arrondi automatique</p>
                  <p className="text-sm text-zinc-600">Arrondir les montants de TVA au centime près</p>
                </div>
                <Checkbox defaultChecked />
              </div>
            </div>
          </FormSection>

          <FormSection title="Rapports fiscaux">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Génération automatique des déclarations</p>
                  <p className="text-sm text-zinc-600">Créer automatiquement les fichiers de déclaration TVA</p>
                </div>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Archivage des données fiscales</p>
                  <p className="text-sm text-zinc-600">Conserver les données fiscales pendant 10 ans</p>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Période de déclaration"
                  options={[
                    { value: 'monthly', label: 'Mensuelle' },
                    { value: 'quarterly', label: 'Trimestrielle' },
                    { value: 'annual', label: 'Annuelle' }
                  ]}
                  value={declarationPeriod}
                  onChange={setDeclarationPeriod}
                />
                <Input
                  label="Date limite de déclaration"
                  placeholder="20"
                  type="number"
                />
              </div>
            </div>
          </FormSection>
        </div>
      </PageContainer>
    </PageLayout>
  )
}