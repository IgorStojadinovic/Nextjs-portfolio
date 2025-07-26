'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
/* import { useTheme } from '@/context/theme-context'; */

export default function Experience() {
  const { ref } = useSectionInView('Experience');
 /*  const { theme } = useTheme();
 */
  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor='#004f3b'>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: 'transparent',
                boxShadow: 'none',
                border: '1px solid #004f3b',
                textAlign: 'left',
                padding: '1.3rem 2rem',
                position: 'relative',
              }}

              contentArrowStyle={{
                borderRight: '0.4rem solid #004f3b',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                color: '#00bc7d',
                background:"#09090b",
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
