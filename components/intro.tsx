"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiKotlin, SiPython, SiReact, SiDocker, SiKubernetes } from "react-icons/si";
import { DiGo } from "react-icons/di";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const techStack = [
    { icon: DiGo, color: "text-cyan-400", name: "Go" },
    { icon: SiKotlin, color: "text-purple-400", name: "Kotlin" },
    { icon: SiPython, color: "text-yellow-400", name: "Python" },
    { icon: SiReact, color: "text-blue-400", name: "React" },
    { icon: SiDocker, color: "text-blue-500", name: "Docker" },
    { icon: SiKubernetes, color: "text-blue-300", name: "K8s" },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center scroll-mt-[1000rem] px-4 sm:px-8 lg:px-16 overflow-visible"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl w-full mx-auto pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-indigo-300">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Asam Mohamed
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-400 mb-6"
            >
              Software Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
            >
              <span className="text-white font-semibold">2 years</span> building scalable 
              backend systems and cloud-native applications. Specialized in{" "}
              <span className="text-indigo-400">microservices architecture</span>,{" "}
              <span className="text-purple-400">real-time systems</span>, and{" "}
              <span className="text-pink-400">DevOps practices</span>.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-2 text-gray-400 mb-8"
            >
              <FaMapMarkerAlt className="text-indigo-400" />
              <span>Colombo, Sri Lanka</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span className="relative flex items-center gap-2">
                  Contact me
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <a
                href="/mycv.pdf"
                download
                className="group px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-2"
              >
                Download CV
                <HiDownload className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-gray-500">Find me on:</span>
              {[
                { href: "https://www.linkedin.com/in/mohamed-asam-733768203/", icon: BsLinkedin, color: "hover:text-blue-400" },
                { href: "https://github.com/Asam8385", icon: FaGithubSquare, color: "hover:text-gray-300" },
                { href: "https://leetcode.com/u/subairasam8733260/", icon: SiLeetcode, color: "hover:text-orange-400" },
                { href: "https://www.hackerrank.com/profile/Eg_2020_3833", icon: SiHackerrank, color: "hover:text-green-400" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className={`p-3 bg-slate-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50`}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Large Overflowing Profile Image with Orbiting Elements */}
          <motion.div
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="order-1 lg:order-2 flex justify-center relative"
            style={{ perspective: '1500px' }}
          >
            {/* Main Image Container - Overflows above */}
            <div className="relative mt-16 lg:mt-20">
              
              {/* Animated glow background */}
              <motion.div 
                className="absolute -inset-16 bg-gradient-to-br from-indigo-600/50 via-purple-600/40 to-pink-600/50 rounded-[32px] blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Outer orbiting ring with tech icons */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none" style={{ width: '450px', height: '450px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <motion.div 
                  className="absolute w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  {/* Orbiting Go icon */}
                  <motion.div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm p-3 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <DiGo className="text-2xl text-cyan-400" />
                  </motion.div>
                  {/* Orbiting Kotlin icon */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-800/90 backdrop-blur-sm p-3 rounded-xl border border-purple-500/50 shadow-lg shadow-purple-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <SiKotlin className="text-2xl text-purple-400" />
                  </motion.div>
                  {/* Orbiting React icon */}
                  <motion.div 
                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm p-3 rounded-xl border border-blue-500/50 shadow-lg shadow-blue-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <SiReact className="text-2xl text-blue-400" />
                  </motion.div>
                  {/* Orbiting Python icon */}
                  <motion.div 
                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm p-3 rounded-xl border border-yellow-500/50 shadow-lg shadow-yellow-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <SiPython className="text-2xl text-yellow-400" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Middle orbiting ring with smaller elements */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none" style={{ width: '380px', height: '380px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <motion.div 
                  className="absolute w-full h-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  {/* Docker */}
                  <motion.div 
                    className="absolute top-[15%] right-0 translate-x-1/2 bg-slate-800/90 backdrop-blur-sm p-2.5 rounded-lg border border-blue-400/50 shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  >
                    <SiDocker className="text-xl text-blue-500" />
                  </motion.div>
                  {/* Kubernetes */}
                  <motion.div 
                    className="absolute bottom-[15%] left-0 -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm p-2.5 rounded-lg border border-blue-300/50 shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  >
                    <SiKubernetes className="text-xl text-blue-300" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Inner rotating rings (visual only) */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  className="absolute w-[115%] h-[115%] border-2 border-dashed border-indigo-500/40 rounded-3xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-[130%] h-[130%] border border-purple-500/30 rounded-3xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-[145%] h-[145%] border border-pink-500/20 rounded-3xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Floating particles around image */}
              <motion.div
                className="absolute -top-8 left-1/4 w-3 h-3 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"
                animate={{ 
                  y: [-20, 20, -20], 
                  x: [-10, 10, -10],
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 right-1/4 w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                animate={{ 
                  y: [15, -15, 15], 
                  x: [5, -5, 5],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute top-1/3 -left-8 w-2.5 h-2.5 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"
                animate={{ 
                  y: [-15, 15, -15],
                  scale: [1, 1.4, 1]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute top-1/4 -right-6 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                animate={{ 
                  y: [10, -20, 10],
                  x: [-5, 10, -5]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-1/3 -right-10 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
                animate={{ 
                  y: [-10, 15, -10],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              />
              
              {/* Main Image with 3D effect */}
              <motion.div
                className="relative z-20"
                whileHover={{ scale: 1.05, rotateY: 8, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glowing border */}
                <motion.div 
                  className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-sm"
                  animate={{ 
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-90"></div>
                
                {/* Square gradient container - the colorful box */}
                <div className="relative rounded-2xl border border-white/10 ring-1 ring-indigo-500/25 shadow-2xl shadow-indigo-500/30 bg-gradient-to-br from-indigo-600/40 via-purple-500/50 to-pink-500/60 w-[300px] h-[280px] sm:w-[340px] sm:h-[310px] lg:w-[360px] lg:h-[330px] z-20">
                  {/* Subtle inner highlight */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-2xl" />
                </div>
                
                {/* Profile image - positioned to overflow ABOVE the container */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
                  <Image
                    src="/asam3.png"
                    alt="Asam Mohamed"
                    width={500}
                    height={650}
                    quality={100}
                    priority={true}
                    className="w-[380px] sm:w-[420px] lg:w-[460px] h-[480px] sm:h-[520px] lg:h-[560px] object-cover object-top"
                    style={{ maxWidth: 'none' }}
                  />
                </div>
                
                {/* Emoji badge */}
                <motion.div 
                  className="absolute -bottom-5 -right-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-3 border-2 border-indigo-500/50 shadow-xl shadow-indigo-500/20 z-20"
                  animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-3xl">👨‍💻</span>
                </motion.div>

                {/* Years badge - Updated to 2 Years */}
                <motion.div 
                  className="absolute -top-12 -left-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl px-5 py-3 shadow-xl shadow-indigo-500/30 z-20"
                  animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <p className="text-white font-bold text-xl">2 Years</p>
                  <p className="text-indigo-200 text-xs">Experience</p>
                </motion.div>

                {/* Additional floating badge - Location */}
                <motion.div 
                  className="absolute -bottom-8 -left-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl px-3 py-2 border border-slate-600/50 shadow-lg z-20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-pink-400 text-sm" />
                    <span className="text-white text-xs font-medium">Sri Lanka</span>
                  </div>
                </motion.div>

                {/* Status badge */}
                <motion.div 
                  className="absolute top-1/3 -right-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl px-3 py-2 shadow-lg shadow-green-500/20 z-20"
                  animate={{ x: [0, 5, 0], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span className="text-white text-xs font-medium">Open to Work</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
