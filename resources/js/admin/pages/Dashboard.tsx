// resources/js/admin/pages/Dashboard.tsx
import { DashboardWidget } from '@/admin/components/DashboardWidget';
import { Activity, DollarSign, Users, ShoppingCart, TrendingUp, Package } from 'lucide-react';
import { RecentOrders } from '../components/RecentOrders';
import { StatsChart } from '../components/StatsChart';
import { cn } from '@/utils';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Título principal */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">Panel de Administración</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Resumen general y estadísticas del sistema
        </p>
      </div>
      
      {/* Widgets principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardWidget 
          title="Ingresos" 
          value="$24,780" 
          change={82} 
          icon={<DollarSign className="h-5 w-5" />}
          className ="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
        />
        
        <DashboardWidget 
          title="Tasa de Conversión" 
          value="3.2%" 
          change={24} 
          icon={<TrendingUp className="h-5 w-5" />}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
        />
        
        <DashboardWidget 
          title="Ventas Totales" 
          value="1,248" 
          change={46} 
          icon={<ShoppingCart className="h-5 w-5" />}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
        />
        
        <DashboardWidget 
          title="Usuarios Activos" 
          value="842" 
          change={12} 
          icon={<Users className="h-5 w-5" />}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
        />
      </div>
      
      {/* Gráficos y productos populares */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className={cn(
            "rounded-xl shadow-sm p-6",
            "bg-white dark:bg-slate-800",
            "border border-slate-200 dark:border-slate-700"
          )}>
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Rendimiento Mensual</h2>
            <StatsChart />
          </div>
        </div>
        
        <div className={cn(
          "rounded-xl shadow-sm p-6",
          "bg-white dark:bg-slate-800",
          "border border-slate-200 dark:border-slate-700"
        )}>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Productos Populares</h2>
          <div className="space-y-4">
            {['Medicamento A', 'Medicamento B', 'Equipo Médico X'].map((product) => (
              <div key={product} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={cn(
                    "p-2 rounded-lg",
                    "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-200"
                  )}>
                    <Package className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{product}</span>
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium">+15%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Órdenes recientes */}
      <div className={cn(
        "rounded-xl shadow-sm overflow-hidden",
        "bg-white dark:bg-slate-800",
        "border border-slate-200 dark:border-slate-700"
      )}>
        <RecentOrders />
      </div>
    </div>
  );
}

Dashboard.title = 'Dashboard';
Dashboard.description = 'Panel de control';