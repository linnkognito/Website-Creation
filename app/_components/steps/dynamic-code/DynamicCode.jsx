import data from './dynamic-code-data';

import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../text/Paragraph';
import AnchorLink from '../../text/AnchorLink';
import Accordion from '../../containers/Accordion';
import InfoText from '../../containers/InfoText';
import SectionTextContent from '../../containers/SectionTextContent';
import HeadingSection from '../../text/HeadingSection';
import Description from '../../text/Description';
import SectionSideContent from '../../containers/SectionSideContent';
import HeadingInfo from '../../text/HeadingInfo';

function DynamicCode() {
  return (
    <Section theme='2col' color='plum' aria-labelledby='dynamiccode-heading'>
      {/* Description */}
      <SectionTextContent>
        <HeadingSection>Step 5: Make content dynamic</HeadingSection>

        <Description>
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
        </Description>
      </SectionTextContent>

      {/* Accordions */}
      <SectionSideContent invert={true}>
        <HeadingInfo>No-Code Content Tools:</HeadingInfo>

        {data.map((accordion) => (
          <Accordion key={accordion.title} title={accordion.title}>
            <div className='sm:px-5 py-2'>
              <h3 className='pb-3 text-xl text-plum-800'>
                {accordion.subTitle}
              </h3>

              <Paragraph className='flex flex-col gap-1'>
                <DividerHorizontal />
                {accordion.description}
                <DividerHorizontal />
              </Paragraph>

              <ul className='p-div text-lg space-y-1'>
                {accordion.bulletPoints.map((li) => (
                  <li key={li.id} className='flex gap-3'>
                    <span className='text-plum-500'>✦</span> {li.text}
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>
        ))}
      </SectionSideContent>
    </Section>
  );
}

export default DynamicCode;
