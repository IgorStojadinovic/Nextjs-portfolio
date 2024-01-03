'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/lib/actions';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 text-center -mt-5 dark:text-gray-50'>
        {`I would love to hear about your project and how I could help.Please fill
        in the form,and I'll get back to you as soon as possible!`}
      </p>
      <p className=' text-center mt-2'>
        Contact mail{'  '}
        <a className='underline' href='mailto:igorstojadinovic.vs@gmail.com'>
          igorstojadinovic.vs@gmail.com
        </a>{' '}
      </p>

      <form
        className='group flex flex-col mt-10'
        action={async (FormData) => {
          const { error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          type='email'
          className='h-14 rounded-lg borderBlack px-4 '
          placeholder='Your email'
          required
          maxLength={500}
          name='senderEmail'
        />
        <textarea
          className='borderBlack h-52 my-3 rounded-lg px-4 py-4 '
          placeholder='Your message'
          required
          maxLength={5000}
          name='message'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
