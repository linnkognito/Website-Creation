import Step1 from './_components/steps/Step1';
import Step2 from './_components/steps/Step2';
import Step3 from './_components/steps/Step3';

function Page() {
  return (
    <article className='flex flex-col gap-10'>
      <Step1 />
      <Step2 />
      <Step3 />
      {/* <Step4 />
      <Step5 />
      <Step6 />
      <Step7 /> */}
    </article>
  );
}

export default Page;
