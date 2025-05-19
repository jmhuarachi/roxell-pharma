// lib/api/productos.ts
import axios from 'axios';

const API_BASE_URL = 'api'; // Ajusta según tu configuración

export type Producto = {
  id: number;
  nombre: string;
  composicion: string;
  presentacion: string;
  accion_terapeutica: string;
  via_administracion: string;
  indicaciones: string;
  contraindicaciones: string;
  precio_contado: number;
  precio_credito: number;
  imagen: string;
  stock: number;
  categoria: string;
};

export const obtenerProductos = async (): Promise<Producto[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/productos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
};

export const buscarProductos = async (termino: string): Promise<Producto[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/productos/buscar`, {
      params: { q: termino }
    });
    return response.data;
  } catch (error) {
    console.error('Error al buscar productos:', error);
    return [];
  }
};

export const obtenerProductosPorCategoria = async (categoria: string): Promise<Producto[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/productos/categoria/${categoria}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    return [];
  }
};