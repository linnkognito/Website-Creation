'use client';

import { motion } from 'framer-motion';

function Button({ children, theme = 'border', className = '' }) {
  const styles = {
    border: 'text-indigo-900',
    fill: 'bg-white',
  };

  return (
    <motion.button
      whileHover='hover'
      initial='rest'
      animate='rest'
      className={`relative overflow-hidden p-button text-button border-full cursor-pointer group ${styles[theme]} ${className}`}
    >
      {/* Animated background layer */}
      <motion.span
        variants={{
          rest: { x: '-100%' },
          hover: { x: '0%' },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='absolute inset-0 bg-white z-0'
      />

      {/* Button text stays above */}
      <span className='relative z-10'>{children}</span>
    </motion.button>
  );
}

export default Button;
