'use client';

import { motion } from 'framer-motion';

function Section({
  children,
  theme = 'base',
  color = '',
  lazyLoad = true,
  className = '',
  ...props
}) {
  const themes = {
    base: 'flex flex-col shadow-ind',
    '2col':
      'flex flex-col lg:items-center lg:grid lg:grid-cols-2 gap-3 lg:gap-5 shadow-ind',
  };

  const colorThemes = {
    indigo: 'text-indigo-50 bg-indigo-500 selection:bg-violet-400',
    lime: 'text-indigo-950 bg-gradient-to-br from-lime-200 to-white',
    plum: 'text-indigo-950 bg-gradient-to-r from-indigo-50 to-plum-200',
    starter: 'text-indigo-950 bg-gradient-to-r from-lime-100 to-indigo-50',
    standard: 'text-indigo-950 bg-gradient-to-r from-plum-300 to-indigo-50',
    premium: 'text-indigo-950 bg-gradient-to-r from-indigo-400 to-indigo-50',
  };

  return (
    <div>
      {lazyLoad ? (
        <motion.section
          layout={false}
          initial={{ opacity: 0, y: 20 }}
          {...(first
            ? { animate: { opacity: 1, y: 0 } }
            : {
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
              })}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`scroll-mt-[110px] w-full max-w-full p-section rounded-4xl will-change-[opacity,transform] ${themes[theme]} ${colorThemes[color]} ${className}`}
          {...props}
        >
          {children}
        </motion.section>
      ) : (
        <section
          className={`scroll-mt-[110px] w-full max-w-full p-section rounded-4xl ${themes[theme]} ${colorThemes[color]} ${className}`}
          {...props}
        >
          {children}
        </section>
      )}
    </div>
  );
}

export default Section;
