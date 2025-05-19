import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "@/client/components/comunes/Carousel";

// Definición de tipos
interface HistoryItem {
  year: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

// Variantes de animación
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
      damping: 10
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

export const HistoriaEmpresa = () => {
  const [activeHistoryItem, setActiveHistoryItem] = useState(0);

  const historyItems: HistoryItem[] = [
    {
      year: "1993",
      title: "Fundación",
      description: "Laboratorios Roxell inicia sus actividades como empresa fabricante y distribuidora de productos galénicos, estableciendo las bases de lo que sería un legado en la industria farmacéutica boliviana.",
      image: "img/equipo.jpg",
      icon: "🏭"
    },
    {
      year: "2000",
      title: "Adquisición estratégica",
      description: "Roxell pasa a manos de la Corporación LAFAR, cambiando su razón social a Laboratorios Roxell Pharma S.R.L. Este movimiento estratégico permitió expandir nuestra capacidad productiva y alcance comercial.",
      image: "img/equipo/maria.jpg",
      icon: "📈"
    },
    {
      year: "Actualidad",
      title: "Expansión y excelencia",
      description: "Bajo la gerencia del Sr. Enrique Marcelo Ocampo Díaz, la empresa ha consolidado su posición como líder en el mercado, comercializando productos de alta calidad con representaciones internacionales y manteniendo nuestro compromiso con la salud boliviana.",
      image: "img/equipo.jpg",
      icon: "🌎"
    }
  ];

  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHistoryItem((prev) => (prev + 1) % historyItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [historyItems.length]);

  return (
    <section id="historia" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Nuestra <span className="text-amber-600">Historia</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Una trayectoria de innovación y compromiso con la salud
          </motion.p>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <Carousel
            items={historyItems}
            activeIndex={activeHistoryItem}
            onChange={setActiveHistoryItem}
            renderItem={(item: HistoryItem) => (
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8 lg:p-10">
                <motion.div 
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="flex items-start mb-6">
                    <span className="text-3xl md:text-4xl mr-4">{item.icon}</span>
                    <div>
                      <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                </motion.div>
                
                <motion.div
                  className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img
                    src={item.image}
                    alt={`Historia Roxell ${item.year}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </motion.div>
              </div>
            )}
          />

          {/* Controles */}
          <div className="flex justify-center gap-2 md:gap-3 pb-6 md:pb-8 px-4">
            {historyItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveHistoryItem(index)}
                className={`w-8 h-1 md:w-10 md:h-1.5 rounded-full transition-all duration-300 ${activeHistoryItem === index ? 'bg-amber-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label={`Ir a año ${historyItems[index].year}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 md:mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-gray-600 italic">
            "Más de {new Date().getFullYear() - 1993} años innovando en el cuidado de tu salud"
          </p>
        </motion.div>
      </div>
    </section>
  );
};