'use client';
import Image from 'next/image';
import React from 'react';
import ProfilePicture from '../public/profile-picture.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Intor = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { ref } = useSectionInView('Home');
  return (
    <section
      ref={ref}
      className='mb-28 max-w-[40rem] text-center sm:mb-0 scroll-mt-[120rem]'
      id='home'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          {/*
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >

            <Image
              height='192'
              width='192'
              quality='95'
              priority={true}
              src={ProfilePicture}
              alt='profile-picture'
              className='w-36 h-36 rounded-full object-cover shadow-xl border-[0.35rem] border-white'
            />

          </motion.div>
          */}
        </div>
      </div>
      <motion.p
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:txet-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>{`Hi there 👋 I'm Igor`}</span>, I am
        full-stack developer dedicated to developing{' '}
        <span className='italic'>apps & sites</span>. My focus is{' '}
        <span className='underline'>React/Next.js</span>
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row justify-between items-center gap-4 px-4 text-lg font-medium md:gap-2'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:sclae-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all dark:bg-slate-950'
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          href='/Igor_Stojadinovic_CV.pdf'
          download={true}
          className='group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:sclae-110 hover:scale-110  active:scale-105 transition-all hover:cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60 dark:hover:text-white'
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition ' />
        </a>
        <a
          href='https://www.linkedin.com/in/igor-s-83002b240/'
          target='_blank'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition-all hover:cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/IgorStojadinovic'
          target='_blank'
          className='bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15]  active:scale-105 transition-all hover:cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intor;
