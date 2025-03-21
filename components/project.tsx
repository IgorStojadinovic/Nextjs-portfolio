'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';
type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3  sm:mb-8 last:mb-0  w-full'
    >
      <section className=' group-even:pl-8 rounded-lg  px-12 flex flex-col bg-gray-100  sm:max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  sm:even:pl-8 hover:bg-gray-200 transition dark:bg-zinc-950 dark:hover:bg-zinc-900/50 dark:border-emerald-900'>
        <a href={projectUrl} target='_blank'>
          <div className='pt-4 pb-7  sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]     '>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 mb-8 leading-relaxed text-gray-700 dark:text-white'>
              {description}
            </p>
            <ul className='flex  flex-wrap mt-4 gap-2 sm:mt-auto '>
              {tags.map((tag, index) => (
                <li
                  className='bg-black/[0.7] px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full '
                  key={index}
                >
                  {' '}
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt='Project I worked on'
            quality={95}
            className=' sm:absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:rotate-2
        
    
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
    
            group-even:right-[initial] 
            group-even:-left-40 
          '
          />
        </a>
      </section>
    </motion.div>
  );
};

export default Project;
