import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';

function MessageLightbox({ isOpen, message, cardKey, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 px-5 py-8 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-rose/20 bg-[#FFFCF7] shadow-2xl"
          >
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-8 -top-8 text-rose/15">
              <Sparkles
                size={100}
                strokeWidth={0.7}
              />
            </div>

            <div className="pointer-events-none absolute -bottom-8 -left-8 text-rose/15">
              <Heart
                size={100}
                strokeWidth={0.7}
              />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-rose/15 px-7 py-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-dusty">A Little Memory</p>

                <h3 className="mt-1 font-display text-xl text-ink">Memory {cardKey}</h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close message"
                className="flex size-10 items-center justify-center rounded-full bg-rose/10 text-dusty transition hover:bg-rose/20"
              >
                <X size={19} />
              </button>
            </div>

            {/* Full message */}
            <div className="relative z-10 max-h-[65vh] overflow-y-auto px-7 py-9 md:px-10">
              <Heart
                size={25}
                className="mx-auto mb-7 fill-rose/30 text-dusty"
              />

              <div className="whitespace-pre-wrap text-center font-display text-lg leading-9 text-ink/80 md:text-xl md:leading-10">
                {message}
              </div>

              <div className="mt-9 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-rose/40" />
                <Heart
                  size={13}
                  className="fill-rose/40 text-dusty"
                />
                <span className="h-px w-10 bg-rose/40" />
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 border-t border-rose/15 px-7 py-5 text-center">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-dusty px-8 py-3 text-xs tracking-widest text-white transition hover:bg-ink"
              >
                CLOSE MEMORY
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MessageLightbox;
