// components/footer/Enlaces.tsx
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ENLACES_NAVEGACION } from "../../constants/navegacion";
import { Link } from '@inertiajs/react';
import { useNavegacionStore } from '@/store/useNavegacionStore';

const variantesItem = {
  oculto: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export const Enlaces = () => {
  const { enlaceActivo, establecerEnlaceActivo } = useNavegacionStore();

  const handleClick = (ruta: string) => {
    establecerEnlaceActivo(ruta);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div variants={variantesItem}>
      <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
      <ul className="space-y-2">
        {ENLACES_NAVEGACION.map((enlace, index) => (
          <motion.li
            key={index}
            whileHover={{
              x: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <Link
              href={enlace.ruta}
              onClick={() => handleClick(enlace.ruta)}
              className={`flex items-center ${
                enlaceActivo === enlace.ruta
                  ? 'text-amber-400'
                  : 'text-gray-400 hover:text-amber-400'
              } transition-colors`}
            >
              <ChevronRightIcon className="h-3 w-3 mr-2 text-amber-400" />
              {enlace.nombre}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};