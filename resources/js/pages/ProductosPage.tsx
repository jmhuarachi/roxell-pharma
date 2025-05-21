// pages/ProductosPage.tsx
import { motion } from 'framer-motion';
import { useProductosStore } from '@/store/useProductosStore';
import Filtros from '@/components/productos/Filtros';
import ProductoCard from '@/components/productos/ProductoCard';
import DetalleProducto from '@/components/productos/DetalleProducto';
import Carrito from '@/components/productos/Carrito';
import { useEffect } from 'react';
import { Head } from '@inertiajs/react';

const ProductosPage: React.FC = () => {
    const { 
        productosFiltrados, 
        cargando, 
        error, 
        obtenerProductos,
        productoSeleccionado
    } = useProductosStore();

    useEffect(() => {
        obtenerProductos();
    }, [obtenerProductos]);

    const productos = productosFiltrados();

    return (
        <>
        <Head title="Productos" />
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-amber-800 mb-6">
                    {productoSeleccionado ? 'Detalle del Producto' : 'Catálogo de Productos'}
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Columna de filtros */}
                    <div className="lg:col-span-2">
                        <Filtros />
                    </div>

                    {/* Columna principal (productos o detalle) */}
                    <div className="lg:col-span-8   ">
                        {error && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                                <p>{error}</p>
                            </div>
                        )}

                        {productoSeleccionado ? (
                            <DetalleProducto />
                        ) : (
                            <>
                                {cargando ? (
                                    <div className="text-center py-12">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
                                        <p className="mt-4 text-amber-800">Cargando productos...</p>
                                    </div>
                                ) : productos.length === 0 ? (
                                    <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
                                        <p className="text-amber-700">No hay productos disponibles con los filtros seleccionados</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {productos.map((producto) => (
                                            <ProductoCard key={producto.id} producto={producto} />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Columna del carrito */}
                    <div className="lg:col-span-2">
                        <Carrito />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductosPage;