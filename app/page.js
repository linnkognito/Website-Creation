import Purpose from './_components/steps/purpose/Purpose';
import Content from './_components/steps/content/Content';
import Design from './_components/steps/design/Design';
import StaticCode from './_components/steps/static-code/StaticCode';
import DynamicCode from './_components/steps/dynamic-code/DynamicCode';
import TestingOptimization from './_components/steps/testing-optimization/TestingOptimization';
import Deployment from './_components/steps/deployment/Deployment';
import PageContentWrapper from './_components/containers/PageContentWrapper';

function Page() {
  return (
    <PageContentWrapper
      heading={{ id: 'steps', heading: 'How I Build Your Website' }}
    >
      <Purpose />
      <Content />
      <Design />
      <StaticCode />
      <DynamicCode />
      <TestingOptimization />
      <Deployment />
    </PageContentWrapper>
  );
}

export default Page;
