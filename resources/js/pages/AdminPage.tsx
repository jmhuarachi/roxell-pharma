// resources/js/admin/AdminPage.tsx
import { Topbar } from '@/admin/components/Topbar';
import { DashboardWidget } from '@/admin/components/DashboardWidget';
import { Users, DollarSign, Activity, ShoppingCart } from 'lucide-react';
import { useAdminStore } from '@/admin/store/useAdminStore';
import { useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Sidebar } from '@/admin/components/Sidebar';

export default function AdminPage() {
  const { user } = useAdminStore();

  useEffect(() => {
    if (!user) {
      router.visit('/login'); // Usa router en lugar de inertia
    }
  }, [user]);

  if (!user) return null;

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Topbar />

      <main
        className="pt-20 px-4 pb-6 transition-all duration-200"
        style={{ marginLeft: '5rem' }} // Ajusta según el estado del sidebar
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardWidget
              title="Total Users"
              value="2,345"
              change={12.5}
              icon={<Users className="h-5 w-5" />}
            />
            <DashboardWidget
              title="Revenue"
              value="$34,545"
              change={8.2}
              icon={<DollarSign className="h-5 w-5" />}
            />
            <DashboardWidget
              title="Conversion Rate"
              value="3.2%"
              change={-2.4}
              icon={<Activity className="h-5 w-5" />}
            />
            <DashboardWidget
              title="Total Sales"
              value="1,243"
              change={4.6}
              icon={<ShoppingCart className="h-5 w-5" />}
            />
          </div>

          {/* Aquí puedes agregar más secciones del dashboard */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <p className="text-gray-500">Dashboard content goes here...</p>
          </div>
        </div>
      </main>
    </div>
  );
} 