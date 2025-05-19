import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/components/comunes/Animaciones";
import { useEffect, useState, useRef } from "react";
import { Link } from '@inertiajs/react';

export const Sucursales = () => {
  const [activeBranch, setActiveBranch] = useState<number | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Precarga el script de Google Maps
  useEffect(() => {
    const script = document.createElement('script');
    //script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places`;
    script.async = true;
    script.onload = () => setIsMapLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const branches = [
    {
      id: 1,
      city: "La Paz",
      address: "Av. Arce #1234, Zona Sopocachi",
      phone: "+591 2 1234567",
      image: "img/equipo.jpg",
      coordinates: { lat: -16.4955, lng: -68.1333 },
      schedule: "Lunes a Viernes: 8:30 - 18:30\nSábados: 9:00 - 13:00"
    },
    {
      id: 2,
      city: "Santa Cruz",
      address: "Av. San Martín #567, Zona Equipetrol",
      phone: "+591 3 7654321",
      image: "img/equipo.jpg",
      coordinates: { lat: -17.7833, lng: -63.1667 },
      schedule: "Lunes a Viernes: 8:00 - 19:00\nSábados: 9:00 - 14:00"
    },
    {
      id: 3,
      city: "Cochabamba",
      address: "Av. América #891, Zona Norte",
      phone: "+591 4 9876543",
      image: "img/equipo.jpg",
      coordinates: { lat: -17.3895, lng: -66.1568 },
      schedule: "Lunes a Viernes: 8:30 - 18:30\nSábados: 9:00 - 13:00"
    },
    {
      id: 4,
      city: "Sucre",
      address: "Calle Bustillos #456",
      phone: "+591 4 5678910",
      image: "img/equipo.jpg",
      coordinates: { lat: -19.0478, lng: -65.2596 },
      schedule: "Lunes a Viernes: 8:30 - 18:30\nSábados: 9:00 - 13:00"
    },
    {
      id: 5,
      city: "Tarija",
      address: "Av. Las Américas #789",
      phone: "+591 4 1237890",
      image: "img/equipo.jpg",
      coordinates: { lat: -21.5318, lng: -64.7312 },
      schedule: "Lunes a Viernes: 8:30 - 18:30\nSábados: 9:00 - 13:00"
    }
  ];

  // Configuración del carrusel automático
  useEffect(() => {
    if (branches.length <= 1) return;

    const interval = setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        const nextIndex = (currentIndex + 1) % branches.length;
        setCurrentIndex(nextIndex);
        
        const cardWidth = 320; // Ancho aproximado de cada tarjeta
        const scrollPosition = nextIndex * cardWidth;
        
        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, branches.length]);

  const handleShowMap = (index: number) => {
    setActiveBranch(activeBranch === index ? null : index);
  };

  // Pausar el carrusel cuando el mouse está sobre él
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-16 md:py-24 bg-white relative" id="sucursales">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Encabezado */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nuestras <span className="text-blue-600">Sucursales</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Encuéntranos en las principales ciudades de Bolivia
            </p>
          </motion.div>

          {/* Listado de Sucursales con scroll horizontal automático */}
          <motion.div 
            variants={itemVariants}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
            >
              {branches.map((branch, index) => (
                <div 
                  key={branch.id}
                  className="flex-shrink-0 w-80 md:w-96 px-4 snap-start"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full"
                  >
                    {/* Imagen de la sucursal */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={branch.image}
                        alt={`Sucursal ${branch.city}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/img/sucursales/default.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {branch.city}
                      </span>
                    </div>

                    {/* Información de la sucursal */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.city}</h3>
                      <div className="space-y-3">
                        <p className="text-gray-700 flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {branch.address}
                        </p>
                        <p className="text-gray-700 flex items-center">
                          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {branch.phone}
                        </p>
                        <p className="text-gray-700 flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {branch.schedule.split('\n').map((line, i) => (
                            <span key={i} className="block">{line}</span>
                          ))}
                        </p>
                      </div>

                      {/* Botones de acción */}
                      <div className="mt-6 space-y-3">
                        <Link
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleShowMap(index);
                          }}
                          className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium w-full ${
                            activeBranch === index 
                              ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg' 
                              : 'bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10'
                          }`}
                        >
                          <motion.span
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center"
                          >
                            {activeBranch === index ? "Ocultar mapa" : "Ver en mapa"}
                          </motion.span>
                        </Link>
                        
                        <a
                          href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium w-full text-gray-700 hover:text-gray-900"
                        >
                          Llamar ahora
                        </a>
                      </div>

                      {/* Mapa integrado */}
                      {activeBranch === index && isMapLoaded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 rounded-lg overflow-hidden"
                        >
                          <div className="h-48 w-full bg-gray-200">
                            <p className="flex items-center justify-center h-full text-gray-500">
                              Mapa de {branch.city} ({branch.coordinates.lat}, {branch.coordinates.lng})
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Indicadores de posición */}
          <div className="flex justify-center mt-6 space-x-2">
            {branches.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  if (scrollContainerRef.current) {
                    const cardWidth = 320;
                    const scrollPosition = index * cardWidth;
                    scrollContainerRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Ir a sucursal ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};