import data from './testing-optimization-data';

import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../text/Paragraph';
import InfoStrip from '../../containers/InfoStrip';
import HeadingInfo from '../../text/HeadingInfo';

function TestingOptimization() {
  return (
    <Section
      theme='2col'
      aria-labelledby='design-heading'
      className=' text-indigo-950 bg-gradient-to-br from-lime-200 to-white shadow-ind'
    >
      <div>
        <div>
          <h2
            id='design-heading'
            className='flex gap-2 p-heading text-indigo-950'
          >
            Step 6: Optimization & Testing
          </h2>
          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>

        <div className='flex-col-gap'>
          <Paragraph>
            Now that the site is built, it’s time to polish everything behind
            the scenes.
          </Paragraph>
          <Paragraph>
            I’ll go through the code and make performance improvements,
            double-check accessibility (a11y), fine-tune SEO (Search Engine
            Optimization) for better visibility, and run tests to make sure
            everything works smoothly across devices and browsers.
          </Paragraph>
          <Paragraph>
            You might not see these changes — but they make a big difference in
            how the site feels (and ranks).
          </Paragraph>
        </div>
        <DividerHorizontal color='dark' className='lg:w-8/10' />
      </div>

      <div className='flex-col-gap items-center justify-center h-full'>
        <HeadingInfo>What I’ll do:</HeadingInfo>
        <ul className='flex-col-gap z-10'>
          {data.map((li) => (
            <InfoStrip key={li.id} className={`text-indigo-950 ${li.styles}`}>
              {`✦ ${li.text}`}
            </InfoStrip>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default TestingOptimization;
