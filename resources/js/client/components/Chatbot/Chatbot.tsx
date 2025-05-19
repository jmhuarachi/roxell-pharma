import { useState, useRef, useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, loading, sendMessage } = useChatStore();

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    sendMessage(inputValue);
    setInputValue("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-950 transition-all flex items-center justify-center"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
        )}
      </button>

      {/* Contenedor del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ height: "500px" }}
          >
            {/* Encabezado */}
            <div className="bg-gray-900 text-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Asistente Virtual</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-200"
                  aria-label="Cerrar chat"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs opacity-80">Estamos aquí para ayudarte</p>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-gray-900 text-white rounded-br-none"
                        : "bg-white text-gray-950  border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start mb-3">
                  <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none p-3">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Formulario de entrada */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-gray-200 p-3 bg-white"
            >
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-3 py-2  text-blue-600 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-3 py-2 rounded-r-lg hover:bg-gray-950 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!inputValue.trim() || loading}
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;