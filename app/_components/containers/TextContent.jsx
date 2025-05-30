function TextContent({ children, className = '' }) {
  return <div className={`rounded-xl ${className}`}>{children}</div>;
}

export default TextContent;
