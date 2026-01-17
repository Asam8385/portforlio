"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FaCalendar, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 w-full max-w-6xl mx-auto px-4 sm:px-8">
      <SectionHeading>Professional Experience</SectionHeading>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden sm:block"></div>
        
        <div className="space-y-12">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10 hidden sm:block shadow-lg shadow-indigo-500/50"></div>
              
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300 shadow-xl"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Company Logo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden border border-slate-600/50">
                        {item.companyLogo ? (
                          <Image
                            src={item.companyLogo}
                            alt={item.company}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl">{item.icon}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Title & Company */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          item.type === "Full-time" 
                            ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                            : item.type === "Internship"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-lg font-semibold text-indigo-400">{item.company}</p>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-indigo-400" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-pink-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  {/* Description - Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {item.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Skills */}
                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 text-sm bg-slate-700/50 text-gray-300 rounded-lg border border-slate-600/50 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
