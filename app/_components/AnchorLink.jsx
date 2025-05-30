function AnchorLink({ children, ...props }) {
  return (
    <a target='_blank' rel='noopener noreferrer' {...props}>
      {children}
    </a>
  );
}

export default AnchorLink;
