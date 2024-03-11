import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eCommerce from "@/public/e-commerce.jpg";
import designo from "@/public/designo.jpg";
import lotr from "@/public/lotr-api-1.png";
import technews from "@/public/tech-news.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Python for beginners bootcamp",
    location: "IT Fusion Novi Sad",
    description:
      "My first experience with coding. I graduated after 6 months of studying. Learned basic concepts of programing with Python.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Studing Period",
    location: "Vrbas",
    description:
      "I didn't really know much about IT field. In this period I explored both front and backend technologies,learned core concepts. I've tried to land a job, but there were basiclly no opportunities for self-taught developers at the time.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Novi Sad",
    description:
      " I've became a part of WowYowAI team as a full-stack developer. My stack included React, Bootstrap, Redux, MySQL and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "React Developer",
    location: "Vrbas",
    description:
      "After departure from WowYowAI,  I'm now a React developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Current",
  },
] as const;

export const projectsData = [
  {
    title: "Audiophile E-Commerce",
    description:
      "I have this project made with with React,but I've decided to convert it to Next.js version as well. I couldn't figure out how to persist state with Next.js. React version had no issues with it.",
    tags: ["Next.js", "Tailwind", "Typescript", "Redux"],
    imageUrl: eCommerce,
    projectUrl: "https://stalwart-bombolone-4bcc51.netlify.app",
  },
  {
    title: "Designo",
    description:
      "I've been doing projects from Frontend Mentor.io. for some time. I really liked the desing of this one, this is my take on pixel perfect webiste. ",
    tags: ["React", "Tailwind", "Typescript"],
    imageUrl: designo,
    projectUrl: "https://project-designo.netlify.app/",
  },
  {
    title: "Lord of the rings API",
    description:
      "Been a fan of the franchise for ages. I've made this little app that allows you to search for any character from the books/movies and get random quotes as well. Password is Melon.",
    tags: ["React", "Tailwind", "Redux", "RESTAPI"],
    imageUrl: lotr,
    projectUrl: "https://lord-of-the-rings-game-of-moria.netlify.app/",
  },
  {
    title: "Tech News!",
    description:
      "Read the latest tech news of your choice.I've used Algolia Search's REST API for this app.",
    tags: ["React", "CSS", "Typescript", "Vite", "RESTAPI"],
    imageUrl: technews,
    projectUrl: "https://spiffy-sawine-dd95b7.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "Redux",
  "REST",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
  "Adobe Photoshop",
  "PHP",
  "WordPress",
] as const;
