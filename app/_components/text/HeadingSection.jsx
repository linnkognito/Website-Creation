import DividerHorizontal from '../DividerHorizontal';

function HeadingSection({
  children,
  tag: Tag = 'h2',
  color = 'dark',
  invert = false,
  className = '',
  ...props
}) {
  const colors = {
    dark: 'text-indigo-950',
    light: 'text-violet-50',
  };

  return (
    <div className={`${invert ? 'flex flex-col lg:items-end' : ''}`}>
      <Tag
        className={`flex gap-2 
        ${colors[color]} 
        ${invert ? 'p-heading-rev' : 'p-heading'} 
        ${className}
        `}
        {...props}
      >
        {children}
      </Tag>
      <DividerHorizontal color={color} className='lg:w-8/10 pt-3 mb-5' />
    </div>
  );
}

export default HeadingSection;
