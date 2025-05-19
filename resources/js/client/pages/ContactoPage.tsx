

import { motion } from "framer-motion";
import { ShieldCheckIcon, ExclamationTriangleIcon, ChartBarIcon, MagnifyingGlassIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { Link } from '@inertiajs/react';
import { Leaf } from "lucide-react";

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.5
    }
  }
};


const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ContactoPage = () => {
  return (
    <div className="bg-white">
      {/* Sección Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('img/HomePage/labrat.png')] bg-cover bg-no-repeat bg-center opacity-20"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-6 py-24 text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Seguridad <span className="text-emerald-600">Farmacéutica</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            En <span className="font-semibold text-blue-600">ROXELL Pharma</span> priorizamos tu seguridad mediante nuestro riguroso sistema de farmacovigilancia
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <Link href="#que-es">
              <motion.button
                className="inline-flex items-center px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce más
                <ArrowDownIcon className="h-5 w-5 ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Sección Qué es Farmacovigilancia */}
      <section id="que-es" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es la <span className="text-emerald-600">Farmacovigilancia</span>?
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Es la ciencia dedicada a la <strong>detección, evaluación, comprensión y prevención</strong> de los efectos adversos de los medicamentos o cualquier otro problema relacionado con su uso.
                </p>
                <p>
                  Nuestro sistema de farmacovigilancia garantiza que los medicamentos cumplan con los más altos estándares de seguridad durante toda su vida útil.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8 border border-gray-100 shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-100 rounded-full mb-3">
                    <MagnifyingGlassIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Detección</h3>
                  <p className="text-sm text-gray-600">Identificación de reacciones adversas</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="p-3 bg-emerald-100 rounded-full mb-3">
                    <ChartBarIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Evaluación</h3>
                  <p className="text-sm text-gray-600">Análisis de riesgo-beneficio</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="p-3 bg-amber-100 rounded-full mb-3">
                    <ExclamationTriangleIcon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Prevención</h3>
                  <p className="text-sm text-gray-600">Minimización de riesgos</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="p-3 bg-purple-100 rounded-full mb-3">
                    <ShieldCheckIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">Protección</h3>
                  <p className="text-sm text-gray-600">Seguridad del paciente</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección Proceso */}
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

      {/* Sección Reportar Eventos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8 border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="relative h-full min-h-[300px]">
                {/* Espacio para imagen o formulario */}
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                  <div className="text-center p-6">
                    <ExclamationTriangleIcon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">¿Experienciaste algún efecto adverso?</h3>
                    <p className="text-gray-600 mb-4">Tu reporte es fundamental para mejorar la seguridad de nuestros medicamentos</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reporta un <span className="text-amber-600">Evento Adverso</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Si has experimentado algún efecto no deseado con alguno de nuestros medicamentos, por favor repórtalo inmediatamente.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">Puedes reportar directamente con tu médico</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">O contactar a nuestro departamento de Farmacovigilancia</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/contacto">
                    <motion.button
                      className="inline-flex items-center px-8 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(245, 158, 11, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contactar Farmacovigilancia
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección Compromiso */}
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

      {/* Llamado a la acción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              ¿Tienes dudas sobre nuestros medicamentos?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            >
              Nuestro equipo de farmacovigilancia está disponible para responder tus preguntas.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 space-x-4"
            >
              <Link href="/contacto">
                <motion.button
                  className="inline-flex items-center px-8 py-3 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition-colors"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(16, 185, 129, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contáctanos
                </motion.button>
              </Link>
              
              <Link href="/productos">
                <motion.button
                  className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 border border-emerald-600 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(16, 185, 129, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Productos
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;