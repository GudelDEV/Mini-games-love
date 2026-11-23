import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { gallery } from '../../data/gallery';
import { useState } from 'react';
import Lightbox from './Lightbox';

function MemoryGallery() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-dusty">A Collection of Memories</p>

        <h2 className="mt-3 font-display text-4xl text-ink">Our Little Memories</h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-ink/60">
          Beberapa potongan waktu yang mungkin sederhana, tetapi punya cerita tersendiri.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
            style={{ rotate: item.rotate }}
            className="bg-white p-3 pb-5 shadow-xl shadow-rose/10"
          >
            <motion.button
              type="button"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
              style={{ rotate: item.rotate }}
              onClick={() => setSelectedMemory(item)}
              className="bg-white p-3 pb-5 text-left shadow-xl shadow-rose/10"
            >
              <div className="aspect-[4/5] overflow-hidden bg-blush">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-4 font-display text-base text-ink">{item.caption}</p>

              <span className="mt-2 block text-[10px] text-ink/40">{item.date}</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
      <Lightbox
        image={selectedMemory?.image}
        caption={selectedMemory?.caption}
        onClose={() => setSelectedMemory(null)}
      />
    </section>
  );
}

export default MemoryGallery;
