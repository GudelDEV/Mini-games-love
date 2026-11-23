import { motion } from 'framer-motion';
import { Flower2, Heart, Sparkles } from 'lucide-react';

function AppreciationNote() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-rose/20 bg-white/70 p-8 text-center shadow-xl shadow-rose/5 backdrop-blur-sm md:p-14"
      >
        <Flower2
          className="absolute -right-5 -top-5 rotate-12 text-rose/20"
          size={110}
          strokeWidth={0.8}
        />

        <Flower2
          className="absolute -bottom-5 -left-5 -rotate-12 text-rose/20"
          size={100}
          strokeWidth={0.8}
        />

        <div className="relative z-10">
          <Sparkles
            size={24}
            className="mx-auto text-dusty"
          />

          <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-dusty">A Small Appreciation</p>

          <h2 className="mt-4 font-display text-4xl text-ink">For Teh Emo</h2>

          <div className="my-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-rose/40" />
            <Heart
              size={15}
              className="fill-rose/40 text-dusty"
            />
            <span className="h-px w-12 bg-rose/40" />
          </div>

          <div className="mx-auto max-w-lg space-y-5 text-sm leading-8 text-ink/65">
            <p>Ada satu orang lagi yang ingin aku apresiasi dalam perjalanan kecil ini.</p>

            <p>
              Terima kasih sudah bersedia membantu mengantarkan hadiah ini dan menemani Wili membukanya. Mungkin
              terlihat sederhana, tetapi bantuanmu punya arti tersendiri dalam kejutan ini.
            </p>

            <p>Aku menghargai kebaikanmu sebagai teman Wili. Semoga hal-hal baik juga selalu menyertaimu.</p>
          </div>

          <p className="mt-10 font-display text-xl italic text-dusty">Thank you, Teh Emo.</p>

          <p className="mt-3 text-xs tracking-widest text-ink/40">— SYAI</p>
        </div>
      </motion.div>
    </section>
  );
}

export default AppreciationNote;
