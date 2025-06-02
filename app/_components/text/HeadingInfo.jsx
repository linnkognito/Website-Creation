function HeadingInfo({ children, tag: Tag = 'h3' }) {
  return <Tag className='min-w-1/2 pb-2 text-center'>{children}</Tag>;
}

export default HeadingInfo;
