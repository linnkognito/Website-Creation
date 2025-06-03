import Purpose from './_components/steps/purpose/Purpose';
import Content from './_components/steps/content/Content';
import Design from './_components/steps/design/Design';
import StaticCode from './_components/steps/static-code/StaticCode';
import DynamicCode from './_components/steps/dynamic-code/DynamicCode';
import TestingOptimization from './_components/steps/testing-optimization/TestingOptimization';
import Deployment from './_components/steps/deployment/Deployment';
import H1 from './_components/text/H1';

function Page() {
  return (
    <article className='w-full max-w-screen-lg flex flex-col pb-20'>
      <H1>Website building process</H1>

      <div className='w-full flex flex-col gap-12 md:gap-20'>
        <Purpose />
        <Content />
        <Design />
        <StaticCode />
        <DynamicCode />
        <TestingOptimization />
        <Deployment />
      </div>
    </article>
  );
}

export default Page;
