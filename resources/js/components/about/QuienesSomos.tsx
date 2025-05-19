import { motion } from "framer-motion";
import { useState } from "react";
import { containerVariants, itemVariants } from "@/components/comunes/Animaciones";
import { ImageCarousel } from "@/components/about/ImageCarousel";
import { TeamModal } from "@/components/about/TeamModal";

export const QuienesSomos = () => {
  const [showTeamModal, setShowTeamModal] = useState(false);

  return (
    <section id="quienes-somos" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center"
        >
          {/* Carrusel de imágenes */}
          <ImageCarousel />

          {/* Contenido */}
          <ContentSection onShowTeam={() => setShowTeamModal(true)} />
        </motion.div>
      </div>

      {/* Modal del equipo */}
      <TeamModal
        isOpen={showTeamModal} 
        onClose={() => setShowTeamModal(false)} 
      />
    </section>
  );
};

const ContentSection = ({ onShowTeam }: { onShowTeam: () => void }) => (
  <motion.div 
    variants={itemVariants}
    className="lg:w-1/2 space-y-6"
  >
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
      <span className="text-blue-600">Quiénes</span> Somos
    </h2>
    
    <div className="space-y-5 text-gray-700 text-base md:text-lg">
      <Paragraph delay={0.2}>
        Somos una empresa ciento por ciento boliviana, con productos propios, productos de tercerización y productos de importación. Dinámica e innovadora, nos ocupamos y preocupamos por encontrar soluciones para mejorar la calidad de vida y la salud de quienes usan nuestros productos.
      </Paragraph>
      
      <Paragraph delay={0.4}>
        Comercializamos productos farmacéuticos que cumplen los más altos estándares de calidad, apegados al cumplimiento de las normas de buenas prácticas de manufactura, documentación y análisis.
      </Paragraph>
      
      <Paragraph delay={0.6}>
        En la industria farmacéutica, creemos que algún día todo será posible. Hoy construimos el futuro que cristaliza los sueños de nuestros fundadores, gracias a la creatividad, capacidad, esfuerzo y tenacidad de todo nuestro equipo para hacer de ROXELL PHARMA S.R.L. la farmacéutica nacional de orgullo.
      </Paragraph>
    </div>
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      viewport={{ once: true }}
      className="pt-4"
    >
      <button 
        onClick={onShowTeam}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
      >
        Conoce nuestro equipo
      </button>
    </motion.div>
  </motion.div>
);

const Paragraph = ({ children, delay }: { children: React.ReactNode, delay: number }) => (
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.p>
);