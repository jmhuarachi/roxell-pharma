// components/navbar/Navbar.tsx
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { LogoNav } from './LogoNav';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import { Boton } from '../ui/Boton';
import { UserIcon, PencilIcon, Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useNavegacionStore } from '@/client/store/useNavegacionStore';
import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

export const Navbar = () => {
  const { 
    menuAbierto, 
    enlaceActivo,
    alternarMenu, 
    cerrarMenu,
    actualizarEnlaceActivoPorRuta 
  } = useNavegacionStore();
  
  const { url } = usePage();

  useEffect(() => {
    actualizarEnlaceActivoPorRuta(url);
  }, [url, actualizarEnlaceActivoPorRuta]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <LogoNav />
          </Link>

          <div className="hidden md:flex items-center space-x-8 max-h-full">
            <motion.p
              className="text-xl lg:text-3xl text-yellow-400 font-semibold text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Innovadores en la Gestión de la Salud
            </motion.p>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCartIcon className="h-7 w-7 text-amber-500 hover:text-amber-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </motion.div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <motion.div
              className="relative"
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCartIcon className="h-6 w-6 text-amber-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[0.65rem] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </motion.div>

            <motion.button
              onClick={alternarMenu}
              className="p-2 rounded hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {menuAbierto ? (
                <XMarkIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <Bars3Icon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        <div className="border-t border-gray-200 py-2">
          <div className="flex justify-between items-center">
            <MenuDesktop />
            
            <div className="hidden md:flex items-center space-x-4">
              <Boton variante="texto" className="px-3 py-1.5">
                <UserIcon className="h-4 w-4" />
                <span>Iniciar Sesión</span>
              </Boton>

              <Boton variante="primario" className="px-3 py-1.5">
                <PencilIcon className="h-4 w-4" />
                <span>Registrarse</span>
              </Boton>
            </div>
          </div>
        </div>

        <MenuMobile />
      </div>
    </header>
  );
};