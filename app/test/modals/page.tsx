"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LuPlus,
  LuPencil,
  LuTrash2,
  LuTriangleAlert,
  LuCheck,
  LuX,
  LuInfo,
  LuSettings,
  LuUser,
  LuMail,
  LuPhone
} from "react-icons/lu";
import { Modal, ConfirmModal } from "@/components/ui/Modal";
import { ActionButton } from "@/components/ui/actions/ActionButton";
import { Input } from "@/components/ui/forms/Input";
import { Select } from "@/components/ui/forms/Select";
import { Textarea } from "@/components/ui/forms/Textarea";

export default function ModalsExamplePage() {
  // États pour contrôler l'ouverture/fermeture des modals
  const [basicModal, setBasicModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);
  const [smallModal, setSmallModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  // Données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    setFormModal(false);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const modalExamples = [
    {
      title: "Modal Basique",
      description: "Modal simple avec contenu texte",
      icon: <LuInfo className="w-5 h-5" />,
      action: () => setBasicModal(true),
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200"
    },
    {
      title: "Grande Modal",
      description: "Modal de grande taille pour plus de contenu",
      icon: <LuSettings className="w-5 h-5" />,
      action: () => setLargeModal(true),
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200"
    },
    {
      title: "Petite Modal",
      description: "Modal compact pour confirmations",
      icon: <LuCheck className="w-5 h-5" />,
      action: () => setSmallModal(true),
      color: "bg-green-50 hover:bg-green-100 border-green-200"
    },
    {
      title: "Modal Formulaire",
      description: "Modal avec formulaire interactif",
      icon: <LuPencil className="w-5 h-5" />,
      action: () => setFormModal(true),
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200"
    },
    {
      title: "Modal Confirmation",
      description: "Modal de confirmation avec actions",
      icon: <LuTriangleAlert className="w-5 h-5" />,
      action: () => setConfirmModal(true),
      color: "bg-red-50 hover:bg-red-100 border-red-200"
    },
    {
      title: "Modal Info",
      description: "Modal d'information",
      icon: <LuInfo className="w-5 h-5" />,
      action: () => setInfoModal(true),
      color: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200"
    },
    {
      title: "Modal Avertissement",
      description: "Modal d'avertissement",
      icon: <LuTriangleAlert className="w-5 h-5" />,
      action: () => setWarningModal(true),
      color: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200"
    },
    {
      title: "Modal Succès",
      description: "Modal de succès",
      icon: <LuCheck className="w-5 h-5" />,
      action: () => setSuccessModal(true),
      color: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Galerie des Modals
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez tous les types de modals disponibles dans notre système de design.
            Chaque modal est entièrement personnalisable et accessible.
          </p>
        </div>

        {/* Grid des exemples */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {modalExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${example.color}`}
              onClick={example.action}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {example.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{example.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{example.description}</p>
              <div className="mt-4">
                <ActionButton
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    example.action();
                  }}
                >
                  Tester
                </ActionButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section d'information */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">À propos des Modals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fonctionnalités</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Animations fluides avec Framer Motion</li>
                <li>• Gestion du clavier (Échap pour fermer)</li>
                <li>• Prévention du scroll du body</li>
                <li>• Clic sur le fond pour fermer</li>
                <li>• Tailles personnalisables (sm, md, lg, xl)</li>
                <li>• Accessibilité complète</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Types disponibles</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Modal générique</li>
                <li>• ConfirmModal (confirmation)</li>
                <li>• Modal sans titre</li>
                <li>• Modal sans bouton de fermeture</li>
                <li>• Modal avec contenu personnalisé</li>
              </ul>
            </div>
          </div>
        </div>

        {/* MODALS */}

        {/* Modal Basique */}
        <Modal
          isOpen={basicModal}
          onClose={() => setBasicModal(false)}
          title="Modal Basique"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-gray-600">
              Ceci est un exemple de modal basique. Il contient du texte simple et
              peut être fermé en cliquant sur le bouton X ou en appuyant sur Échap.
            </p>
            <p className="text-gray-600">
              Les modals sont entièrement responsives et s'adaptent à la taille de l'écran.
            </p>
            <div className="flex justify-end gap-3 pt-4">
              <ActionButton
                variant="outline"
                onClick={() => setBasicModal(false)}
              >
                Fermer
              </ActionButton>
            </div>
          </div>
        </Modal>

        {/* Grande Modal */}
        <Modal
          isOpen={largeModal}
          onClose={() => setLargeModal(false)}
          title="Grande Modal - Configuration Système"
          size="xl"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Paramètres Généraux</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Notifications</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sauvegarde automatique</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Mode sombre</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Préférences</h4>
                <div className="space-y-3">
                  <Select
                    label="Langue"
                    value="fr"
                    onChange={() => {}}
                    options={[
                      { value: "fr", label: "Français" },
                      { value: "en", label: "English" },
                      { value: "es", label: "Español" }
                    ]}
                  />
                  <Select
                    label="Thème"
                    value="light"
                    onChange={() => {}}
                    options={[
                      { value: "light", label: "Clair" },
                      { value: "dark", label: "Sombre" },
                      { value: "auto", label: "Automatique" }
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-6 border-t">
              <ActionButton
                variant="outline"
                onClick={() => setLargeModal(false)}
              >
                Annuler
              </ActionButton>
              <ActionButton
                variant="primary"
                onClick={() => setLargeModal(false)}
              >
                Sauvegarder
              </ActionButton>
            </div>
          </div>
        </Modal>

        {/* Petite Modal */}
        <Modal
          isOpen={smallModal}
          onClose={() => setSmallModal(false)}
          title="Confirmation"
          size="sm"
        >
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <LuCheck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Action réussie !</h3>
              <p className="text-gray-600 mt-1">
                Votre modification a été enregistrée avec succès.
              </p>
            </div>
            <ActionButton
              variant="primary"
              onClick={() => setSmallModal(false)}
              className="w-full"
            >
              Parfait !
            </ActionButton>
          </div>
        </Modal>

        {/* Modal Formulaire */}
        <Modal
          isOpen={formModal}
          onClose={() => setFormModal(false)}
          title="Nouveau Contact"
          size="lg"
        >
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Nom complet"
                placeholder="Jean Dupont"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                startIcon={<LuUser className="w-4 h-4" />}
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="jean@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                startIcon={<LuMail className="w-4 h-4" />}
                required
              />
            </div>
            <Input
              label="Téléphone"
              placeholder="+33 6 12 34 56 78"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              startIcon={<LuPhone className="w-4 h-4" />}
            />
            <Textarea
              label="Message"
              placeholder="Votre message..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
            />
            <div className="flex justify-end gap-3 pt-4 border-t">
              <ActionButton
                variant="outline"
                onClick={() => setFormModal(false)}
                type="button"
              >
                Annuler
              </ActionButton>
              <ActionButton
                variant="primary"
                type="submit"
              >
                Envoyer
              </ActionButton>
            </div>
          </form>
        </Modal>

        {/* Modal Confirmation */}
        <ConfirmModal
          isOpen={confirmModal}
          onClose={() => setConfirmModal(false)}
          title="Confirmer la suppression"
          message="Êtes-vous sûr de vouloir supprimer cet élément ? Cette action est irréversible."
          confirmText="Supprimer"
          cancelText="Annuler"
          onConfirm={() => {
            console.log("Élément supprimé");
            setConfirmModal(false);
          }}
          type="danger"
        />

        {/* Modal Information */}
        <Modal
          isOpen={infoModal}
          onClose={() => setInfoModal(false)}
          title="Information importante"
          size="md"
        >
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <LuInfo className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">À propos de cette fonctionnalité</h4>
                <p className="text-gray-600 mt-1">
                  Cette fonctionnalité vous permet de gérer vos paramètres de manière avancée.
                  Toutes les modifications sont automatiquement sauvegardées.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 <strong>Astuce :</strong> Vous pouvez utiliser les raccourcis clavier pour une navigation plus rapide.
              </p>
            </div>
            <div className="flex justify-end">
              <ActionButton
                variant="primary"
                onClick={() => setInfoModal(false)}
              >
                J'ai compris
              </ActionButton>
            </div>
          </div>
        </Modal>

        {/* Modal Avertissement */}
        <Modal
          isOpen={warningModal}
          onClose={() => setWarningModal(false)}
          title="Attention requise"
          size="md"
        >
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <LuTriangleAlert className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Action potentiellement dangereuse</h4>
                <p className="text-gray-600 mt-1">
                  La suppression de cet élément affectera également tous les éléments liés.
                  Cette action ne peut pas être annulée.
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-2">
                <LuTriangleAlert className="w-4 h-4 text-yellow-600" />
                <p className="text-sm text-yellow-800">
                  Pensez à créer une sauvegarde avant de procéder.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <ActionButton
                variant="outline"
                onClick={() => setWarningModal(false)}
              >
                Annuler
              </ActionButton>
              <ActionButton
                variant="secondary"
                onClick={() => setWarningModal(false)}
              >
                Continuer quand même
              </ActionButton>
            </div>
          </div>
        </Modal>

        {/* Modal Succès */}
        <Modal
          isOpen={successModal}
          onClose={() => setSuccessModal(false)}
          size="sm"
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
              >
                <LuCheck className="w-8 h-8 text-green-600" />
              </motion.div>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Parfait !</h3>
              <p className="text-gray-600 mt-2">
                Votre action a été exécutée avec succès.
                Toutes les modifications ont été sauvegardées.
              </p>
            </div>
            <ActionButton
              variant="primary"
              onClick={() => setSuccessModal(false)}
              className="w-full"
            >
              Continuer
            </ActionButton>
          </div>
        </Modal>
      </div>
    </div>
  );
}