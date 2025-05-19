import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheckIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { containerVariants, itemVariants } from "../comunes/Animaciones";
import { Boton } from "../comunes/Boton";
import { useRef } from "react";

export const HeroFarmacovigilancia = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 overflow-hidden">
      <motion.div className="absolute inset-0 bg-[url('img/HomePage/labrat.png')] bg-cover bg-no-repeat bg-center opacity-20"
        style={{
          y: yBg,
          opacity: opacityBg,
          scale: 1.2
        }}
      />

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
          className="text-xl md:text-2xl text-amber-500 max-w-3xl mx-auto mb-8  "
        >
          En <span className="font-semibold text-blue-600">ROXELL Pharma</span> priorizamos tu seguridad mediante nuestro riguroso sistema de farmacovigilancia
        </motion.p>
        {/* <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-amber-500 max-w-3xl mx-auto md-8"
          >
            En <span className="font-semibold text-blue-600">En esta empresa cuidamos tu salud para la integridad de toso donde todo podemos colaborar con las maneras de las que como podemos adoptar</span>
        </motion.p> */}

        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <Boton href="#que-es" tipo="outline">
            <strong>Conoce más</strong>
            <ArrowDownIcon className="h-5 w-5 ml-2" />
          </Boton>
        </motion.div>
      </motion.div>
    </section>
  );
};