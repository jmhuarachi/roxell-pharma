// resources/js/admin/types/admin.ts
export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  avatarUrl: string;
};

export type AdminMetrics = {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  conversions: number;
};