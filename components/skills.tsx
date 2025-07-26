'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  inital: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};
const Skills = () => {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[85rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center text-lg text-gray-800 border border-black/[0.1] border-emerald-900 p-8 rounded-lg' >
        
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='inital'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            className=' bg-zinc-950/30 min-w-[20rem] px-5  text-white border border-black/[0.1] rounded-lg flex flex-col  items-center gap-2 '
            key={index}
          >
            <div className='flex flex-col items-center gap-2 w-full'> 
                <span className='font-medium py-1 text-slate-300'>{category}</span>
              <span className="w-full h-2 bg-emerald-900 "></span>
            </div>
           
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial='inital'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={index}
                className='px-5 py-1  rounded-lg border border-black/[0.1] border-emerald-900 w-full hover:bg-emerald-900/30 transition-colors duration-300 hover:cursor-pointer '
              >
                {skill}
              </motion.div>
            ))}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
