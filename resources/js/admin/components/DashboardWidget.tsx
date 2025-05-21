// resources/js/admin/components/DashboardWidget.tsx
import { cn } from '@/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface DashboardWidgetProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  className?: string;
}

export function DashboardWidget({ title, value, change, icon, className }: DashboardWidgetProps) {
  const isPositive = change >= 0;

  return (
    <div className={cn(
      "rounded-xl p-6",
      "transition-colors duration-200",
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{value}</p>
        </div>
        <div className={cn(
          "p-3 rounded-lg",
          "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-200"
        )}>
          {icon}
        </div>
      </div>
      <div className={cn(
        "mt-4 flex items-center text-sm",
        isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
      )}>
        {isPositive ? (
          <ArrowUp className="h-4 w-4 mr-1" />
        ) : (
          <ArrowDown className="h-4 w-4 mr-1" />
        )}
        <span>{change}% vs mes anterior</span>
      </div>
    </div>
  );
}