import TierInfoCard from './TierInfoCard';

function TierInfoCards({ tiers }) {
  return (
    <section className='flex max-md:flex-col justify-center items-stretch gap-3 mb-10 bg-gradient-to-tr from-violet-50/50 to-violet-50/10 shadow-subtle rounded-2xl p-div'>
      {tiers.map((tier) => (
        <TierInfoCard key={tier.id} tier={tier} />
      ))}
    </section>
  );
}

export default TierInfoCards;
