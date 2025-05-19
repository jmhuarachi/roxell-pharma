interface FormNavigationProps {
  currentStep: number;
  prevStep: () => void;
  nextStep: () => void;
}

export const FormNavigation = ({ currentStep, prevStep, nextStep }: FormNavigationProps) => (
  <div className="mt-8 flex justify-between pt-4 border-t border-gray-200">
    {currentStep > 1 ? (
      <button
        type="button"
        onClick={prevStep}
        className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Anterior
      </button>
    ) : (
      <div></div>
    )}
    
    {currentStep < 5 ? (
      <button
        type="button"
        onClick={nextStep}
        className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Siguiente
      </button>
    ) : (
      <button
        type="submit"
        className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Enviar Reporte
      </button>
    )}
  </div>
);