function SectionSideContent({
  children,
  theme = 'base',
  invert = false,
  className = '',
}) {
  const themes = {
    base: 'flex-center-col gap-3',
    cubes: 'grid sm:grid-cols-[1fr_1fr] gap-1',
  };
  return (
    <div
      className={`${themes[theme]} ${
        invert ? 'order-2 lg:order-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionSideContent;
