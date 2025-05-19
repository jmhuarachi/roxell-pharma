import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type FormData = {
  tipoReporte: string;
  otroTipo?: string;
  pais: string;
  ciudad: string;
  institucion: string;
  servicio: string;
  nombreNotificador: string;
  profesion: string;
  telefono: string;
  email: string;
  nombrePaciente: string;
  edad: string;
  sexo: string;
  medicamento: string;
  reaccion: string;
  fechaEvento: string;
  descripcion: string;
};

export const FarmacovigilanciaModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    tipoReporte: '',
    otroTipo: '',
    pais: '',
    ciudad: '',
    institucion: '',
    servicio: '',
    nombreNotificador: '',
    profesion: '',
    telefono: '',
    email: '',
    nombrePaciente: '',
    edad: '',
    sexo: '',
    medicamento: '',
    reaccion: '',
    fechaEvento: '',
    descripcion: ''
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setCurrentStep(1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    closeModal();
  };

  return (
    <>
      <button 
        onClick={openModal}
        className="w-full px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-medium bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors"
      >
        Contactar Farmacovigilancia
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog 
            as="div" 
            className="fixed inset-0 z-50 overflow-y-auto" 
            open={isOpen} 
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              {/* <Dialog.Overlay className="fixed inset-0 bg-black/50" /> */}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <div className="relative">
                  {/* Header del modal */}
                  <div className="bg-blue-700 px-6 py-4">
                    <div className="flex justify-between items-center">
                      <Dialog.Title className="text-lg font-bold text-white">
                        Reporte de Farmacovigilancia - Paso {currentStep} de 4
                      </Dialog.Title>
                      <button
                        onClick={closeModal}
                        className="text-white hover:text-gray-200"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  {/* Barra de progreso */}
                  <div className="h-2 bg-gray-200">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-300" 
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    ></div>
                  </div>

                  {/* Contenido del formulario */}
                  <form onSubmit={handleSubmit} className="p-6">
                    {/* Paso 1: Tipo de reporte */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Selecciona una opción, de acuerdo a la naturaleza del reporte
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {['Evento Adverso', 'Reacción Adversa', 'Problema de Calidad', 'Falta de Eficacia', 'Otro'].map((opcion) => (
                            <label key={opcion} className="flex items-center space-x-3">
                              <input
                                type="radio"
                                name="tipoReporte"
                                value={opcion}
                                checked={formData.tipoReporte === opcion}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-gray-700">{opcion}</span>
                            </label>
                          ))}
                        </div>

                        {formData.tipoReporte === 'Otro' && (
                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Si es otro ¿cuál?
                            </label>
                            <input
                              type="text"
                              name="otroTipo"
                              value={formData.otroTipo}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        )}

                        <div className="flex justify-between mt-6">
                          <div className="text-sm text-gray-500">
                            Fecha de Notificación: {new Date().toLocaleDateString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            N° Consecutivo: {Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Paso 2: Origen del reporte */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Origen del Reporte
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              País*
                            </label>
                            <select
                              name="pais"
                              value={formData.pais}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              required
                            >
                              <option value="">Seleccionar País</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Perú">Perú</option>
                              <option value="Chile">Chile</option>
                              <option value="Argentina">Argentina</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Ciudad
                            </label>
                            <input
                              type="text"
                              name="ciudad"
                              value={formData.ciudad}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Institución (Hospital/Clínica/Empresa)
                            </label>
                            <input
                              type="text"
                              name="institucion"
                              value={formData.institucion}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Servicio*
                            </label>
                            <input
                              type="text"
                              name="servicio"
                              value={formData.servicio}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Paso 3: Información del notificador */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Información del Notificador
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Nombre*
                            </label>
                            <input
                              type="text"
                              name="nombreNotificador"
                              value={formData.nombreNotificador}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Profesión
                            </label>
                            <input
                              type="text"
                              name="profesion"
                              value={formData.profesion}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Teléfono
                            </label>
                            <input
                              type="tel"
                              name="telefono"
                              value={formData.telefono}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Paso 4: Información del evento */}
                    {currentStep === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Información del Evento Adverso
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Nombre del Paciente
                            </label>
                            <input
                              type="text"
                              name="nombrePaciente"
                              value={formData.nombrePaciente}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Edad
                            </label>
                            <input
                              type="text"
                              name="edad"
                              value={formData.edad}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Sexo
                            </label>
                            <select
                              name="sexo"
                              value={formData.sexo}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Seleccionar</option>
                              <option value="Masculino">Masculino</option>
                              <option value="Femenino">Femenino</option>
                              <option value="Otro">Otro</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Medicamento Involucrado
                            </label>
                            <input
                              type="text"
                              name="medicamento"
                              value={formData.medicamento}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Reacción Adversa
                            </label>
                            <input
                              type="text"
                              name="reaccion"
                              value={formData.reaccion}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Fecha del Evento
                            </label>
                            <input
                              type="date"
                              name="fechaEvento"
                              value={formData.fechaEvento}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descripción Detallada del Evento*
                          </label>
                          <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                          ></textarea>
                        </div>
                      </motion.div>
                    )}

                    {/* Controles de navegación */}
                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`flex items-center px-4 py-2 rounded-md ${currentStep === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                      >
                        <ChevronLeftIcon className="h-5 w-5 mr-1" />
                        Anterior
                      </button>

                      {currentStep < 4 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          Siguiente
                          <ChevronRightIcon className="h-5 w-5 ml-1" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          Enviar Reporte
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};