'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

function Accordion({ children, icon: Icon, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`flex-col-gap w-full p-div bg-white rounded-2xl shadow-subtle ${
        !isOpen && 'hover:bg-lime-100 will-change-[color] duration-300 ease-in'
      }`}
    >
      <div
        className='flex gap-2 justify-between cursor-pointer'
        onClick={handleClick}
      >
        {Icon && <Icon />}
        <h4>{title}</h4>
        {isOpen ? (
          <BarsArrowUpIcon
            title='Collapse'
            className='h-7 lg:h-8 text-plum-500 hover:text-lime-500 will-change-color duration-300 ease-in-out'
          />
        ) : (
          <BarsArrowDownIcon
            title='Expand'
            className='h-7 lg:h-8 text-plum-500 hover:text-lime-500 will-change-color duration-300 ease-in-out'
          />
        )}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='accordion-content'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='overflow-hidden flex-col-gap tracking-tight pr-8'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
