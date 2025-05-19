// ReportarEvento.tsx
import { motion } from "framer-motion";
import { ExclamationTriangleIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants } from "../comunes/Animaciones";
import { Boton } from "../comunes/Boton";
import { useState } from "react";
import { FormHeader } from "./form_reporte/FormHeader";
import { InfoCard } from "./form_reporte/InfoCard";
import { ContentRight } from "./form_reporte/ContentRight";
import { ProgressBar } from "./form_reporte/ProgressBar";
import { FormStep1Notificador } from "./form_reporte/FormStep1Notificador";
import { FormStep2Paciente } from "./form_reporte/FormStep2Paciente";
import { FormStep3Medicamento } from "./form_reporte/FormStep3Medicamento";
import { FormStep4Tratamiento } from "./form_reporte/FormStep4Tratamiento";
import { FormStep5Confirmacion } from "./form_reporte/FormStep5Confirmacion";
import { FormNavigation } from "./form_reporte/FormNavigation";

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
          <InfoCard />
          
          <ContentRight 
            showForm={showForm} 
            setShowForm={setShowForm} 
          />
        </motion.div>

        {/* Formulario expandible */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <FormHeader />
            
            <div className="p-6">
              <ProgressBar currentStep={currentStep} />
              
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <FormStep1Notificador 
                    formData={formData} 
                    handleChange={handleChange} 
                    profesiones={profesiones} 
                  />
                )}
                
                {currentStep === 2 && (
                  <FormStep2Paciente
                    formData={formData} 
                    handleChange={handleChange} 
                    departamentosBolivia={departamentosBolivia} 
                  />
                )}
                
                {currentStep === 3 && (
                  <FormStep3Medicamento 
                    formData={formData} 
                    handleChange={handleChange} 
                  />
                )}
                
                {currentStep === 4 && (
                  <FormStep4Tratamiento 
                    formData={formData} 
                    handleChange={handleChange} 
                    gravedadOptions={gravedadOptions} 
                  />
                )}
                
                {currentStep === 5 && (
                  <FormStep5Confirmacion
                    formData={formData} 
                    handleChange={handleChange} 
                    departamentosBolivia={departamentosBolivia} 
                  />
                )}
                
                <FormNavigation
                  currentStep={currentStep} 
                  prevStep={prevStep} 
                  nextStep={nextStep} 
                />
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};