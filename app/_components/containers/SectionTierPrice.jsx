import DividerHorizontal from '../DividerHorizontal';
import HeadingInfo from '../text/HeadingInfo';

function SectionTierPrice({ heading = '', prices, tier = '' }) {
  if (!prices) return null;

  const { template, custom } = prices;

  const colors = {
    starter: 'text-lime-600',
    standard: 'text-plum-600',
    premium: 'text-indigo-600',
  };

  return (
    <section>
      <HeadingInfo theme='tier'>{heading}</HeadingInfo>

      <div
        className={`p-div bg-white rounded-b-2xl text-lg sm:text-xl shadow-subtle overflow-hidden`}
      >
        <div
          key={template.id}
          className={`flex items-center justify-between gap-3 px-3`}
        >
          <div>{template.label}</div>
          <div className={`text-xl font-bold tracking-normal`}>
            {template.price}
          </div>
        </div>

        <DividerHorizontal color='light' />

        <div
          key={custom.id}
          className={`flex items-center justify-between gap-3 px-3`}
        >
          <div>{custom.label}</div>
          <div className={`text-xl font-bold tracking-normal`}>
            {custom.price}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTierPrice;
