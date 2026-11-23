import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

function Lightbox({ image, caption, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          <motion.div
            initial={{ scale: 0.85, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.85 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg bg-white p-4 pb-8 shadow-2xl"
          >
            <img
              src={image}
              alt={caption}
              className="max-h-[65vh] w-full object-contain"
            />

            <p className="mt-5 text-center font-display text-xl text-ink">{caption}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Lightbox;
