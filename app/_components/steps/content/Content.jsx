import data from './content-data';

import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import Section from '../../containers/Section';
import Paragraph from '../../text/Paragraph';
import AccordionTemplate from '../../containers/AccordionTemplate';
import InfoText from '../../containers/InfoText';
import HeadingSection from '../../text/HeadingSection';
import Description from '../../text/Description';
import SectionSideContent from '../../containers/SectionSideContent';
import SectionTextContent from '../../containers/SectionTextContent';

function Content() {
  return (
    <Section theme='2col' color='plum' aria-labelledby='content-heading'>
      {/* Accordions */}
      <SectionSideContent invert={true}>
        {data.map((accordion) => (
          <AccordionTemplate key={accordion.id} data={accordion} />
        ))}
      </SectionSideContent>

      {/* Description */}
      <SectionTextContent invert={true}>
        <HeadingSection id='content-heading' invert={true} color='dark'>
          Step 2: Gather content
        </HeadingSection>

        <Description invert={true}>
          <Paragraph>
            Your website’s content includes images, text, videos, and anything
            else you want featured.
          </Paragraph>
          <Paragraph>
            For this step, you can choose how you'd like me to handle the
            initial content.
          </Paragraph>

          <InfoText icon={CursorArrowRaysIcon}>
            Click each option to learn more.
          </InfoText>
        </Description>
      </SectionTextContent>
    </Section>
  );
}

export default Content;
