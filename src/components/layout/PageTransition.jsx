import { motion } from 'framer-motion';

function PageTransition({ children, pageKey }) {
  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0, y: 18, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
