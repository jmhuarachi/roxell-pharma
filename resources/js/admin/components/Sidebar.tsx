// resources/js/admin/components/Sidebar.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Settings, PieChart, LogOut, Package, ChevronLeft, ChevronRight, Grid, Bell, FileText, MessageCircle } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { useAdminStore } from '../store/useAdminStore';
import { cn } from '@/utils';
import { ENLACES_NAVEGACION } from '../constants/navegacion';

type NavItemName = 'Dashboard' | 'Usuarios' | 'Productos' | 'Pedidos' | 'Noticias' | 'Farmacovigilancia' | 'Contacto';

const iconMap: Record<NavItemName, React.ComponentType<any>> = {
  'Dashboard': Grid,
  'Usuarios': Users,
  'Productos': Package,
  'Pedidos': Settings,
  'Noticias': Bell,
  'Farmacovigilancia': FileText,
  'Contacto': MessageCircle
};

const sidebarVariants = {
  open: {
    width: 280,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  closed: {
    width: 76,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const textVariants = {
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { delay: 0.1, duration: 0.2 }
  },
  hidden: { 
    opacity: 0, 
    x: -10,
    transition: { duration: 0.2 }
  }
};

export const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, logout } = useAdminStore();

  return (
    <TooltipProvider>
      <>
        {/* Overlay para móviles */}
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <motion.aside
          variants={sidebarVariants}
          initial={sidebarOpen ? "open" : "closed"}
          animate={sidebarOpen ? "open" : "closed"}
          className={cn(
            "fixed h-screen z-50 flex flex-col",
            "bg-gradient-to-b from-blue-950 to-blue-900",
            "border-r border-blue-800/30",
            "shadow-xl shadow-blue-900/20"
          )}
        >
          <div className="h-20 flex items-center justify-between px-4 border-b border-blue-800/30">
            <AnimatePresence mode="wait">
              {sidebarOpen ? (
                <motion.div 
                  key="full-logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <motion.span 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="ml-3 text-lg font-semibold text-white"
                  >
                    Admin Panel
                  </motion.span>
                </motion.div>
              ) : (
                <motion.div 
                  key="icon-logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-8 h-8 mx-auto bg-blue-500 rounded-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg">A</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-full text-blue-300 hover:text-white hover:bg-blue-800/50 transition-colors"
            >
              {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </motion.button>
          </div>

          <nav className="flex-1 py-6 px-3 overflow-y-auto scrollbar-thin scrollbar-track-blue-900 scrollbar-thumb-blue-700">
            <div className="space-y-1">
              {ENLACES_NAVEGACION.map((item) => {
                const Icon = iconMap[item.nombre as NavItemName] || PieChart;
                return (
                  <Tooltip key={item.nombre}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.ruta}
                        className={cn(
                          "flex items-center px-3 py-3 rounded-xl transition-all duration-200",
                          "hover:bg-blue-800/50 active:bg-blue-800/70 group",
                          !sidebarOpen && "justify-center"
                        )}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "flex items-center justify-center",
                            "w-10 h-10 rounded-xl",
                            "bg-blue-800/30 text-blue-300 group-hover:text-white group-hover:bg-blue-700/50"
                          )}
                        >
                          <Icon size={20} />
                        </motion.div>
                        
                        {sidebarOpen && (
                          <motion.span
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="ml-3 font-medium text-blue-100"
                          >
                            {item.nombre}
                          </motion.span>
                        )}
                      </Link>
                    </TooltipTrigger>
                    {!sidebarOpen && (
                      <TooltipContent 
                        side="right" 
                        className="bg-blue-900 text-white px-3 py-2 rounded-lg shadow-lg border border-blue-800/50"
                      >
                        {item.nombre}
                      </TooltipContent>
                    )}
                  </Tooltip>
                );
              })}
            </div>
          </nav>

          <div className="p-3 border-t border-blue-800/30">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={logout}
                  className={cn(
                    "w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200",
                    "hover:bg-red-900/30 group",
                    !sidebarOpen && "justify-center"
                  )}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex items-center justify-center",
                      "w-10 h-10 rounded-xl",
                      "bg-red-900/20 text-red-300 group-hover:text-white group-hover:bg-red-800/40"
                    )}
                  >
                    <LogOut size={20} />
                  </motion.div>
                  
                  {sidebarOpen && (
                    <motion.span
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className="ml-3 font-medium text-red-200"
                    >
                      Cerrar sesión
                    </motion.span>
                  )}
                </button>
              </TooltipTrigger>
              {!sidebarOpen && (
                <TooltipContent 
                  side="right" 
                  className="bg-blue-900 text-white px-3 py-2 rounded-lg shadow-lg border border-blue-800/50"
                >
                  Cerrar sesión
                </TooltipContent>
              )}
            </Tooltip>
          </div>
        </motion.aside>
      </>
    </TooltipProvider>
  );
};