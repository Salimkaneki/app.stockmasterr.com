"use client";

import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { FormSection } from '@/components/ui/layout/FormSection'
import { Input } from '@/components/ui/forms/Input'
import { Select } from '@/components/ui/forms/Select'
import { Checkbox } from '@/components/ui/forms/Checkbox'
import { LuArrowLeft, LuSave, LuCreditCard, LuWallet, LuBanknote } from 'react-icons/lu'
import Link from 'next/link'
import { useState } from 'react'

export default function PaymentsSettingsPage() {
  const [stripeMode, setStripeMode] = useState('test')
  const [currency, setCurrency] = useState('EUR')
  return (
    <PageLayout>
      <PageHeader
        title="Configuration des Paiements"
        description="Gérer les méthodes de paiement et les passerelles"
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
          <FormSection title="Méthodes de paiement acceptées">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuCreditCard className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">Carte bancaire</p>
                    <p className="text-sm text-zinc-600">Visa, Mastercard, American Express</p>
                  </div>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuWallet className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">Portefeuille mobile</p>
                    <p className="text-sm text-zinc-600">Apple Pay, Google Pay, Samsung Pay</p>
                  </div>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuBanknote className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">Espèces</p>
                    <p className="text-sm text-zinc-600">Paiement en espèces à la caisse</p>
                  </div>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-zinc-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-zinc-600">CB</span>
                  </div>
                  <div>
                    <p className="font-medium">Chèque</p>
                    <p className="text-sm text-zinc-600">Paiement par chèque</p>
                  </div>
                </div>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-zinc-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-zinc-600">VIR</span>
                  </div>
                  <div>
                    <p className="font-medium">Virement bancaire</p>
                    <p className="text-sm text-zinc-600">Paiement par virement</p>
                  </div>
                </div>
                <Checkbox />
              </div>
            </div>
          </FormSection>

          <FormSection title="Configuration Stripe">
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Configuration requise:</strong> Pour accepter les paiements en ligne, vous devez configurer votre compte Stripe.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Clé publique Stripe"
                  placeholder="pk_test_..."
                  type="password"
                />
                <Input
                  label="Clé secrète Stripe"
                  placeholder="sk_test_..."
                  type="password"
                />
                <Select
                  label="Mode"
                  options={[
                    { value: 'test', label: 'Mode test' },
                    { value: 'live', label: 'Mode production' }
                  ]}
                  value={stripeMode}
                  onChange={setStripeMode}
                />
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-sm">Activer les webhooks</span>
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection title="Limites et restrictions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Montant minimum par transaction"
                placeholder="0.00"
                type="number"
                step="0.01"
              />
              <Input
                label="Montant maximum par transaction"
                placeholder="10000.00"
                type="number"
                step="0.01"
              />
              <Input
                label="Limite de remboursement (jours)"
                placeholder="30"
                type="number"
              />
              <Select
                label="Devise par défaut"
                options={[
                  { value: 'EUR', label: 'Euro (€)' },
                  { value: 'USD', label: 'Dollar ($)' },
                  { value: 'GBP', label: 'Livre sterling (£)' }
                ]}
                value={currency}
                onChange={setCurrency}
              />
            </div>
          </FormSection>

          <FormSection title="Options avancées">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Paiements partiels</p>
                  <p className="text-sm text-zinc-600">Permettre de payer en plusieurs fois</p>
                </div>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Validation manuelle</p>
                  <p className="text-sm text-zinc-600">Exiger une validation manuelle pour les gros montants</p>
                </div>
                <Checkbox />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notifications par email</p>
                  <p className="text-sm text-zinc-600">Envoyer des confirmations de paiement</p>
                </div>
                <Checkbox defaultChecked />
              </div>
            </div>
          </FormSection>
        </div>
      </PageContainer>
    </PageLayout>
  )
}