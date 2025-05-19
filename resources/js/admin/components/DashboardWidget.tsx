// resources/js/admin/components/DashboardWidget.tsx
import { ArrowUp, ArrowDown, Users, DollarSign, Activity } from 'lucide-react';
import { cn } from '@/utils';

type MetricCardProps = {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
};

export const DashboardWidget = ({ title, value, change, icon }: MetricCardProps) => {
  const isPositive = change !== undefined ? change >= 0 : null;

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">{icon}</div>
      </div>

      {change !== undefined && (
        <div className="mt-4 flex items-center">
          <span
            className={cn(
              'inline-flex items-center text-sm font-medium',
              isPositive ? 'text-green-600' : 'text-red-600'
            )}
          >
            {isPositive ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1" />
            )}
            {Math.abs(change)}%
          </span>
          <span className="text-gray-500 text-sm ml-2">vs last month</span>
        </div>
      )}
    </div>
  );
};