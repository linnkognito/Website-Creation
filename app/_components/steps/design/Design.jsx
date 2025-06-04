import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';

import Section from '../../containers/Section';
import Paragraph from '../../text/Paragraph';
import Cube from '../../containers/Cube';
import AnchorLink from '../../text/AnchorLink';
import InfoText from '../../containers/InfoText';
import HeadingSection from '../../text/HeadingSection';
import SectionTextContent from '../../containers/SectionTextContent';
import Description from '../../text/Description';
import SectionSideContent from '../../containers/SectionSideContent';

function Design() {
  return (
    <Section theme='2col' color='lime' aria-labelledby='design-heading'>
      <SectionTextContent>
        <HeadingSection id='design-heading'>Step 3: Design</HeadingSection>

        <Description>
          <Paragraph>
            Now it’s time to figure out the look and feel of your site.
          </Paragraph>
          <Paragraph>
            If you already have a{' '}
            <AnchorLink
              href='https://www.figma.com/'
              title='Figma.com'
              className='hover:underline'
            >
              Figma
            </AnchorLink>{' '}
            file or design direction, I can jump straight into coding.
          </Paragraph>
          <Paragraph>
            If not, I’ll design it for you — just send anything helpful:
            keywords, color palettes, inspo links, etc. You’ll get a mockup to
            review and tweak until it’s just right.
          </Paragraph>
          <Paragraph>Once approved, I’ll move on to Step 4.</Paragraph>

          <InfoText icon={CursorArrowRaysIcon}>
            Click a cube to explore helpful links and creative inspiration.
          </InfoText>
        </Description>
      </SectionTextContent>

      <SectionSideContent theme='cubes'>
        <a
          href='https://fonts.google.com/'
          alt='Link to Google Fonts'
          title='Google web fonts'
        >
          <Cube className='flex-center bg-gradient-to-r hover:contrast-120 will-change-[color] duration-400 ease-in-out from-indigo-500 to-plum-200'>
            <h3 className='text-4xl sm:text-5xl md:text-4xl font-black'>
              Fonts
            </h3>
          </Cube>
        </a>
        <a
          href='https://coolors.co/palettes/trending'
          alt='Link to Coolors trending color palettes'
          title='Color palette ideas'
        >
          <Cube className='flex-center bg-gradient-to-r hover:contrast-120 will-change-[color] duration-400 ease-in-out from-lime-200 to-plum-200'>
            <h3 className='text-4xl sm:text-5xl md:text-4xl font-black'>
              Colors
            </h3>
          </Cube>
        </a>

        <a
          href='https://dribbble.com/search/webdesign'
          alt='Link to search results for webdesign on Dribbble'
          title='Webdesign inspiration'
        >
          <Cube className='flex-center bg-gradient-to-r from-white to-plum-200 hover:contrast-120 will-change-[color] duration-400 ease-in-out '>
            <h3 className='text-4xl sm:text-5xl md:text-4xl font-black'>
              Design
            </h3>
          </Cube>
        </a>

        <a
          href='https://mockflow.com/'
          alt='Link to Mockflow - a wireframing application'
          title='Online wireframe creator'
        >
          <Cube className='flex-center bg-gradient-to-r from-plum-300  to-plum-200 hover:contrast-120 will-change-[color] duration-400 ease-in-out '>
            <h3 className='text-4xl sm:text-5xl md:text-4xl font-black'>
              Layout
            </h3>
          </Cube>
        </a>
      </SectionSideContent>
    </Section>
  );
}

export default Design;
