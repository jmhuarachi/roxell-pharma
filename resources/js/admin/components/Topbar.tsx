// resources/js/admin/components/Topbar.tsx
import { useAdminStore } from '../store/useAdminStore';
import { cn } from '@/utils';

export const Topbar = () => {
  const { user, sidebarOpen } = useAdminStore();

  if (!user) return null;

  return (
    <header
      className={cn(
        'bg-white shadow-sm h-16 fixed top-0 flex items-center justify-between px-4 transition-all duration-200',
        sidebarOpen ? 'left-72' : 'left-20'
      )}
      style={{ right: 0 }}
    >
      <div className="flex-1"></div> {/* Spacer */}

      <div className="flex items-center space-x-4">
        <div className="text-right hidden md:block">
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="h-10 w-10 rounded-full border-2 border-blue-500"
        />
      </div>
    </header>
  );
};