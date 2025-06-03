import Image from 'next/image';
import Section from '../../containers/Section';
import DividerHorizontal from '../../DividerHorizontal';
import Paragraph from '../../text/Paragraph';
import HeadingSection from '../../text/HeadingSection';

function Deployment() {
  return (
    <Section
      theme='2col'
      aria-labelledby='content-heading'
      className=' text-indigo-950 bg-indigo-500 shadow-ind selection:bg-violet-50 selection:text-indigo-500'
    >
      {/* Image */}
      <div className='order-2 lg:order-1 flex-center-col gap-3 h-full'>
        <Image
          src='/deployment.png'
          alt='Laptop illustration showing deployment'
          width={1152}
          height={768}
          className='w-full h-auto object-contain max-w-3xl border-5 border-white rounded-2xl shadow-subtle-dark contrast-135'
        />
      </div>

      {/* Description */}
      <div className='order-1 lg:order-2 lg:text-right'>
        <HeadingSection invert={true} color='light'>
          Step 7: Deployment
        </HeadingSection>

        <div className='flex flex-col gap-3 lg:items-end text-indigo-50'>
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

          <DividerHorizontal className='lg:w-8/10' />
        </div>
      </div>
    </Section>
  );
}

export default Deployment;
