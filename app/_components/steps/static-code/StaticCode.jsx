import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../Paragraph';
import CodeSnippet from './CodeSnippet';

function StaticCode() {
  return (
    <Section
      aria-labelledby='content-heading'
      className=' text-indigo-950 bg-indigo-500 shadow-ind'
    >
      {/* Code */}
      <div className='order-2 lg:order-1 flex-center-col gap-3 h-full'>
        <CodeSnippet />
      </div>

      {/* Description */}
      <div className='order-1 lg:order-2 lg:text-right'>
        <div className='flex flex-col lg:items-end'>
          <h2
            id='content-heading'
            className='flex gap-2 p-heading-rev text-violet-50'
          >
            Step 4: Coding
          </h2>
          <DividerHorizontal className='lg:w-8/10' />
        </div>

        <div className='flex flex-col gap-3 lg:items-end text-indigo-50'>
          <Paragraph>
            Time for you to take it easy and for me to start coding.
          </Paragraph>
          <Paragraph>
            I will start with the static parts of the website. It will look
            exactly like your approved design, and I will add things like
            responsiveness (so it scales nicely from mobile to bigger devices),
            hover effects etc.
          </Paragraph>
          <Paragraph>
            You don't have to be a part of this process, but if you'd like code
            reviews or more frequent updates - no problem!
          </Paragraph>

          {/* <InfoText icon={CursorArrowRaysIcon}>
            Click each option to learn more.
          </InfoText> */}

          <DividerHorizontal className='lg:w-8/10' />
        </div>
      </div>
    </Section>
  );
}

export default StaticCode;
