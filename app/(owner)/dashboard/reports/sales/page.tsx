import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import DataTable, { Column } from '@/components/data/DataTable'
import KPI from '@/components/data/KPI'

const salesColumns: Column<{ ref: string; date: string; amount: string }>[] = [
  { key: 'ref', label: 'Réf' },
  { key: 'date', label: 'Date' },
  { key: 'amount', label: 'Montant', align: 'right' },
]

const salesData: { ref: string; date: string; amount: string }[] = []

export default function SalesReportPage() {
  return (
    <PageLayout>
      <PageHeader title="Rapports — Ventes" description="Analyse des ventes" />
      <PageContainer>
        <KPI />

        <div className="mt-6">
          <h2 className="text-lg font-medium">Ventes récentes</h2>
          <DataTable columns={salesColumns} data={salesData} title="Ventes récentes" />
        </div>
      </PageContainer>
    </PageLayout>
  )
}
