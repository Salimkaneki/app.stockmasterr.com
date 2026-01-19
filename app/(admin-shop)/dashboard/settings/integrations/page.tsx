"use client";

import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import { FormSection } from '@/components/ui/layout/FormSection'
import { Input } from '@/components/ui/forms/Input'
import { Select } from '@/components/ui/forms/Select'
import { Checkbox } from '@/components/ui/forms/Checkbox'
import { LuArrowLeft, LuSave, LuPrinter, LuScan, LuWifi, LuPlug } from 'react-icons/lu'
import Link from 'next/link'
import { useState } from 'react'

export default function IntegrationsSettingsPage() {
  const [printerType, setPrinterType] = useState('thermal')
  const [paperFormat, setPaperFormat] = useState('58mm')
  const [scannerType, setScannerType] = useState('usb')
  const [codeFormat, setCodeFormat] = useState('all')
  const [drawerModel, setDrawerModel] = useState('standard')
  const [storageService, setStorageService] = useState('local')
  return (
    <PageLayout>
      <PageHeader
        title="Intégrations"
        description="Connecter des appareils et services externes"
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
          <FormSection title="Imprimantes">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Imprimante de reçus"
                  options={[
                    { value: 'thermal', label: 'Imprimante thermique' },
                    { value: 'laser', label: 'Imprimante laser' },
                    { value: 'dot-matrix', label: 'Imprimante matricielle' }
                  ]}
                  value={printerType}
                  onChange={setPrinterType}
                />
                <Input
                  label="Adresse IP de l'imprimante"
                  placeholder="192.168.1.100"
                />
                <Select
                  label="Format de papier"
                  options={[
                    { value: '58mm', label: '58mm (standard)' },
                    { value: '80mm', label: '80mm (large)' },
                    { value: 'a4', label: 'A4' }
                  ]}
                  value={paperFormat}
                  onChange={setPaperFormat}
                />
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked />
                  <span className="text-sm">Impression automatique des reçus</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Configuration avancée</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Port USB"
                    placeholder="/dev/usb/lp0"
                  />
                  <Input
                    label="Vitesse de connexion"
                    placeholder="9600"
                  />
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection title="Scanners de codes-barres">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Type de scanner"
                  options={[
                    { value: 'usb', label: 'Scanner USB' },
                    { value: 'bluetooth', label: 'Scanner Bluetooth' },
                    { value: 'wifi', label: 'Scanner WiFi' },
                    { value: 'camera', label: 'Caméra intégrée' }
                  ]}
                  value={scannerType}
                  onChange={setScannerType}
                />
                <Input
                  label="ID du périphérique"
                  placeholder="SCANNER_001"
                />
                <Select
                  label="Format de codes"
                  options={[
                    { value: 'ean13', label: 'EAN-13' },
                    { value: 'code128', label: 'Code 128' },
                    { value: 'qrcode', label: 'QR Code' },
                    { value: 'all', label: 'Tous les formats' }
                  ]}
                  value={codeFormat}
                  onChange={setCodeFormat}
                />
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked />
                  <span className="text-sm">Son de confirmation</span>
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection title="Tiroir caisse">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Modèle de tiroir"
                  options={[
                    { value: 'standard', label: 'Tiroir standard' },
                    { value: 'programmable', label: 'Tiroir programmable' },
                    { value: 'connected', label: 'Tiroir connecté' }
                  ]}
                  value={drawerModel}
                  onChange={setDrawerModel}
                />
                <Input
                  label="Port de connexion"
                  placeholder="COM1 ou /dev/ttyUSB0"
                />
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked />
                  <span className="text-sm">Ouverture automatique</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-sm">Ouverture sur remboursement</span>
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection title="Services externes">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuPlug className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">API Google Sheets</p>
                    <p className="text-sm text-zinc-600">Synchronisation des données avec Google Sheets</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <button className="text-sm text-blue-600 hover:text-blue-800">Configurer</button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <LuWifi className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="font-medium">Webhook Slack</p>
                    <p className="text-sm text-zinc-600">Notifications en temps réel sur Slack</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <button className="text-sm text-blue-600 hover:text-blue-800">Configurer</button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-zinc-100 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-zinc-600">API</span>
                  </div>
                  <div>
                    <p className="font-medium">API REST personnalisée</p>
                    <p className="text-sm text-zinc-600">Connexion à votre système ERP</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <button className="text-sm text-blue-600 hover:text-blue-800">Configurer</button>
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection title="Synchronisation">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Synchronisation automatique</p>
                  <p className="text-sm text-zinc-600">Synchroniser les données toutes les heures</p>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sauvegarde cloud</p>
                  <p className="text-sm text-zinc-600">Sauvegarder automatiquement sur le cloud</p>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Fréquence de sauvegarde (heures)"
                  placeholder="24"
                  type="number"
                />
                <Select
                  label="Service de stockage"
                  options={[
                    { value: 'aws', label: 'Amazon S3' },
                    { value: 'gcp', label: 'Google Cloud' },
                    { value: 'azure', label: 'Azure Blob' },
                    { value: 'local', label: 'Stockage local' }
                  ]}
                  value={storageService}
                  onChange={setStorageService}
                />
              </div>
            </div>
          </FormSection>
        </div>
      </PageContainer>
    </PageLayout>
  )
}