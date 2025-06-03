import Section from '../../containers/Section';
import SectionSideContent from '../../containers/SectionSideContent';
import SectionTextContent from '../../containers/SectionTextContent';
import Description from '../../text/Description';
import HeadingSection from '../../text/HeadingSection';
import Paragraph from '../../text/Paragraph';
import CodeSnippet from './CodeSnippet';

function StaticCode() {
  return (
    <Section theme='2col' color='indigo' aria-labelledby='staticcode-heading'>
      {/* Code */}
      <SectionSideContent invert={true}>
        <CodeSnippet />
      </SectionSideContent>

      {/* Description */}
      <SectionTextContent invert={true}>
        <HeadingSection invert={true} color='light'>
          Step 4: Coding
        </HeadingSection>

        <Description invert={true} color='light'>
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
        </Description>
      </SectionTextContent>
    </Section>
  );
}

export default StaticCode;
