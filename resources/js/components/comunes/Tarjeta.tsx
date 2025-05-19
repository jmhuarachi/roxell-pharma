import { motion } from "framer-motion";
import { ReactNode } from "react";
import { itemVariants } from "./Animaciones";

interface TarjetaProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  color?: 'azul' | 'verde' | 'ambar' | 'morado';
}

export const Tarjeta = ({
  children,
  className = '',
  hoverEffect = true,
  color = 'azul'
}: TarjetaProps) => {
  const colores = {
    azul: 'border-blue-100 hover:shadow-blue-100',
    verde: 'border-emerald-100 hover:shadow-emerald-100',
    ambar: 'border-amber-100 hover:shadow-amber-100',
    morado: 'border-purple-100 hover:shadow-purple-100'
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`bg-white p-6 rounded-xl border ${colores[color]} shadow-lg transition-all ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : ''} ${className}`}
      whileHover={hoverEffect ? { scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  );
};