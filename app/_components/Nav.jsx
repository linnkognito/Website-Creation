import Link from 'next/link';
import Button from './Button';

function Nav({ links }) {
  const defaultLinks = [
    { label: 'Steps', href: '/' },
    { label: 'Tiers', href: '/tiers' },
    { label: 'Pricing', href: '/pricing' },
    // { label: 'Contact', href: '/contact' },
  ];
  const navLinks = links || defaultLinks;

  return (
    <nav className='w-fit mx-auto mt-4 mb-8'>
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
