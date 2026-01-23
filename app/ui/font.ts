import { Roboto_Mono, Noto_Sans } from 'next/font/google';

// Header font
const Headers = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
});

// Body font
const Body = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
});

const Fonts = { Headers, Body };

export default Fonts;
