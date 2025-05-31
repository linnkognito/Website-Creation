function Cube({ children, className = '' }) {
  return (
    <div
      className={`aspect-square min-w-[195px] p-5 rounded-2xl shadow-subtle hover:shadow-indigo-700/50 ${className}`}
    >
      {children}
    </div>
  );
}

export default Cube;
