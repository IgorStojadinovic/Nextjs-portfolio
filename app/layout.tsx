import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Intor from '@/components/intro';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Igor | Personal Portfolio',
  description: 'Igor is a fullstack developer with 2 years of experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 overflow-x-hidden relative dark:bg-zinc-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#d4d8ff] absolute top-[-6rem] -z-10 right-[11rem] hidden sm:block sm:h-[32rem] sm:w-[68.75rem] rounded-full blur-[10rem]  dark:bg-transparent'></div>
        <div className='bg-[rgb(216,255,219)] absolute  -z-10  h-1/2 w-1/2 sm:block sm:h-[32rem] sm:w-[68.75rem]  rounded-full blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-transparent'></div>

        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            <Header />
            {children}
            <Toaster position='top-right' />
            <Footer />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
