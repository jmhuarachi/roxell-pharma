import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../components/comunes/Animaciones";
import { Boton } from "../components/comunes/Boton";
import { Carousel } from "../components/comunes/Carousel";
import { useState } from "react";

const AboutPage = () => {
  const [activeHistoryItem, setActiveHistoryItem] = useState(0);

  const historyItems = [
    {
      year: "1993",
      title: "Fundación",
      description: "Laboratorios Roxell inicia sus actividades como empresa fabricante y distribuidora de productos galénicos.",
      image: "img/equipo.jpg"
    },
    {
      year: "2000",
      title: "Adquisición",
      description: "Roxell pasa a manos de la Corporación LAFAR, cambiando su razón social a Laboratorios Roxell Pharma S.R.L.",
      image: "img/equipo.jpg"
    },
    {
      year: "Actualidad",
      title: "Expansión",
      description: "Bajo la gerencia del Sr. Enrique Marcelo Ocampo Díaz, la empresa comercializa productos de alta calidad con representaciones internacionales.",
      image: "img/equipo.jpg"
    }
  ];

  const img = "img/equipo.jpg";
  const values = [
    {
      title: "Calidad",
      description: "Compromiso con los más altos estándares en nuestros productos.",
      icon: "🏆"
    },
    {
      title: "Innovación",
      description: "Búsqueda constante de soluciones farmacéuticas avanzadas.",
      icon: "💡"
    },
    {
      title: "Integridad",
      description: "Actuamos con ética y transparencia en todas nuestras operaciones.",
      icon: "🤝"
    },
    {
      title: "Compromiso",
      description: "Dedicación a mejorar la salud y calidad de vida de las personas.",
      icon: "❤️"
    }
  ];

  const branches = [
    {
      city: "La Paz",
      address: "Av. Arce #1234, Zona Sopocachi",
      phone: "+591 2 1234567",
      image: "img/equipo.jpg"
    },
    {
      city: "Santa Cruz",
      address: "Av. San Martín #567, Zona Equipetrol",
      phone: "+591 3 7654321",
      image: "img/equipo.jpg"
    },
    {
      city: "Cochabamba",
      address: "Av. América #891, Zona Norte",
      phone: "+591 4 9876543",
      image: "img/equipo.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 to-amber-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Conoce más sobre <span className="text-blue-100">Roxell Pharma</span>
          </motion.h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Innovadores en la gestión de la salud con más de 30 años de experiencia
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <img
                src={img}
                alt="Equipo Roxell Pharma"
                className="rounded-xl shadow-lg w-full h-auto"

              />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quiénes Somos
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Somos una empresa ciento por ciento boliviana, con productos propios, productos de tercerización y productos de Importación, dinámica e innovadora; ocupados y preocupados por encontrar soluciones para mejorar la calidad de vida y la salud de todos aquellos que se benefician con el uso apropiado de nuestros productos.
                </p>
                <p>
                  Somos una extensa empresa que comercializa productos farmacéuticos que cumplen con los más altos estándares de calidad, apegados al cumplimiento de las normas de buenas prácticas de manufactura, de documentación y analíticas.
                </p>
                <p>
                  En la industria farmacéutica algún día todo será posible y es por eso que hoy estamos construyendo un futuro para un mañana. Un futuro que es la cristalización de los sueños de sus fundadores y que se ha podido lograr gracias a la creatividad, capacidad, esfuerzo y tenacidad de todos aquellos que están involucrados en el proyecto de hacer que día a día ROXELL PHARMA S.R.L. sea la farmacéutica nacional de orgullo.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
        // En la sección de Nuestra Historia, actualiza el código a:
          <motion.div variants={itemVariants} className="relative">
            <Carousel
              items={historyItems}
              activeIndex={activeHistoryItem}
            />

            <div className="mt-8 flex justify-center gap-4">
              {historyItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHistoryItem(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${activeHistoryItem === index ? 'bg-amber-600' : 'bg-gray-300'}`}
                  aria-label={`Ir a año ${historyItems[index].year}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="bg-blue-50 rounded-xl p-8 md:p-10">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700">
                Desarrollar, fabricar y comercializar productos farmacéuticos innovadores que contribuyan a mejorar la calidad de vida de las personas, manteniendo los más altos estándares de calidad y cumplimiento normativo.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-amber-50 rounded-xl p-8 md:p-10">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700">
                Ser reconocidos como la empresa farmacéutica líder en Bolivia, destacando por nuestra innovación, calidad y compromiso con la salud de la población, expandiendo nuestra presencia a nivel internacional.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Principios que guían cada una de nuestras acciones
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sucursales */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestras Sucursales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Encuéntranos en las principales ciudades de Bolivia
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {branches.map((branch, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={branch.image}
                      alt={`Sucursal ${branch.city}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.city}</h3>
                      <p className="text-gray-700 mb-3">{branch.address}</p>
                      <p className="text-blue-600 font-medium">{branch.phone}</p>
                      <div className="mt-4">
                        <Boton
                          href="/contacto"
                          tipo="outline"
                          className="w-full"
                        >
                          Ver en mapa
                        </Boton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-amber-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para colaborar con nosotros?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Descubre cómo podemos trabajar juntos para mejorar la salud en Bolivia
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Boton href="/contacto" tipo="secundario">
                Contáctanos
              </Boton>
              <Boton href="/productos" tipo="primario">
                Ver Productos
              </Boton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;