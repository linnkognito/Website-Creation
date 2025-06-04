import tiers from '../_data/tiers-data';

import PageContentWrapper from '../_components/containers/PageContentWrapper';
import Tier from '../_components/tiers/Tier';
import TierInfoCards from '../_components/tiers/TierInfoCards';

function Page() {
  return (
    <PageContentWrapper heading={{ id: 'tiers-heading', heading: 'Tiers' }}>
      <TierInfoCards tiers={tiers} />
      {tiers.map((tier, i) => (
        <Tier key={tier.id} tier={tier} first={i === 0} />
      ))}
    </PageContentWrapper>
  );
}

export default Page;
