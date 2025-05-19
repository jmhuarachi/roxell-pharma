// components/ContentRight.tsx
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { itemVariants } from "../../comunes/Animaciones";
import { Boton } from "../../comunes/Boton";

interface ContentRightProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export const ContentRight = ({ showForm, setShowForm }: ContentRightProps) => (
  <motion.div
    variants={itemVariants}
    className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-6 flex flex-col justify-center mt-6 lg:mt-0"
  >
    <div className="max-w-lg mx-auto lg:mx-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
        Reporta un <span className="text-amber-600">Evento Adverso</span>
      </h2>

      <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
        Si has experimentado algún efecto no deseado con alguno de nuestros medicamentos, por favor repórtalo inmediatamente.
      </p>

      <div className="space-y-4 mb-6 md:mb-8">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="h-5 w-5 md:h-6 md:w-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-sm">
              <svg className="h-2 w-2 md:h-3 md:w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-700">
            <span className="font-medium">Reporta con tu médico</span> - Están capacitados para manejar estos casos
          </p>
        </div>

        <div className="flex items-start gap-3 md:gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="h-5 w-5 md:h-6 md:w-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-sm">
              <svg className="h-2 w-2 md:h-3 md:w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-700">
            <span className="font-medium">Contacta Farmacovigilancia</span> - Nuestros expertos te orientarán
          </p>
        </div>
      </div>

      <div className="mt-2 text-center">
        <Boton
          onClick={() => setShowForm(!showForm)}
          tipo="outline"
          className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-medium shadow-md md:shadow-lg hover:shadow-amber-500/20 md:hover:shadow-amber-500/30 transition-all"
        >
          {showForm ? (
            <>
              <ChevronUpIcon className="h-5 w-5 mr-2 inline" />
              Ocultar formulario
            </>
          ) : (
            <>
              <ChevronDownIcon className="h-5 w-5 mr-2 inline" />
              Contactar Farmacovigilancia
            </>
          )}
        </Boton>
      </div>
    </div>
  </motion.div>
);