import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

import PersonalLetter from '../components/gift/PersonalLetter';

import AppreciationNote from '../components/gift/AppreciationNote';

import MemoryGallery from '../components/gift/MemoryGallery';

import ResetJourneyButton from '../components/common/ResetJourneyButton';

function FinalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cream pb-16">
      {/* Opening */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Sparkles
            size={30}
            className="mx-auto text-dusty"
          />

          <p className="mt-7 text-xs uppercase tracking-[0.35em] text-dusty">Seven Chapters, One Journey</p>

          <h1 className="mt-5 font-display text-5xl leading-tight text-ink md:text-7xl">
            The Last
            <br />
            Chapter
          </h1>

          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-ink/60">
            Setiap perjalanan punya akhir. Namun, beberapa kenangan akan selalu menjadi bagian dari cerita.
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mt-12"
          >
            <Heart
              size={25}
              className="mx-auto fill-rose/40 text-dusty"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Letter */}
      <PersonalLetter />

      {/* Gallery */}
      <MemoryGallery />

      {/* Appreciation */}
      <AppreciationNote />

      {/* Closing */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heart
            size={30}
            className="mx-auto fill-rose/40 text-dusty"
          />

          <h2 className="mt-7 font-display text-4xl leading-tight text-ink">
            And This Is
            <br />
            Where The Story Ends.
          </h2>

          <p className="mt-6 text-sm leading-8 text-ink/60">
            Terima kasih sudah meluangkan waktu untuk menyelesaikan perjalanan kecil ini. Semoga hal-hal baik selalu
            menyertaimu.
          </p>

          <div className="mt-10">
            <span className="font-display text-2xl italic text-dusty">With love, - SYAI</span>
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-ink/30">The End · 2026</p>

          <div className="mt-10">
            <ResetJourneyButton />
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default FinalPage;
