// resources/js/admin/layouts/AdminLayout.tsx
import { Head } from '@inertiajs/react';
import { ReactNode, useEffect, useState } from 'react';
import { Topbar } from '@/admin/components/Topbar';
import { Sidebar } from '@/admin/components/Sidebar';
import { useAdminStore } from '@/admin/store/useAdminStore';
import { cn } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, Loader2, ChevronRight } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14
    }
  }
};

const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

// Función para generar descripciones basadas en el título de la página
const getPageDescription = (title: string): string => {
  const descriptions: Record<string, string> = {
    'Dashboard': 'Panel principal con estadísticas y resumen general',
    'Usuarios': 'Gestión y administración de usuarios del sistema',
    'Productos': 'Catálogo y administración de productos',
    'Noticias': 'Gestión de publicaciones y noticias',
    'Admin Panel': 'Panel de administración sasas moderno y futurista'
  };
  
  return descriptions[title] || `Gestión de ${title.toLowerCase()}`;
};

export default function AdminLayout({ 
  children, 
  title = 'Admin Panel', 
  description
}: AdminLayoutProps) {
  const { sidebarOpen, user } = useAdminStore();
  const [loading, setLoading] = useState(true);
  const [breadcrumbs, setBreadcrumbs] = useState<{title: string, path?: string}[]>([
    { title: 'Dashboard' } // Default breadcrumb
  ]);
  
  // Generamos una descripción automática si no se proporciona una
  const pageDescription = description || getPageDescription(title);

  // Simula carga inicial (puedes eliminar esto si ya manejas el estado de carga)
  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  }, []);

  // Ejemplo: actualizar breadcrumbs basados en el título
  useEffect(() => {
    if (title !== 'Admin Panel') {
      setBreadcrumbs([
        { title: 'Dashboard', path: '/admin' },
        { title }
      ]);
    } else {
      setBreadcrumbs([{ title: 'Dashboard' }]);
    }
  }, [title]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900 z-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
          <span className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            Cargando panel de administración...
          </span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Head title={title}>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Sidebar />

      <div 
        className={cn(
          "flex-1 flex flex-col min-h-screen",
          "transition-all duration-300 ease-in-out",
          sidebarOpen ? "lg:ml-[280px]" : "lg:ml-[76px]"
        )}
      >
        <Topbar />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={title} // Esto asegura una animación completa cuando el título cambia
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageTransition}
            className={cn(
              "flex-1 overflow-x-hidden overflow-y-auto",
              "pt-24 lg:pt-24 pb-16", // Espacio para header y footer
              "px-4 md:px-6 lg:px-8"
            )}
          >
            {/* Breadcrumbs */}
            <motion.nav
              variants={itemVariants}
              className="flex items-center mb-6 text-sm text-slate-500 dark:text-slate-400"
            >
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="mx-2 h-4 w-4 text-slate-400 dark:text-slate-500" />
                  )}
                  {crumb.path ? (
                    <a 
                      href={crumb.path} 
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      {crumb.title}
                    </a>
                  ) : (
                    <span className={index > 0 ? "font-medium text-slate-700 dark:text-slate-200" : ""}>
                      {crumb.title}
                    </span>
                  )}
                </div>
              ))}
            </motion.nav>

            {/* Título de página */}
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                {title}
              </h1>
              {pageDescription && (
                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  {pageDescription}
                </p>
              )}
            </motion.div>

            {/* Contenedor del contenido principal */}
            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div 
                variants={itemVariants}
                className={cn(
                  "bg-white dark:bg-slate-800",
                  "rounded-2xl shadow-sm",
                  "border border-slate-200 dark:border-slate-700",
                  "backdrop-blur-sm dark:backdrop-blur-sm",
                  "dark:bg-opacity-50"
                )}
              >
                <div className="p-6">
                  {children}
                </div>
              </motion.div>
            </motion.div>
          </motion.main>
        </AnimatePresence>

        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={cn(
            "z-10 border-t py-4 px-6",
            "bg-white/70 dark:bg-slate-800/70",
            "backdrop-blur-md dark:backdrop-blur-md",
            "border-slate-200 dark:border-slate-700/50",
            "text-sm text-slate-500 dark:text-slate-400",
            "fixed bottom-0 right-0",
            "transition-all duration-300",
            sidebarOpen ? "left-[280px] lg:left-[280px]" : "left-[76px] lg:left-[76px]"
          )}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center space-x-2">
              <span>© {new Date().getFullYear()} Admin Panel</span>
              {user && (
                <span className="hidden md:flex items-center">
                  <span className="mx-2 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                  <span>Conectado como <span className="font-medium text-blue-500">{user.name}</span></span>
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="hidden md:flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Sistema en línea
              </span>
              <button 
                className="flex items-center space-x-1 text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => {
                  // Ejemplo: toggle modo oscuro
                  document.documentElement.classList.toggle('dark');
                }}
              >
                <ArrowLeftRight size={14} />
                <span className="text-xs">Cambiar tema</span>
              </button>
              <span className="text-xs">v2.0.0</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}