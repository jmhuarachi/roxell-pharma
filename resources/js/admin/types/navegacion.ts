// resources/js/types/navegacion.d.ts
export interface EnlaceNavegacion {
    nombre: string;
    ruta: string;
  }
  
  declare module '@inertiajs/core' {
    interface PageProps {
      auth: {
        user: {
          name: string;
          email: string;
        };
      };
    }
  }