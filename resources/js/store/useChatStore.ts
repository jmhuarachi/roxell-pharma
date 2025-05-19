import { create } from "zustand";
import axios from "axios";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

interface ChatState {
  messages: Message[];
  loading: boolean;
  products: any[];
  addMessage: (message: Message) => void;
  sendMessage: (content: string) => Promise<void>;
  fetchProducts: () => Promise<void>;
  searchProducts: (query: string) => Promise<any[]>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [
    {
      id: 1,
      role: "assistant",
      content: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
    },
  ],
  loading: false,
  products: [],

  addMessage: (message) => {
    set((state) => ({ messages: [...state.messages, message] }));
  },

  sendMessage: async (content) => {
    const { addMessage, searchProducts, messages } = get();
    
    // Agregar mensaje del usuario
    addMessage({
      id: Date.now(),
      role: "user",
      content,
    });

    set({ loading: true });

    try {
      // Primero verificar si es una consulta de productos
      if (content.toLowerCase().includes("producto") || 
          content.toLowerCase().includes("medicamento") ||
          content.toLowerCase().includes("buscar") ||
          content.toLowerCase().includes("mostrar")) {
        
        const products = await searchProducts(content);
        if (products.length > 0) {
          let response = "🔍 Encontré estos productos:\n\n";
          products.forEach((product, index) => {
            response += `${index + 1}. ${product.nombre}\n`;
            response += `   💊 Composición: ${product.composicion}\n`;
            response += `   📦 Presentación: ${product.presentacion}\n`;
            response += `   💵 Precio: $${product.precio_contado}\n\n`;
          });
          response += "¿Te interesa alguno en particular?";
          
          addMessage({
            id: Date.now() + 1,
            role: "assistant",
            content: response,
          });
        } else {
          // Si no encuentra productos, consultar a Groq con historial
          await queryGroq(content, addMessage, messages);
        }
      } else {
        // Consultar directamente a Groq con historial
        await queryGroq(content, addMessage, messages);
      }
    } catch (error) {
      console.error("Error:", error);
      addMessage({
        id: Date.now() + 1,
        role: "assistant",
        content: "Lo siento, hubo un error al procesar tu solicitud. Por favor intenta nuevamente.",
      });
    } finally {
      set({ loading: false });
    }
  },

  fetchProducts: async () => {
    try {
      const response = await axios.get('api/productos');
      set({ products: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; // Re-lanzamos el error para manejarlo en searchProducts
    }
  },

  searchProducts: async (query) => {
    try {
      let { products } = get();
      
      // Si no hay productos cargados, los obtenemos
      if (products.length === 0) {
        await get().fetchProducts();
        products = get().products; // Obtenemos los productos actualizados
      }
      
      const queryLower = query.toLowerCase();
      return products.filter(
        (product) =>
          product.nombre.toLowerCase().includes(queryLower) ||
          product.composicion.toLowerCase().includes(queryLower) ||
          product.accion_terapeutica.toLowerCase().includes(queryLower)
      );
    } catch (error) {
      console.error("Error searching products:", error);
      return [];
    }
  },
}));

// Función para consultar a Groq con historial de conversación
async function queryGroq(
  content: string,
  addMessage: (message: Message) => void,
  messageHistory: Message[]
) {
  try {
    // Preparamos el historial para Groq (últimos 4 mensajes)
    const groqHistory = messageHistory.slice(-4).map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content:
              "Eres un asistente virtual de una farmacia. Sé amable, profesional y conciso. " +
              "Recuerda el contexto de la conversación anterior. " +
              "Si te preguntan sobre productos médicos o medicamentos, ofrece solo la informacion  de nuestros productos " +
              "pero siempre recomienda consultar con un profesional de la salud.",
          },
          ...groqHistory,
          { role: "user", content },
        ],
        temperature: 0.7,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    addMessage({
      id: Date.now() + 1,
      role: "assistant",
      content: reply,
    });
  } catch (error) {
    console.error("Error querying Groq:", error);
    addMessage({
      id: Date.now() + 1,
      role: "assistant",
      content: "Disculpa, estoy teniendo dificultades técnicas. ¿Podrías reformular tu pregunta?",
    });
  }
}