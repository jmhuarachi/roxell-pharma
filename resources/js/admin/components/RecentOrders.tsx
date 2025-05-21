// resources/js/admin/components/RecentOrders.tsx
import { cn } from '@/utils';

export function RecentOrders() {
  const orders = [
    { id: '#ORD-001', customer: 'Ana García', date: '2025-05-20', amount: '$120', status: 'Completado' },
    { id: '#ORD-002', customer: 'Carlos López', date: '2025-05-19', amount: '$85', status: 'En proceso' },
    { id: '#ORD-003', customer: 'Miguel Rodríguez', date: '2025-05-18', amount: '$240', status: 'Completado' },
    { id: '#ORD-004', customer: 'Laura Martínez', date: '2025-05-17', amount: '$65', status: 'Cancelado' },
    { id: '#ORD-005', customer: 'Daniel Pérez', date: '2025-05-16', amount: '$180', status: 'Completado' },
  ];

  return (
    <div>
      <div className={cn(
        "px-6 py-4 border-b",
        "border-slate-200 dark:border-slate-700",
        "bg-slate-50 dark:bg-slate-700/50"
      )}>
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white">Órdenes Recientes</h2>
      </div>
      <div className="divide-y divide-slate-200 dark:divide-slate-700">
        {orders.map((order) => (
          <div key={order.id} className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-800 dark:text-white">{order.id}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{order.customer}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-slate-800 dark:text-white">{order.amount}</p>
                <p className={cn(
                  "text-sm",
                  order.status === 'Completado' ? "text-green-600 dark:text-green-400" :
                  order.status === 'En proceso' ? "text-yellow-600 dark:text-yellow-400" :
                  "text-red-600 dark:text-red-400"
                )}>
                  {order.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}