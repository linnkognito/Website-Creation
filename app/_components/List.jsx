function List({ children, theme = 'base', className = '' }) {
  const themes = {
    base: 'flex-col-gap',
    simple: 'flex flex-col',
  };
  return <ul className={`${themes[theme]} ${className}`}>{children}</ul>;
}

export default List;
