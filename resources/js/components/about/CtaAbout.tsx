import { motion } from "framer-motion";
import { Boton } from "@/components/comunes/Boton";
import { useNavegacionStore } from "@/store/useNavegacionStore";

export const CtaAbout = () => {
  const { establecerEnlaceActivo } = useNavegacionStore();

  const handleProductosClick = () => {
    establecerEnlaceActivo(route('productos'));
  };
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-amber-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para colaborar con nosotros?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubre cómo podemos trabajar juntos para mejorar la salud en Bolivia
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Boton href="/contacto" tipo="secundario">
              Contáctanos
            </Boton>
            <Boton href={route('productos')} tipo="primario" onClick={handleProductosClick}>
              Ver Productos
            </Boton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};