// stores/useProductosStore.ts
import { create } from 'zustand';
import axios from 'axios';  
import { Producto, ProductosState, ProductoEnCarrito } from '../types/producto.d';

export const useProductosStore = create<ProductosState>((set, get) => ({
    productos: [],
    productoSeleccionado: null,
    carrito: [],
    filtroNombre: '',
    filtroAccionTerapeutica: 'Todos',
    filtroViaAdministracion: 'Todas',
    filtroCategoria: 'Todas',
    cargando: false,
    error: null,
    metodoPago: 'contado', // 'contado' o 'credito'

    obtenerProductos: async () => {
        set({ cargando: true, error: null });
        try {
            const response = await axios.get('api/productos');
            set({ productos: response.data, cargando: false });
        } catch (error) {
            set({ 
                error: 'Error al cargar los productos', 
                cargando: false 
            });
            console.error('Error:', error);
        }
    },

    seleccionarProducto: (producto: Producto) => {
        set({ productoSeleccionado: producto });
    },

    cerrarModal: () => {
        set({ productoSeleccionado: null });
    },

    agregarAlCarrito: (producto: Producto | ProductoEnCarrito) => {
        set((state) => {
            const cantidad = 'cantidad' in producto ? producto.cantidad : 1;
            const existeEnCarrito = state.carrito.find(item => item.id === producto.id);
            
            if (existeEnCarrito) {
                // Actualizar cantidad si ya existe
                return {
                    carrito: state.carrito.map(item =>
                        item.id === producto.id
                            ? { 
                                ...item, 
                                cantidad: item.cantidad + cantidad,
                                precio_contado: producto.precio_contado,
                                precio_credito: producto.precio_credito
                              }
                            : item
                    )
                };
            }
            
            // Agregar nuevo producto al carrito
            return { 
                carrito: [
                    ...state.carrito, 
                    { 
                        ...producto, 
                        cantidad: cantidad 
                    }
                ] 
            };
        });
    },

    actualizarCantidad: (productoId: number, nuevaCantidad: number) => {
        if (nuevaCantidad < 1) return;
        
        set((state) => ({
            carrito: state.carrito.map(item =>
                item.id === productoId
                    ? { ...item, cantidad: nuevaCantidad }
                    : item
            )
        }));
    },

    eliminarDelCarrito: (productoId: number) => {
        set((state) => ({
            carrito: state.carrito.filter(item => item.id !== productoId)
        }));
    },

    limpiarCarrito: () => {
        set({ carrito: [] });
    },

    setFiltroNombre: (nombre: string) => {
        set({ filtroNombre: nombre });
    },

    setFiltroAccionTerapeutica: (accion: string) => {
        set({ filtroAccionTerapeutica: accion });
    },

    setFiltroViaAdministracion: (via: string) => {
        set({ filtroViaAdministracion: via });
    },

    setFiltroCategoria: (categoria: string) => {
        set({ filtroCategoria: categoria });
    },

    setMetodoPago: (metodo: 'contado' | 'credito') => {
        set({ metodoPago: metodo });
    },

    // Función para obtener productos filtrados
    productosFiltrados: () => {
        const { productos, filtroNombre, filtroAccionTerapeutica, filtroViaAdministracion, filtroCategoria } = get();
        
        return productos.filter(producto => {
            const cumpleNombre = filtroNombre === '' || 
                               producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
            
            const cumpleAccion = filtroAccionTerapeutica === 'Todos' || 
                               producto.accion_terapeutica === filtroAccionTerapeutica;
            
            const cumpleVia = filtroViaAdministracion === 'Todas' || 
                           producto.via_administracion === filtroViaAdministracion;
            
            const cumpleCategoria = filtroCategoria === 'Todas' || 
                                 producto.categoria === filtroCategoria;
            
            return cumpleNombre && cumpleAccion && cumpleVia && cumpleCategoria;
        });
    },

    // Función para calcular el total del carrito según método de pago
    calcularTotalCarrito: () => {
        const { carrito, metodoPago } = get();
        
        return carrito.reduce((total, item) => {
            const precio = metodoPago === 'contado' 
                ? Number(item.precio_contado) 
                : Number(item.precio_credito);
            return total + (precio * item.cantidad);
        }, 0);
    },

    // Función para calcular el total de items en el carrito
    calcularTotalItems: () => {
        const { carrito } = get();
        return carrito.reduce((total, item) => total + item.cantidad, 0);
    },

    // Función para obtener categorías únicas de productos
    obtenerCategorias: () => {
        const { productos } = get();
        return ['Todas', ...new Set(productos.map(p => p.categoria))];
    },
}));