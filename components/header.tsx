"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* Desktop Navigation */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-black/10 sm:top-6 sm:h-[3.5rem] sm:w-auto sm:max-w-fit sm:rounded-full sm:border sm:border-slate-700/50 hidden sm:block"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 hidden sm:flex">
        <ul className="flex items-center gap-1 text-[0.85rem] font-medium text-gray-400 px-2">
          {links.map((link) => (
            <motion.li
              className="relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-4 py-2 hover:text-white transition-all duration-200 rounded-full",
                  {
                    "text-white": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full absolute inset-0 -z-10 shadow-lg shadow-indigo-500/30"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-[999]">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
          <Link href="#home" className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            AM
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-slate-900/98 backdrop-blur-xl border-b border-slate-700/50"
            >
              <ul className="py-4 px-4 space-y-1">
                {links.map((link) => (
                  <li key={link.hash}>
                    <Link
                      className={clsx(
                        "block px-4 py-3 rounded-xl transition-all",
                        activeSection === link.name
                          ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30"
                          : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
