import { Dosis, Quicksand } from 'next/font/google';
import './globals.css';
import Header from './_components/Header';

const dosis = Dosis({
  variable: '--font-dosis',
  subsets: ['latin'],
});
const qs = Quicksand({
  variable: '--font-qs',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: 'Website Creation | %s',
    default: 'Website Creation',
  },
  description:
    'Understand every part of the process behind how your website is built — explained by developer Linn Johansen.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`px-5 py-4 bg-violet-300 ${dosis.variable} ${qs.variable} antialiased`}
      >
        <Header />
        <main className='flex-center w-full max-w-screen'>{children}</main>
      </body>
    </html>
  );
}
