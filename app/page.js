import Purpose from './_components/steps/purpose/Purpose';
import Content from './_components/steps/content/Content';
import Design from './_components/steps/design/Design';
import StaticCode from './_components/steps/static-code/StaticCode';

function Page() {
  return (
    <article className='flex flex-col gap-12 md:gap-20'>
      <Purpose />
      <Content />
      <Design />
      <StaticCode />
    </article>
  );
}

export default Page;
