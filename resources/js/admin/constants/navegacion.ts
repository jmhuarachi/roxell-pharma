import { EnlaceNavegacion } from "../types/navegacion";


export const ENLACES_NAVEGACION: EnlaceNavegacion[] = [
    { nombre: "Dashboard", ruta: route('admin.dashboard') }, 
    { nombre: "Usuarios", ruta: route('admin.usuarios') },
    { nombre: "Productos", ruta: route('admin.productos') },
    // { nombre: "Pedidos", ruta: route('pedidos') },
    { nombre: "Noticias", ruta: route('admin.noticias') },
    // // { nombre: "Recursos Externos", ruta: route('recursos') },
    // { nombre: "Farmacovigilancia", ruta: route('farmacovigilancia') },
    // { nombre: "Contacto", ruta: route('contacto') },
    
    // { nombre: "Política de Cookies", ruta: route('cookies') },


];

