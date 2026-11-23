import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

function PolaroidCard({ cardKey, message, isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isOpen}
      className="w-full max-w-[250px] text-left disabled:cursor-default"
      aria-label={`Buka kartu ${cardKey}`}
    >
      <div className="perspective-[1000px]">
        <motion.div
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative aspect-[4/5] w-full"
        >
          {/* Sisi depan */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className="absolute inset-0 flex flex-col bg-white p-3 shadow-xl shadow-rose/15"
          >
            <div className="flex flex-1 items-center justify-center bg-blush">
              <Heart
                size={42}
                className="fill-rose/40 text-dusty"
              />
            </div>

            <div className="flex h-16 items-center justify-center">
              <span className="font-display text-xl text-ink">Memory {cardKey}</span>
            </div>
          </div>

          {/* Sisi belakang */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6 text-center shadow-xl shadow-rose/15"
          >
            <Heart
              size={28}
              className="mb-4 fill-rose/40 text-dusty"
            />

            <p className="font-display text-lg leading-relaxed text-ink">{message}</p>

            <span className="mt-5 text-xs tracking-widest text-dusty">WITH LOVE</span>
          </div>
        </motion.div>
      </div>
    </button>
  );
}

export default PolaroidCard;
