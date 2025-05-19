import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const variantesItem = {
  oculto: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const variantesHover = {
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export const Contacto = () => (
  <motion.div variants={variantesItem}>
    <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
    <ul className="space-y-3">
      <motion.li 
        className="flex items-start"
        whileHover="hover"
        variants={variantesHover}
      >
        <PhoneIcon className="h-5 w-5 mt-0.5 mr-3 text-amber-400" />
        <div>
          <p className="text-gray-400">Atención al cliente</p>
          <a href="tel:+591800123456" className="text-amber-400 hover:text-amber-300 transition-colors">
            +591 800 123 456
          </a>
        </div>
      </motion.li>
      
      <motion.li 
        className="flex items-start"
        whileHover="hover"
        variants={variantesHover}
      >
        <EnvelopeIcon className="h-5 w-5 mt-0.5 mr-3 text-amber-400" />
        <div>
          <p className="text-gray-400">Correo electrónico</p>
          <a href="mailto:contacto@roxellpharma.com" className="text-amber-400 hover:text-amber-300 transition-colors">
            contacto@roxellpharma.com
          </a>
        </div>
      </motion.li>
      
      <motion.li 
        className="flex items-start"
        whileHover="hover"
        variants={variantesHover}
      >
        <MapPinIcon className="h-5 w-5 mt-0.5 mr-3 text-amber-400" />
        <div>
          <p className="text-gray-400">Síguenos en redes</p>
          <div className="flex space-x-4 mt-2">
            {[
              { Icon: FaFacebook, nombre: "Facebook", color: "#3b5998", enlace: "https://www.facebook.com/profile.php?id=100084045564827"},
              { Icon: FaTwitter, nombre: "Twitter", color: "#1da1f2", enlace: "https://twitter.com/RoxellPharma"},
              { Icon: FaInstagram, nombre: "Instagram", color: "#e1306c" , enlace: "https://www.instagram.com/roxellpharma/" },
              { Icon: FaYoutube, nombre: "YouTube", color: "#ff0000" , enlace: "https://www.youtube.com/@roxellpharma" }
            ].map(({ Icon, nombre, color , enlace}, index) => (
              <motion.a
                key={index}
                href={enlace}
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label={nombre}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Icon className="h-6 w-6" style={{ color }} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.li>
    </ul>
  </motion.div>
);