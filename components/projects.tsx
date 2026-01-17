"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  const [filter, setFilter] = useState<string>("All");
  
  const companies = ["All", ...new Set(projectsData.map(p => p.company))];
  
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.company === filter);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 w-full max-w-7xl mx-auto px-4 sm:px-8">
      <SectionHeading>Key Projects</SectionHeading>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        From enterprise payment systems at PickMe to ML-powered cloud solutions — here's what I've built.
      </p>
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => setFilter(company)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === company
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                : "bg-slate-800/50 text-gray-400 border border-slate-700/50 hover:border-indigo-500/50 hover:text-white"
            }`}
          >
            {company}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
