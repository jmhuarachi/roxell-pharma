import { motion } from 'framer-motion';
import { useProductosStore } from '@/client/store/useProductosStore';
import { Producto } from '@/client/types/producto';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

interface ProductoCardProps {
    producto: Producto;
}

const ProductoCard: React.FC<ProductoCardProps> = ({ producto }) => {
    const { seleccionarProducto, agregarAlCarrito } = useProductosStore();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        agregarAlCarrito({ ...producto, cantidad: 1 });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.2)",
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer h-full flex flex-col border border-amber-100 transition-all duration-300 hover:border-amber-300"
            onClick={() => seleccionarProducto(producto)}
        >
            {/* Contenedor de la imagen */}
            <div className="relative h-48 w-full overflow-hidden bg-amber-50 group">
                <motion.img
                    src={producto.imagen || '/placeholder-product.png'}
                    alt={producto.nombre}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-300"
                    initial={{ scale: 1 }}
                />
                
                {/* Badge de stock */}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
                    producto.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                    {producto.stock > 0 ? 'Disponible' : 'Agotado'}
                </div>

                {/* Botón de añadir al carrito */}
                {producto.stock > 0 && (
                    <motion.button
                        onClick={handleAddToCart}
                        className="absolute bottom-2 right-2 bg-amber-500 text-white p-2 rounded-full shadow-md"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <ShoppingCartIcon className="h-5 w-5" />
                    </motion.button>
                )}
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-amber-800 mb-2 line-clamp-2 hover:text-amber-600 transition-colors">
                    {producto.nombre}
                </h3>
                
                <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-start">
                        <span className="font-semibold text-amber-700 min-w-[100px]">Composición:</span>
                        <span className="text-gray-600 ml-2 line-clamp-2">{producto.composicion}</span>
                    </div>
                    <div className="flex items-start">
                        <span className="font-semibold text-amber-700 min-w-[100px]">Presentación:</span>
                        <span className="text-gray-600 ml-2 line-clamp-2">{producto.presentacion}</span>
                    </div>
                </div>
                
                {/* Precios */}
                <div className="mt-auto">
                    <div className="flex justify-between items-center bg-amber-50 rounded-lg p-2 mb-2">
                        <span className="text-sm font-medium text-amber-700">Contado:</span>
                        <span className="text-lg font-bold text-amber-600">
                            ${Number(producto.precio_contado).toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between items-center bg-amber-100 rounded-lg p-2">
                        <span className="text-sm font-medium text-amber-800">Crédito:</span>
                        <span className="text-lg font-bold text-amber-700">
                            ${Number(producto.precio_credito).toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductoCard;