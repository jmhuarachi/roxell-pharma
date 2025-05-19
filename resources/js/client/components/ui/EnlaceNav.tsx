// components/ui/EnlaceNav.tsx
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { EnlaceNavegacion } from '@/client/types/navegacion';

interface PropsEnlaceNav {
  enlace: EnlaceNavegacion;
  estaActivo?: boolean;
  onClick?: () => void;
}

export const EnlaceNav = ({ enlace, estaActivo = false, onClick }: PropsEnlaceNav) => {
  return (
    <motion.div whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link
        href={enlace.ruta}
        onClick={onClick}
        className={`relative inline-block px-2 py-1 text-base font-medium transition-colors duration-300 ${
          estaActivo
            ? 'text-amber-600'
            : 'text-gray-700 hover:text-amber-500'
        }`}
        preserveState
      >
        <span>{enlace.nombre}</span>
        {estaActivo && (
          <motion.div
            layoutId="activeNavIndicator"
            className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500 rounded"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
};