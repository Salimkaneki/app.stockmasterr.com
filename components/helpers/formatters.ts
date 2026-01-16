/**
 * Helpers pour le formatage des données dans l'application
 */

// Formatage des prix
export const formatPrice = (price: number | string, currency: string = 'FCFA'): string => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(numPrice)) return '0,00 €';

  return new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numPrice) + ' ' + currency;
};

// Formatage des dates
export const formatDate = (date: string | Date, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(dateObj.getTime())) return 'Date invalide';

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('fr-FR', { ...defaultOptions, ...options }).format(dateObj);
};

// Formatage des nombres
export const formatNumber = (num: number | string, options?: Intl.NumberFormatOptions): string => {
  const numValue = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(numValue)) return '0';

  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat('fr-FR', { ...defaultOptions, ...options }).format(numValue);
};

// Formatage des pourcentages
export const formatPercent = (value: number, decimals: number = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

// Formatage des quantités avec unité
export const formatQuantity = (quantity: number, unit: string = 'unités'): string => {
  return `${formatNumber(quantity)} ${unit}`;
};

// Formatage des statuts avec couleurs
export const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    'Actif': 'bg-emerald-50 text-emerald-700 border-emerald-100',
    'Inactif': 'bg-zinc-50 text-zinc-700 border-zinc-100',
    'En attente': 'bg-amber-50 text-amber-700 border-amber-100',
    'Suspendu': 'bg-rose-50 text-rose-700 border-rose-100',
    'En stock': 'bg-emerald-50 text-emerald-700 border-emerald-100',
    'Faible': 'bg-orange-50 text-orange-700 border-orange-100',
    'Critique': 'bg-amber-50 text-amber-700 border-amber-100',
    'Rupture': 'bg-rose-50 text-rose-700 border-rose-100',
  };

  return statusColors[status] || 'bg-zinc-50 text-zinc-700 border-zinc-100';
};

// Génération des initiales
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Formatage des noms d'utilisateur
export const formatUserName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

// Validation des emails
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Formatage des numéros de téléphone
export const formatPhoneNumber = (phone: string): string => {
  // Supprimer tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, '');

  // Format français
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
  }

  return phone;
};