// components/home/LlamadoAccion.tsx
import { motion } from "framer-motion";
import { RocketLaunchIcon, HeartIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants } from "../comunes/Animaciones";
import { Boton } from "../comunes/Boton";
import { useNavegacionStore } from "@/store/useNavegacionStore";

export const LlamadoAccion = () => {
  const { establecerEnlaceActivo } = useNavegacionStore();

  const handleProductosClick = () => {
    establecerEnlaceActivo(route('productos'));
  };

  const handleContactoClick = () => {
    establecerEnlaceActivo(route('contacto')); // Fixed from 'contacto' to match your routes
  };

  return (
    <section className="relative py-28 bg-gradient-to-r from-blue-600 to-amber-500 overflow-hidden">
      <div className="absolute -top-1 left-0 right-0 h-2 bg-white/30" />
      <div className="absolute -bottom-1 left-0 right-0 h-2 bg-white/30" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            ¿Listo para transformar la salud?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Descubre nuestra gama de productos farmacéuticos innovadores diseñados para mejorar tu calidad de vida.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Boton 
              href={route('productos')} 
              tipo="primario" 
              icono={<RocketLaunchIcon className="h-6 w-6" />}
              onClick={handleProductosClick}
            >
              Explorar Productos
            </Boton>
            
            <Boton 
              href={route('contacto')} 
              tipo="secundario" 
              icono={<HeartIcon className="h-6 w-6" />}
              onClick={handleContactoClick}
            >
              Contáctanos
            </Boton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};