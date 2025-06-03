import Link from 'next/link';
import Button from './Button';

function Nav({ links }) {
  const defaultLinks = [
    { label: 'Steps', href: '/' },
    { label: 'Tiers', href: '/tiers' },
    // { label: 'Pricing', href: '/pricing' },
    // { label: 'Contact', href: '/contact' },
  ];
  const navLinks = links || defaultLinks;

  return (
    <nav className='fixed flex-center top-0 w-full pt-4 pb-5 z-100 bg-violet-300 border-b-2 border-indigo-50/50'>
      <ul className='flex gap-3'>
        {navLinks.map((li) => (
          <li key={li.label}>
            <Link href={li.href}>
              <Button>{li.label}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
