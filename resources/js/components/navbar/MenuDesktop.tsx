import { motion } from "framer-motion";
import { useNavegacionStore } from "@/store/useNavegacionStore";
import { ENLACES_NAVEGACION } from "@/constants/navegacion";
import { EnlaceNav } from "../ui/EnlaceNav";

const variantesContenedor = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const variantesItem = {
  oculto: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export const MenuDesktop = () => {
  const { enlaceActivo, establecerEnlaceActivo } = useNavegacionStore();

  return (
    <motion.nav 
      className="hidden md:flex space-x-1"
      initial="oculto"
      animate="visible"
      variants={variantesContenedor}
    >
      {ENLACES_NAVEGACION.map((enlace) => (
        <motion.div
          key={enlace.ruta}
          variants={variantesItem}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <EnlaceNav
            enlace={enlace}
            estaActivo={enlaceActivo === enlace.ruta}
            onClick={() => establecerEnlaceActivo(enlace.ruta)}
          />
        </motion.div>
      ))}
    </motion.nav>
  );
};