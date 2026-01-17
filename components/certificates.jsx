"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import AI from "@/public/cer/AI.png"
import AI2 from "@/public/cer/AI2.jpg"
import HRreact from "@/public/cer/HRreact.png"
import cloudessential from "@/public/cer/cloud essential.png"
import fullstack from "@/public/cer/fullstack.png"
import hackerrankSoftwareEng from "@/public/cer/hackerrankSoftwareEng.png"
import monitor from "@/public/cer/monitor.png"
import moraserverside from "@/public/cer/moraserverside.png"
import releaseanddeploy from "@/public/cer/releaseanddeploy.png"
import SectionHeading from "./section-heading";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaCertificate } from "react-icons/fa";

const images = [
        AI,
        AI2,
        HRreact,
        cloudessential,
        fullstack,
        hackerrankSoftwareEng,
        monitor,
        moraserverside,
        releaseanddeploy,
];

const certNames = [
  "AI Fundamentals",
  "AI Advanced",
  "HackerRank React",
  "Cloud Essentials",
  "Full Stack Development",
  "HackerRank Software Engineer",
  "Monitoring & Observability",
  "Server Side Development",
  "Release & Deploy"
];

const Certificates = () => {
  const { ref } = useSectionInView("Certificates");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8" ref={ref} id="certificates"> 
      <SectionHeading>Certifications</SectionHeading>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Professional certifications demonstrating expertise in cloud, development, and AI technologies.
      </p>
      
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8">
        {/* Certificate Display */}
        <div className="relative overflow-hidden rounded-xl bg-slate-900/50 mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="relative"
            >
              <Image
                src={images[currentIndex]} 
                alt={certNames[currentIndex]}
                className="w-full h-auto max-h-[450px] object-contain mx-auto"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-800/90 backdrop-blur-sm text-white border border-slate-600/50 hover:bg-indigo-600 hover:border-indigo-500 transition-all hover:scale-110"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-800/90 backdrop-blur-sm text-white border border-slate-600/50 hover:bg-indigo-600 hover:border-indigo-500 transition-all hover:scale-110"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Certificate Name */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaCertificate className="text-indigo-400" />
            <span className="text-xl font-bold text-white">{certNames[currentIndex]}</span>
          </div>
          <p className="text-gray-500 text-sm">{currentIndex + 1} of {images.length}</p>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index 
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 scale-125 shadow-lg shadow-indigo-500/50" 
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Certificates;