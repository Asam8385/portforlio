"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import { SiKotlin, SiPython, SiDocker, SiKubernetes } from "react-icons/si";
import { DiGo } from "react-icons/di";

export default function About() {
  const { ref } = useSectionInView("About");

  const highlights = [
    { icon: FaBriefcase, label: "2+ Years", subLabel: "Experience", color: "text-indigo-400" },
    { icon: FaGraduationCap, label: "3.75 GPA", subLabel: "University", color: "text-purple-400" },
    { icon: FaCode, label: "7+", subLabel: "Languages", color: "text-pink-400" },
  ];

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 w-full max-w-6xl mx-auto px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main About Content */}
        <motion.div 
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a <span className="text-white font-semibold">Software Engineer</span> with 
              <span className="text-indigo-400 font-semibold"> 2+ years of experience</span> specializing in 
              backend development and cloud-native technologies. Currently pursuing my 
              <span className="text-purple-400 font-semibold"> BSc in Computer Science Engineering</span> at 
              University of Ruhuna with a GPA of 3.75/4.0.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At <span className="text-indigo-400 font-semibold">PickMe</span>, I developed high-performance 
              backend microservices handling real-time payment processing using 
              <span className="text-purple-400"> Golang and Kotlin</span>. I designed algorithms for 
              driver pooling optimization and built scalable systems with 
              <span className="text-indigo-400"> Docker, Kubernetes</span>, and CI/CD pipelines.
            </p>
            
            <p className="text-gray-400 text-base">
              I'm passionate about clean architecture, distributed systems, and continuous learning. 
              Always exploring new technologies and best practices in software engineering.
            </p>
          </div>

          {/* Tech Expertise */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: DiGo, name: "Golang", color: "text-cyan-400" },
                { icon: SiKotlin, name: "Kotlin", color: "text-purple-400" },
                { icon: SiPython, name: "Python", color: "text-yellow-400" },
                { icon: SiDocker, name: "Docker", color: "text-blue-400" },
                { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-300" },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-xl border border-slate-600/50"
                >
                  <tech.icon className={`text-xl ${tech.color}`} />
                  <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Side Cards */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Highlights */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Facts</h3>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-xl"
                >
                  <div className={`p-3 rounded-lg bg-slate-800/50 ${item.color}`}>
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{item.label}</p>
                    <p className="text-gray-400 text-sm">{item.subLabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-indigo-500/30 p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-indigo-400 flex-shrink-0" />
                <span className="text-sm">Colombo, Sri Lanka</span>
              </div>
              <a href="mailto:asam.engen8385@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
                <FaEnvelope className="text-indigo-400 flex-shrink-0" />
                <span className="text-sm truncate">asam.engen8385@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-indigo-400 flex-shrink-0" />
                <span className="text-sm">+94 76 849 6416</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
