import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../text/Paragraph';
import Cube from '../../containers/Cube';
import AnchorLink from '../../text/AnchorLink';
import InfoText from '../../containers/InfoText';
import { StarIcon } from '@heroicons/react/24/outline';

function Design() {
  return (
    <Section
      aria-labelledby='design-heading'
      className=' text-indigo-950 bg-gradient-to-br from-lime-200 to-white shadow-ind'
    >
      <div>
        <div>
          <h2
            id='design-heading'
            className='flex gap-2 p-heading text-indigo-950'
          >
            Step 3: Design
          </h2>
          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>

        <div className='flex-col-gap'>
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

          <InfoText icon={StarIcon}>
            Once approved, I’ll move on to Step 4.
          </InfoText>
        </div>
        <DividerHorizontal color='dark' className='lg:w-8/10' />
      </div>

      <div className='grid sm:grid-cols-[1fr_1fr] gap-1'>
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
      </div>
    </Section>
  );
}

export default Design;
