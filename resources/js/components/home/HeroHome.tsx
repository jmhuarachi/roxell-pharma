import { motion, useScroll, useTransform } from "framer-motion";
import { SparklesIcon, ArrowDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants, floatAnimation } from "../comunes/Animaciones";
import { Boton } from "../comunes/Boton";
import { useRef } from "react";
import { useNavegacionStore } from "@/store/useNavegacionStore";

export const HeroHome = () => {
  const { establecerEnlaceActivo } = useNavegacionStore();
  
    const handleProductosClick = () => {
      establecerEnlaceActivo(route('productos'));
    };
  
    const handleContactoClick = () => {
      establecerEnlaceActivo(route('contacto')); // Fixed from 'contacto' to match your routes
    };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[url('img/HomePage/labrat.png')] bg-cover bg-no-repeat bg-center"
        style={{
          y: yBg,
          opacity: opacityBg,
          scale: 1.2
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-900/30" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-6 py-24 text-center relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <SparklesIcon className="h-12 w-12 text-amber-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Innovación</span> en Salud
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
        >
          En <span className="font-semibold text-white">ROXELL Pharma</span> transformamos vidas a través de soluciones farmacéuticas de vanguardia
        </motion.p>

        <motion.div
          variants={itemVariants} 
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Boton href="#nosotros" tipo="primario">
            Conócenos más
            <ArrowDownIcon className="h-6 w-6 ml-2" />
          </Boton>
          
          <Boton href={route('productos')} tipo="secundario" onClick={handleProductosClick}>
            Ver Productos
            <RocketLaunchIcon className="h-6 w-6 ml-2" />
          </Boton>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={floatAnimation}
        >
          <ArrowDownIcon className="h-8 w-8 text-white animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};