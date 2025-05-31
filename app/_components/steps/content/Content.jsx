import { CheckCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Accordion from '../../containers/Accordion';
import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../Paragraph';
import Tooltip from '../../containers/Tooltip';

function Content() {
  return (
    <Section
      aria-labelledby='content-heading'
      className=' text-indigo-950 bg-gradient-to-r from-indigo-50  to-plum-200 shadow-ind'
    >
      {/* Accordions */}
      <div className='order-2 lg:order-1 flex-center'>
        <Accordion title='You upload the inital content yourself'>
          <DividerHorizontal color='dark' />
          <Paragraph>
            I will still write all the code for you, but instead of uploading
            actual content I’ll create placeholders.
          </Paragraph>
          <DividerHorizontal color='dark' />

          <div className='flex-col-gap'>
            <Tooltip
              title='I will need to know'
              icon={LightBulbIcon}
              color='indigo'
            >
              What type of content you want to include and how focal it should
              be.
            </Tooltip>
            <Tooltip title='Result' icon={CheckCircleIcon} color='lime'>
              A document with layout guidelines. I will use this myself while
              developing your site, and you will have access to it if you want
              to!
            </Tooltip>
          </div>
        </Accordion>
      </div>

      {/* Description */}
      <div className='order-1 lg:order-2 lg:text-right'>
        <div className='flex flex-col lg:items-end'>
          <h2
            id='content-heading'
            className='flex gap-2 p-heading-rev text-violet-950'
          >
            Step 2: Gather content
          </h2>
          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>

        <div className='flex flex-col gap-1 lg:items-end'>
          <Paragraph>
            Your website’s content is all the images, text, videos etc. that you
            want to include. For this step, you have a couple of different
            options for the initial content.
          </Paragraph>
          <Paragraph>Click to expand each option to learn more.</Paragraph>

          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>
      </div>
    </Section>
  );
}

export default Content;
