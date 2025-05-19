import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../comunes/Animaciones";
import { Boton } from "../comunes/Boton";
import { usePage } from '@inertiajs/react';
import { useNavegacionStore } from "@/client/store/useNavegacionStore";

export const LlamadoAccionFarmacovigilancia = () => {
  const { url } = usePage();

  const { establecerEnlaceActivo } = useNavegacionStore();
  
    const handleProductosClick = () => {
      establecerEnlaceActivo(route('productos'));
    };
  
    const handleContactoClick = () => {
      establecerEnlaceActivo(route('contacto')); // Fixed from 'contacto' to match your routes
    };
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            ¿Tienes dudas sobre nuestros medicamentos?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Nuestro equipo de farmacovigilancia está disponible para responder tus preguntas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap justify-center gap-4"
          >
            <Boton 
              href={route('contacto')}
              tipo="primario"
              className="min-w-[200px]"
              onClick={handleContactoClick}
            >
              Contáctanos
            </Boton>
            
            <Boton 
              href={route('productos')} 
              tipo="exito"
              className="min-w-[200px]"
              forcePageReload={url === '/farmacovigilancia'}
              onClick={handleProductosClick}
            >
              Ver Productos
            </Boton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};