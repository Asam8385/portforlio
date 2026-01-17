"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { AchivementData } from "@/lib/data";
import Achivement from "./achivement";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Achivements() {
  const { ref } = useSectionInView("Achievements", 0.5);

  return (
    <section ref={ref} className="scroll-mt-28 w-full max-w-6xl mx-auto px-4 sm:px-8" id="achievements">
      <SectionHeading>Awards & Achievements</SectionHeading>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Recognition and accomplishments from competitive programming and professional development.
      </p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {AchivementData.map((achivement, index) => (
          <Achivement key={index} {...achivement} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
