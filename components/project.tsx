"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { describe } from "node:test";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  Url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 sm:mb-8 last:mb-0"
    >
<a href={Url} className="hover:bg-gray-100 "  >
<div className="max-w-md mx-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className=" lg:w-[50vw] lg:h-[50vh]">
      <Image className="h-48 lg:w-[50vw] w-full object-cover md:h-full md:w-48" src={imageUrl} alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</h3>
      <p className="mt-2 text-slate-500">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2 ">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
    </div>
  </div>
</div>
</a>
    </motion.div>
  );
}




