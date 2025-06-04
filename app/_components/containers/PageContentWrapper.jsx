import H1 from '../text/H1';

function PageContentWrapper({
  children,
  tag: Tag = 'article',
  heading = null,
}) {
  return (
    <Tag
      aria-labelledby={heading?.id}
      className='w-full max-w-screen-lg flex flex-col pb-20'
    >
      {heading && <H1 id={heading.id}>{heading.heading}</H1>}

      <div className='w-full flex flex-col gap-12 md:gap-20'>{children}</div>
    </Tag>
  );
}

export default PageContentWrapper;
