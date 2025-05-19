// types/producto.d.ts
export interface Producto {
    id: number;
    nombre: string;
    composicion: string;
    presentacion: string;
    accion_terapeutica: string;
    via_administracion: string;
    categoria: string;
    indicaciones?: string;
    contraindicaciones?: string;
    precio_contado: number | string;
    precio_credito: number | string;
    imagen?: string;
    stock: number;
}

export interface ProductoEnCarrito extends Producto {
    cantidad: number;
}

export interface ProductosState {
    productos: Producto[];
    productoSeleccionado: Producto | null;
    carrito: ProductoEnCarrito[];
    filtroNombre: string;
    filtroAccionTerapeutica: string;
    filtroViaAdministracion: string;
    filtroCategoria: string;
    cargando: boolean;
    error: string | null;
    metodoPago: 'contado' | 'credito';
    
    // Métodos
    obtenerProductos: () => Promise<void>;
    seleccionarProducto: (producto: Producto) => void;
    cerrarModal: () => void;
    agregarAlCarrito: (producto: Producto | ProductoEnCarrito) => void;
    actualizarCantidad: (productoId: number, nuevaCantidad: number) => void;
    eliminarDelCarrito: (productoId: number) => void;
    limpiarCarrito: () => void;
    setFiltroNombre: (nombre: string) => void;
    setFiltroAccionTerapeutica: (accion: string) => void;
    setFiltroViaAdministracion: (via: string) => void;
    setFiltroCategoria: (categoria: string) => void;
    setMetodoPago: (metodo: 'contado' | 'credito') => void;
    productosFiltrados: () => Producto[];
    calcularTotalCarrito: () => number;
    calcularTotalItems: () => number;
    obtenerCategorias: () => string[];
}