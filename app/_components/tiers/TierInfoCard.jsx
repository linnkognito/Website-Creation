import Link from 'next/link';
import List from '../List';
import ListItem from '../ListItem';

function TierInfoCard({ tier }) {
  if (!tier) return null;
  const { id, heading, prices, pages, infoCardList } = tier;

  const colorThemes = {
    indigo: 'text-indigo-50 bg-indigo-500 selection:bg-violet-400',
    lime: 'text-indigo-950 bg-gradient-to-br from-lime-200 to-white',
    plum: 'text-indigo-950 bg-gradient-to-r from-indigo-50 to-plum-200',
    starter: 'text-indigo-950 bg-gradient-to-r from-lime-100 to-indigo-50',
    standard: 'text-indigo-950 bg-gradient-to-r from-plum-300 to-indigo-50',
    premium: 'text-indigo-950 bg-gradient-to-r from-indigo-400 to-indigo-50',
  };

  return (
    <Link href={`#tier-${id}`} className='w-full md:max-w-1/3'>
      <div
        className={`flex flex-col only-sm:flex-row only-sm:justify-between gap-3 sm:gap-4 w-full min-h-full p-div-lg rounded-2xl shadow-subtle cursor-pointer ${colorThemes[id]}`}
      >
        <div className='p-div'>
          <h2 className='font-black text-3xl sm:text-4xl'>{heading}</h2>
          <p>
            From{' '}
            <span className='tracking-wide font-bold'>
              {prices.template.price}
            </span>
          </p>
        </div>

        <div className='p-div pt-5 only-sm:mr-5'>
          <List theme='simple' className='min-w-[180px]'>
            {infoCardList?.map((li) => (
              <ListItem
                key={li}
                listItem={{ label: li }}
                theme='simple'
                color={id}
              />
            ))}
          </List>
        </div>
      </div>
    </Link>
  );
}

export default TierInfoCard;
