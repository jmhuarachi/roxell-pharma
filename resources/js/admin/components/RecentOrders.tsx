// resources/js/admin/components/RecentOrders.tsx
import { Clock, CheckCircle2, XCircle } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
}

export function RecentOrders() {
  const orders: Order[] = [
    { id: '#ORD-001', customer: 'Juan Pérez', date: '2023-05-15', amount: '$120', status: 'completed' },
    { id: '#ORD-002', customer: 'María García', date: '2023-05-14', amount: '$85', status: 'pending' },
    { id: '#ORD-003', customer: 'Carlos López', date: '2023-05-14', amount: '$210', status: 'failed' },
    { id: '#ORD-004', customer: 'Ana Martínez', date: '2023-05-13', amount: '$65', status: 'completed' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 p-6 pb-0">Pedidos Recientes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.status === 'completed' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completado
                    </span>
                  )}
                  {order.status === 'pending' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Clock className="h-3 w-3 mr-1" />
                      Pendiente
                    </span>
                  )}
                  {order.status === 'failed' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <XCircle className="h-3 w-3 mr-1" />
                      Fallido
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}