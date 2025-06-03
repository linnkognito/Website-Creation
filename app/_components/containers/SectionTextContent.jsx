function SectionTextContent({ children, invert = false, className = '' }) {
  return (
    <div
      className={`${
        invert ? 'order-1 lg:order-2 lg:text-right' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionTextContent;
