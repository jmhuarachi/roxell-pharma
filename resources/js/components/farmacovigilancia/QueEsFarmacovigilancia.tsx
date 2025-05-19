import { motion } from "framer-motion";
import { MagnifyingGlassIcon, ChartBarIcon, ExclamationTriangleIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants } from "../comunes/Animaciones";
import { Seccion } from "../comunes/Seccion";
import { Tarjeta } from "../comunes/Tarjeta";

export const QueEsFarmacovigilancia = () => {
  const pasosFarmacovigilancia = [
    {
      icono: <MagnifyingGlassIcon className="h-6 w-6 text-blue-600" />,
      titulo: "Detección",
      descripcion: "Identificación de reacciones adversas",
      color: "azul"
    },
    {
      icono: <ChartBarIcon className="h-6 w-6 text-emerald-600" />,
      titulo: "Evaluación",
      descripcion: "Análisis de riesgo-beneficio",
      color: "verde"
    },
    {
      icono: <ExclamationTriangleIcon className="h-6 w-6 text-amber-600" />,
      titulo: "Prevención",
      descripcion: "Minimización de riesgos",
      color: "ambar"
    },
    {
      icono: <ShieldCheckIcon className="h-6 w-6 text-purple-600" />,
      titulo: "Protección",
      descripcion: "Seguridad del paciente",
      color: "morado"
    }
  ];

  return (
    <Seccion id="que-es" fondo="blanco">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div variants={itemVariants} className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Qué es la <span className="text-emerald-600">Farmacovigilancia</span>?
          </h2>
          
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Es la ciencia dedicada a la <strong>detección, evaluación, comprensión y prevención</strong> 
              de los efectos adversos de los medicamentos o cualquier otro problema relacionado con su uso.
            </p>
            <p>
              Nuestro sistema de farmacovigilancia garantiza que los medicamentos cumplan con los más altos 
              estándares de seguridad durante toda su vida útil.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="lg:w-1/2"
        >
          <Tarjeta className="p-8" color="verde">
            <div className="grid grid-cols-2 gap-4">
              {pasosFarmacovigilancia.map((paso, index) => (
                <Tarjeta 
                  key={index}
                  className="p-4 flex flex-col items-center text-center"
                  color={paso.color as any}
                >
                  <div className="p-3 rounded-full mb-3" style={{
                    backgroundColor: `var(--${paso.color}-100)`
                  }}>
                    {paso.icono}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{paso.titulo}</h3>
                  <p className="text-sm text-gray-600">{paso.descripcion}</p>
                </Tarjeta>
              ))}
            </div>
          </Tarjeta>
        </motion.div>
      </div>
    </Seccion>
  );
};