function Button({ children, theme = 'border', className = '' }) {
  const styles = {
    border: 'hover:bg-white',
    fill: 'bg-white',
  };
  return (
    <button
      className={`p-button text-button border-full will-change-[color] duration-200 ease-in-out cursor-pointer ${styles[theme]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
