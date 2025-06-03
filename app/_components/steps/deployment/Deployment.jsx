import Image from 'next/image';
import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../text/Paragraph';
import HeadingSection from '../../text/HeadingSection';
import SectionSideContent from '../../containers/SectionSideContent';
import SectionTextContent from '../../containers/SectionTextContent';
import Description from '../../text/Description';

function Deployment() {
  return (
    <Section theme='2col' color='indigo' aria-labelledby='content-heading'>
      {/* Image */}
      <SectionSideContent invert={true}>
        <Image
          src='/deployment.png'
          alt='Laptop illustration showing deployment'
          width={1152}
          height={768}
          className='w-full h-auto object-contain max-w-3xl border-5 border-white rounded-2xl shadow-subtle-dark contrast-135'
        />
      </SectionSideContent>

      {/* Description */}
      <SectionTextContent color='light' invert={true}>
        <HeadingSection invert={true} color='light'>
          Step 7: Deployment
        </HeadingSection>

        <Description color='light' invert={true}>
          <Paragraph>
            For the final step, we’ll launch your site into the real world.
          </Paragraph>
          <Paragraph>
            Once everything is finalized and tested, I’ll set up hosting and
            connect your custom domain (if you have one). I’ll also make sure
            everything is secure, fast, and ready for visitors.
          </Paragraph>
          <Paragraph>
            After deployment, your site will be live and accessible to anyone —
            and you’ll have everything you need to take it from there.
          </Paragraph>
        </Description>
      </SectionTextContent>
    </Section>
  );
}

export default Deployment;
