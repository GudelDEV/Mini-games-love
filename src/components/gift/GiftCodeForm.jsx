import { useState } from 'react';
import { motion } from 'framer-motion';
import { LockKeyhole, Heart } from 'lucide-react';

function GiftCodeForm({ onSubmit, error }) {
  const [code, setCode] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(code.trim().toUpperCase());
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-3xl border border-rose/30 bg-white/80 p-8 shadow-xl shadow-rose/10 backdrop-blur-sm"
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blush">
        <LockKeyhole
          size={27}
          className="text-dusty"
        />
      </div>

      <h2 className="font-display text-3xl text-ink">A Little Secret</h2>

      <p className="mt-3 text-sm leading-6 text-ink/60">
        Masukkan kode yang kamu temukan pada hadiah untuk membuka bab berikutnya.
      </p>

      <input
        type="text"
        value={code}
        onChange={(event) => setCode(event.target.value)}
        placeholder="Enter your secret code"
        autoComplete="off"
        className="mt-8 w-full rounded-xl border border-rose/40 bg-cream px-5 py-4 text-center text-sm tracking-[0.2em] text-ink outline-none transition focus:border-dusty focus:ring-2 focus:ring-rose/20"
      />

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-sm text-dusty"
        >
          {error}
        </motion.p>
      )}

      <button
        type="submit"
        disabled={!code.trim()}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-dusty px-5 py-4 text-sm font-medium text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        Unlock Gift
        <Heart size={16} />
      </button>
    </motion.form>
  );
}

export default GiftCodeForm;
