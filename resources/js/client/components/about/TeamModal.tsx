import { motion } from "framer-motion";
import { TeamMemberCard } from "@/client/components/about/TeamMemberCard";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamModal = ({ isOpen, onClose }: TeamModalProps) => {
  const teamMembers = [
    {
      name: "Maria Ocampo Díaz",
      position: "Gerente General",
      photo: "img/equipo/maria.jpg",
      bio: "Ingeniero Químico con más de 25 años de experiencia en la industria farmacéutica. Lidera la estrategia corporativa y las relaciones internacionales."
    },
    {
      name: "Maria Ocampo Díaz",
      position: "Gerente General",
      photo: "img/equipo/equipo.jpg",
      bio: "Ingeniero Químico con más de 25 años de experiencia en la industria farmacéutica. Lidera la estrategia corporativa y las relaciones internacionales."
    },
    {
      name: "Maria Ocampo Díaz",
      position: "Gerente General",
      photo: "img/equipo/maria.jpg",
      bio: "Ingeniero Químico con más de 25 años de experiencia en la industria farmacéutica. Lidera la estrategia corporativa y las relaciones internacionales."
    },
    {
      name: "Maria Ocampo Díaz",
      position: "Gerente General",
      photo: "img/equipo/maria.jpg",
      bio: "Ingeniero Químico con más de 25 años de experiencia en la industria farmacéutica. Lidera la estrategia corporativa y las relaciones internacionales."
    },
    
    // ... otros miembros del equipo
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClose={onClose} />
        
        <div className="p-8">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-600">
            Nuestro Equipo Directivo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                member={member}
                index={index}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 italic">
              "Nuestro equipo humano es el pilar fundamental de nuestra organización, trabajando cada día para ofrecer soluciones farmacéuticas de excelencia."
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <button 
    onClick={onClose}
    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
    aria-label="Cerrar modal"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);