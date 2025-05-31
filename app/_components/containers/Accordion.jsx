'use client';

import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

function Accordion({ children, icon: Icon, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div className='flex-col-gap w-full p-div bg-white rounded-2xl shadow-subtle'>
      <div
        className='flex gap-2 justify-between cursor-pointer'
        onClick={handleClick}
      >
        {Icon && <Icon />}
        <h4>{title}</h4>
        {isOpen ? (
          <BarsArrowUpIcon className='h-7 lg:h-8' />
        ) : (
          <BarsArrowDownIcon className='h-7 lg:h-8' />
        )}
      </div>

      {isOpen && <div className='flex-col-gap pr-8'>{children}</div>}
    </div>
  );
}

export default Accordion;
