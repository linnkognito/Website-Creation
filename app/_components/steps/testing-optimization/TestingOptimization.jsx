import data from './testing-optimization-data';

import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../text/Paragraph';
import InfoStrip from '../../containers/InfoStrip';
import HeadingInfo from '../../text/HeadingInfo';
import SectionTextContent from '../../containers/SectionTextContent';
import HeadingSection from '../../text/HeadingSection';
import Description from '../../text/Description';
import SectionSideContent from '../../containers/SectionSideContent';

function TestingOptimization() {
  return (
    <Section theme='2col' color='lime' aria-labelledby='testing-heading'>
      <SectionTextContent>
        <HeadingSection
          id='testing-heading'
          className='flex gap-2 p-heading text-indigo-950'
        >
          Step 6: Optimization & Testing
        </HeadingSection>

        <Description>
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
        </Description>
      </SectionTextContent>

      <SectionSideContent>
        <HeadingInfo>What I’ll do:</HeadingInfo>
        <ul className='flex-col-gap z-10'>
          {data.map((li) => (
            <InfoStrip key={li.id} className={`text-indigo-950 ${li.styles}`}>
              {`✦ ${li.text}`}
            </InfoStrip>
          ))}
        </ul>
      </SectionSideContent>
    </Section>
  );
}

export default TestingOptimization;
