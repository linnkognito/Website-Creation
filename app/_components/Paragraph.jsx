function Paragraph({ children, className = '' }) {
  return (
    <p
      className={`w-full md:max-w-9/10 p-par text-lg text-justify ${className}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
