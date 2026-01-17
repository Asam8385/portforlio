import React from "react";
import { FaHeart, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-t from-slate-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Back to top */}
        <div className="flex justify-center mb-12">
          <Link 
            href="#home"
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700/50 hover:border-indigo-500/50 transition-all"
          >
            <FaArrowUp className="text-indigo-400 group-hover:-translate-y-1 transition-transform" />
            <span className="text-gray-400 group-hover:text-white transition-colors">Back to top</span>
          </Link>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
              Asam Mohamed
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Software Engineer building scalable backend systems and cloud-native applications.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((link) => (
                <Link 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-500 hover:text-indigo-400 transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="https://github.com/Asam8385" 
                target="_blank" 
                className="p-3 bg-slate-800/50 rounded-xl text-gray-500 hover:text-white hover:bg-slate-700/50 transition-all"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-asam" 
                target="_blank" 
                className="p-3 bg-slate-800/50 rounded-xl text-gray-500 hover:text-blue-400 hover:bg-slate-700/50 transition-all"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tech Stack */}
          <div className="flex items-center gap-3 text-gray-600">
            <span className="text-xs uppercase tracking-wider">Built with</span>
            <div className="flex items-center gap-2">
              <SiNextdotjs className="text-white text-lg" title="Next.js" />
              <SiTypescript className="text-blue-400 text-lg" title="TypeScript" />
              <SiTailwindcss className="text-cyan-400 text-lg" title="Tailwind CSS" />
              <SiFramer className="text-pink-400 text-lg" title="Framer Motion" />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Asam
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
