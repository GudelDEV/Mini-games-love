import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

function WelcomePage({ onStart }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6 py-12">
      {/* Dekorasi */}
      <div className="pointer-events-none absolute left-10 top-16 text-rose/60">
        <Sparkles size={28} />
      </div>

      <div className="pointer-events-none absolute bottom-20 right-12 text-rose/60">
        <Heart size={32} />
      </div>

      {/* Konten utama */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-xl text-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-blush"
        >
          <Heart
            size={34}
            className="fill-rose text-dusty"
          />
        </motion.div>

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-dusty">A Little Something For You</p>

        <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
          A Journey
          <br />
          Made With Love
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-ink/70 md:text-base">
          Ada beberapa hal kecil yang ingin kusampaikan. Mungkin tidak semuanya bisa diungkapkan dengan kata-kata, jadi
          biarkan perjalanan ini menceritakannya.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onStart}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-dusty px-8 py-4 text-sm font-medium text-white shadow-lg shadow-dusty/20 transition-colors hover:bg-ink"
        >
          Begin The Journey
          <Heart size={16} />
        </motion.button>

        <p className="mt-8 text-xs tracking-wider text-ink/40">Made with care, just for you.</p>
      </motion.section>
    </main>
  );
}

export default WelcomePage;
