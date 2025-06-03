import DividerHorizontal from '../DividerHorizontal';

function HeadingSection({
  children,
  tag: Tag = 'h2',
  color = 'dark',
  invert = false,
  pages = false,
  className = '',
  ...props
}) {
  const colors = {
    dark: 'text-indigo-950',
    light: 'text-violet-50',
  };

  return (
    <div
      className={`${pages ? 'flex flex-col gap-4' : ''} ${
        invert ? 'flex flex-col lg:items-end' : ''
      }`}
    >
      <div className={`${pages ? 'space-y-2' : ''}`}>
        <Tag
          className={`text-5xl
          ${colors[color]} 
          ${invert ? 'p-heading-rev' : 'p-heading'} 
          ${className}
          `}
          {...props}
        >
          {children}
        </Tag>

        {pages && (
          <p className='ml-2 text-lg font-medium tracking-wide text-slate-800'>
            {pages}
          </p>
        )}
      </div>

      <DividerHorizontal
        color={color}
        className={`${pages ? '' : 'lg:w-8/10'} mb-7`}
      />
    </div>
  );
}

export default HeadingSection;
