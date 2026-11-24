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
            <p>Ada satu orang lagi yang ingin aku beri sedikit ruang dalam cerita kecil ini.</p>

            <p>
              Terima kasih sudah bersedia membantu mengantarkan hadiah ini dan menemani Wili membukanya. Mungkin Untuk
              Teh Emo, terima kasih sudah bersedia menjadi bagian dari kejutan ini. Terima kasih karena telah membantu
              mengantarkan hadiah dan menemani Wili membukanya. Mungkin bagimu itu hanya bantuan sederhana, tetapi bagi
              syai, kehadiran teh emo punya arti tersendiri dalam cerita ini.
            </p>

            <p>
              Dan untuk kelulusan teh emo , selamat atas satu perjalanan yang berhasil teh emo tuntaskan. Tidak semua
              langkah selalu mudah, tidak semua lelah terlihat oleh orang lain. Namun, hari ini menjadi bukti bahwa
              segala usaha dan waktu yang telah teh emo berikan akhirnya membawamu sampai di titik ini.
            </p>

            <p>
              Semoga setelah satu pintu tertutup, akan ada banyak pintu lain yang terbuka untuk teh emo. Semoga langkah
              teh emo selalu dipertemukan dengan kesempatan baik, orang-orang tulus, dan kebahagiaan yang tidak perlu
              teh emo perjuangkan sendirian.
            </p>

            <p>
              Hadiah kecil ini mungkin tidak seberapa dibandingkan perjalanan panjang yang telah teh emo lalui. Namun,
              semoga ia bisa menjadi pengingat bahwa pencapaianmu layak dirayakan dan kebaikanmu layak dihargai.
            </p>

            <p>
              Sekali lagi, selamat wisuda, Teh Emo. Semoga dunia memperlakukanmu dengan baik, sebagaimana teh emo telah
              memperlakukan orang-orang di sekitarmu dengan baik.
            </p>

            <p className="mt-10 font-display text-xl italic text-dusty">HIDUP AKAN TERUS BERLANJUT APAPUN KEADAANYA</p>
          </div>

          <p className="mt-10 font-display text-xl italic text-dusty">Thank you, Teh Emo.</p>

          <p className="mt-3 text-xs tracking-widest text-ink/40">— SYAI</p>
        </div>
      </motion.div>
    </section>
  );
}

export default AppreciationNote;
