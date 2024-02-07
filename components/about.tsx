"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a dedicated third-year computer engineering student at the University of Ruhuna,Sri Lanka. passionate about the 
      intersection of computer science and electronics. My strong interest and knowledge span various domains, including<span className="font-bold"> software development, data science, 
      and artificial intelligence.</span>  Proficient in programming languages such as Python, C++, Java, and C#, I have also delved into web development using <span className="font-bold">MERN 
      and Django, gaining hands-on experience through diverse projects</span> and coding challenges.
      I look forward to the opportunity to discuss how my background and passion for technology can contribute to the continued success of your team.
      </p>
    </motion.section>
  );
}
