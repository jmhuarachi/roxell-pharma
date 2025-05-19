import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          {/* Fondo oscuro */}
          <div className="fixed inset-0 bg-transparent bg-opacity-10" onClick={onClose} />
          
          {/* Contenido del modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center z-10">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Cerrar modal"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              
              {/* Contenido */}
              <div className="p-6 text-gray-700">
                {children}
              </div>
              
              {/* Footer */}
              <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};