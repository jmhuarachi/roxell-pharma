import { motion } from "framer-motion";

export const HeroAbout = () => {
  return (
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
  );
};