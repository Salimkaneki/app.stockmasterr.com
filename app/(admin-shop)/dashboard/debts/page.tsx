import { PageLayout } from "@/components/ui/layout/PageLayout";
import { PageContainer } from "@/components/ui/layout/PageContainer";

import { PageHeader } from "@/components/ui";

export default function DebtsPage() {
  return (
    <PageLayout>
        <PageHeader
        title="Dettes"
        description="Gérez vos dettes ici. Ajoutez, modifiez ou supprimez des dettes selon vos besoins."
      />
      <PageContainer>
        <div className="w-full h-96 flex items-center justify-center border-2 border-dashed border-zinc-200 rounded-xl">
          <span className="text-zinc-400">Section des dettes en cours de développement</span>
        </div>
      </PageContainer>
    </PageLayout>
  );
}