import questions from './purpose-data';

import Section from '../../containers/Section';
import Paragraph from '../../text/Paragraph';
import InfoStrip from '../../containers/InfoStrip';
import HeadingSection from '../../text/HeadingSection';
import Description from '../../text/Description';
import SectionTextContent from '../../containers/SectionTextContent';
import SectionSideContent from '../../containers/SectionSideContent';

function Purpose() {
  return (
    <Section theme='2col' color='indigo' aria-labelledby='purpose-heading'>
      <SectionTextContent>
        <HeadingSection color='light'>
          Step 1: Purpose & Direction
        </HeadingSection>

        <Description color='light'>
          <Paragraph>
            To kick things off, let’s figure out the core goals, audience, tone,
            type of content and key features you want for your site.
            <br />
            This can be done over any chat client of your choice, email, voice
            or video call, or face to face - totally up to you.
          </Paragraph>
        </Description>
      </SectionTextContent>

      {/* Example questions */}
      <SectionSideContent>
        <ul className='flex-col-gap z-10'>
          {questions.map((question) => (
            <InfoStrip
              key={question.id}
              className={`text-indigo-950 ${question.styles}`}
            >
              {question.question}
            </InfoStrip>
          ))}
        </ul>
      </SectionSideContent>
    </Section>
  );
}

export default Purpose;
