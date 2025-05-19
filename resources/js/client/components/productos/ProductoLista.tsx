// components/productos/ProductoLista.tsx
import { Producto } from '@/client/types/producto';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useProductosStore } from '@/client/store/useProductosStore';

interface ProductoListaProps {
    producto: Producto;
    onClick: () => void;
}

const ProductoLista: React.FC<ProductoListaProps> = ({ producto, onClick }) => {
    const { agregarAlCarrito } = useProductosStore();

    const handleAgregarCarrito = (e: React.MouseEvent) => {
        e.stopPropagation();
        agregarAlCarrito({
            ...producto,
            cantidad: 1
        });
    };

    return (
        <div 
            onClick={onClick}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
        >
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber-50 p-2 rounded-lg">
                    <img
                        src={producto.imagen || '/placeholder-product.png'}
                        alt={producto.nombre}
                        className="h-20 w-20 object-contain"
                    />
                </div>
                
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-amber-800 mb-1">{producto.nombre}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{producto.composicion}</p>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-medium text-amber-700 mr-3">
                                Contado: <span className="font-bold">${Number(producto.precio_contado).toFixed(2)}</span>
                            </span>
                            <span className="text-sm font-medium text-amber-800">
                                Crédito: <span className="font-bold">${Number(producto.precio_credito).toFixed(2)}</span>
                            </span>
                        </div>
                        
                        <button
                            onClick={handleAgregarCarrito}
                            disabled={producto.stock <= 0}
                            className={`p-2 rounded-full ${producto.stock > 0 ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                        >
                            <ShoppingCartIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoLista;