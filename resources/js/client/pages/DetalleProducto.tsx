// components/productos/DetalleProducto.tsx
import { useProductosStore } from '@/client/store/useProductosStore';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DetalleProducto = () => {
    const { productoSeleccionado, cerrarModal, agregarAlCarrito } = useProductosStore();
    const [cantidad, setCantidad] = useState(1);
    const [errorCantidad, setErrorCantidad] = useState('');

    useEffect(() => {
        // Resetear cantidad cuando cambia el producto seleccionado
        setCantidad(1);
        setErrorCantidad('');
    }, [productoSeleccionado]);

    if (!productoSeleccionado) return null;

    const handleAumentarCantidad = () => {
        if (cantidad < productoSeleccionado.stock) {
            setCantidad(cantidad + 1);
            setErrorCantidad('');
        } else {
            setErrorCantidad('No hay suficiente stock disponible');
        }
    };

    const handleDisminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            setErrorCantidad('');
        }
    };

    const handleCambioManual = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            if (value <= 0) {
                setErrorCantidad('La cantidad debe ser al menos 1');
            } else if (value > productoSeleccionado.stock) {
                setErrorCantidad('No hay suficiente stock disponible');
            } else {
                setErrorCantidad('');
            }
            setCantidad(value);
        } else if (e.target.value === '') {
            setCantidad(0);
        }
    };

    const handleAgregarAlCarrito = () => {
        if (cantidad < 1) {
            setErrorCantidad('La cantidad debe ser al menos 1');
            return;
        }
        if (cantidad > productoSeleccionado.stock) {
            setErrorCantidad('No hay suficiente stock disponible');
            return;
        }
        
        agregarAlCarrito({
            ...productoSeleccionado,
            cantidad
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
        >
            <button 
                onClick={cerrarModal}
                className="mb-4 flex items-center text-amber-600 hover:text-amber-800 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Volver al catálogo
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Imagen del producto */}
                <div className="bg-amber-50 rounded-lg p-4 flex items-center justify-center">
                    <img 
                        src={productoSeleccionado.imagen || '/placeholder-product.png'} 
                        alt={productoSeleccionado.nombre}
                        className="max-h-80 object-contain"
                    />
                </div>

                {/* Información del producto */}
                <div>
                    <h2 className="text-2xl font-bold text-amber-800 mb-2">{productoSeleccionado.nombre}</h2>
                    
                    <div className="space-y-4 mb-6">
                        {/* ... (resto de la información del producto permanece igual) ... */}
                    </div>

                    {/* Precios y acciones */}
                    <div className="bg-amber-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                            <span className="font-medium text-amber-700">Precio al contado:</span>
                            <span className="text-xl font-bold text-amber-600">
                                ${Number(productoSeleccionado.precio_contado).toFixed(2)}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-medium text-amber-700">Precio al crédito:</span>
                            <span className="text-xl font-bold text-amber-600">
                                ${Number(productoSeleccionado.precio_credito).toFixed(2)}
                            </span>
                        </div>
                        
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-medium text-amber-700">Stock disponible:</span>
                            <span className={`text-lg font-bold ${
                                productoSeleccionado.stock > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {productoSeleccionado.stock > 0 ? productoSeleccionado.stock + ' unidades' : 'Agotado'}
                            </span>
                        </div>

                        {/* Selector de cantidad */}
                        <div className="mb-4">
                            <label htmlFor="cantidad" className="block font-medium text-amber-700 mb-2">
                                Cantidad:
                            </label>
                            <div className="flex items-center">
                                <button
                                    onClick={handleDisminuirCantidad}
                                    disabled={cantidad <= 1}
                                    className={`p-2 rounded-l-lg border border-amber-300 ${
                                        cantidad <= 1 ? 'bg-gray-200 text-gray-400' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                    }`}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    id="cantidad"
                                    min="1"
                                    max={productoSeleccionado.stock}
                                    value={cantidad}
                                    onChange={handleCambioManual}
                                    className="w-16 text-center border-t border-b border-amber-300 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                />
                                <button
                                    onClick={handleAumentarCantidad}
                                    disabled={cantidad >= productoSeleccionado.stock}
                                    className={`p-2 rounded-r-lg border border-amber-300 ${
                                        cantidad >= productoSeleccionado.stock ? 'bg-gray-200 text-gray-400' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                    }`}
                                >
                                    +
                                </button>
                            </div>
                            {errorCantidad && (
                                <p className="mt-1 text-sm text-red-600">{errorCantidad}</p>
                            )}
                        </div>
                        
                        <button
                            onClick={handleAgregarAlCarrito}
                            disabled={productoSeleccionado.stock <= 0 || cantidad < 1 || cantidad > productoSeleccionado.stock}
                            className={`w-full font-bold py-2 px-4 rounded-lg transition-colors ${
                                productoSeleccionado.stock > 0 && cantidad >= 1 && cantidad <= productoSeleccionado.stock
                                    ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {productoSeleccionado.stock > 0 ? 'Añadir al carrito' : 'Producto agotado'}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DetalleProducto;