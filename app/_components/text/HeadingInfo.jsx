function HeadingInfo({ children, tag: Tag = 'h3', theme = 'base' }) {
  const themes = {
    base: 'text-center',
    tier: 'border-b border-plum-500/10',
  };
  return <Tag className={`min-w-1/2 pb-2 ${themes[theme]}`}>{children}</Tag>;
}

export default HeadingInfo;
