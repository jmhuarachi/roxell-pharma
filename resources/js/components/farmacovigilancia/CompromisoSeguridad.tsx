import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../comunes/Animaciones";

export const CompromisoSeguridad = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Nuestro <span className="text-amber-300">Compromiso</span> con tu Seguridad
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
          >
            En ROXELL Pharma implementamos los más altos estándares internacionales de farmacovigilancia para garantizar la seguridad de nuestros productos.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: "100%", label: "Reportes Analizados" },
              { value: "24/7", label: "Monitoreo" },
              { value: "ISO", label: "Estándares Internacionales" },
              { value: "0", label: "Tolerancia a Riesgos" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-amber-300 mb-2">{item.value}</div>
                <div className="text-black text-opacity-90">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};