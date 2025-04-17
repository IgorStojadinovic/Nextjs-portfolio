import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eCommerce from "@/public/e-commerce.jpg";
import designo from "@/public/designo.jpg";
import lotr from "@/public/lotr-api-1.png";
import technews from "@/public/tech-news.png";
import taskManager from "@/public/task-manager.png";
import finace from "@/public/finance.png";

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
        title: "Freelance React/JavaScript Developer",
        location: "",
        description:
            "Since leaving C9 Group, I have been working as a JavaScript freelance developer and I am open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "Present",
    },
    {
        title: "Software Developer - C9 Group",
        location: "Novi Sad",
        description:
            "After a brief internship, I joined the C9 Group/WowYowAI team as a full-stack software developer. My tech stack included React, Bootstrap, Redux, MySQL, and AWS.",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        title: "Self-Study Period",
        location: "",
        description:
            "During this time, I delved into both frontend and backend technologies, learning core concepts and the MERN stack. Despite applying for internships, I faced challenges as a self-taught developer due to limited opportunities.",
        icon: React.createElement(LuGraduationCap),
        date: "2020 - 2022",
    },
] as const;

export const projectsData = [
    {
        title: "Finance Dashboard",
        description:
            "Fullstack dashboard for managing finances, with features for budgeting, expense tracking, and financial reporting.",
        tags: [
            "React",
            "Vite",
            "Tailwind",
            "Typescript",
            "Zustand ",
            "React Qeury",
            "Prisma",
            "PostgreSQL",
            "Node.js",
            "Express",
        ],
        imageUrl: finace,
        projectUrl: "https://finance-dashboard-psi-sand.vercel.app/",
    },
    {
        title: "Audiophile E-Commerce",
        description: "An online store for audiophile products, showcasing a variety of high-quality audio equipment.",
        tags: ["Next.js", "Tailwind", "Typescript", "Redux"],
        imageUrl: eCommerce,
        projectUrl: "https://stalwart-bombolone-4bcc51.netlify.app",
    },
    {
        title: "Designo",
        description: "This project from Frontend Mentor.io showcases my attempt at creating a pixel-perfect website.",
        tags: ["React", "Tailwind", "Typescript"],
        imageUrl: designo,
        projectUrl: "https://project-designo.netlify.app/",
    },
    /*
    {
        title: "Task Dashboard Full-stack project",
        description:
            "Users to track,add,remove and update their daily tasks.For state management I used Redux, and for data fetching I've tried RTK Query.",
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
    */
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
    "PostgresSQL",
    "Framer Motion",
    "Figma",
    "Adobe Photoshop",
    "UI/UX",
] as const;
