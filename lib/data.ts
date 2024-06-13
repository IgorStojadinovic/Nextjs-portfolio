import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eCommerce from "@/public/e-commerce.jpg";
import designo from "@/public/designo.jpg";
import lotr from "@/public/lotr-api-1.png";
import technews from "@/public/tech-news.png";
import taskManager from "@/public/task-manager.png";

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
      "My first experience with coding. I completed a course after 3 months of studying. Learned basic concepts of programing with Python.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Studying Period",
    location: "Vrbas",
    description:
      "In this period I explored both front and backend technologies on and off, learned core concepts and MERN stack.I've tried to apply for internships,but they were basically only for students. I could not give up at this point. ",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer - WOWYOW AI",
    location: "Novi Sad",
    description:
      " After short internship,I've became a part of C9 Group/WowYowAI team as a full-stack developer. My stack included React, Bootstrap, Redux, MySQL and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "React Developer",
    location: "Vrbas",
    description:
      "Unfortunately,I had to leave due to lack of management within the agency. I'm now a React developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities. ",
    icon: React.createElement(FaReact),
    date: "Current",
  },
] as const;

export const projectsData = [
  {
    title: "Audiophile E-Commerce",
    description:
      "I have this project made with React,but I've decided to convert it to Next.js version as well.",
    tags: ["Next.js", "Tailwind", "Typescript", "Redux"],
    imageUrl: eCommerce,
    projectUrl: "https://stalwart-bombolone-4bcc51.netlify.app",
  },
  {
    title: "Designo",
    description:
      "I've been doing projects from Frontend Mentor.io. for some time. I really liked the desing of this one, this is my take on pixel perfect webiste.",
    tags: ["React", "Tailwind", "Typescript"],
    imageUrl: designo,
    projectUrl: "https://project-designo.netlify.app/",
  },
  {
    title: "Task Manager - Tech notes",
    description:
      "This is a fullstack application,allows users to track their daily tasks. Login with user: Admin, pass: Admin",
    tags: [
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
      "Mongoose",
      "React",
      "Tailwind",
      "Redux",
    ],
    imageUrl: taskManager,
    projectUrl: "https://tech-notes-teeb.onrender.com/",
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
  "UI/UX",
] as const;
