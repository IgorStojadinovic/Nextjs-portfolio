import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Python for beginners bootcamp',
    location: 'IT Fusion Novi Sad',
    description:
      'My first experience with coding. I graduated after 6 months of studying. Learned basic concepts of programing with Python.',
    icon: React.createElement(LuGraduationCap),
    date: '2020',
  },
  {
    title: 'Studing Period',
    location: 'Vrbas',
    description:
      "I didn't really know much about IT field. In this period I explored both front and backend technologies,learned core concepts.I've tried to land a job, but there were basiclly no opportunities for self-taught developers at the time.",
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2022',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Novi Sad',
    description:
      "After short internship, I've became part of WowYowAI team as a full-stack developer. My stack included React, Bootstrap, Redux, MySQL and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Vrbas',
    description:
      "After departure from WowYowAI,  I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: 'Current',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'MySQL',
  'Redux',
  'REST',
  'Express',
  'PostgreSQL',
  'Framer Motion',
] as const;
