import { PageLayout } from "@/components/ui/layout/PageLayout";
import { PageHeader } from "@/components/ui/layout/PageHeader";
import { PageContainer } from "@/components/ui/layout/PageContainer";

export default function SuppliersPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Fournisseurs"
        description="Gérez vos fournisseurs ici. Ajoutez, modifiez ou supprimez des fournisseurs selon vos besoins."
      />
      <PageContainer>
        <div className="w-full h-96 flex items-center justify-center border-2 border-dashed border-zinc-200 rounded-xl">
          <span className="text-zinc-400">Section des fournisseurs en cours de développement</span>
        </div>
      </PageContainer>
    </PageLayout>
  );
}