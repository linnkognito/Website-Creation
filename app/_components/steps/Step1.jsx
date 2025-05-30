import Section from '../containers/Section';
import DividerHorizontal from '../DividerHorizontal';
import Paragraph from '../Paragraph';
import QuestionAnswer from '../QuestionAnswer';

function Step1() {
  const questions = [
    {
      id: 'purpose',
      question: 'What is the website’s main purpose?',
      styles: 'bg-lime-100 border-full shadow-md shadow-indigo-800',
    },
    {
      id: 'target',
      question: 'Who is your target audience?',
      styles: 'bg-lime-200 shadow-sm shadow-indigo-800',
    },
    {
      id: 'content',
      question: 'What kind of content will the site have?',
      styles: 'bg-lime-300 shadow-sm shadow-indigo-800',
    },
  ];
  return (
    <Section
      aria-labelledby='step1-heading'
      className='text-indigo-50 bg-indigo-500 shadow-ind selection:bg-violet-400'
    >
      <div>
        <div>
          <h2
            id='step1-heading'
            className='flex gap-2 p-heading text-violet-50'
          >
            Step 1: Purpose & Direction
          </h2>
          <DividerHorizontal className='lg:w-8/10' />
        </div>

        <div className='flex flex-col gap-1'>
          <Paragraph className='text-indigo-50'>
            To kick things off, let’s figure out the core goals, audience, tone,
            type of content and key features you want for your site.
            <br />
            This can be done over any chat client of your choice, email, voice
            or video call, or face to face - totally up to you.
          </Paragraph>
          <DividerHorizontal className='lg:w-8/10' />
        </div>
      </div>

      <div className='flex-col-gap items-center justify-center h-full'>
        <ul className='flex-col-gap z-10'>
          {questions.map((q) => (
            <QuestionAnswer
              key={q.id}
              question={q.question}
              example={q.examples}
              className={`text-indigo-950 border-full ${q.styles}`}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Step1;
