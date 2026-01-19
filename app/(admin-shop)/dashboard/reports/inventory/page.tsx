import { PageLayout } from '../../../../components/ui/layout/PageLayout'
import { PageHeader } from '../../../../components/ui/layout/PageHeader'
import { PageContainer } from '../../../../components/ui/layout/PageContainer'
import DataTable, { Column } from '../../../../components/data/DataTable'
import KPI from '../../../../components/data/KPI'

const invColumns: Column<{ sku: string; name: string; qty: number }>[] = [
  { key: 'sku', label: 'SKU' },
  { key: 'name', label: 'Produit' },
  { key: 'qty', label: 'Qté', align: 'right' },
]

const invData: { sku: string; name: string; qty: number }[] = []

export default function InventoryReportPage() {
  return (
    <PageLayout>
      <PageHeader title="Rapports — Inventaire" description="État des stocks" />
      <PageContainer>
        <KPI />

        <div className="mt-6">
          <h2 className="text-lg font-medium">Mouvements de stock récents</h2>
          <DataTable columns={invColumns} data={invData} title="Mouvements de stock" />
        </div>
      </PageContainer>
    </PageLayout>
  )
}
