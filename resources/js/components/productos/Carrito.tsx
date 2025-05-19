// components/productos/Carrito.tsx
import { motion } from 'framer-motion';
import { useProductosStore } from '@/store/useProductosStore';
import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const Carrito: React.FC = () => {
    const { carrito, eliminarDelCarrito, actualizarCantidad } = useProductosStore();

    // Calcular totales
    const totalContado = carrito.reduce((sum, item) => sum + (Number(item.precio_contado) * item.cantidad), 0);
    const totalCredito = carrito.reduce((sum, item) => sum + (Number(item.precio_credito) * item.cantidad), 0);
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const handleCambioCantidad = (productoId: number, nuevaCantidad: number) => {
        if (nuevaCantidad >= 1) {
            actualizarCantidad(productoId, nuevaCantidad);
        }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white p-6 rounded-lg shadow-lg border border-amber-100"
        >
            <div className="flex items-center mb-4">
                <ShoppingBagIcon className="h-6 w-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-amber-800">Mi Carrito ({totalItems})</h3>
            </div>
            
            {carrito.length === 0 ? (
                <motion.p 
                    variants={itemVariants}
                    className="text-amber-500 text-center py-4"
                >
                    Tu carrito está vacío
                </motion.p>
            ) : (
                <>
                    <ul className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {carrito.map((item) => (
                            <motion.li
                                key={item.id}
                                variants={itemVariants}
                                className="flex justify-between items-center border-b border-amber-100 pb-3"
                                whileHover={{ scale: 1.01 }}
                            >
                                <div className="flex-1">
                                    <h4 className="font-semibold text-amber-800">{item.nombre}</h4>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex items-center space-x-2">
                                            <button 
                                                onClick={() => handleCambioCantidad(item.id, item.cantidad - 1)}
                                                disabled={item.cantidad <= 1}
                                                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                                                    item.cantidad <= 1 ? 'bg-gray-200 text-gray-400' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                                }`}
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center">{item.cantidad}</span>
                                            <button 
                                                onClick={() => handleCambioCantidad(item.id, item.cantidad + 1)}
                                                className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-sm text-amber-600">
                                                {item.cantidad} x ${Number(item.precio_contado).toFixed(2)}
                                            </span>
                                            <span className="font-medium text-amber-800">
                                                ${(Number(item.precio_contado) * item.cantidad).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => eliminarDelCarrito(item.id)}
                                    className="text-amber-500 hover:text-amber-700 ml-2"
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Totales */}
                    <div className="mt-6 space-y-2">
                        <div className="flex justify-between border-t border-amber-100 pt-3">
                            <span className="font-semibold text-amber-700">Total Contado:</span>
                            <span className="font-bold text-amber-600">${totalContado.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-amber-700">Total Crédito:</span>
                            <span className="font-bold text-amber-600">${totalCredito.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Botón de compra */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold"
                    >
                        Proceder al pago
                    </motion.button>
                </>
            )}
        </motion.div>
    );
};

export default Carrito;