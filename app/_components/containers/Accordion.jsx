'use client';

import { useState } from 'react';

function Accordion({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div onClick={handleClick}>
      {title || 'Click to expand'}
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default Accordion;
