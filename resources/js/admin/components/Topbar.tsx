// resources/js/admin/components/Topbar.tsx
import { motion } from 'framer-motion';
import { Bell, Search, Menu, X, User, Settings, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useAdminStore } from '../store/useAdminStore';
import { cn } from '@/utils';

interface TopbarProps {
  userType?: 'admin' | 'user';
}

export const Topbar = ({ userType = 'admin' }: TopbarProps) => {
  const { user, sidebarOpen, setSidebarOpen } = useAdminStore();
  const [darkMode, setDarkMode] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  if (!user) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'bg-white dark:bg-slate-900 fixed top-0 right-0 z-30',
        'flex items-center justify-between h-20 px-4 md:px-6',
        'border-b border-slate-200 dark:border-slate-800',
        'transition-all duration-300 ease-in-out',
        sidebarOpen ? 
          'left-[280px] lg:left-[280px]' :
          'left-[76px] lg:left-[76px]'
      )}
    >
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      <div className="hidden md:flex items-center relative ml-4 flex-1 max-w-md">
        <Search size={18} className="absolute left-3 text-slate-400" />
        <input 
          type="text" 
          placeholder="Buscar..." 
          className={cn(
            "w-full h-10 pl-10 pr-4 rounded-xl",
            "bg-slate-100 dark:bg-slate-800/50",
            "border border-slate-200 dark:border-slate-700",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
            "text-slate-600 dark:text-slate-200",
            "placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "transition-all duration-200"
          )}
        />
      </div>
      
      <div className="flex items-center space-x-3">
        {userType === 'admin' && (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center justify-center",
                "w-10 h-10 rounded-xl",
                "text-slate-600 dark:text-slate-300", 
                "hover:bg-slate-100 dark:hover:bg-slate-800",
                "transition-colors"
              )}
            >
              <Settings size={20} />
            </motion.button>
          </>
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setDarkMode(!darkMode);
            document.documentElement.classList.toggle('dark');
          }}
          className={cn(
            "flex items-center justify-center",
            "w-10 h-10 rounded-xl",
            "text-slate-600 dark:text-slate-300", 
            "hover:bg-slate-100 dark:hover:bg-slate-800",
            "transition-colors"
          )}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
        
        <motion.div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center justify-center",
              "w-10 h-10 rounded-xl",
              "text-slate-600 dark:text-slate-300", 
              "hover:bg-slate-100 dark:hover:bg-slate-800",
              "transition-colors"
            )}
          >
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className={cn(
                "absolute top-1 right-1",
                "flex items-center justify-center",
                "min-w-5 h-5 rounded-full",
                "bg-blue-500 text-white text-xs font-medium"
              )}>
                {notificationCount}
              </span>
            )}
          </motion.button>
        </motion.div>
                
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 focus:outline-none"
          >
            <div className="hidden md:block text-right">
              <p className="font-medium text-slate-700 dark:text-slate-200">{user.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {userType === 'admin' ? 'Administrador' : 'Usuario'}
              </p>
            </div>
            
            <div className={cn(
              "relative w-10 h-10 rounded-xl overflow-hidden",
              "border-2 border-blue-500",
              "ring-2 ring-transparent",
              "hover:ring-blue-500/20",
              "transition-all duration-200"
            )}>
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white">
                  <User size={20} />
                </div>
              )}
            </div>
          </motion.button>
          
          {showUserMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "absolute right-0 mt-2 w-48",
                "bg-white dark:bg-slate-800",
                "rounded-xl shadow-lg",
                "py-2 border border-slate-200 dark:border-slate-700",
                "z-50"
              )}
            >
              <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                <p className="font-medium text-slate-700 dark:text-slate-200">{user.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {user.email || (userType === 'admin' ? 'Administrador' : 'Usuario')}
                </p>
              </div>
              
              <div className="py-1">
                <button className={cn(
                  "w-full px-4 py-2 text-left text-sm",
                  "text-slate-700 dark:text-slate-200",
                  "hover:bg-slate-100 dark:hover:bg-slate-700",
                  "flex items-center space-x-2",
                  "transition-colors"
                )}>
                  <User size={16} />
                  <span>Mi perfil</span>
                </button>
                
                {userType === 'admin' && (
                  <button className={cn(
                    "w-full px-4 py-2 text-left text-sm",
                    "text-slate-700 dark:text-slate-200",
                    "hover:bg-slate-100 dark:hover:bg-slate-700",
                    "flex items-center space-x-2",
                    "transition-colors"
                  )}>
                    <Settings size={16} />
                    <span>Configuración</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
};