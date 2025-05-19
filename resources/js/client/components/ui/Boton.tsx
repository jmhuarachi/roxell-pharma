import { motion } from 'framer-motion';
import { ReactNode, MouseEvent } from 'react';

interface PropsBoton {
  children: ReactNode;
  variante?: 'primario' | 'secundario' | 'texto';
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset'; // Añadido para compatibilidad con formularios
}

export const Boton = ({
  children,
  variante = 'primario',
  className = '',
  onClick,
  type = 'button' // Valor por defecto añadido
}: PropsBoton) => {
  const clasesBase = 'px-4 py-2 rounded font-medium transition-colors flex items-center justify-center space-x-2';
  
  const clasesVariante = {
    primario: 'bg-amber-500 hover:bg-amber-600 text-white',
    secundario: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    texto: 'hover:bg-gray-100 text-gray-700'
  };

  return (
    <motion.button
      type={type} // Añadido el atributo type
      className={`${clasesBase} ${clasesVariante[variante]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};