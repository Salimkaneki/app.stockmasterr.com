import { PageLayout } from '../../../../components/ui/layout/PageLayout'
import { PageHeader } from '../../../../components/ui/layout/PageHeader'
import { PageContainer } from '../../../../components/ui/layout/PageContainer'
import KPI from '../../../../components/data/KPI'
import DataTable, { Column } from '../../../../components/data/DataTable'
import { InfoCard } from '../../../../components/ui/layout/InfoCard'
import Link from 'next/link'

const latestColumns: Column<{ id: string; date: string; total: string; }>[] = [
  { key: 'id', label: 'Réf' },
  { key: 'date', label: 'Date' },
  { key: 'total', label: 'Montant', align: 'right' },
]

const latestData = [
  { id: 'S-001', date: '2026-01-19', total: '€12.00' },
]

export default function ReportsPage() {
  return (
    <PageLayout>
      <PageHeader title="Rapports" description="Rapports et analytics" />
      <PageContainer>
        <KPI />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard title="Rapports rapides">
            <ul className="list-disc pl-5">
              <li><Link href="./sales">Ventes</Link></li>
              <li><Link href="./inventory">Inventaire</Link></li>
              <li><Link href="./customers">Clients</Link></li>
            </ul>
          </InfoCard>
          <InfoCard title="Export">
            <p>Export CSV / XLS à implémenter</p>
          </InfoCard>
          <InfoCard title="Filtres enregistrés">
            <p>Aucun filtre enregistré</p>
          </InfoCard>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium">Dernières ventes</h2>
          <DataTable columns={latestColumns} data={latestData} title="Ventes récentes" />
        </div>
      </PageContainer>
    </PageLayout>
  )
}
