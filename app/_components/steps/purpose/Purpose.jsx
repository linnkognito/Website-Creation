import questions from './purpose-data';

import Section from '../../containers/Section';
import Paragraph from '../../text/Paragraph';
import InfoStrip from '../../containers/InfoStrip';
import TextContent from '../../containers/TextContent';

function Purpose() {
  return (
    <Section
      aria-labelledby='purpose-heading'
      className='text-indigo-50 bg-indigo-500 shadow-ind selection:bg-violet-400'
    >
      <TextContent
        title={{
          heading: 'Step 1: Purpose & Direction',
          color: 'text-violet-50',
        }}
      >
        <Paragraph className='text-indigo-50'>
          To kick things off, let’s figure out the core goals, audience, tone,
          type of content and key features you want for your site.
          <br />
          This can be done over any chat client of your choice, email, voice or
          video call, or face to face - totally up to you.
        </Paragraph>
      </TextContent>

      {/* Example questions */}
      <div className='flex-col-gap items-center justify-center h-full'>
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
      </div>
    </Section>
  );
}

export default Purpose;
