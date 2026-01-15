// components/ui/Toast.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, AlertTriangle, Info } from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const toastConfig = {
  success: {
    icon: Check,
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-800",
    iconColor: "text-emerald-600"
  },
  error: {
    icon: X,
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-800",
    iconColor: "text-rose-600"
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-800",
    iconColor: "text-amber-600"
  },
  info: {
    icon: Info,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-800",
    iconColor: "text-blue-600"
  }
};

export function Toast({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const config = toastConfig[type];
  const Icon = config.icon;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose(id), 300); // Attendre la fin de l'animation
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className={`p-4 rounded-lg border shadow-lg backdrop-blur-sm ${config.bgColor} ${config.borderColor} max-w-sm`}
        >
          <div className="flex items-start gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
            >
              <Icon className={`w-5 h-5 ${config.iconColor}`} />
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h4
                className={`font-semibold text-sm ${config.textColor}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h4>

              {message && (
                <motion.p
                  className={`text-sm mt-1 ${config.textColor} opacity-90`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {message}
                </motion.p>
              )}
            </div>

            <motion.button
              onClick={handleClose}
              className={`p-1 rounded-full hover:bg-black/10 transition-colors ${config.textColor}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Barre de progression pour les toasts temporaires */}
          {duration > 0 && (
            <motion.div
              className="mt-3 h-1 bg-black/20 rounded-full overflow-hidden"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
            >
              <div className={`h-full ${config.iconColor.replace('text-', 'bg-')}`} />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook pour gérer les toasts
interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

let toastId = 0;

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = (type: ToastType, title: string, message?: string, duration?: number) => {
    const id = (++toastId).toString();
    const toast: ToastItem = { id, type, title, message, duration };

    setToasts(prev => [...prev, toast]);

    return id;
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (title: string, message?: string, duration?: number) =>
    addToast("success", title, message, duration);

  const error = (title: string, message?: string, duration?: number) =>
    addToast("error", title, message, duration);

  const warning = (title: string, message?: string, duration?: number) =>
    addToast("warning", title, message, duration);

  const info = (title: string, message?: string, duration?: number) =>
    addToast("info", title, message, duration);

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info
  };
}

// Composant ToastContainer pour afficher tous les toasts
interface ToastContainerProps {
  toasts: ToastItem[];
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            message={toast.message}
            duration={toast.duration}
            onClose={onRemove}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}