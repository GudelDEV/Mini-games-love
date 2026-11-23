import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Lock } from 'lucide-react';
import { chapters } from '../data/chapters';

import PolaroidCard from '../components/gift/PolaroidCard';

function PuzzlePage({ chapter, openedCards, onOpenCard, onContinue }) {
  const hasOpenedCorrectCard = openedCards.includes(chapter.correctCard);

  const hasOpenedWrongCard = openedCards.some((card) => card !== chapter.correctCard);

  const isFirstAttempt = openedCards.length === 1 && hasOpenedCorrectCard;

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 py-14">
      <div className="relative z-10 w-full max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles
            className="mx-auto text-dusty"
            size={25}
          />

          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-dusty">
            Chapter {chapter.id} of {chapters.length}
          </p>

          <h1 className="mt-3 font-display text-4xl text-ink">{chapter.title}</h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-ink/70">{chapter.question}</p>

          <p className="mt-3 text-xs text-ink/40">Choose a memory and discover its story.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 justify-items-center gap-5 sm:gap-10">
          {['A', 'B'].map((cardKey, index) => {
            const isOpened = openedCards.includes(cardKey);

            const isLocked = hasOpenedCorrectCard && !isOpened;

            return (
              <motion.div
                key={cardKey}
                initial={{ opacity: 0, y: 25 }}
                animate={{
                  opacity: isLocked ? 0.55 : 1,
                  y: 0,
                }}
                transition={{ delay: index * 0.2 }}
                className="relative w-full max-w-[250px]"
              >
                <PolaroidCard
                  cardKey={cardKey}
                  message={chapter.cards[cardKey].message}
                  isOpen={isOpened}
                  isLocked={isLocked}
                  onClick={() => {
                    if (!isOpened && !hasOpenedCorrectCard) {
                      onOpenCard(cardKey);
                    }
                  }}
                />

                {isLocked && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center rounded-xl bg-ink/10 backdrop-blur-[2px]">
                    <Lock
                      className="text-ink/50"
                      size={25}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Wrong answer */}
        {hasOpenedWrongCard && !hasOpenedCorrectCard && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 max-w-md rounded-2xl border border-rose/30 bg-white/70 p-5"
          >
            <Heart
              className="mx-auto mb-2 text-dusty"
              size={22}
            />

            <p className="font-display text-lg text-ink">Bukan yang ini...</p>

            <p className="mt-2 text-sm leading-6 text-ink/60">Tidak apa-apa, masih ada satu kenangan lagi.</p>
          </motion.div>
        )}

        {/* Correct answer */}
        {hasOpenedCorrectCard && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 max-w-md"
          >
            {isFirstAttempt && (
              <p className="mb-5 font-display text-base italic text-dusty">
                Terima kasih sudah mengingat aku lagi, walau hanya sebentar.
              </p>
            )}

            {!isFirstAttempt && <p className="mb-5 font-display text-lg text-dusty">You found the right memory!</p>}

            <button
              type="button"
              onClick={onContinue}
              className="inline-flex items-center gap-3 rounded-full bg-dusty px-8 py-4 text-sm text-white transition hover:bg-ink"
            >
              Continue Journey
              <ArrowRight size={17} />
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}

export default PuzzlePage;
