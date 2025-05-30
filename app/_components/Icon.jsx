// h2: 3rem

function Icon({ children, theme }) {
  const themes = {
    p: 'h-8',
    h2: 'h-[2.75rem]',
  };

  return <span className={`${themes[theme]}`}>{children}</span>;
}

export default Icon;
