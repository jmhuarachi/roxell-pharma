// store/useNavegacionStore.ts
import { create } from 'zustand';
import { ENLACES_NAVEGACION } from '@/constants/navegacion';

interface EstadoNavegacion {
  menuAbierto: boolean;
  enlaceActivo: string;
  alternarMenu: () => void;
  establecerEnlaceActivo: (ruta: string) => void;
  cerrarMenu: () => void;
  actualizarEnlaceActivoPorRuta: (rutaActual: string) => void;
}

export const useNavegacionStore = create<EstadoNavegacion>((set) => ({
  menuAbierto: false,
  enlaceActivo: '/',

  alternarMenu: () => set((state) => ({ menuAbierto: !state.menuAbierto })),

  establecerEnlaceActivo: (ruta) => {
    const enlace = ENLACES_NAVEGACION.find(e => e.ruta === ruta);
    if (enlace) {
      set({ enlaceActivo: enlace.ruta });
    }
  },

  cerrarMenu: () => set({ menuAbierto: false }),

  actualizarEnlaceActivoPorRuta: (rutaActual) => {
    const enlace = ENLACES_NAVEGACION.find(e => 
      rutaActual.startsWith(e.ruta) || 
      (e.ruta !== '/' && rutaActual.includes(e.ruta))
    );
    
    if (enlace) {
      set({ enlaceActivo: enlace.ruta });
    }
  }
}));