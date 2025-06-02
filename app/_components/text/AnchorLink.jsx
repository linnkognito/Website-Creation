function AnchorLink({ children, className = '', ...props }) {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className={`font-black ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default AnchorLink;
