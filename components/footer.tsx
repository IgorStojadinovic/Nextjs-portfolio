import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center mb-10 px-4 text-gray-500'>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with
        React & Next.js (App Router & Server Actions),TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend Netlify hosting.
      </p>
    </footer>
  );
};

export default Footer;
