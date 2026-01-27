"use client";

import React, { useState, useRef } from "react";
import { LuMail, LuUser, LuPhone, LuBuilding, LuCamera } from "react-icons/lu";
import { Avatar } from "@/components/ui/Avatar";
import { Input } from "@/components/ui/forms";
import { ActionButton } from "@/components/ui/actions/ActionButton";
import { PageLayout, PageContainer, PageHeader, FormSection, InfoCard } from "@/components/ui/layout";
import { Modal } from "@/components/ui/Modal";

export default function OwnerProfilePage() {
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        fullName: "Jean Dupont",
        email: "jean.dupont@entreprise.com",
        company: "Dupont SARL",
        phone: "+33 6 12 34 56 78",
    });

    const initials = data.fullName.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase();
    const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [passwordModalOpen, setPasswordModalOpen] = useState(false);

    const [pwLoading, setPwLoading] = useState(false);
    const [pwForm, setPwForm] = useState({ current: "", password: "", confirm: "" });
    const [pwError, setPwError] = useState("");

    const handleSave = async () => {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 900));
        setLoading(false);
        setEditing(false);
    };

    return (
        <PageLayout>
            <PageHeader
                title="Profil du propriétaire"
                description="Gérez vos informations de compte et vos coordonnées"
                backLink={{ href: "/owner/dashboard", label: "Retour" }}
            >
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Avatar src={avatarSrc} initials={initials} size={64} className="ring-2 ring-zinc-100" />
                        <button
                            type="button"
                            onClick={() => fileRef.current?.click()}
                            className="absolute -bottom-1 -right-1 w-8 h-8 bg-white border rounded-full flex items-center justify-center shadow-sm hover:bg-zinc-50"
                            aria-label="Changer l'avatar"
                        >
                            <LuCamera className="w-4 h-4 text-zinc-600" />
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">{data.fullName}</div>
                        <div className="text-zinc-400 text-sm">{data.email}</div>
                    </div>
                </div>
            </PageHeader>

            <PageContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <InfoCard title="Détails du propriétaire" className="p-6">
                            <FormSection title="Informations" icon={<LuUser /> }>
                                <div className="space-y-6">
                                    <input
                                        ref={fileRef}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                            const f = e.target.files?.[0];
                                            if (!f) return;
                                            const reader = new FileReader();
                                            reader.onload = () => setAvatarSrc(String(reader.result));
                                            reader.readAsDataURL(f);
                                        }}
                                    />

                                    <Input
                                        label={<span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">01 // Nom complet</span>}
                                        value={data.fullName}
                                        onChange={(e) => setData({ ...data, fullName: e.target.value })}
                                        disabled={!editing}
                                    />

                                    <Input
                                        label={<span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">02 // Email</span>}
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                        disabled={!editing}
                                        startIcon={<LuMail />}
                                    />

                                    <Input
                                        label={<span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">03 // Société</span>}
                                        value={data.company}
                                        onChange={(e) => setData({ ...data, company: e.target.value })}
                                        disabled={!editing}
                                        startIcon={<LuBuilding />}
                                    />

                                    <Input
                                        label={<span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">04 // Téléphone</span>}
                                        value={data.phone}
                                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                                        disabled={!editing}
                                        startIcon={<LuPhone />}
                                    />

                                    <div className="flex gap-3 pt-2">
                                        {!editing ? (
                                            <ActionButton variant="outline" size="md" onClick={() => setEditing(true)}>
                                                Modifier
                                            </ActionButton>
                                        ) : (
                                            <>
                                                <ActionButton variant="ghost" size="md" onClick={() => setEditing(false)}>
                                                    Annuler
                                                </ActionButton>
                                                <ActionButton variant="primary" size="md" onClick={handleSave} disabled={loading}>
                                                    {loading ? "Enregistrement..." : "Enregistrer"}
                                                </ActionButton>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </FormSection>
                        </InfoCard>
                    </div>

                    <div>
                        <InfoCard title="Contact & société" className="p-6">
                            <div className="space-y-4">
                                <p className="text-sm text-zinc-500">Société</p>
                                <p className="font-semibold text-zinc-900">{data.company}</p>

                                <p className="text-sm text-zinc-500">Téléphone</p>
                                <p className="text-sm text-zinc-700">{data.phone}</p>

                                <p className="text-sm text-zinc-500">Email</p>
                                <p className="text-sm text-zinc-700">{data.email}</p>

                                <div className="pt-4 flex flex-col gap-3">
                                    <ActionButton variant="ghost" size="md" onClick={() => setPasswordModalOpen(true)}>Changer le mot de passe</ActionButton>
                                    <ActionButton variant="outline" size="md">Déconnexion</ActionButton>
                                </div>
                            </div>
                        </InfoCard>
                    </div>
                </div>
            </PageContainer>
      
            {/* Modal changement mot de passe */}
            <Modal isOpen={passwordModalOpen} onClose={() => setPasswordModalOpen(false)} title="Changer le mot de passe">
                <div className="space-y-4">
                    <Input
                        label="Mot de passe actuel"
                        type="password"
                        value={pwForm.current}
                        onChange={(e) => setPwForm({ ...pwForm, current: e.target.value })}
                        disabled={pwLoading}
                    />

                    <Input
                        label="Nouveau mot de passe"
                        type="password"
                        value={pwForm.password}
                        onChange={(e) => setPwForm({ ...pwForm, password: e.target.value })}
                        disabled={pwLoading}
                    />

                    <Input
                        label="Confirmer le mot de passe"
                        type="password"
                        value={pwForm.confirm}
                        onChange={(e) => setPwForm({ ...pwForm, confirm: e.target.value })}
                        disabled={pwLoading}
                    />

                    {pwError && <p className="text-sm text-rose-600">{pwError}</p>}

                    <div className="flex justify-end gap-3">
                        <ActionButton variant="ghost" size="md" onClick={() => setPasswordModalOpen(false)}>Annuler</ActionButton>
                        <ActionButton
                            variant="primary"
                            size="md"
                            onClick={async () => {
                                setPwError("");
                                if (!pwForm.password || pwForm.password !== pwForm.confirm) {
                                    setPwError("Les mots de passe ne correspondent pas.");
                                    return;
                                }
                                setPwLoading(true);
                                await new Promise((r) => setTimeout(r, 900));
                                setPwLoading(false);
                                setPasswordModalOpen(false);
                                setPwForm({ current: "", password: "", confirm: "" });
                            }}
                        >
                            {pwLoading ? "En cours..." : "Sauvegarder"}
                        </ActionButton>
                    </div>
                </div>
            </Modal>
        </PageLayout>
    );
}