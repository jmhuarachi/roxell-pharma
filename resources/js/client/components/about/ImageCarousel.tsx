import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ImageCarousel = () => {
  // Rutas absolutas desde la raíz pública
  const images = [
    "img/equipo.jpg",
    "img/equipo/maria.jpg",
    "img/otros.jpg",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  // Precarga y verificación de imágenes
  useEffect(() => {
    const loadImages = async () => {
      const loadStatus = await Promise.all(
        images.map(img => {
          return new Promise<boolean>(resolve => {
            const image = new Image();
            image.src = img;
            image.onload = () => resolve(true);
            image.onerror = () => resolve(false);
          });
        })
      );
      setLoadedImages(loadStatus);
    };

    loadImages();
  }, []);

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Si no hay imágenes cargadas, mostrar placeholder
  if (loadedImages.length === 0 || !loadedImages.some(Boolean)) {
    return (
      <div className="lg:w-1/2 h-64 md:h-80 lg:h-96 bg-gray-200 rounded-2xl animate-pulse" />
    );
  }

  return (
    <div className="lg:w-1/2 relative overflow-hidden rounded-2xl shadow-xl">
      <motion.div 
        className="relative h-64 md:h-80 lg:h-96 w-full"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        {images.map((img, index) => (
          loadedImages[index] && (
            <motion.div
              key={`${img}-${index}`}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                zIndex: index === currentImageIndex ? 10 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={img}
                alt={`Equipo Roxell Pharma ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/img/equipo.jpg';
                }}
              />
            </motion.div>
          )
        ))}
        
        {/* Indicadores */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            loadedImages[index] && (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
                aria-label={`Mostrar imagen ${index + 1}`}
              />
            )
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
      </motion.div>
    </div>
  );
};