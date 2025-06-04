import SectionSubtle from '../containers/SectionSubtle';
import HeadingInfo from '../text/HeadingInfo';
import TierInfoCard from './TierInfoCard';

function TierInfoCards({ tiers }) {
  return (
    <SectionSubtle>
      <div className='p-div'>
        <HeadingInfo theme='none'>Choose your level</HeadingInfo>
      </div>

      <div className='flex max-lg:flex-col justify-center items-stretch gap-3'>
        {tiers.map((tier) => (
          <TierInfoCard key={tier.id} tier={tier} />
        ))}
      </div>
    </SectionSubtle>
  );
}

export default TierInfoCards;
