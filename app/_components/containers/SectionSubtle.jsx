function SectionSubtle({ children, theme = 'base', className = '', ...props }) {
  const themes = {
    base: 'mb-10 p-div',
    section: 'p-section shadow-subtle',
  };

  return (
    <section
      className={`bg-gradient-to-tr from-violet-50 to-violet-50/10 rounded-2xl ${themes[theme]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default SectionSubtle;
