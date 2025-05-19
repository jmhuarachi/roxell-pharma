import { motion } from 'framer-motion';

export const LogoNav = () => (
  <motion.div 
    className="flex flex-col"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="text-lg font-bold text-gray-800 uppercase tracking-wider">
      LABORATORIOS
    </span>
    
    <div className="flex items-end">
      <motion.span
        className="text-3xl font-black lowercase text-amber-500"
        style={{ fontFamily: "'Arial Black', sans-serif" }}
        animate={{
          color: ["#FFA500", "#FF8C00", "#FFD700"],
          transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        roxell
      </motion.span>
      
      <span className="relative -top-4">
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-500 text-white text-[15px] font-bold">
          ®
        </span>
      </span>
      
      <span className="text-3xl font-black uppercase text-gray-800" style={{ fontFamily: "'Arial Black', sans-serif" }}>
        PHARMA <span className="text-xs font-medium text-gray-600 uppercase mt-1">S.R.L.</span>
      </span>
    </div>
  </motion.div>
);