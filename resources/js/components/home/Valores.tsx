import { motion } from "framer-motion";
import { ShieldCheckIcon, ChartBarIcon, HeartIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants, fadeIn, floatAnimation } from "../comunes/Animaciones";

export const Valores = () => {
  const valores = [
    { 
      color: "bg-blue-600", 
      title: "Confianza", 
      icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
      description: "Construimos relaciones basadas en la honestidad y la integridad en cada interacción."
    },
    { 
      color: "bg-emerald-500", 
      title: "Transparencia", 
      icon: <ChartBarIcon className="h-8 w-8 text-white" />,
      description: "Mantenemos procesos claros y comunicación abierta con todos nuestros stakeholders."
    },
    { 
      color: "bg-amber-500", 
      title: "Compartir", 
      icon: <HeartIcon className="h-8 w-8 text-white" />,
      description: "Fomentamos la colaboración y el intercambio de conocimiento para crecer juntos."
    },
    { 
      color: "bg-purple-600", 
      title: "Libertad", 
      icon: <RocketLaunchIcon className="h-8 w-8 text-white" />,
      description: "Promovemos la innovación y la creatividad en un ambiente de autonomía responsable."
    }
  ];

  return (
    <section id="valores" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Elementos flotantes decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400/10"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 80],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Valores</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Los principios que guían cada decisión y acción en nuestra organización
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-gray-200 shadow-2xl backdrop-blur-sm bg-white/90"
          whileHover={{
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
          }}
        >
          {/* Sección de imagen */}
          <motion.div 
            className="lg:w-1/2 min-h-[400px] md:min-h-[500px] relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-[url('img/HomePage/reunion.png')] bg-cover bg-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            <motion.div 
              className="absolute bottom-8 left-8 right-8 z-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Nuestro <span className="text-amber-300">Equipo</span>
              </h3>
              <p className="text-white/90 mt-2">
                El corazón que late fuerte para hacer realidad nuestros valores
              </p>
            </motion.div>
          </motion.div>

          {/* Sección de valores */}
          <div className="lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {valores.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${value.color} p-5 md:p-6 rounded-xl flex flex-col items-center text-white transition-all hover:shadow-lg group relative overflow-hidden`}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  {/* Efecto hover */}
                  <motion.div 
                    className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                  
                  <motion.div 
                    animate={floatAnimation}
                    className="mb-3 p-3 bg-white/20 rounded-full"
                  >
                    {value.icon}
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-center mb-2">{value.title}</h3>
                  <p className="text-white/90 text-sm md:text-base text-center">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Propósito */}
            <motion.div 
              className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 md:p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(245, 158, 11, 0.5)"
              }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                animate={{
                  textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Nuestro Propósito
              </motion.h3>
              <p className="text-white/95 text-lg">
                Servir a la salud a través de la comercialización de productos farmacéuticos de la más alta calidad, con pasión y compromiso.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};