import { CheckCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Accordion from '../containers/Accordion';
import Section from '../containers/Section';
import DividerHorizontal from '../DividerHorizontal';
import Paragraph from '../Paragraph';

function Step2() {
  return (
    <Section
      aria-labelledby='step2-heading'
      className=' text-indigo-950 bg-gradient-to-r from-indigo-50  to-plum-200 shadow-ind'
    >
      {/* Examples */}
      <div>
        <div>
          <Accordion title='You upload the inital content yourself'>
            <Paragraph>
              I will still code everything for you, but instead of uploading
              actual content content I will instead create placeholders.
            </Paragraph>
            <Paragraph>
              <LightBulbIcon className='h-8' />I will need to know: What type of
              content you want to include and how focal it should be.
            </Paragraph>
            <Paragraph>
              <CheckCircleIcon />
              Result: A document with layout guidelines. I will use this myself
              while developing your site, and you will have access to it if you
              want to!
            </Paragraph>
          </Accordion>

          <Accordion title='I upload the inital content for you'>
            Standard and premium tiers only.
          </Accordion>
        </div>
      </div>

      {/* Description */}
      <div>
        <div>
          <h2
            id='step2-heading'
            className='flex gap-2 p-heading text-violet-950'
          >
            Step 2: Gather content
          </h2>
          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>

        <div className='flex flex-col gap-1'>
          <Paragraph>
            Your website’s content is all the images, text, videos etc. that you
            want to include. For this step, you have a couple of different
            options for the initial content. Click to expand each option to
            learn more.
          </Paragraph>

          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>
      </div>
    </Section>
  );
}

export default Step2;
