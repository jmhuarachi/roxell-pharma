// resources/js/admin/store/useAdminStore.ts
import { create } from 'zustand';
import { type AdminUser } from '../types/admin';

type AdminStore = {
  user: AdminUser | null;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  login: (user: AdminUser) => void;
  logout: () => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  user: {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    avatarUrl: 'https://ui-avatars.com/api/?name=Admin+User&background=1e3a8a&color=fff',
  },
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));