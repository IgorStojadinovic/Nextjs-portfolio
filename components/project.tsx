"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, projectUrl }: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
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
            className="group mb-3  sm:mb-8 last:mb-0  w-full flex"
        >
            <section className=" group-even:pl-8 rounded-lg px-12 flex  sm:max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  sm:even:pl-8 hover:bg-gray-200 transition bg-zinc-950 hover:bg-zinc-900/50 border-emerald-900">
                <a href={projectUrl} target="_blank">
                    <div className="pt-4 pb-7  sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col justify-center h-full sm:group-even:ml-[18rem]">
                        <h3 className="text-2xl font-semibold text-zinc-400 group-hover:text-zinc-100">{title}</h3>
                        <p className="mt-2 mb-8 leading-relaxed  text-zinc-400 group-hover:text-zinc-100">
                            {description}
                        </p>
                    </div>

                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                        className=" sm:absolute top-8 -right-40 w-[28.25rem] rounded-lg z-20
                        
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
          "
                    />
                </a>
            </section>
            <div className="relative h-full transition-all duration-300 -z-10 opacity-0 group-hover:opacity-1 group-hover:z-10 group-hover:translate-x-3 group-hover:opacity-100 ">
                <h3 className="text-[0.7rem] uppercase tracking-wider text-white mb-2 font-bold">Tech stack</h3>
                <ul className="flex flex-col  mt-4 gap-2 sm:mt-auto ">
                    {tags.map((tag, index) => (
                        <li
                            className="bg-black/[0.7] px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full border border-emerald-900"
                            key={index}
                        >
                            {" "}
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default Project;
