import { motion } from 'framer-motion';

const petals = [
  { left: '8%', delay: 0, duration: 12, size: 13 },
  { left: '20%', delay: 3, duration: 15, size: 10 },
  { left: '35%', delay: 1, duration: 13, size: 16 },
  { left: '52%', delay: 5, duration: 16, size: 12 },
  { left: '68%', delay: 2, duration: 14, size: 15 },
  { left: '82%', delay: 4, duration: 17, size: 11 },
  { left: '94%', delay: 6, duration: 13, size: 14 },
];

function FloatingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          initial={{
            y: '-10vh',
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: '110vh',
            x: [0, 35, -25, 20, 0],
            rotate: [0, 120, 240, 360],
            opacity: [0, 0.65, 0.65, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: petal.left,
            fontSize: petal.size,
            position: 'absolute',
            top: 0,
          }}
          className="text-rose"
        >
          ✿
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingPetals;
