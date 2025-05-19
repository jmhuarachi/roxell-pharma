import { EnlaceNavegacion } from '../types/navegacion';

export const ENLACES_NAVEGACION: EnlaceNavegacion[] = [
    { nombre: "Inicio", ruta: route('home') }, 
    { nombre: "Nosotros", ruta: route('about') },
    { nombre: "Productos", ruta: route('productos') },
    { nombre: "Pedidos", ruta: route('pedidos') },
    { nombre: "Lo Nuevo", ruta: route('nuevo') },
    // { nombre: "Recursos Externos", ruta: route('recursos') },
    { nombre: "Farmacovigilancia", ruta: route('farmacovigilancia') },
    { nombre: "Contacto", ruta: route('contacto') },
    
    // { nombre: "Política de Cookies", ruta: route('cookies') },


];