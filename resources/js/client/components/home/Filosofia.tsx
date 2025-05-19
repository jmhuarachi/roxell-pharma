import { motion } from "framer-motion";
import { containerVariants, itemVariants, fadeIn } from "../comunes/Animaciones";

export const Filosofia = () => {
  return (
    <section id="nosotros" className="py-28 bg-white relative">
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-blue-900/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
          >
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Filosofía</span>
          </motion.h2>

          <motion.div
            variants={fadeIn}
            className="relative bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-gray-100 shadow-xl"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.15)"
            }}
          >
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-amber-400 rounded-xl rotate-12 opacity-20" />
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-blue-400 rounded-xl -rotate-12 opacity-20" />
            
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium">
              "En <span className="font-bold text-blue-600">ROXELL PHARMA S.R.L.</span>, construimos hoy el futuro de la salud, cristalizando sueños a través de la innovación, el esfuerzo y el compromiso con la calidad, para ser el orgullo farmacéutico de Bolivia y mejorar la vida de quienes confían en nosotros."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};