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
              className="absolute inset-x-5 bottom-10 z-10 rounded-md bg-[#FFFCF7] p-5 shadow-lg"
            >
              <Heart
                size={20}
                className="mx-auto mb-3 fill-rose/40 text-dusty"
              />

              <p className="font-display text-xl text-ink">Dear You,</p>

              <p className="mt-3 text-xs leading-6 text-ink/70">
                Ada banyak cerita yang pernah kita lalui. Terima kasih untuk setiap kenangan dan pelajaran yang pernah
                hadir.
              </p>

              <p className="t-3 text-xs leading-6 text-ink/70">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam cum rerum, illo dolores, rem
                asperiores dolore hic, sit maxime quo provident in ex illum iure eveniet vero aliquid? Consequuntur
                voluptatum, ut dolores iste quod laborum explicabo quo ipsum suscipit quas? Facere temporibus sint
                tenetur excepturi similique deserunt ex voluptate, soluta hic. Velit eius tempore nisi laudantium nam
                voluptatum suscipit magnam inventore laborum hic, dolores ipsum quod porro aut fuga consequuntur
                laboriosam reiciendis consectetur beatae officiis perferendis? Nisi tenetur aspernatur placeat delectus!
                Rerum officiis ab quas optio vero. Nam quibusdam illo corrupti culpa quidem dolorum laboriosam ad,
                repellat aperiam mollitia?
              </p>

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
