import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../Paragraph';
import Cube from '../../containers/Cube';
import AnchorLink from '../../AnchorLink';

function Design() {
  return (
    <Section
      aria-labelledby='design-heading'
      className=' text-indigo-950 bg-lime-200 shadow-ind'
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

        <div className='flex flex-col gap-1'>
          <Paragraph>
            Now it’s time to figure out what everything should look like.
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
            file, wireframe, or design direction, I can start translating it
            into code right away.
          </Paragraph>
          <Paragraph>
            If not, no worries — I can design it for you. Anything that helps
            guide the vibe is welcome: keywords, color palettes, moodboards, or
            even links to sites you love.
          </Paragraph>

          <DividerHorizontal color='dark' className='lg:w-8/10' />
        </div>
      </div>

      <div className='grid grid-cols-[1fr_1fr] gap-1'>
        <a
          href='https://fonts.google.com/'
          alt='Link to Google Fonts'
          title='Google web fonts'
        >
          <Cube className='flex-center bg-gradient-to-r hover:contrast-120 will-change-[color] duration-400 ease-in-out from-indigo-500 to-plum-200 md:aspect-auto lg:aspect-square'>
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
          <Cube className='flex-center bg-gradient-to-r hover:contrast-120 will-change-[color] duration-400 ease-in-out from-lime-200 to-plum-200 md:aspect-auto lg:aspect-square'>
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
          <Cube className='flex-center bg-gradient-to-r from-white to-plum-200 md:aspect-auto lg:aspect-square hover:contrast-120 will-change-[color] duration-400 ease-in-out '>
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
          <Cube className='flex-center bg-gradient-to-r from-plum-300  to-plum-200 md:aspect-auto lg:aspect-square hover:contrast-120 will-change-[color] duration-400 ease-in-out '>
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
