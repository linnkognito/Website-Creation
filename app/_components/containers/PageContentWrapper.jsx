import H1 from '../text/H1';

function PageContentWrapper({ children, heading = null }) {
  if (!heading) return null;

  return (
    <article
      aria-labelledby={heading.id}
      className='w-full max-w-screen-lg flex flex-col pb-20'
    >
      {heading && <H1 id={heading.id}>{heading.heading}</H1>}

      <div className='w-full flex flex-col gap-12 md:gap-20'>{children}</div>
    </article>
  );
}

export default PageContentWrapper;
