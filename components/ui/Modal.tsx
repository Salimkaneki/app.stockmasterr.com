// components/ui/Modal.tsx
"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl"
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  closeOnBackdropClick = true,
  className = ""
}: ModalProps) {
  // Gestion de l'échappement au clavier
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Empêcher le scroll du body
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={handleBackdropClick}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3
              }}
              className={`w-full ${sizeClasses[size]} bg-white rounded-2xl shadow-2xl ${className}`}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                  {title && (
                    <motion.h2
                      className="text-xl font-bold text-zinc-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {title}
                    </motion.h2>
                  )}

                  {showCloseButton && (
                    <motion.button
                      onClick={onClose}
                      className="p-2 hover:bg-zinc-100 rounded-lg transition-colors group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                    >
                      <X className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600" />
                    </motion.button>
                  )}
                </div>
              )}

              {/* Content */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// Composant Modal de confirmation
interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: "danger" | "warning" | "info";
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirmer",
  cancelText = "Annuler",
  type = "danger"
}: ConfirmModalProps) {
  const buttonStyles = {
    danger: "bg-rose-600 hover:bg-rose-700 text-white",
    warning: "bg-amber-600 hover:bg-amber-700 text-white",
    info: "bg-blue-600 hover:bg-blue-700 text-white"
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
          className="w-12 h-12 mx-auto bg-zinc-100 rounded-full flex items-center justify-center"
        >
          {type === "danger" && <span className="text-2xl">⚠️</span>}
          {type === "warning" && <span className="text-2xl">🚨</span>}
          {type === "info" && <span className="text-2xl">ℹ️</span>}
        </motion.div>

        <div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">{title}</h3>
          <p className="text-zinc-600">{message}</p>
        </div>

        <div className="flex gap-3 pt-4">
          <motion.button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {cancelText}
          </motion.button>

          <motion.button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${buttonStyles[type]}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {confirmText}
          </motion.button>
        </div>
      </div>
    </Modal>
  );
}