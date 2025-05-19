import { motion } from "framer-motion";
import { MagnifyingGlassIcon, ChartBarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants } from "../comunes/Animaciones";

export const ProcesoFarmacovigilancia = () => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Nuestro <span className="text-emerald-600">Proceso</span> de Farmacovigilancia
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Recolección de Datos",
                icon: <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />,
                description: "Recopilamos información sobre posibles reacciones adversas de profesionales de la salud y pacientes."
              },
              {
                title: "Análisis Técnico",
                icon: <ChartBarIcon className="h-8 w-8 text-emerald-600" />,
                description: "Nuestro equipo de expertos evalúa cada caso para determinar causalidad y gravedad."
              },
              {
                title: "Acción Correctiva",
                icon: <ShieldCheckIcon className="h-8 w-8 text-amber-600" />,
                description: "Implementamos medidas para minimizar riesgos y comunicamos hallazgos a autoridades."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};