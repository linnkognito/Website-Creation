function H1({ children, className = '' }) {
  return (
    <section className='p-section pt-12 sm:pt-16 lg:pt-24'>
      <h1
        className={`text-5xl sm:text-6xl md:text-7xl
        font-black text-indigo-50 tracking-tight
        [text-shadow:2px_2px_0_theme(colors.indigo.800)]
        mb-6 sm:mb-10
        ${className}
        `}
      >
        {children}
      </h1>
    </section>
  );
}

export default H1;
