import data from './dynamic-code-data';

import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../text/Paragraph';
import AccordionTemplate from '../../containers/AccordionTemplate';
import AnchorLink from '../../text/AnchorLink';
import Accordion from '../../containers/Accordion';
import InfoText from '../../containers/InfoText';
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';

function DynamicCode() {
  return (
    <Section
      aria-labelledby='content-heading'
      className=' text-indigo-950 bg-gradient-to-r from-indigo-50 to-plum-200 shadow-ind'
    >
      {/* Description */}
      <div>
        <div>
          <h2
            id='content-heading'
            className='flex gap-2 p-heading-rev text-violet-950'
          >
            Step 5: Make content dynamic
          </h2>
          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>

        <div className='flex-col-gap'>
          <Paragraph>
            Now that your site is designed and coded, it’s time to bring it to
            life.
          </Paragraph>
          <Paragraph>
            At this step, I’ll make the content dynamic — meaning it can be
            updated without changing the code. Depending on your site’s needs,
            this might include setting up a CMS (like{' '}
            <AnchorLink
              href='https://www.sanity.io/'
              title='Sanity.io'
              className='hover:underline'
            >
              Sanity
            </AnchorLink>
            ,{' '}
            <AnchorLink
              href='https://www.contentful.com/'
              title='Contentful.com'
              className='hover:underline'
            >
              Contentful
            </AnchorLink>
            , or{' '}
            <AnchorLink
              href='https://wordpress.com/'
              title='Wordpress.com'
              className='hover:underline'
            >
              WordPress
            </AnchorLink>
            ), pulling data from APIs, or building custom content inputs for
            you.
          </Paragraph>
          <Paragraph>
            You’ll be able to edit or add things like text, images, blog posts,
            product listings, etc., without touching any code.
          </Paragraph>

          <InfoText icon={CursorArrowRaysIcon}>
            Click each option to learn more.
          </InfoText>

          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>
      </div>

      {/* Accordions */}
      <div className='order-2 lg:order-1 flex-center-col gap-3'>
        {data.map((accordion) => (
          <Accordion key={accordion.title} title={accordion.title}>
            <div className='sm:px-5 py-2'>
              <h3 className='pb-3 text-xl text-plum-800'>
                {accordion.subTitle}
              </h3>

              <Paragraph>
                <DividerHorizontal />
                {accordion.description}
                <DividerHorizontal />
              </Paragraph>

              <ul className='p-div text-lg space-y-1'>
                {accordion.bulletPoints.map((li) => (
                  <li key={li.id}>
                    <span className='text-plum-500'>✦</span> {li.text}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>
        ))}
      </div>
    </Section>
  );
}

export default DynamicCode;
