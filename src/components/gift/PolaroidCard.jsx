import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, BookOpen, Lock } from 'lucide-react';

import MessageLightbox from './MessageLightbox';

function PolaroidCard({ cardKey, message, isOpen, isLocked = false, onClick }) {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <>
      <div className="perspective-[1000px] relative aspect-[4/5] w-full">
        <motion.div
          animate={{
            rotateY: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut',
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
          className="relative h-full w-full"
        >
          {/* FRONT */}
          <button
            type="button"
            disabled={isLocked || isOpen}
            onClick={onClick}
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 flex h-full w-full flex-col rounded-xl border border-rose/15 bg-white p-3 text-center shadow-xl shadow-rose/15 transition hover:shadow-rose/25 disabled:cursor-default"
          >
            <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-blush">
              <Heart
                size={42}
                className="fill-rose/30 text-dusty"
                strokeWidth={1.2}
              />

              <p className="mt-5 font-display text-xl text-ink">Memory {cardKey}</p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-dusty">Open your memory</p>
            </div>

            <p className="py-3 font-display text-sm italic text-ink/60">A little piece of us</p>
          </button>

          {/* BACK */}
          <div
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 flex h-full flex-col rounded-xl border border-rose/20 bg-[#FFFCF7] p-4 shadow-xl shadow-rose/15 sm:p-5"
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles
                size={14}
                className="text-dusty"
              />

              <p className="text-[9px] uppercase tracking-[0.25em] text-dusty">A Little Message</p>

              <Sparkles
                size={14}
                className="text-dusty"
              />
            </div>

            {/* Message preview */}
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden py-3">
              <p className="line-clamp-5 whitespace-pre-wrap text-center font-display text-base leading-relaxed text-ink sm:text-lg">
                {message}
              </p>
            </div>

            {/* Read more */}
            <div className="mt-auto flex flex-col items-center border-t border-rose/15 pt-3">
              <button
                type="button"
                onClick={() => setShowFullMessage(true)}
                className="inline-flex items-center gap-2 rounded-full bg-rose/10 px-4 py-2.5 text-[10px] tracking-wider text-dusty transition hover:bg-rose/20"
              >
                <BookOpen size={13} />
                BACA SELENGKAPNYA
              </button>

              <p className="mt-3 font-display text-[10px] italic text-ink/40">With love ♡</p>
            </div>
          </div>
        </motion.div>

        {/* Locked indicator */}
        {isLocked && (
          <div className="absolute inset-0 z-20 flex items-center justify-center rounded-xl bg-ink/10 backdrop-blur-[2px]">
            <Lock
              size={25}
              className="text-ink/50"
            />
          </div>
        )}
      </div>

      {/* Full message lightbox */}
      <MessageLightbox
        isOpen={showFullMessage}
        message={message}
        cardKey={cardKey}
        onClose={() => setShowFullMessage(false)}
      />
    </>
  );
}

export default PolaroidCard;
