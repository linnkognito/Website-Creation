import HeadingInfo from '../text/HeadingInfo';

function SectionTierInfo({ children, heading = '' }) {
  return (
    <section>
      <HeadingInfo theme='tier'>{heading}</HeadingInfo>

      <div className='flex flex-col gap-1 p-section bg-white rounded-b-2xl text-lg shadow-subtle'>
        {children}
      </div>
    </section>
  );
}

export default SectionTierInfo;
