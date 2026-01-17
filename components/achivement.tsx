"use client";

import { AchivementData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTrophy, FaCalendarAlt } from "react-icons/fa";

type AchivementProps = (typeof AchivementData)[number] & { index: number };

export default function Achivement({
  title,
  description,
  tags,
  imageUrl,
  Url,
  date,
  index,
}: AchivementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <a href={Url || "#"} target={Url ? "_blank" : "_self"} className="block h-full">
        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
        >
          {/* Image Section */}
          <div className="relative h-40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <Image
              src={imageUrl}
              alt={title}
              quality={100}
              width={400}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Trophy Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
              <FaTrophy className="text-white text-xs" />
              <span className="text-xs text-white font-semibold">Achievement</span>
            </div>
            
            {/* External Link */}
            {Url && (
              <div className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <FaExternalLinkAlt className="text-amber-400 text-sm" />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-amber-400 text-sm mb-2">
              <FaCalendarAlt className="text-xs" />
              <span>{date}</span>
            </div>
            
            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-3 line-clamp-2">
              {title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  className="px-2.5 py-1 text-xs font-medium bg-amber-500/10 text-amber-300 rounded-lg border border-amber-500/20"
                  key={tagIndex}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}
