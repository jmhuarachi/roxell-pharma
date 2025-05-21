// resources/js/admin/pages/Noticias.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, Edit, Trash2, Eye, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils';

// Datos de ejemplo para noticias
const noticiasEjemplo = [
  { 
    id: 1, 
    titulo: 'Actualización de productos farmacéuticos', 
    resumen: 'Nuevos productos disponibles en el catálogo', 
    autor: 'Ana García', 
    fecha: '2025-05-18', 
    estado: 'Publicado',
    categoria: 'Productos' 
  },
  { 
    id: 2, 
    titulo: 'Información sobre farmacovigilancia', 
    resumen: 'Nuevas medidas para el control de medicamentos', 
    autor: 'Carlos López', 
    fecha: '2025-05-15', 
    estado: 'Borrador',
    categoria: 'Farmacovigilancia' 
  },
  { 
    id: 3, 
    titulo: 'Calendario de eventos', 
    resumen: 'Próximos eventos y conferencias del sector', 
    autor: 'Miguel Rodríguez', 
    fecha: '2025-05-10', 
    estado: 'Publicado',
    categoria: 'Eventos' 
  },
  { 
    id: 4, 
    titulo: 'Recomendaciones para pacientes', 
    resumen: 'Guía sobre el uso adecuado de medicamentos', 
    autor: 'Laura Martínez', 
    fecha: '2025-05-05', 
    estado: 'Publicado',
    categoria: 'Pacientes' 
  },
];

export default function Noticias() {
  const [noticias, setNoticias] = useState(noticiasEjemplo);
  const [busqueda, setBusqueda] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulamos la carga de datos
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const noticiasFiltradas = noticias.filter(noticia => 
    noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
    noticia.resumen.toLowerCase().includes(busqueda.toLowerCase()) ||
    noticia.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="space-y-6">
      
      
      {/* Barra de acciones */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" />
          <input 
            type="text" 
            placeholder="Buscar noticias..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className={cn(
              "w-full h-10 pl-10 pr-4 rounded-lg",
              "bg-slate-50 dark:bg-slate-700/50",
              "border border-slate-200 dark:border-slate-600",
              "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50",
              "text-slate-700 dark:text-slate-200",
              "placeholder:text-slate-400 dark:placeholder:text-slate-500",
              "transition-all duration-200"
            )}
          />
        </div>
        
        <div className="flex gap-3">
          <button
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg",
              "bg-slate-50 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600",
              "text-slate-700 dark:text-slate-200",
              "border border-slate-200 dark:border-slate-600",
              "transition-colors"
            )}
          >
            <Filter size={16} />
            <span>Filtrar</span>
          </button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg",
              "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
              "text-white font-medium",
              "shadow-sm shadow-blue-500/20",
              "transition-all duration-200"
            )}
          >
            <Plus size={16} />
            <span>Nueva Noticia</span>
          </motion.button>
        </div>
      </div>
      
      {/* Tarjetas de noticias */}
      <div className="space-y-4">
        {isLoading ? (
          // Estado de carga
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={`skeleton-${i}`} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm p-4">
                <div className="h-6 w-2/3 bg-slate-100 dark:bg-slate-700 rounded-md mb-3 animate-pulse"></div>
                <div className="h-4 w-full bg-slate-100 dark:bg-slate-700 rounded-md mb-2 animate-pulse"></div>
                <div className="h-4 w-4/5 bg-slate-100 dark:bg-slate-700 rounded-md mb-4 animate-pulse"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 w-24 bg-slate-100 dark:bg-slate-700 rounded-md animate-pulse"></div>
                  <div className="h-8 w-24 bg-slate-100 dark:bg-slate-700 rounded-md animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        ) : noticiasFiltradas.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {noticiasFiltradas.map((noticia) => (
              <motion.div 
                key={noticia.id}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-lg text-slate-800 dark:text-slate-100">{noticia.titulo}</h3>
                    <span className={cn(
                      "px-2 py-1 rounded-md text-xs font-medium",
                      noticia.estado === 'Publicado' ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300" :
                      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300"
                    )}>
                      {noticia.estado}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{noticia.resumen}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <User size={14} className="mr-1.5" />
                        <span>{noticia.autor}</span>
                      </div>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar size={14} className="mr-1.5" />
                        <span>{noticia.fecha}</span>
                      </div>
                    </div>
                    
                    <span className={cn(
                      "px-2 py-1 rounded-md text-xs font-medium",
                      noticia.categoria === 'Productos' ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" :
                      noticia.categoria === 'Farmacovigilancia' ? "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300" :
                      noticia.categoria === 'Eventos' ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300" :
                      "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                    )}>
                      {noticia.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="flex border-t border-slate-100 dark:border-slate-700/50">
                  <button className="flex-1 py-3 flex justify-center items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <Eye size={16} />
                    <span className="text-sm font-medium">Ver</span>
                  </button>
                  <button className="flex-1 py-3 flex justify-center items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-l border-slate-100 dark:border-slate-700/50">
                    <Edit size={16} />
                    <span className="text-sm font-medium">Editar</span>
                  </button>
                  <button className="flex-1 py-3 flex justify-center items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-l border-slate-100 dark:border-slate-700/50">
                    <Trash2 size={16} />
                    <span className="text-sm font-medium">Eliminar</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Estado sin resultados
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm p-8">
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-full p-3">
                <Search size={24} className="text-slate-400 dark:text-slate-500" />
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium">No se encontraron noticias</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Intenta con otro término de búsqueda</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Paginación */}
      {!isLoading && noticiasFiltradas.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Mostrando <span className="font-medium">{noticiasFiltradas.length}</span> de <span className="font-medium">{noticias.length}</span> noticias
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-50">
              <ChevronLeft size={16} />
            </button>
            <button className="px-3.5 py-1.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium">
              1
            </button>
            <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Noticias.title = 'Noticias';
Noticias.description = 'Gestión de publicaciones y noticias';