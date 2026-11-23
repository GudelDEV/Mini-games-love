import { motion } from 'framer-motion';

function FloralDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {/* Top left flower */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-5 top-24 text-rose/50"
      >
        ✿
      </motion.div>

      {/* Top right flower */}
      <motion.div
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-8 top-36 text-dusty/40"
      >
        ❀
      </motion.div>

      {/* Bottom ribbon */}
      <div className="absolute bottom-8 left-8 rotate-[-15deg] text-3xl text-rose/40">୨୧</div>

      <div className="absolute bottom-24 right-8 rotate-[15deg] text-3xl text-rose/40">୨୧</div>
    </div>
  );
}

export default FloralDecoration;
