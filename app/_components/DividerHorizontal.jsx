function DividerHorizontal({ color = 'light', className = '' }) {
  const colors = {
    light: 'border-indigo-200',
    mid: 'border-indigo-600',
    dark: 'border-indigo-950',
  };
  return <div className={`mt-3 mb-3 border-b ${colors[color]} ${className}`} />;
}

export default DividerHorizontal;
