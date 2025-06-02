function Paragraph({ children, className = '' }) {
  return (
    <p className={`w-full md:max-w-9/10 p-par text-justify ${className}`}>
      {children}
    </p>
  );
}

export default Paragraph;
