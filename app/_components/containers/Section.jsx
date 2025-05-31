'use client';

import { motion } from 'framer-motion';

function Section({ children, className = '' }) {
  return (
    <div>
      <motion.section
        layout={false}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className={`flex flex-col lg:items-center lg:grid lg:grid-cols-2 gap-3 lg:gap-5 w-full w-section p-section rounded-4xl will-change-[opacity,transform] ${className}`}
      >
        {children}
      </motion.section>
    </div>
  );
}

export default Section;
