import { motion } from "framer-motion";
import { ExclamationTriangleIcon, CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants } from "../comunes/Animaciones";
import { Boton } from "../comunes/Boton";
import { useState } from "react";

export const ReportarEvento = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Datos del notificador
    nombre: "",
    apellido: "",
    email: "",
    carnetIdentidad: "",
    profesion: "",
    telefonoNotificador: "",
    fuenteReporte: "",

    // Datos del paciente
    nombrePaciente: "",
    apellidoPaciente: "",
    direccion: "",
    departamento: "",
    ciudad: "",
    genero: "",
    edad: "",
    telefonoPaciente: "",
    seguroMedico: "",

    // Datos del medicamento
    nombreMedicamento: "",
    presentacion: "",
    lote: "",
    fechaVencimiento: "",
    fabricante: "",
    viaAdministracion: "",

    // Datos del tratamiento
    fechaInicioTratamiento: "",
    fechaFinalizacion: "",
    dosis: "",
    frecuencia: "",
    indicacion: "",
    tratamientoSuspendido: false,

    // Reacción adversa
    fechaReaccion: "",
    descripcionReaccion: "",
    gravedad: "leve",
    resultado: "",

    // Datos adicionales
    embarazo: false,
    lactancia: false,
    otrosMedicamentos: "",
    antecedentes: "",

    // Datos de compra
    nombreFarmacia: "",
    direccionFarmacia: "",
    departamentoFarmacia: "",
    fechaCompra: ""
  });

  const departamentosBolivia = [
    "Beni", "Chuquisaca", "Cochabamba", "La Paz",
    "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"
  ];

  const profesiones = [
    "Médico", "Enfermero/a", "Farmacéutico/a",
    "Paciente", "Familiar", "Otro"
  ];

  const gravedadOptions = [
    { value: "leve", label: "Leve" },
    { value: "moderada", label: "Moderada" },
    { value: "grave", label: "Grave" },
    { value: "mortal", label: "Mortal" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setShowForm(false);
    setCurrentStep(1);
    // Aquí podrías agregar la lógica para enviar los datos a tu API
  };

  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-6 lg:gap-16"
        >
          {/* Tarjeta izquierda - Destacada */}
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

          {/* Contenido derecho - Información */}
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
        </motion.div>

        {/* Formulario expandible */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="bg-blue-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">
                Formulario de Farmacovigilancia - Bolivia
              </h2>
              <p className="text-blue-100 text-sm mt-1">
                Complete todos los campos requeridos (*)
              </p>
            </div>

            <div className="p-6">
              {/* Barra de progreso */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} font-medium`}>
                        {step}
                      </div>
                      <span className={`text-xs mt-1 ${currentStep >= step ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                        Paso {step}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-full transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Paso 1: Datos del notificador */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      <span className="text-blue-600">1.</span> Datos del Notificador
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Apellido *</label>
                        <input
                          type="text"
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Carnet de Identidad *</label>
                        <input
                          type="text"
                          name="carnetIdentidad"
                          value={formData.carnetIdentidad}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profesión *</label>
                        <select
                          name="profesion"
                          value={formData.profesion}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Seleccionar</option>
                          {profesiones.map(prof => (
                            <option key={prof} value={prof}>{prof}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                        <input
                          type="tel"
                          name="telefonoNotificador"
                          value={formData.telefonoNotificador}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fuente de Reporte *</label>
                      <select
                        name="fuenteReporte"
                        value={formData.fuenteReporte}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Seleccionar</option>
                        <option value="Médico">Médico</option>
                        <option value="Paciente">Paciente</option>
                        <option value="Familiar">Familiar</option>
                        <option value="Farmacéutico">Farmacéutico</option>
                        <option value="Enfermero">Enfermero</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Paso 2: Datos del paciente */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      <span className="text-blue-600">2.</span> Datos del Paciente
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                        <input
                          type="text"
                          name="nombrePaciente"
                          value={formData.nombrePaciente}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Apellido *</label>
                        <input
                          type="text"
                          name="apellidoPaciente"
                          value={formData.apellidoPaciente}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
                      <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Departamento *</label>
                        <select
                          name="departamento"
                          value={formData.departamento}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Seleccionar</option>
                          {departamentosBolivia.map(depto => (
                            <option key={depto} value={depto}>{depto}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
                        <input
                          type="text"
                          name="ciudad"
                          value={formData.ciudad}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Género *</label>
                        <select
                          name="genero"
                          value={formData.genero}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Seleccionar</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Masculino">Masculino</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Edad *</label>
                        <input
                          type="number"
                          name="edad"
                          value={formData.edad}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                        <input
                          type="tel"
                          name="telefonoPaciente"
                          value={formData.telefonoPaciente}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Seguro Médico</label>
                      <input
                        type="text"
                        name="seguroMedico"
                        value={formData.seguroMedico}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Paso 3: Datos del medicamento */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      <span className="text-blue-600">3.</span> Datos del Medicamento
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Medicamento *</label>
                      <input
                        type="text"
                        name="nombreMedicamento"
                        value={formData.nombreMedicamento}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Presentación *</label>
                        <input
                          type="text"
                          name="presentacion"
                          value={formData.presentacion}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Lote *</label>
                        <input
                          type="text"
                          name="lote"
                          value={formData.lote}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Vencimiento *</label>
                        <input
                          type="date"
                          name="fechaVencimiento"
                          value={formData.fechaVencimiento}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fabricante</label>
                        <input
                          type="text"
                          name="fabricante"
                          value={formData.fabricante}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Vía de Administración *</label>
                      <input
                        type="text"
                        name="viaAdministracion"
                        value={formData.viaAdministracion}
                        onChange={handleChange}
                        placeholder="Ej: Oral, Intravenosa, etc."
                        className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {/* Paso 4: Tratamiento y reacción */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      <span className="text-blue-600">4.</span> Tratamiento y Reacción Adversa
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Inicio *</label>
                        <input
                          type="date"
                          name="fechaInicioTratamiento"
                          value={formData.fechaInicioTratamiento}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Finalización</label>
                        <input
                          type="date"
                          name="fechaFinalizacion"
                          value={formData.fechaFinalizacion}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Dosis *</label>
                        <input
                          type="text"
                          name="dosis"
                          value={formData.dosis}
                          onChange={handleChange}
                          placeholder="Ej: 500mg cada 8 horas"
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Frecuencia *</label>
                        <input
                          type="text"
                          name="frecuencia"
                          value={formData.frecuencia}
                          onChange={handleChange}
                          placeholder="Ej: 3 veces al día"
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Indicación (Diagnóstico) *</label>
                      <input
                        type="text"
                        name="indicacion"
                        value={formData.indicacion}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="tratamientoSuspendido"
                        checked={formData.tratamientoSuspendido}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        Tratamiento suspendido debido a la reacción adversa
                      </label>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-md font-medium text-gray-800 mb-3">Descripción de la Reacción Adversa</h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de la Reacción *</label>
                          <input
                            type="date"
                            name="fechaReaccion"
                            value={formData.fechaReaccion}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Gravedad *</label>
                          <select
                            name="gravedad"
                            value={formData.gravedad}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            {gravedadOptions.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción *</label>
                        <textarea
                          name="descripcionReaccion"
                          value={formData.descripcionReaccion}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Describa los síntomas, tiempo de aparición, evolución, etc."
                          required
                        ></textarea>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Resultado</label>
                        <input
                          type="text"
                          name="resultado"
                          value={formData.resultado}
                          onChange={handleChange}
                          placeholder="Ej: Recuperado, Secuelas, Fallecido"
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="embarazo"
                          checked={formData.embarazo}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm text-gray-700">
                          Paciente en estado de gestación
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="lactancia"
                          checked={formData.lactancia}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm text-gray-700">
                          Paciente en período de lactancia
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Otros medicamentos que toma el paciente</label>
                        <textarea
                          name="otrosMedicamentos"
                          value={formData.otrosMedicamentos}
                          onChange={handleChange}
                          rows={2}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Incluya dosis y frecuencia"
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Antecedentes médicos relevantes</label>
                        <textarea
                          name="antecedentes"
                          value={formData.antecedentes}
                          onChange={handleChange}
                          rows={2}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Alergias, enfermedades crónicas, etc."
                        ></textarea>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Paso 5: Compra del medicamento */}
                {currentStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      <span className="text-blue-600">5.</span> Compra del Medicamento
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la farmacia, clínica, hospital *</label>
                      <input
                        type="text"
                        name="nombreFarmacia"
                        value={formData.nombreFarmacia}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
                        <input
                          type="text"
                          name="direccionFarmacia"
                          value={formData.direccionFarmacia}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Departamento *</label>
                        <select
                          name="departamentoFarmacia"
                          value={formData.departamentoFarmacia}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Seleccionar</option>
                          {departamentosBolivia.map(depto => (
                            <option key={depto} value={depto}>{depto}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                                    <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Compra *</label>
                  <input
                    type="date"
                    name="fechaCompra"
                    value={formData.fechaCompra}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-gray-700  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Confirmación</h4>
                  <p className="text-sm text-blue-700">
                    Al enviar este formulario, confirmo que la información proporcionada es verídica y autorizo su uso para fines de farmacovigilancia en Bolivia.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-3">Resumen del Reporte</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Notificador:</p>
                      <p className="font-medium text-gray-700">{formData.nombre} {formData.apellido} holas</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Paciente:</p>
                      <p className="font-medium text-gray-700">{formData.nombrePaciente} {formData.apellidoPaciente}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Medicamento:</p>
                      <p className="font-medium text-gray-700">{formData.nombreMedicamento}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Reacción adversa:</p>
                      <p className="font-medium text-gray-700">{formData.descripcionReaccion.substring(0, 30)}...</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="confirmacion"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="confirmacion" className="ml-2 block text-sm text-gray-700">
                    Acepto los términos y confirmo que la información proporcionada es correcta.
                  </label>
                </div>
              </motion.div>
            )}
            
            {/* Navegación entre pasos */}
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
          </form>
        </div>
      </motion.div>
    )}
  </div>
</section>
);
};