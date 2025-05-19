// components/productos/DetalleProducto.tsx
import { useProductosStore } from '@/client/store/useProductosStore';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const DetalleProducto = () => {
    const { productoSeleccionado, cerrarModal, agregarAlCarrito } = useProductosStore();
    const [cantidad, setCantidad] = useState(1);
    const [errorCantidad, setErrorCantidad] = useState('');
    const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
    const imgContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setCantidad(1);
        setErrorCantidad('');
    }, [productoSeleccionado]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!imgContainerRef.current || !productoSeleccionado?.imagen) return;
        
        const container = imgContainerRef.current;
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        
        setZoomStyle({
            backgroundImage: `url(${productoSeleccionado.imagen})`,
            backgroundPosition: `${x}% ${y}%`,
            opacity: 1,
            transform: 'scale(1.5)'
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ opacity: 0, transform: 'scale(1)' });
    };

    const handleAumentarCantidad = () => {
        if (cantidad < (productoSeleccionado?.stock || 0)) {
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
            } else if (productoSeleccionado && value > productoSeleccionado.stock) {
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
        if (!productoSeleccionado) return;
        
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

    if (!productoSeleccionado) return null;

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

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Contenedor de la imagen con zoom CSS */}
                <div className="lg:w-1/2 bg-amber-50 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
                    {productoSeleccionado.imagen ? (
                        <div 
                            ref={imgContainerRef}
                            className="relative w-full h-full overflow-hidden group"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img 
                                src={productoSeleccionado.imagen}
                                alt={productoSeleccionado.nombre}
                                className="w-full h-full object-contain transition-all duration-300"
                            />
                            <div 
                                className="absolute inset-0 bg-no-repeat bg-origin-border pointer-events-none transition-all duration-300"
                                style={{
                                    backgroundImage: `url(${productoSeleccionado.imagen})`,
                                    opacity: 0,
                                    transform: 'scale(1)',
                                    ...zoomStyle
                                }}
                            />
                            <div className="absolute bottom-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Pasa el mouse para zoom
                            </div>
                        </div>
                    ) : (
                        <div className="text-amber-500 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="mt-2">Imagen no disponible</p>
                        </div>
                    )}
                </div>

                {/* Información del producto */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">
                        {productoSeleccionado.nombre}
                    </h2>
                    
                    <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold text-amber-700">Composición:</h3>
                                <p className="text-gray-700">{productoSeleccionado.composicion || 'No especificado'}</p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-amber-700">Presentación:</h3>
                                <p className="text-gray-700">{productoSeleccionado.presentacion || 'No especificado'}</p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-amber-700">Acción Terapéutica:</h3>
                                <p className="text-gray-700">{productoSeleccionado.accion_terapeutica || 'No especificado'}</p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-amber-700">Vía de Administración:</h3>
                                <p className="text-gray-700">{productoSeleccionado.via_administracion || 'No especificado'}</p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-amber-700">Categoría:</h3>
                                <p className="text-gray-700">{productoSeleccionado.categoria || 'No especificado'}</p>
                            </div>
                        </div>
                        
                        {productoSeleccionado.indicaciones && (
                            <div>
                                <h3 className="font-semibold text-amber-700">Indicaciones:</h3>
                                <p className="text-gray-700 whitespace-pre-line bg-amber-50 p-3 rounded-lg">
                                    {productoSeleccionado.indicaciones}
                                </p>
                            </div>
                        )}
                        
                        {productoSeleccionado.contraindicaciones && (
                            <div>
                                <h3 className="font-semibold text-amber-700">Contraindicaciones:</h3>
                                <p className="text-gray-700 whitespace-pre-line bg-amber-50 p-3 rounded-lg">
                                    {productoSeleccionado.contraindicaciones}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Precios y acciones */}
                    <div className="bg-amber-50 rounded-lg p-4 sticky bottom-0">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <span className="font-medium text-amber-700">Precio al contado:</span>
                                <span className="block text-xl font-bold text-amber-600">
                                    ${Number(productoSeleccionado.precio_contado).toFixed(2) || '0.00'}
                                </span>
                            </div>
                            <div>
                                <span className="font-medium text-amber-700">Precio al crédito:</span>
                                <span className="block text-xl font-bold text-amber-600">
                                    ${Number(productoSeleccionado.precio_credito).toFixed(2) || '0.00'}
                                </span>
                            </div>
                            <div>
                                <span className="font-medium text-amber-700">Stock disponible:</span>
                                <span className={`block text-lg font-bold ${
                                    productoSeleccionado.stock > 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {productoSeleccionado.stock > 0 ? productoSeleccionado.stock + ' unidades' : 'Agotado'}
                                </span>
                            </div>
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
                                    className="w-16 text-center text-amber-900 border-t border-b border-amber-300 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
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
                            className={`w-full font-bold py-3 px-4 rounded-lg transition-colors ${
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