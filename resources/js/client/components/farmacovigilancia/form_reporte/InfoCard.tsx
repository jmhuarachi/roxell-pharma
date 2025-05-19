// components/InfoCard.tsx
import { motion } from "framer-motion";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { itemVariants } from "@/client/components/comunes/Animaciones";

export const InfoCard = () => (
  <motion.div
    variants={itemVariants}
    className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl md:rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm md:shadow-md overflow-hidden relative"
  >
    <div className="absolute inset-0 bg-[url('../img/HomePage/labrat.jpg')] bg-[length:80px] md:bg-[length:120px] opacity-10 bg-no-repeat flex-auto"></div>
    <div className="relative h-full min-h-[200px] sm:min-h-[280px] md:min-h-[340px] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-2">
        <div className="inline-flex items-center justify-center bg-amber-100 rounded-full p-3 md:p-4 mb-4 md:mb-6">
          <ExclamationTriangleIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-amber-600" />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
          ¿Experienciaste algún efecto adverso?
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
          Tu reporte es fundamental para mejorar la seguridad de nuestros medicamentos
        </p>
        <div className="w-16 md:w-20 h-1 bg-amber-400 mx-auto rounded-full"></div>
      </div>
    </div>
  </motion.div>
);