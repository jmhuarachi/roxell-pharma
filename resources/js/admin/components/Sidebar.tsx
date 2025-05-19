// resources/js/admin/components/Sidebar.tsx
import { motion } from 'framer-motion';
import { Home, Users, Settings, PieChart, LogOut } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { useAdminStore } from '../store/useAdminStore';
import { cn } from '@/utils';

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/admin' },
  { name: 'Users', icon: Users, href: '/admin/users' },
  { name: 'Analytics', icon: PieChart, href: '/admin/analytics' },
  { name: 'Settings', icon: Settings, href: '/admin/settings' },
];

export const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, logout } = useAdminStore();

  return (
    <motion.aside
      initial={{ width: sidebarOpen ? 288 : 80 }}
      animate={{ width: sidebarOpen ? 288 : 80 }}
      transition={{ duration: 0.2 }}
      className="bg-blue-900 text-white h-screen fixed flex flex-col"
    >
      <div className="p-4 flex items-center justify-between h-16 border-b border-blue-800">
        {sidebarOpen ? (
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            Admin Panel
          </motion.h1>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            AP
          </motion.div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1 rounded-md hover:bg-blue-800"
        >
          {sidebarOpen ? '«' : '»'}
        </button>
      </div>

      <nav className="flex-1 p-2 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center p-3 rounded-md hover:bg-blue-800 transition-colors',
                      !sidebarOpen && 'justify-center'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {sidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-3"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </Link>
                </TooltipTrigger>
                {!sidebarOpen && (
                  <TooltipContent side="right" className="bg-blue-900 text-white p-2 rounded-md">
                    {item.name}
                  </TooltipContent>
                )}
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-2 border-t border-blue-800">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={logout}
              className={cn(
                'flex items-center p-3 w-full rounded-md hover:bg-blue-800 transition-colors',
                !sidebarOpen && 'justify-center'
              )}
            >
              <LogOut className="h-5 w-5" />
              {sidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-3"
                >
                  Logout
                </motion.span>
              )}
            </button>
          </TooltipTrigger>
          {!sidebarOpen && (
            <TooltipContent side="right" className="bg-blue-900 text-white p-2 rounded-md">
              Logout
            </TooltipContent>
          )}
        </Tooltip>
      </div>
    </motion.aside>
  );
};