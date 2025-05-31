import Purpose from './_components/steps/purpose/Purpose';
import Content from './_components/steps/content/Content';
import Design from './_components/steps/design/Design';

function Page() {
  return (
    <article className='flex flex-col gap-10'>
      <Purpose />
      <Content />
      <Design />
      {/* <Step4 />
      <Step5 />
      <Step6 />
      <Step7 /> */}
    </article>
  );
}

export default Page;
