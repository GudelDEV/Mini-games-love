import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import GiftCodeForm from '../components/gift/GiftCodeForm';
import { chapters } from '../data/chapters';

function CodePage({ chapter, onSubmitCode, error }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6 py-12">
      <div className="pointer-events-none absolute left-12 top-16 text-rose/50">
        <Sparkles size={26} />
      </div>

      <div className="pointer-events-none absolute bottom-16 right-12 text-rose/50">
        <Heart size={30} />
      </div>

      <div className="relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-dusty">
            Chapter {chapter.id} of {chapters.length}
          </p>

          <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">{chapter.title}</h1>
        </motion.div>

        <div className="mx-auto flex justify-center">
          <GiftCodeForm
            onSubmit={onSubmitCode}
            error={error}
          />
        </div>

        <p className="mt-8 text-xs text-ink/40">Every little detail holds a memory.</p>
      </div>
    </main>
  );
}

export default CodePage;
