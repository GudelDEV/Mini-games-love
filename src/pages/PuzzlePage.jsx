import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

import PolaroidCard from '../components/gift/PolaroidCard';

function PuzzlePage({ chapter, openedCards, onOpenCard, onContinue }) {
  const hasOpenedCorrectCard = openedCards.includes(chapter.correctCard);

  const hasOpenedWrongCard = openedCards.some((card) => card !== chapter.correctCard);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 py-14">
      <div className="pointer-events-none absolute left-10 top-12 text-rose/50">
        <Sparkles size={28} />
      </div>

      <div className="pointer-events-none absolute bottom-12 right-10 text-rose/50">
        <Heart size={30} />
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-dusty">Chapter {chapter.id} of 7</p>

          <h1 className="mt-3 font-display text-4xl text-ink">{chapter.title}</h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-ink/70">{chapter.question}</p>

          <p className="mt-3 text-xs text-ink/40">Choose a memory and discover its story.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 justify-items-center gap-5 sm:gap-10">
          {['A', 'B'].map((cardKey, index) => (
            <motion.div
              key={cardKey}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full max-w-[250px]"
            >
              <PolaroidCard
                cardKey={cardKey}
                message={chapter.cards[cardKey].message}
                isOpen={openedCards.includes(cardKey)}
                onClick={() => onOpenCard(cardKey)}
              />
            </motion.div>
          ))}
        </div>

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

        {hasOpenedCorrectCard && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 max-w-md"
          >
            <p className="font-display text-xl text-dusty">You found the right memory!</p>

            <button
              onClick={onContinue}
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-dusty px-8 py-4 text-sm text-white transition hover:bg-ink"
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
