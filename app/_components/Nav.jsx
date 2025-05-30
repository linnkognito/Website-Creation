import Link from 'next/link';
import Button from './Button';

function Nav({ links }) {
  const defaultLinks = [{ label: 'Home', href: '/' }];

  const navLinks = links || defaultLinks;
  return (
    <nav className='w-fit mx-auto pb-4'>
      <ul>
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
