function Cube({ children, className = '' }) {
  return (
    <div
      className={`aspect-auto lg:aspect-square min-w-[195px] p-5 border-10 border-white rounded-2xl shadow-subtle hover:shadow-indigo-700/50 ${className}`}
    >
      {children}
    </div>
  );
}

export default Cube;
