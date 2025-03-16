'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
    const { ref } = useSectionInView('About')

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
                Few years ago,I decided to requalify and pursue career in
                programming. I enrolled a Python coding bootcamp and over time
                learned{' '}
                <span className='font-medium'>full-stack web development</span>.{' '}
                <span className='italic'>My favorite part of programming</span>{' '}
                is the problem-solving aspect. I{' '}
                <span className='underline'>love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{' '}
                <span className='font-medium text-emerald-500'>
                    React, Next.js, Tailwind, Redux, Node.js, MySQL
                </span>
                . I am also familiar with TypeScript and, I am always looking to
                learn new technologies. Currently Im looking for a{' '}
                <span className='font-medium text-emerald-500'>full-time position</span> as a 
                <span className='font-medium text-emerald-500'> React or JavaScript developer</span>
            </p>

           {/*  <p>
                <span className='italic'>{`When I'm not coding`}</span>, I enjoy
                working out, watching movies, reading, and listening to Huberman
                Lab. I also enjoy <span className='font-medium'>art</span>.{' '}
                {`I've been studying at`}{' '}
                <a
                    href=' https://www.wattsatelier.com/'
                    target='_bank'
                    className='underline'
                >
                    Watts Atiler
                </a>{' '}
                for several years now.
            </p> */}

            
        </motion.section>
    )
}

export default About
