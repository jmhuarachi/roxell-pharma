// resources/js/utils/index.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Función para combinar clases de Tailwind condicionales
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Función para formatear números como dinero
export function formatMoney(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

// Función para formatear fechas
export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Función para simular delay (útil para testing)
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}