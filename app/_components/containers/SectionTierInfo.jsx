import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import HeadingInfo from '../text/HeadingInfo';

function SectionTierInfo({ children, heading = '', link = false }) {
  return (
    <section>
      <HeadingInfo
        theme='tier'
        className={`${link ? 'flex justify-between items-end' : ''}`}
      >
        {heading}

        {link && (
          <div className='pr-10 font-black text-sm text-slate-700 hover:underline'>
            <Link href={link.href} className='flex items-center gap-1'>
              {link.label}
              <ArrowRightIcon className='h-4' />
            </Link>
          </div>
        )}
      </HeadingInfo>

      <div className='flex flex-col gap-1 p-section bg-white rounded-b-2xl text-lg shadow-subtle'>
        {children}
      </div>
    </section>
  );
}

export default SectionTierInfo;
