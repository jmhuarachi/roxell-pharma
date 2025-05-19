import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps<T> {
  items: T[];
  activeIndex: number;
  onChange: (index: number) => void;
  renderItem: (item: T) => React.ReactNode;
}

export const Carousel = <T,>({ items, activeIndex, renderItem }: CarouselProps<T>) => {
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: activeIndex > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeIndex > 0 ? -100 : 100 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5
          }}
          className="w-full"
        >
          {renderItem(items[activeIndex])}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};