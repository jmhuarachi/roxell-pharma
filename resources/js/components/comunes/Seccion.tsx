import { motion } from "framer-motion";
import { ReactNode } from "react";
import { containerVariants } from "./Animaciones";

interface SeccionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  fondo?: 'blanco' | 'azul' | 'degradado';
  margenTop?: boolean;
}

export const Seccion = ({
  id,
  children,
  className = '',
  fondo = 'blanco',
  margenTop = false
}: SeccionProps) => {
  const fondos = {
    blanco: 'bg-white',
    azul: 'bg-blue-50',
    degradado: 'bg-gradient-to-br from-blue-50 to-amber-50'
  };

  return (
    <section 
      id={id}
      className={`py-20 ${fondos[fondo]} ${margenTop ? 'mt-20' : ''} ${className}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
};