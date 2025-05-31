import data from './content-data';

import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../Paragraph';
import AccordionTemplate from './AccordionTemplate';
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';

function Content() {
  return (
    <Section
      aria-labelledby='content-heading'
      className=' text-indigo-950 bg-gradient-to-r from-indigo-50  to-plum-200 shadow-ind'
    >
      {/* Accordions */}
      <div className='order-2 lg:order-1 flex-center-col gap-3'>
        {data.map((accordion) => (
          <AccordionTemplate data={accordion} />
        ))}
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

        <div className='flex flex-col gap-3 lg:items-end'>
          <Paragraph>
            Your website’s content includes images, text, videos, and anything
            else you want featured.
          </Paragraph>
          <Paragraph>
            For this step, you can choose how you'd like me to handle the
            initial content.
          </Paragraph>

          <Paragraph className='flex gap-1 font-black'>
            <CursorArrowRaysIcon className='h-6' />
            Click each option to learn more.
          </Paragraph>

          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>
      </div>
    </Section>
  );
}

export default Content;
