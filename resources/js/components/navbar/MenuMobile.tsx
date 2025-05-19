import { AnimatePresence, motion } from 'framer-motion';
import { useNavegacionStore } from '@/store/useNavegacionStore';
import { ENLACES_NAVEGACION } from '@/constants/navegacion';
import { Boton } from '../ui/Boton';
import { UserIcon, PencilIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/react';

export const MenuMobile = () => {
  const { 
    menuAbierto, 
    enlaceActivo, 
    establecerEnlaceActivo, 
    cerrarMenu 
  } = useNavegacionStore();

  return (
    <AnimatePresence>
      {menuAbierto && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            transition: { type: "spring", damping: 25 }
          }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden bg-gray-50"
        >
          <div className="pt-2 pb-6 space-y-1 px-4">
            {ENLACES_NAVEGACION.map((enlace) => (
              <motion.div
                key={enlace.ruta}
                whileHover={{ x: 5 }}
              >
                <Link
                  href={enlace.ruta}
                  className={`block px-3 py-2 rounded transition-colors ${
                    enlaceActivo === enlace.ruta
                      ? "bg-amber-50 text-amber-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    establecerEnlaceActivo(enlace.ruta);
                    cerrarMenu();
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{enlace.nombre}</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
            
            <div className="pt-4 space-y-2 border-t border-gray-200">
              <Boton variante="texto" className="w-full">
                <UserIcon className="h-4 w-4" />
                <span>Iniciar Sesión</span>
              </Boton>
              
              <Boton variante="primario" className="w-full">
                <PencilIcon className="h-4 w-4" />
                <span>Registrarse</span>
              </Boton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};