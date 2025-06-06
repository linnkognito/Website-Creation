import PageContentWrapper from '@/app/_components/containers/PageContentWrapper';
import addons from '../../_data/addons';

import Table from '@/app/_components/Table';
import SectionSubtle from '@/app/_components/containers/SectionSubtle';
import HeadingInfo from '@/app/_components/text/HeadingInfo';

function Page() {
  return (
    <PageContentWrapper>
      {/* Addons */}
      <PageContentWrapper
        tag='section'
        heading={{ id: 'addons-heading', heading: 'Add Ons' }}
      >
        {addons.map((addon) => (
          <SectionSubtle
            key={addon.id}
            aria-labelledby={`${addon.id}-heading`}
            theme='section'
          >
            <HeadingInfo
              id={`${addon.id}-heading`}
              className='flex items-center gap-1.5 text-left mb-5'
            >
              <span className='[text-shadow:1.5px_1.5px_0_theme(colors.indigo.950)]'>
                {addon.emoji}
              </span>
              {addon.heading}
            </HeadingInfo>

            <Table table={addon.table} />
          </SectionSubtle>
        ))}
      </PageContentWrapper>
    </PageContentWrapper>
  );
}

export default Page;
