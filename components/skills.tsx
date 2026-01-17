"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { DiGo } from "react-icons/di";
import { 
  SiKotlin, SiPython, SiTypescript, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3,
  SiDjango, SiSpringboot,
  SiMysql, SiPostgresql, SiMongodb,
  SiGooglecloud, SiAmazonaws,
  SiDocker, SiKubernetes, SiJenkins, SiGit, SiTerraform, SiGitlab,
  SiApachekafka, SiGrafana, SiPrometheus
} from "react-icons/si";
import { FaServer, FaCode, FaDatabase, FaCloud, FaTools, FaCog } from "react-icons/fa";

const skillIcons: { [key: string]: React.ReactNode } = {
  "Golang": <DiGo className="text-cyan-400 text-xl" />,
  "Kotlin": <SiKotlin className="text-purple-400 text-xl" />,
  "Python": <SiPython className="text-yellow-400 text-xl" />,
  "JavaScript": <SiJavascript className="text-yellow-300 text-xl" />,
  "TypeScript": <SiTypescript className="text-blue-400 text-xl" />,
  "React": <SiReact className="text-cyan-400 text-xl" />,
  "ReactJS": <SiReact className="text-cyan-400 text-xl" />,
  "Next.js": <SiNextdotjs className="text-white text-xl" />,
  "HTML": <SiHtml5 className="text-orange-500 text-xl" />,
  "CSS": <SiCss3 className="text-blue-500 text-xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-xl" />,
  "Django": <SiDjango className="text-green-500 text-xl" />,
  "Spring Boot": <SiSpringboot className="text-green-400 text-xl" />,
  "REST APIs": <FaServer className="text-indigo-400 text-xl" />,
  "Microservices": <FaCode className="text-purple-400 text-xl" />,
  "Goroutines": <DiGo className="text-cyan-400 text-xl" />,
  "MySQL": <SiMysql className="text-blue-400 text-xl" />,
  "TiDB (NewSQL)": <SiMysql className="text-red-400 text-xl" />,
  "PostgreSQL": <SiPostgresql className="text-blue-500 text-xl" />,
  "MongoDB": <SiMongodb className="text-green-500 text-xl" />,
  "GCP": <SiGooglecloud className="text-blue-400 text-xl" />,
  "AWS (EC2, Lambda, S3, CloudWatch)": <SiAmazonaws className="text-orange-400 text-xl" />,
  "Docker": <SiDocker className="text-blue-400 text-xl" />,
  "Kubernetes": <SiKubernetes className="text-blue-500 text-xl" />,
  "Jenkins": <SiJenkins className="text-red-400 text-xl" />,
  "GitLab CI/CD": <SiGitlab className="text-orange-500 text-xl" />,
  "Git": <SiGit className="text-orange-500 text-xl" />,
  "Terraform": <SiTerraform className="text-purple-500 text-xl" />,
  "Kafka": <SiApachekafka className="text-gray-300 text-xl" />,
  "Grafana": <SiGrafana className="text-orange-400 text-xl" />,
  "Prometheus": <SiPrometheus className="text-orange-500 text-xl" />,
  "Shell Scripting": <FaCode className="text-green-400 text-xl" />,
};

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Programming Languages": <FaCode className="text-2xl" />,
  "Frontend Development": <SiReact className="text-2xl" />,
  "Backend Development": <FaServer className="text-2xl" />,
  "Databases": <FaDatabase className="text-2xl" />,
  "Cloud Platforms": <FaCloud className="text-2xl" />,
  "DevOps & Tools": <FaTools className="text-2xl" />,
  "Other Technologies": <FaCog className="text-2xl" />,
};

const categoryColors: { [key: string]: { bg: string, border: string, icon: string } } = {
  "Programming Languages": { bg: "from-violet-500/10 to-purple-500/10", border: "border-violet-500/30", icon: "text-violet-400" },
  "Frontend Development": { bg: "from-cyan-500/10 to-blue-500/10", border: "border-cyan-500/30", icon: "text-cyan-400" },
  "Backend Development": { bg: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-500/30", icon: "text-emerald-400" },
  "Databases": { bg: "from-blue-500/10 to-indigo-500/10", border: "border-blue-500/30", icon: "text-blue-400" },
  "Cloud Platforms": { bg: "from-orange-500/10 to-amber-500/10", border: "border-orange-500/30", icon: "text-orange-400" },
  "DevOps & Tools": { bg: "from-pink-500/10 to-rose-500/10", border: "border-pink-500/30", icon: "text-pink-400" },
  "Other Technologies": { bg: "from-slate-500/10 to-gray-500/10", border: "border-slate-500/30", icon: "text-slate-400" },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 w-full max-w-7xl mx-auto px-4 sm:px-8"
    >
      <SectionHeading>Technical Skills</SectionHeading>
      
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => {
          const colors = categoryColors[category];
          const isLarge = categoryIndex === 0 || categoryIndex === 5;
          
          return (
            <motion.div
              key={category}
              className={`relative group rounded-2xl p-6 bg-gradient-to-br ${colors.bg} border ${colors.border} backdrop-blur-sm overflow-hidden hover:border-opacity-60 transition-all duration-300 ${
                isLarge ? "lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background decoration */}
              <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className={`${colors.icon}`}>
                  {categoryIcons[category]}
                </span>
              </div>
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl bg-slate-800/50 ${colors.icon}`}>
                  {categoryIcons[category]}
                </div>
                <h3 className="text-lg font-bold text-white">{category}</h3>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index + categoryIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all cursor-default"
                  >
                    {skillIcons[skill] || <FaCode className="text-indigo-400" />}
                    <span className="text-sm text-gray-300 truncate">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
