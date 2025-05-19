import { motion } from "framer-motion";
import { LightBulbIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants } from "../comunes/Animaciones";

export const MisionVision = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-blue-50 to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-amber-400 rounded-full filter blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-stretch"
        >
          {/* Misión Card */}
          <motion.div
            variants={itemVariants}
            className="group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full relative overflow-hidden group-hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <LightBulbIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Misión</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Diseñamos soluciones farmacéuticas innovadoras para el cuidado de la salud. Nuestro compromiso con la calidad y la investigación nos permite ofrecer productos que marcan la diferencia en la vida de las personas.
              </p>
              
              <div className="absolute inset-0 bg-blue-600 p-8 rounded-2xl flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <LightBulbIcon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
                <p className="text-white text-center">
                  Innovación constante para mejorar la calidad de vida de nuestros pacientes
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visión Card */}
          <motion.div
            variants={itemVariants}
            className="group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full relative overflow-hidden group-hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 rounded-full mr-4">
                  <ShieldCheckIcon className="h-8 w-8 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Visión</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser reconocidos como líderes en innovación farmacéutica en Bolivia, ampliando nuestro alcance a mercados internacionales y manteniendo nuestro compromiso con la excelencia y el cuidado de la salud.
              </p>
              
              <div className="absolute inset-0 bg-amber-500 p-8 rounded-2xl flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ShieldCheckIcon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Nuestra Visión</h3>
                <p className="text-white text-center">
                  Liderar la revolución farmacéutica en Bolivia con estándares internacionales
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};