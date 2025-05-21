// resources/js/admin/pages/Dashboard.tsx
import { DashboardWidget } from '@/admin/components/DashboardWidget';
import { Activity, DollarSign, Users, ShoppingCart, TrendingUp, Package } from 'lucide-react';
import { RecentOrders } from '../components/RecentOrders';
import { StatsChart } from '../components/StatsChart';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Panel de Administración</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardWidget 
          title="Ingresos" 
          value="$24,780" 
          change={82} 
          icon={<DollarSign className="h-5 w-5" />} 
        />
        
        <DashboardWidget 
          title="Tasa de Conversión" 
          value="3.2%" 
          change={24} 
          icon={<TrendingUp className="h-5 w-5" />} 
        />
        
        <DashboardWidget 
          title="Ventas Totales" 
          value="1,248" 
          change={46} 
          icon={<ShoppingCart className="h-5 w-5" />} 
        />
        
        <DashboardWidget 
          title="Usuarios Activos" 
          value="842" 
          change={12} 
          icon={<Users className="h-5 w-5" />} 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Rendimiento Mensual</h2>
          <StatsChart />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Productos Populares</h2>
          <div className="space-y-4">
            {['Medicamento A', 'Medicamento B', 'Equipo Médico X'].map((product) => (
              <div key={product} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Package className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{product}</span>
                </div>
                <span className="text-green-600 font-medium">+15%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <RecentOrders />
      </div>
    </div>
  );
}