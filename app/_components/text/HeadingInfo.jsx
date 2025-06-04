function HeadingInfo({
  children,
  tag: Tag = 'h3',
  theme = 'base',
  className = '',
}) {
  const themes = {
    base: 'text-center',
    tier: 'border-b border-plum-500/10',
    none: '',
  };
  return (
    <Tag
      className={`text-3xl font-bold min-w-1/2 pl-3 pb-4 ${themes[theme]} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default HeadingInfo;
