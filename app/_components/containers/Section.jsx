'use client';

import { motion } from 'framer-motion';

function Section({
  children,
  theme = 'base',
  color = '',
  className = '',
  ...props
}) {
  const themes = {
    base: 'flex flex-col',
    '2col':
      'flex flex-col lg:items-center lg:grid lg:grid-cols-2 gap-3 lg:gap-5 shadow-ind',
  };

  const colorThemes = {
    indigo: 'text-indigo-50 bg-indigo-500 selection:bg-violet-400',
    lime: 'text-indigo-950 bg-gradient-to-br from-lime-200 to-white shadow-ind',
    plum: 'text-indigo-950 bg-gradient-to-r from-indigo-50 to-plum-200',
  };

  return (
    <div>
      <motion.section
        layout={false}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className={`w-full max-w-full p-section rounded-4xl will-change-[opacity,transform] ${themes[theme]} ${colorThemes[color]} ${className}`}
        {...props}
      >
        {children}
      </motion.section>
    </div>
  );
}

export default Section;
