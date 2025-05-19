import { motion } from "framer-motion";
import { Boton } from "../ui/Boton";

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

export const Newsletter = () => (
  <motion.div variants={variantesItem}>
    <h3 className="text-xl font-bold mb-4">Boletín informativo</h3>
    <p className="text-gray-400 mb-4">
      Suscríbete para recibir nuestras últimas novedades y promociones especiales.
    </p>
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="flex"
    >
      <input 
        type="email" 
        placeholder="Ingresa tu correo electrónico" 
        className="px-4 py-2 w-full rounded-l focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-900"
        aria-label="Correo electrónico para suscripción"
      />
      <Boton
        variante="primario"
        className="rounded-l-none px-4 py-2"
      >
        Suscribirse
      </Boton>
    </motion.div>
    <p className="text-gray-500 text-xs mt-2">
      Nunca compartiremos tu información. Puedes cancelar en cualquier momento.
    </p>
  </motion.div>
);