import tiers from '../_data/tiers-data';

import PageContentWrapper from '../_components/containers/PageContentWrapper';
import Tier from '../_components/tiers/Tier';

function Page() {
  return (
    <PageContentWrapper heading={{ id: 'tiers-heading', heading: 'Tiers' }}>
      {tiers.map((tier) => (
        <Tier key={tier.id} tier={tier} />
      ))}
    </PageContentWrapper>
  );
}

export default Page;
