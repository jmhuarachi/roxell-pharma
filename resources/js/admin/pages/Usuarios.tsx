  // resources/js/admin/pages/Usuarios.tsx
  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { Search, UserPlus, Filter, MoreVertical, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
  import { cn } from '@/utils';

  // Datos de ejemplo (en un caso real, vendrían de una API)
  const usuariosEjemplo = [
    { id: 1, nombre: 'Ana García', email: 'ana.garcia@ejemplo.com', rol: 'Administrador', estado: 'Activo', ultimoAcceso: '2025-05-19' },
    { id: 2, nombre: 'Carlos López', email: 'carlos.lopez@ejemplo.com', rol: 'Editor', estado: 'Activo', ultimoAcceso: '2025-05-15' },
    { id: 3, nombre: 'Miguel Rodríguez', email: 'miguel.rodriguez@ejemplo.com', rol: 'Usuario', estado: 'Inactivo', ultimoAcceso: '2025-04-28' },
    { id: 4, nombre: 'Laura Martínez', email: 'laura.martinez@ejemplo.com', rol: 'Editor', estado: 'Activo', ultimoAcceso: '2025-05-20' },
    { id: 5, nombre: 'Daniel Pérez', email: 'daniel.perez@ejemplo.com', rol: 'Usuario', estado: 'Activo', ultimoAcceso: '2025-05-18' },
  ];

  export default function Usuarios() {
    const [usuarios, setUsuarios] = useState(usuariosEjemplo);
    const [busqueda, setBusqueda] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Simulamos la carga de datos
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);

    const usuariosFiltrados = usuarios.filter(usuario => 
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
      usuario.email.toLowerCase().includes(busqueda.toLowerCase())
    );

    const itemVariants = {
      hidden: { opacity: 0, y: 15 },
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
      <>
        {/* Header con acciones */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar usuarios..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
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
          
          <div className="flex gap-3">
            <button
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-xl",
                "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700",
                "text-slate-600 dark:text-slate-300",
                "border border-slate-200 dark:border-slate-700",
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
                "flex items-center gap-2 px-3 py-2 rounded-xl",
                "bg-blue-500 hover:bg-blue-600 text-white",
                "shadow-sm shadow-blue-500/10",
                "transition-colors"
              )}
            >
              <UserPlus size={16} />
              <span>Nuevo Usuario</span>
            </motion.button>
          </div>
        </div>
        
        {/* Tabla de usuarios */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/80">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-slate-500 dark:text-slate-300 text-sm">Nombre</th>
                <th className="px-4 py-3 font-medium text-slate-500 dark:text-slate-300 text-sm">Email</th>
                <th className="px-4 py-3 font-medium text-slate-500 dark:text-slate-300 text-sm">Rol</th>
                <th className="px-4 py-3 font-medium text-slate-500 dark:text-slate-300 text-sm">Estado</th>
                <th className="px-4 py-3 font-medium text-slate-500 dark:text-slate-300 text-sm">Último acceso</th>
                <th className="px-4 py-3 font-medium text-slate-500 dark:text-slate-300 text-sm">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {isLoading ? (
                // Estados de carga
                Array.from({ length: 3 }).map((_, i) => (
                  <tr key={`skeleton-${i}`} className="bg-white dark:bg-slate-800/30">
                    {Array.from({ length: 6 }).map((_, j) => (
                      <td key={`cell-${i}-${j}`} className="px-4 py-3">
                        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse"></div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : usuariosFiltrados.length > 0 ? (
                // Datos de usuarios
                usuariosFiltrados.map((usuario, index) => (
                  <motion.tr 
                    key={usuario.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                    className="bg-white dark:bg-slate-800/30 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">{usuario.nombre}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{usuario.email}</td>
                    <td className="px-4 py-3">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        usuario.rol === 'Administrador' ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" :
                        usuario.rol === 'Editor' ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                        "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      )}>
                        {usuario.rol}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="flex items-center">
                        {usuario.estado === 'Activo' ? (
                          <>
                            <CheckCircle size={16} className="mr-1 text-green-500" />
                            <span className="text-green-600 dark:text-green-400">Activo</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={16} className="mr-1 text-red-500" />
                            <span className="text-red-600 dark:text-red-400">Inactivo</span>
                          </>
                        )}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{usuario.ultimoAcceso}</td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <button className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
                          <Trash2 size={16} />
                        </button>
                        <button className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              ) : (
                // Estado sin resultados
                <tr className="bg-white dark:bg-slate-800/30">
                  <td colSpan={6} className="px-4 py-6 text-center text-slate-500 dark:text-slate-400">
                    No se encontraron usuarios que coincidan con la búsqueda
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Paginación */}
        {!isLoading && usuariosFiltrados.length > 0 && (
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Mostrando <span className="font-medium">{usuariosFiltrados.length}</span> de <span className="font-medium">{usuarios.length}</span> usuarios
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50">
                Anterior
              </button>
              <button className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                1
              </button>
              <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Siguiente
              </button>
            </div>
          </div>
        )}
      </>
    );
  }