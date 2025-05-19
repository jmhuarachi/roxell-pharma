// components/productos/Filtros.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useProductosStore } from '@/store/useProductosStore';
import { ChevronDownIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { SearchIcon } from 'lucide-react';

const Filtros: React.FC = () => {
    const {
        filtroNombre,
        filtroCategoria,
        filtroAccionTerapeutica,
        filtroViaAdministracion,
        setFiltroNombre,
        setFiltroAccionTerapeutica,
        setFiltroViaAdministracion,
        setFiltroCategoria,
        obtenerCategorias,
        productos
    } = useProductosStore();

    // Obtener opciones únicas para los filtros
    const categorias = obtenerCategorias();
    const accionesTerapeuticas = ['Todos', ...new Set(productos.map(p => p.accion_terapeutica))];
    const viasAdministracion = ['Todas', ...new Set(productos.map(p => p.via_administracion))];

    // Estado para secciones colapsables
    const [seccionesAbiertas, setSeccionesAbiertas] = useState({
        categorias: true,
        acciones: true,
        vias: true
    });

    const toggleSeccion = (seccion: keyof typeof seccionesAbiertas) => {
        setSeccionesAbiertas(prev => ({
            ...prev,
            [seccion]: !prev[seccion]
        }));
    };

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const sectionVariants = {
        open: { 
            opacity: 1,
            height: "auto",
            transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 24 
            }
        },
        closed: { 
            opacity: 0,
            height: 0,
            transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 24 
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white rounded-xl shadow-lg border border-amber-100 p-5"
        >
            {/* Búsqueda por nombre */}
            <motion.div variants={itemVariants} className="mb-6">
                <h3 className="text-sm font-semibold text-amber-800 uppercase mb-2">Buscar producto</h3>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-amber-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Nombre del producto..."
                        className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-amber-900 placeholder-amber-400"
                        value={filtroNombre}
                        onChange={(e) => setFiltroNombre(e.target.value)}
                    />
                    {filtroNombre && (
                        <button
                            onClick={() => setFiltroNombre('')}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            <XMarkIcon className="h-5 w-5 text-amber-400 hover:text-amber-600" />
                        </button>
                    )}
                </div>
            </motion.div>

            {/* Filtro por Categorías */}
            <motion.div variants={itemVariants} className="mb-6">
                <motion.button 
                    onClick={() => toggleSeccion('categorias')}
                    className="flex items-center justify-between w-full text-sm font-semibold text-amber-800 uppercase mb-2"
                    whileHover={{ x: 2 }}
                >
                    <span>Líneas</span>
                    {seccionesAbiertas.categorias ? (
                        <ChevronDownIcon className="h-5 w-5 text-amber-500" />
                    ) : (
                        <ChevronRightIcon className="h-5 w-5 text-amber-500" />
                    )}
                </motion.button>
                
                <AnimatePresence>
                    {seccionesAbiertas.categorias && (
                        <motion.ul
                            variants={sectionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="space-y-1 overflow-hidden"
                        >
                            {categorias.map(categoria => (
                                <motion.li 
                                    key={categoria}
                                    whileHover={{ x: 3 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <button
                                        onClick={() => setFiltroCategoria(categoria)}
                                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-between
                                            ${filtroCategoria === categoria 
                                                ? 'bg-amber-500 text-white font-medium' 
                                                : 'text-amber-800 hover:bg-amber-50'}
                                            ${categoria === 'Todas' ? 'font-semibold' : 'pl-6'}`}
                                    >
                                        <span>{categoria}</span>
                                        {categoria !== 'Todas' && (
                                            <span className={`text-xs px-2 py-1 rounded-full 
                                                ${filtroCategoria === categoria 
                                                    ? 'bg-amber-600 text-amber-100' 
                                                    : 'bg-amber-100 text-amber-800'}`}>
                                                {productos.filter(p => p.categoria === categoria).length}
                                            </span>
                                        )}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Filtro por Acción Terapéutica */}
            <motion.div variants={itemVariants} className="mb-6">
                <motion.button 
                    onClick={() => toggleSeccion('acciones')}
                    className="flex items-center justify-between w-full text-sm font-semibold text-amber-800 uppercase mb-2"
                    whileHover={{ x: 2 }}
                >
                    <span>Acción Terapéutica</span>
                    {seccionesAbiertas.acciones ? (
                        <ChevronDownIcon className="h-5 w-5 text-amber-500" />
                    ) : (
                        <ChevronRightIcon className="h-5 w-5 text-amber-500" />
                    )}
                </motion.button>
                
                <AnimatePresence>
                    {seccionesAbiertas.acciones && (
                        <motion.ul
                            variants={sectionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="space-y-1 overflow-hidden"
                        >
                            {accionesTerapeuticas.map(accion => (
                                <motion.li 
                                    key={accion}
                                    whileHover={{ x: 3 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <button
                                        onClick={() => setFiltroAccionTerapeutica(accion)}
                                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-between
                                            ${filtroAccionTerapeutica === accion 
                                                ? 'bg-amber-500 text-white font-medium' 
                                                : 'text-amber-800 hover:bg-amber-50'}
                                            ${accion === 'Todos' ? 'font-semibold' : 'pl-6'}`}
                                    >
                                        <span>{accion}</span>
                                        {accion !== 'Todos' && (
                                            <span className={`text-xs px-2 py-1 rounded-full 
                                                ${filtroAccionTerapeutica === accion 
                                                    ? 'bg-amber-600 text-amber-100' 
                                                    : 'bg-amber-100 text-amber-800'}`}>
                                                {productos.filter(p => p.accion_terapeutica === accion).length}
                                            </span>
                                        )}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Filtro por Vía de Administración */}
            <motion.div variants={itemVariants} className="mb-6">
                <motion.button 
                    onClick={() => toggleSeccion('vias')}
                    className="flex items-center justify-between w-full text-sm font-semibold text-amber-800 uppercase mb-2"
                    whileHover={{ x: 2 }}
                >
                    <span>Vía de Administración</span>
                    {seccionesAbiertas.vias ? (
                        <ChevronDownIcon className="h-5 w-5 text-amber-500" />
                    ) : (
                        <ChevronRightIcon className="h-5 w-5 text-amber-500" />
                    )}
                </motion.button>
                
                <AnimatePresence>
                    {seccionesAbiertas.vias && (
                        <motion.ul
                            variants={sectionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="space-y-1 overflow-hidden"
                        >
                            {viasAdministracion.map(via => (
                                <motion.li 
                                    key={via}
                                    whileHover={{ x: 3 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <button
                                        onClick={() => setFiltroViaAdministracion(via)}
                                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-between
                                            ${filtroViaAdministracion === via 
                                                ? 'bg-amber-500 text-white font-medium' 
                                                : 'text-amber-800 hover:bg-amber-50'}
                                            ${via === 'Todas' ? 'font-semibold' : 'pl-6'}`}
                                    >
                                        <span>{via}</span>
                                        {via !== 'Todas' && (
                                            <span className={`text-xs px-2 py-1 rounded-full 
                                                ${filtroViaAdministracion === via 
                                                    ? 'bg-amber-600 text-amber-100' 
                                                    : 'bg-amber-100 text-amber-800'}`}>
                                                {productos.filter(p => p.via_administracion === via).length}
                                            </span>
                                        )}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default Filtros;