import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      className={cn(
        "bg-white rounded-xl shadow-sm p-6 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}