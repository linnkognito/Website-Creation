function Section({ children, className = '' }) {
  return (
    <section
      className={`flex flex-col lg:items-center lg:grid lg:grid-cols-2 gap-3 lg:gap-5 w-full w-section p-section rounded-4xl ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
