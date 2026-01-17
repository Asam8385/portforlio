"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBuilding } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  Url,
  company,
  featured,
  index,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      layout
      className={`group ${featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <a 
        href={Url || "#"} 
        target={Url ? "_blank" : "_self"}
        className="block h-full"
      >
        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
        >
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <Image 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              src={imageUrl} 
              alt={title}
              width={600}
              height={400}
            />
            
            {/* Company Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm rounded-full border border-slate-600/50">
              <FaBuilding className="text-indigo-400 text-xs" />
              <span className="text-xs text-gray-300 font-medium">{company}</span>
            </div>
            
            {/* Featured Badge */}
            {featured && (
              <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
                <span className="text-xs text-white font-semibold">Featured</span>
              </div>
            )}
            
            {/* External Link Icon */}
            {Url && (
              <div className="absolute bottom-4 right-4 z-20 p-2 bg-slate-900/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <FaExternalLinkAlt className="text-indigo-400 text-sm" />
              </div>
            )}
          </div>
          
          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors mb-2 line-clamp-1">
              {title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 4).map((tag, tagIndex) => (
                <span
                  className="px-2.5 py-1 text-xs font-medium bg-slate-700/50 text-gray-300 rounded-lg border border-slate-600/30"
                  key={tagIndex}
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="px-2.5 py-1 text-xs text-gray-500">
                  +{tags.length - 4} more
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}




