import { PageLayout } from '@/components/ui/layout/PageLayout'
import { PageHeader } from '@/components/ui/layout/PageHeader'
import { PageContainer } from '@/components/ui/layout/PageContainer'
import DataTable, { Column } from '@/components/data/DataTable'
import KPI from '@/components/data/KPI'

const custColumns: Column<{ id: string; name: string; orders: number }>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nom' },
  { key: 'orders', label: 'Commandes', align: 'right' },
]

const custData: { id: string; name: string; orders: number }[] = []

export default function CustomersReportPage() {
  return (
    <PageLayout>
      <PageHeader title="Rapports — Clients" description="Analyse des clients" />
      <PageContainer>
        <KPI />

        <div className="mt-6">
          <h2 className="text-lg font-medium">Top clients</h2>
          <DataTable columns={custColumns} data={custData} title="Top clients" />
        </div>
      </PageContainer>
    </PageLayout>
  )
}
