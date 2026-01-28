"use client";

import React, { useEffect, useState } from "react";
import { LuPlus, LuPencil, LuTrash } from "react-icons/lu";
import { PageHeader } from "@/components/ui";
import { Input } from "@/components/ui";
import { Modal, ConfirmModal, PageLayout, PageContainer } from "@/components/ui";
import DataTable from "@/components/data/DataTable";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toDeleteIndex, setToDeleteIndex] = useState<number | null>(null);

  useEffect(() => {
    // Exemple d'initialisation; remplacer par fetch si nécessaire
    const seed = [
      { value: "elec", label: "Électronique" },
      { value: "acc", label: "Accessoires" },
      { value: "vet", label: "Vêtements" }
    ];
    setCategories(seed);
  }, []);

  const openCreate = () => {
    setEditing(null);
    setName("");
    setModalOpen(true);
  };

  const openEdit = (idx: number) => {
    setEditing(idx);
    setName(categories[idx].label);
    setModalOpen(true);
  };

  const save = () => {
    const v = name.trim();
    if (!v) return;
    if (editing === null) {
      const value = v.toLowerCase().replace(/[^a-z0-9]+/gi, '-').slice(0, 30);
      setCategories(prev => [...prev, { value, label: v }]);
    } else {
      setCategories(prev => prev.map((c, i) => i === editing ? { ...c, label: v } : c));
    }
    setModalOpen(false);
    setName("");
    setEditing(null);
  };

  const confirmDelete = (idx: number) => {
    setToDeleteIndex(idx);
    setConfirmOpen(true);
  };

  const remove = () => {
    if (toDeleteIndex === null) return;
    setCategories(prev => prev.filter((_, i) => i !== toDeleteIndex));
    setConfirmOpen(false);
    setToDeleteIndex(null);
  };

  return (
    <PageLayout>
      <PageHeader
        title="Catégories"
        description="Gérez les catégories de produits. Ajoutez, modifiez ou supprimez rapidement via les actions ci-dessous."
      >
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-shadow shadow-sm"
        >
          <LuPlus className="w-4 h-4" />
          Nouvelle catégorie
        </button>
      </PageHeader>

      <PageContainer>
        <div className="mt-8">
          <DataTable
            title="Liste des catégories"
            columns={[
              { key: 'label', label: 'Nom', render: (v: any) => <span className="text-sm text-zinc-900 font-['Google_Sans']">{v}</span> },
              { key: 'value', label: 'Slug', render: (v: any) => <span className="text-sm text-zinc-500">{v}</span> },
              {
                key: 'actions',
                label: '',
                align: 'right',
                width: '220px',
                render: (_: any, row: any) => {
                  const idx = categories.findIndex(c => c.value === row.value);
                  return (
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(idx)} className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-zinc-50 hover:bg-zinc-100">
                        <LuPencil className="w-4 h-4 text-zinc-600" />
                        Modifier
                      </button>
                      <button onClick={() => confirmDelete(idx)} className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-rose-50 text-rose-600 hover:bg-rose-100">
                        <LuTrash className="w-4 h-4" />
                        Supprimer
                      </button>
                    </div>
                  );
                }
              }
            ]}
            data={categories}
            emptyMessage="Aucune catégorie trouvée."
          />
        </div>
      </PageContainer>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={editing === null ? "Ajouter une catégorie" : "Modifier la catégorie"} size="sm">
        <div className="space-y-4">
          <Input label="Nom" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Chaussures" />
          <div className="flex justify-end gap-3">
            <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-lg border border-zinc-200">Annuler</button>
            <button onClick={save} className="px-4 py-2 rounded-lg bg-zinc-900 text-white">{editing === null ? 'Ajouter' : 'Enregistrer'}</button>
          </div>
        </div>
      </Modal>

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={remove}
        title="Confirmer la suppression"
        message="Voulez-vous vraiment supprimer cette catégorie ? Cette action est irréversible."
        confirmText="Supprimer"
        cancelText="Annuler"
        type="danger"
      />
    </PageLayout>
  );
}
