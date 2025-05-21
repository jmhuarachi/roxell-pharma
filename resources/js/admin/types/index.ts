// resources/js/admin/types/index.ts
import { LucideIcon } from 'lucide-react';

export type NavItemName = 'Dashboard' | 'Usuarios' | 'Productos' | 'Pedidos' | 'Noticias' | 'Farmacovigilancia' | 'Contacto';

export type IconMapType = Record<NavItemName, LucideIcon>;

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
}