import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from '@inertiajs/react';

type TipoBoton = 'primario' | 'secundario' | 'peligro' | 'exito' | 'texto' | 'icono' | 'outline';

interface BotonProps {
  children: ReactNode;
  href?: string;
  tipo?: TipoBoton;
  icono?: ReactNode;
  className?: string;
  forcePageReload?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Boton = ({ 
  children,
  href,
  tipo = 'primario',
  icono,
  className = '',
  forcePageReload = false,
  onClick,
  type = 'button',
  ...props
}: BotonProps) => {
  const tipoStyles = {
    primario: 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg',
    secundario: 'bg-transparent text-white border-2 border-white hover:bg-white/10',
    exito: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg',
    peligro: 'bg-red-500 text-white hover:bg-red-600',
    texto: 'text-gray-700 hover:text-gray-900',
    icono: 'p-2 text-gray-700',
    outline: 'bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10'
  };

  const hoverEffects = {
    primario: { scale: 1.05, boxShadow: "0 10px 25px rgba(245, 158, 11, 0.5)" },
    secundario: { scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)" },
    exito: { scale: 1.05, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.5)" },
    peligro: { scale: 1.05, boxShadow: "0 10px 25px rgba(239, 68, 68, 0.5)" },
    texto: { scale: 1.02 },
    icono: { scale: 1.1 },
    outline: { scale: 1.02 }
  };

  // Si no hay href, renderizar como button
  if (!href) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all ${tipoStyles[tipo]} ${className}`}
        {...props}
      >
        <motion.span
          whileHover={hoverEffects[tipo]}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center"
        >
          {children}
          {icono && <span className="ml-2">{icono}</span>}
        </motion.span>
      </button>
    );
  }

  if (forcePageReload) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all ${tipoStyles[tipo]} ${className}`}
        {...props}
      >
        {children}
        {icono && <span className="ml-2">{icono}</span>}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium ${tipoStyles[tipo]} ${className}`}
      {...props}
    >
      <motion.span
        whileHover={hoverEffects[tipo]}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center"
      >
        {children}
        {icono && <span className="ml-2">{icono}</span>}
      </motion.span>
    </Link>
  );
};