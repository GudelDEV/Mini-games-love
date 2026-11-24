import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

function PersonalLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-dusty">Something From My Heart</p>

      <h2 className="mt-4 font-display text-4xl text-ink">A Letter For You</h2>

      <p className="mt-4 text-sm text-ink/60">A little message, written with sincerity.</p>

      <div className="relative mx-auto mt-20 h-52 w-full max-w-sm">
        {/* Envelope body */}
        <div className="absolute inset-0 overflow-hidden rounded-lg border border-rose/40 bg-[#F3D9DF] shadow-xl shadow-rose/15">
          {/* Envelope inner */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[#EBC5CF] [clip-path:polygon(0_0,50%_70%,100%_0,100%_100%,0_100%)]" />
        </div>

        {/* Letter */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: -115, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute inset-x-5 bottom-10 z-10 max-h-[70vh] letter-scroll rounded-md bg-[#FFFCF7] p-5 shadow-lg"
            >
              <Heart
                size={20}
                className="mx-auto mb-3 fill-rose/40 text-dusty"
              />

              <p className="font-display text-xl text-ink">Dear You,</p>

              <p className="mt-3 text-xs leading-6 text-ink/70">
                Ada banyak cerita yang pernah kita lalui. Terima kasih untuk setiap kenangan, tawa, dan pelajaran yang
                pernah hadir. Mungkin sekarang semuanya hanya menjadi bagian dari masa lalu, tetapi setidaknya kita
                pernah memiliki cerita yang begitu berarti.
              </p>

              <p className="mt-3 text-xs leading-6 text-ink/70">
                Gimana perasaannya setelah menyelesaikan perjalanan ini? WKWKWK. Capek yah? Udah mah harus mengingat
                tempat, menyusun kode, memilih kartu, masih harus mikir juga jawabannya apa. Semoga kalian menikmati
                setiap bagian dari game kecil ini.
              </p>

              <p className="mt-3 text-xs leading-6 text-ink/70">
                Kita memang jarang nongkrong di kafe. Kebanyakan justru di warung, di rumah, atau sekadar menyusuri
                jalan tanpa tujuan yang terlalu jelas. Tapi lucunya, justru tempat-tempat sederhana itulah yang sekarang
                bisa membuat aa berpikir, "Wah, dulu di jalan ini pernah begini, pernah begitu." Sebenarnya masih banyak
                foto dan tempat kenangan kita berdua yang belum aa masukkan ke dalam puzzle. Bukan karena lupa, tetapi
                kalau semuanya dimasukkan, bisa-bisa game ini selesai besok pagi. Kasihan kalian berdua WKWKWK.
              </p>

              <p className="mt-3 text-xs leading-6 text-ink/70">
                Dan untuk Wili, sekarang kamu punya seorang teman yang begitu berharga. Seseorang yang ikut menemani
                perjalanan kecil ini, membuka kado ini bersama kamu, dan mungkin ikut dibuat pusing oleh semua kode yang
                aa buat. Dia adalah Teh Emo. Sebagai bentuk apresiasi aa untuk Teh Emo, namanya sengaja aa jadikan kode
                terakhir. Mungkin kalian sempat kesel dengan kalimat "kode terakhir", apalagi setelah semua kode itu
                digabungkan ternyata menjadi...
                <span className="font-semibold text-ink"> "EMOSI YAH WKWKWK."</span>
              </p>

              <p className="mt-3 text-xs leading-6 text-ink/70">
                Semoga kamu dan Teh Emo menikmati game ini, yah. Walaupun mungkin sempat kesel, bingung, bahkan
                berpikir, "Mantan lu gini amat, yah?" WKWKWKWK.
              </p>

              <p className="mt-3 text-xs leading-6 text-ink/70">
                Nah, sekarang aa kasih tahu jawabannya. Hadiah sebenarnya ada di dalam bucket yang aa berikan. Jadi,
                jangan lupa untuk membukanya, karena masih ada sesuatu di sana yang belum kalian temukan.
              </p>

              <p className="mt-3 text-xs leading-6 text-ink/70">
                Terima kasih sudah menyelesaikan game ini sampai akhir. Dan untuk foto-foto yang tersisa, semuanya
                adalah potongan tempat dan kenangan yang pernah kita lalui bersama. Mungkin tidak semuanya muncul di
                dalam permainan ini, tetapi setiap tempat punya ceritanya sendiri.
              </p>

              <p className="mt-5 text-xs leading-6 text-ink/70">Sekali lagi, terima kasih sudah bermain.</p>

              <p className="mt-4 font-display italic text-dusty">- SYAI</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Envelope flap */}
        <motion.div
          animate={{
            rotateX: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.8 }}
          style={{
            transformOrigin: 'top',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
          className="absolute inset-x-0 top-0 z-20 h-28 bg-[#E8BFC9] [clip-path:polygon(0_0,100%_0,50%_100%)]"
        />

        {/* Seal */}
        {!isOpen && (
          <motion.button
            type="button"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="absolute left-1/2 top-1/2 z-30 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dusty text-white shadow-lg"
            aria-label="Open letter"
          >
            <Heart
              size={20}
              fill="currentColor"
            />
          </motion.button>
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="mt-16 rounded-full border border-rose/50 px-7 py-3 text-xs text-dusty transition hover:bg-blush"
      >
        {isOpen ? 'Close Letter' : 'Open Letter'}
      </button>
    </section>
  );
}

export default PersonalLetter;
